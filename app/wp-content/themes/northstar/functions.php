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

// hide editor in favor of ACF fields
add_action(
    'admin_init',
    function() {
        remove_post_type_support('page', 'editor');
        remove_post_type_support('post', 'editor');
    }
);

// tweak script & style output
add_action(
    'after_setup_theme',
    function() {
        add_theme_support( 'html5', [ 'script', 'style' ] );
    }
);

// custom image sizes(s)
add_image_size('card-image-size', 400, 400, true );

// add classes to pagination links
add_filter('next_posts_link_attributes', 'posts_link_attributes');
add_filter('previous_posts_link_attributes', 'posts_link_attributes');
function posts_link_attributes() {
    return 'class="btn btn--fixedSize"';
}

/* ====================================================================================================
   Cleanup the Head
==================================================================================================== */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_resource_hints', 2 );
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');

add_action('wp_print_styles', function (): void {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
});

/* ====================================================================================================
   Disable Stuff - Gutenberg, Rest API, XML-RPC, etc
==================================================================================================== */
add_filter('use_block_editor_for_post', '__return_false', 10);

add_filter('rest_authentication_errors', function ($access) {
    if (!current_user_can('administrator')) {
        return new WP_Error('rest_cannot_access', 'Only authenticated users can access the REST API.', ['status' => rest_authorization_required_code()]);
    }
    return $access;
});

add_filter('xmlrpc_enabled', function (): bool {
    return false;
});

function my_deregister_scripts(){
    wp_deregister_script( 'wp-embed' );
}
add_action('wp_footer', 'my_deregister_scripts');

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
        array(),
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

/* ====================================================================================================
   Enable ACF Functionality
==================================================================================================== */
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}

/* ====================================================================================================
   Enable Novo Map on Posts
==================================================================================================== */
add_filter( 'novo_map_allowed_post_type', 'novo_map_post_types' );
function novo_map_post_types($types) {
    $types = array('post');
    return $types;
}

/* ====================================================================================================
   Enable Support for uploading SVGs to Media Library
==================================================================================================== */
add_filter('wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

    global $wp_version;

    if ($wp_version !== '4.7.1') {
        return $data;
    }

    $filetype = wp_check_filetype( $filename, $mimes);

    return [
        'ext'             => $filetype['ext'],
        'type'            => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];

}, 10, 4);

function cc_mime_types($mimes){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

function fix_svg() {
    echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}

add_action( 'admin_head', 'fix_svg' );

/* ====================================================================================================
   Register Menus
==================================================================================================== */
function custom_menus() {
    register_nav_menus(
        array(
            'masthead-navigation' => 'Masthead Navigation'
        )
    );
}
add_action( 'init', 'custom_menus' );
