<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://novo-media.ch
 * @since             1.0.0
 * @package           Novo_Map
 *
 * @wordpress-plugin
 * Plugin Name:       Novo-Map
 * Plugin URI:        https://wordpress.org/plugins/novo-map/
 * Description:       Display all your posts and pages on custom google maps
 * Version:           1.1.2
 * Author:            novo-media
 * Author URI:        https://novo-media.ch/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       novo-map
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'NOVO_MAP_VERSION', '1.1.2' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-novo-map-activator.php
 */
function activate_novo_map() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-novo-map-activator.php';
	Novo_Map_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-novo-map-deactivator.php
 */
function deactivate_novo_map() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-novo-map-deactivator.php';
	Novo_Map_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_novo_map' );
register_deactivation_hook( __FILE__, 'deactivate_novo_map' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-novo-map.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_novo_map() {

	$plugin = new Novo_Map();
	$plugin->run();

}
run_novo_map();
