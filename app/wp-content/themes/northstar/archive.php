<?php // 404 ERROR PAGE ?>

<?php get_header(); ?>
<div class="main" role="main">

    <?php // featured stories ?>
    <div class="section">
        <div class="feature">
            <div class="feature__hd">
                <h2 class="txt txt--hdg3 txt--hasEms">Read <em>Stories</em></h2>
            </div>
            <div class="feature__bd">
                <?php if (have_posts()) : ?>
                <ul class="blocks">
                    <?php while (have_posts()) : ?>
                        <?php the_post(); ?>
                        <?php get_template_part('includes/story-card'); ?>
                    <?php endwhile; ?>
                </ul>
                <?php endif; ?>
            </div>
        </div>
    </div>

</div>
<?php get_footer(); ?>
