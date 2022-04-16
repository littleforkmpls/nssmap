<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and hooks for the
 * the admin-specific bits.
 */
class NSSM_Story_Sync_Plugin_Admin {

    // The ID of this plugin.
    private $plugin_name;

    // The version of this plugin.
    private $version;

    // The url of the plugin directory
    private $plugin_dir_url;

    // The server path to the plugin directory
    private $plugin_dir_path;

    // Initialize the class and set its properties.
    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->plugin_dir_url = plugin_dir_url(dirname( __FILE__ ));
        $this->plugin_dir_path = plugin_dir_path(dirname( __FILE__ ));
    }

    // add admin menu item to access plugin page
    public function add_admin_menu_item() {
        add_menu_page(
            'Story Sync',
            'Story Sync',
            'manage_options',
            $this->plugin_name,
            array($this, 'get_admin_page'),
            'dashicons-superhero',
            6
        );
    }

    // render the admin page
    public function get_admin_page() {
        echo '<div class="wrap"><h1>Hello World</h1></div>';
    }
}
