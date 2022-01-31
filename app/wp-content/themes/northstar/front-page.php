<?php // HOME PAGE ?>

<?php get_header(); ?>
<div class="main" role="main">

    <?php // hero ?>
    <div class="section">
        <div class="billboard">
            <div class="billboard__hd">
                <h1 class="isVisuallyHidden">North Star Story Map</h1>
                <h2 class="txt txt--hdg3">A living collection of the <span class="txt txt--upper txt--bold txt--color-crimson">spaces</span> and <span class="txt txt--upper txt--bold txt--color-crimson">places</span> that shape us</h2>
            </div>
            <div class="billboard__bd">
                <video class="d-block" autoplay loop muted playsinline>
                    <source src="<?php bloginfo('template_directory'); ?>/assets/video/AIA_Hero.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>

    <?php // intro ?>
    <div class="section">
        <div class="feature feature--never-center">
            <div class="feature__bd">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            </div>
        </div>
    </div>

    <?php // the map! ?>
    <div class="section">
        <div class="map">
            <?php echo do_shortcode("[novo-map id=1]"); ?>
        </div>
    </div>

    <?php // featured stories ?>
    <div class="section">
        <div class="feature">
            <div class="feature__hd">
                <h2 class="txt txt--hdg3">Featured <span class="txt txt--upper txt--bold txt--color-crimson">Stories</span></h2>
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
                                    <img class="d-block" src="https://via.placeholder.com/400" alt="First Avenue" />
                                </div>
                                <div class="card__title">
                                    <h3 class="txt txt--hdg4 txt--upper txt--bold"><?php the_title(); ?></h3>
                                </div>
                                <div class="card__meta">
                                    Minneapolis, MN
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
