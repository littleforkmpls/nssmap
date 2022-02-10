'<div class="infobox__content">
    <div class="infobox__content__media">
        <?php $infobox_thumbnail = get_the_post_thumbnail_url($marker->post_id(),'thumbnail'); ?>
        <?php if ($marker->infobox_image() != -1 and $marker->infobox_image() != 0) { ?>
            <?php $wp_attachment_image_src = wp_get_attachment_image_src($marker->infobox_image(),'thumbnail'); ?>
            <img src="<?php echo $wp_attachment_image_src[0]; ?>" alt="<?php echo esc_attr_e($marker->title()); ?>">
        <?php } elseif ($infobox_thumbnail) { ?>
            <img src="<?php echo $infobox_thumbnail; ?>" alt="<?php echo esc_attr_e($marker->title()); ?>">
        <?php } else { ?>
            <img src="<?php echo get_bloginfo('template_directory') . '/assets/images/no-image-card-thumbnail.jpg'?>" alt="No Image Available">
        <?php } ?>
    </div>
    <div class="infobox__content__bd">
        <div class="infobox__content__bd__title">
            <a class="d-block" href="<?php echo get_permalink($marker->post_id()); ?>">
                <div class="txt txt--family-sans txt--hdg5 txt--upper txt--bold txt--truncated">
                    <?php echo esc_attr_e($marker->title()); ?>
                </div>
            </a>
        </div>
        <div class="infobox__content__meta">
            <?php the_field('story_city',$marker->post_id());?>
            <?php the_field('story_state',$marker->post_id());?>
        </div>
    </div>
</div>'
