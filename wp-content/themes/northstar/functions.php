<?php
/* ====================================================================================================
   Constants
==================================================================================================== */
define('DISALLOW_FILE_EDIT', true); // don't allow file editing via the admin

/* ====================================================================================================
   Theme Support Configuration
==================================================================================================== */
add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
remove_theme_support('automatic-feed-links');
remove_theme_support('custom-background');
remove_theme_support('custom-header');
remove_theme_support('custom-line-height');
remove_theme_support('custom-custom-logo');
remove_theme_support('customize-selective-refresh-widgets');
remove_theme_support('html5');
remove_theme_support('post-formats');
remove_theme_support('starter-content');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

/* ====================================================================================================
 Enqueue Scripts and Styles
==================================================================================================== */
function include_scripts_and_styles() {
    wp_enqueue_style(
        'nssm-style',
        get_template_directory_uri() . '/assets/styles/app.css',
        array(),
        '',
        'screen and (min-width: 1em)'
    );

   wp_enqueue_script(
        'nssm-script',
        get_template_directory_uri() . '/assets/scripts/app.js',
        array('jquery'),
        '',
        true
    );
}

add_action('wp_enqueue_scripts', 'include_scripts_and_styles');

/* ====================================================================================================
 Customize Admin Panel
==================================================================================================== */
function hide_admin_pages(){
    global $submenu;
    unset($submenu['themes.php'][6]); // remove customize link
    remove_action('admin_menu', '_add_themes_utility_last', 101); // remove theme editor link
}

add_action('admin_menu', 'hide_admin_pages');
