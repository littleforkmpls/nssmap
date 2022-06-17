<!doctype html>
<html lang="en-us">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600">

        <?php wp_head(); ?>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L11LHGGZS1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L11LHGGZS1');
        </script>

    </head>
    <body>
        <div class="wrapper"><?php // .wrapper closed in footer.php ?>
            <div class="masthead" role="banner">
                <div class="masthead__brand">
                    <div class="logo">
                        <a href="<?php echo site_url(); ?>">
                            <img src="<?php the_field('header_logo', 'option'); ?>" alt="North Star Story Map" />
                        </a>
                    </div>
                </div>
                <div class="masthead__nav">
                    <div class="nav" role="nav">
                        <?php
                            wp_nav_menu(array(
                                'container'            => false,
                                'menu_class'           => 'nav__list',
                                'menu_id'              => 'primaryNav',
                                'echo'                 => true,
                                'fallback_cb'          => false,
                                'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                'item_spacing'         => 'preserve',
                                'depth'                => 1,
                                'theme_location'       => 'masthead-navigation'
                            ));
                        ?>
                    </div>
                </div>
            </div>

