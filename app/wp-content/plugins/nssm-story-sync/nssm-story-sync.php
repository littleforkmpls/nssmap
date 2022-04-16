<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @wordpress-plugin
 * Plugin Name:       NSSM Story Sync
 * Description:       Custom plugin to sync stories from TypeForm into WordPress.
 * Version:           1.0.0
 * Author:            Little Fork
 * Author URI:        https://little-fork.com/
 * License:           UNLICENSED
 * Text Domain:       nssm-story-sync
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Runtime Constants
define('NSSM_STORY_SYNC_VERSION', '1.0.0');
define('NSSM_PLUGIN_NAME','nssm-story-sync');

// Plugin Activation.
function activate_nssm_story_sync() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-nssm-story-sync-activator.php';
    NSSM_Story_Sync_Activator::activate();
}

// Plugin Deactivation
function deactivate_nssm_story_sync() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-nssm-story-sync-deactivator.php';
    NSSM_Story_Sync_Deactivator::deactivate();
}

// Register hooks for activation/deactivation
register_activation_hook( __FILE__, 'activate_nssm_story_sync' );
register_deactivation_hook( __FILE__, 'deactivate_nssm_story_sync' );

// Run the plugin
require plugin_dir_path( __FILE__ ) . 'includes/class-nssm-story-sync-main.php';
function run_nssm_story_sync() {
    $nssm_plugin = new NSSM_Story_Sync;
    $nssm_plugin->run();
}
run_nssm_story_sync();
