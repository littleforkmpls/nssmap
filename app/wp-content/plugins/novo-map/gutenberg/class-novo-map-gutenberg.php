<?php

/**
 * The Gutenberg related functionalities of the plugin.
 *
 * @link       www.novo-media.ch
 * @since      1.0.0
 *
 * @package    Novo_Map
 * @subpackage Novo_Map/public
 * @author     novo-media <contact@novo-media.ch>
 */

class Novo_Map_Gutenberg {

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private $version;

    /**
     * The url of the plugin dir
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_dir_url    The current url of the plugin dir.
     */
    private $plugin_dir_url;

    /**
     * The url of the plugin path
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_dir_path    The current path of the plugin dir.
     */
    private $plugin_dir_path;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string    $plugin_name       The name of the plugin.
     * @param      string    $version    The version of this plugin.
     */
    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->plugin_dir_url = plugin_dir_url(dirname( __FILE__ ));
        $this->plugin_dir_path = plugin_dir_path( dirname( __FILE__ ) );
        require_once $this->plugin_dir_path . 'public/helpers/public-helpers.php';

    }

    /**
     * register scripts for Gutenberg blocks
     *
     * @since 1.1.0
     */
    public function register_scripts() {
        wp_register_script(
            $this->plugin_name.'-blocks-editor-script',
            plugin_dir_url( __FILE__ ) . 'dist/editor.js',
            array( 'wp-blocks','wp-i18n', 'wp-data', 'wp-api-fetch', 'wp-components' ),
            $this->version, false );
        wp_register_script( $this->plugin_name.'-blocks-script', plugin_dir_url( __FILE__ ) . 'dist/script.js', array( 'jquery' ), $this->version, false );
    }

    /**
     * enqueue block editor assets
     *
     * @since 1.1.0
     */
    public function enqueue_block_editor_assets() {
        wp_enqueue_script($this->plugin_name.'-blocks-editor-js', plugin_dir_url(__FILE__) . 'dist/editor_script.js', array('wp-data', 'wp-api-fetch', 'wp-element', 'wp-i18n', 'wp-components', 'wp-block-editor', ), $this->version, false);
    }

    /**
     * register styles for Gutenberg blocks
     *
     * @since 1.1.0
     */
    public function register_styles() {
        wp_register_style( $this->plugin_name.'-blocks-editor-style', plugin_dir_url( __FILE__ ) . 'dist/editor.css', array(), $this->version, 'all' );
        //wp_register_style( $this->plugin_name.'-blocks-style', plugin_dir_url( __FILE__ ) . 'dist/style.css', array(), $this->version, 'all' );
    }

    /**
     * register block type in the Gutenberg editor
     *
     * @since 1.1.0
     * @param $block
     * @param array $options
     */
    public function blocks_register_block_type($block, $options = array()) {
        register_block_type(
            $this->plugin_name.'-blocks/'.$block,
            array_merge(
                array(
                    'editor_script' => $this->plugin_name.'-blocks-editor-script',
                    'editor_style' => $this->plugin_name.'-blocks-editor-style',
                    'script' => $this->plugin_name.'-blocks-script',
                    'style' => $this->plugin_name.'-blocks-style'
                ),
                $options
            )
        );
    }

    /**
     * render the novo-map block dynamically
     *
     * @since 1.1.0
     * @param $attributes
     * @return string
     */
    public function render_block_novo_map($atts) {
        if(isset($atts['currentMapId']) && $atts['currentMapId'] == 0) {
            return _('<p><strong>You need to choose à Gmap</strong></p>', $this->plugin_name);
        }
        else {
            require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap.php';
            require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap-manager.php';
            global $wpdb;

            $gmap_manager = new Gmap_Manager($wpdb);
            $gmap = $gmap_manager->get($atts['currentMapId']);
            if($gmap) {
                $gmap->set_name($gmap->name().$atts['containerId']);

                //overwrite default map settings if it has benn modified in the block
                if(isset($atts['width'])) {
                    $gmap->set_width($atts['width']);
                }
                if(isset($atts['height'])) {
                    $gmap->set_height($atts['height']);
                }
                if(isset($atts['zoom'])) {
                    $gmap->set_zoom($atts['zoom']);
                }
                if(isset($atts['latitude'])) {
                    $gmap->set_latitude($atts['latitude']);
                }
                if(isset($atts['longitude'])) {
                    $gmap->set_longitude($atts['longitude']);
                }
                if(isset($atts['type_menu'])) {
                    $gmap->set_type_menu((int)filter_var($atts['type_menu'], FILTER_VALIDATE_BOOLEAN));
                }
                if(isset($atts['zoom_button'])) {
                    $gmap->set_zoom_button((int)filter_var($atts['zoom_button'], FILTER_VALIDATE_BOOLEAN));
                }

                //enqueue necessary map scripts + generate map html markup
                $gmap->enqueue_map($this->plugin_name);

                ob_start();
                include( 'partials/novo-map-block.php' );
                $block_html = ob_get_contents();
                ob_end_clean();

                return $block_html;
            }
            else {
                return _('<p><strong>This Gmap is not defined</strong></p>', $this->plugin_name);
            }
        }
    }
}