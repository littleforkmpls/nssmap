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
        <div class="map" aria-hidden="true">
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
                            'post__in' => get_option('sticky_posts'),
                        );
                    ?>
                    <?php $query_featuredPosts = new WP_Query($args_featuredPosts); ?>
                    <?php while ($query_featuredPosts->have_posts()) : $query_featuredPosts->the_post(); ?>
                    <li>
                        <a href="<?php the_permalink(); ?>" class="d-block">
                            <div class="card">
                                <div class="card__media">
                                    <?php
                                        $img_featuredPost = get_the_post_thumbnail_url($postID, 'card-image-size');
                                        $imgAlt_featuredPost = get_the_title();

                                        if ($img_featuredPost == '') {
                                            $img_featuredPost = get_bloginfo('template_directory') . '/assets/images/no-image-card.jpg';
                                            $imgAlt_featuredPost = "No Image Available";
                                        }

                                    ?>
                                    <img class="d-block" width="400" height="400" src="<?php echo $img_featuredPost; ?>?" alt="<?php echo $imgAlt_featuredPost; ?>" />
                                </div>
                                <div class="card__title">
                                    <h3 class="txt txt--hdg5 txt--upper txt--bold txt--truncated"><?php the_title(); ?></h3>
                                </div>
                                <div class="card__meta">
                                    <?php if( get_field('story_city') ): ?>
                                        <?php the_field('story_city'); ?>
                                    <?php endif; ?>
                                    <?php if( get_field('story_state') ): ?>
                                        <?php the_field('story_state'); ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </a>
                    </li>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                </ul>
            </div>
        </div>
    </div>

</div>
<?php get_footer(); ?>
