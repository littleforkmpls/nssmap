<li>
    <a href="<?php the_permalink(); ?>" class="d-block">
        <div class="card">
            <div class="card__media">
                <?php
                    $img_post = get_the_post_thumbnail_url($postID, 'card-image-size');
                    $imgAlt_post = get_the_title();

                    if ($img_post == '') {
                        $img_post = get_bloginfo('template_directory') . '/assets/images/no-image-card.jpg';
                        $imgAlt_post = "No Image Available";
                    }

                ?>
                <img class="d-block" width="400" height="400" src="<?php echo $img_post; ?>?" alt="<?php echo $imgAlt_post; ?>" />
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
