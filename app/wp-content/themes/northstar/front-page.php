<?php // HOME PAGE ?>

<?php get_header(); ?>
<div class="main" role="main">

    <?php // hero ?>
    <div class="section">
        <div class="billboard">
            <div class="billboard__hd">
                <h1 class="isVisuallyHidden">North Star Story Map</h1>
                <h2 class="txt txt--hdg3 txt--hasEms"><?php the_field('homepage_hero_headline'); ?></h2>
            </div>
            <div class="billboard__bd">
                <video class="d-block" autoplay loop muted playsinline>
                    <source src="<?php the_field('homepage_hero_video'); ?>" type="video/mp4">
                </video>
            </div>
        </div>
    </div>

    <?php // intro ?>
    <div class="section">
        <div class="feature feature--never-center">
            <div class="feature__bd">
                <p><?php the_field('homepage_blurb'); ?></p>
            </div>
        </div>
    </div>

    <?php // the map! ?>
    <div class="section">
        <div class="mediaFrame" aria-hidden="true">
            <?php echo do_shortcode("[novo-map id=1]"); ?>
        </div>
    </div>

    <?php // featured stories ?>
    <div class="section">
        <div class="feature">
            <div class="feature__hd">
                <h2 class="txt txt--hdg3 txt--hasEms">Featured <em>Stories</em></h2>
            </div>
            <div class="feature__bd">
                <ul class="blocks">
                    <?php
                        $args_featuredPosts = array(
                            'category_name' => 'featured',
                        );
                    ?>
                    <?php $query_featuredPosts = new WP_Query($args_featuredPosts); ?>
                    <?php while ($query_featuredPosts->have_posts()) : ?>
                        <?php $query_featuredPosts->the_post(); ?>
                        <?php get_template_part('includes/story-card'); ?>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </ul>
            </div>
        </div>
    </div>

</div>
<?php get_footer(); ?>
