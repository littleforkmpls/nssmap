<?php /* Template Name: Share a Story Template */ ?>

<?php // Share a Story Collection Form ?>

<?php get_header(); ?>
<div class="main" role="main">


    <?php // hero ?>
    <div class="section">
        <div class="billboard">
            <!-- <div class="billboard__hd">
                <h1 class="isVisuallyHidden">North Star Story Map</h1>
                <h2 class="txt txt--hdg3 txt--hasEms"><?php the_field('collection_form_hero_headline'); ?></h2>
            </div> -->
            <div class="billboard__bd">
                <img class="d-block" src="<?php bloginfo('template_directory'); ?>/assets/images/Tutorial_Still_Frame.jpg" alt="Tutorial Still Frame" />
                <?php
                /* temp still frame for demo */
                /*
                <video class="d-block" autoplay loop muted playsinline>
                    <source src="<?php the_field('collection_form_hero_video'); ?>" type="video/mp4">
                </video>
                */
                ?>
            </div>
        </div>
    </div>

    <?php // the typeform! ?>
    <div class="section">
        <div class="mediaFrame">
            <?php the_field('collection_typeform_embed_code'); ?>
        </div>
    </div>

</div>
<?php get_footer(); ?>

