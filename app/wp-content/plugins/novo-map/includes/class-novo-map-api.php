<?php

/**
 * Class Novo_Map_Api
 */
class Novo_Map_Api {
    private $version;
	private $namespace;
	private $plugin_dir_path;
    private $plugin_name;

	public function __construct($plugin_name) {
        $this->plugin_name = $plugin_name;
	    $this->version   = '1';
		$this->namespace = $plugin_name . '/v' . $this->version;
		$this->plugin_dir_path = plugin_dir_path( dirname( __FILE__ ) );
    }

    public function run() {
        add_action( 'rest_api_init', array( $this, 'register_gmap_list' ) );
        add_action( 'rest_api_init', array( $this, 'register_gmap_script_css' ) );
    }

    public function register_gmap_list() {
        register_rest_route(
            $this->namespace,
            '/gmap-list',
            array(
                'methods'             => 'GET',
                'callback'            => array( $this, 'get_gmap_list' ),
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
            )
        );
    }

    public function get_gmap_list() {
	    require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap.php';
        require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap-manager.php';
        global $wpdb;
        $gmap_manager = new Gmap_Manager($wpdb);
        $gmap_list = $gmap_manager->get_list();

        return $gmap_list;
    }

    public function register_gmap_script_css() {
	    $route = '/gmap-script-css/';
	    $route .= '(?P<gmap_id>\d+)/';
	    $route .= '(?P<container_id>[a-zA-Z0-9-]+)/';
	    $route .= '(?P<zoom>\d+)/';
	    $route .= '(?P<latitude>[+-]?([0-9]*[.])?[0-9]+)/';
        $route .= '(?P<longitude>[+-]?([0-9]*[.])?[0-9]+)/';
        $route .= '(?P<type_menu>[a-zA-Z0-9-]+)/';
        $route .= '(?P<zoom_button>[a-zA-Z0-9-]+)';

	    register_rest_route(
            $this->namespace,
            $route,
            array(
                'methods'             => 'GET',
                'callback'            => array( $this, 'get_gmap_script_css' ),
                'args' => array(
                    'gmap_id' => array(
                        'default' => 0,
                        'required' => true,
                    ),
                    'container_id' => array(
                        'required' => true,
                    ),
                    'zoom' => array(
                        'default' => 1,
                    ),
                    'latitude' => array(
                        'default' => 0,
                    ),
                    'longitude' => array(
                        'default' => 0,
                    ),
                    'type_menu' => array(
                        'default' => false,
                    ),
                    'zoom_button' => array(
                        'default' => true,
                    ),
                ),
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
            )
        );
    }

    public function get_gmap_script_css($request) {
        require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap.php';
        require_once $this->plugin_dir_path . 'includes/class-novo-map-gmap-manager.php';
        global $wpdb;
        $gmap_manager = new Gmap_Manager($wpdb);
        $gmap = $gmap_manager->get($request['gmap_id']);
        $gmap->set_zoom($request['zoom']);
        $gmap->set_latitude($request['latitude']);
        $gmap->set_longitude($request['longitude']);
        $gmap->set_type_menu((int)filter_var($request['type_menu'], FILTER_VALIDATE_BOOLEAN));
        $gmap->set_zoom_button((int)filter_var($request['zoom_button'], FILTER_VALIDATE_BOOLEAN));

        //error_log(print_r($request, true));
        $gmap_script_css = $gmap->generate_script_css($request['container_id']);

        // remove the script tags to have plain js
        $gmap_script_css['script'] = substr($gmap_script_css['script'], 31);
        $gmap_script_css['script'] = substr($gmap_script_css['script'], 0,-9);

        // remove the style tags to have plain css
        foreach ($gmap_script_css['css'] as $key => $style) {
            $style = substr($style, 7);
            $style = substr($style, 0,-8);
            $gmap_script_css['css'][$key] = $style;
        }

        return $gmap_script_css;
    }
}