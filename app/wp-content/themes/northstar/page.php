<?php // Generic Pages: T&Cs, About, etc ?>

<?php get_header(); ?>
<div class="main" role="main">

    <h1 class="isVisuallyHidden"><?php the_title(); ?></h1>

    <?php if (get_field('page_hero_image')): ?>
        <div class="section">
            <div class="billboard">
                <div class="billboard__bd">
                    <?php
                        $img_hero = wp_get_attachment_image_url(get_field('page_hero_image'), 'large');
                    ?>
                    <img class="d-block" src="<?php echo $img_hero; ?>" alt=""" />
                </div>
            </div>
        </div>
    <?php endif; ?>

    <?php if (get_field('page_main_content')): ?>
        <div class="section">
            <div class="feature feature--snowflake">
                <div class="feature__bd">
                    <div class="userContent">
                        <?php the_field('page_main_content'); ?>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>

</div>
<?php get_footer(); ?>

