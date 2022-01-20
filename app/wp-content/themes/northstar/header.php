<!doctype html>
<html lang="en-us">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap">

        <?php wp_head(); ?>
    </head>
    <body>
        <div class="wrapper"><?php // .wrapper closed in footer.php ?>
            <div class="masthead" role="banner">
                <div class="masthead__brand">
                    <div class="logo">
                        <a href="<?php echo site_url(); ?>">
                            <img src="<?php bloginfo('template_directory'); ?>/assets/images/logo.png" alt="North Star Story Map" />
                        </a>
                    </div>
                </div>
                <div class="masthead__nav">

                </div>
            </div>

