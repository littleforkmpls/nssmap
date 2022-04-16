<?php
/**
 * The core plugin class.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 */

class NSSM_Story_Sync {

    // The loader that's responsible for maintaining and registering all hooks
    protected $loader;

    // The unique identifier of this plugin.
    protected $plugin_name;

    // The current version of the plugin.
    protected $version;

    // The core functionality of the plugin.
    public function __construct() {

        $this->version = NSSM_STORY_SYNC_VERSION;
        $this->plugin_name = NSSM_PLUGIN_NAME;

        $this->load_dependencies();
        $this->define_admin_hooks();
        $this->define_public_hooks();

    }

    // Load the required dependencies for this plugin.
    private function load_dependencies() {
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-nssm-story-sync-loader.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-nssm-story-sync-plugin-admin.php';
        $this->loader = new NSSM_Story_Sync_Plugin_Loader();
    }

    // Register all of the hooks related to the admin area functionality
    private function define_admin_hooks() {
        $plugin_admin = new NSSM_Story_Sync_Plugin_Admin($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('admin_menu', $plugin_admin, 'add_admin_menu_item');
	}

    // Register all of the hooks related to the public-facing functionality
    private function define_public_hooks() {

    }

    // Run the loader to execute all of the hooks with WordPress.
    public function run() {
        $this->loader->run();
    }

    // The reference to the class that orchestrates the hooks with the plugin.
    public function get_loader() {
        return $this->loader;
    }

    // Get the name of the plugin
    public function get_plugin_name() {
        return $this->plugin_name;
    }

    // Get the version of the plugin
    public function get_version() {
        return $this->version;
    }

}
