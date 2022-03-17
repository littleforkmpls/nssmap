


            <div class="footer" role="contentinfo">
                <div class="footer__links">
                    <div class="feature">
                        <div class="feature__hd">
                            <h2 class="txt txt--hdg4 txt--upper txt--bold"><?php the_field('footer_partners_headline', 'option'); ?></h2>
                        </div>
                        <div class="feature__bd">
                            <?php if (have_rows('footer_partners', 'option')): ?>
                            <ul class="logoList">
                                <?php while (have_rows('footer_partners', 'option')) : the_row(); ?>
                                <li class="logoList__item logoList__item--<?php the_sub_field('footer_partners_column_size'); ?>">
                                    <a href="<?php the_sub_field('footer_partners_url'); ?>">
                                        <img src="<?php the_sub_field('footer_partners_logo'); ?>" alt="<?php the_sub_field('footer_partners_name'); ?>" />
                                    </a>
                                </li>
                                <?php endwhile; ?>
                            </ul>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <div class="footer__note">
                    <small>
                        <?php the_field('footer_blurb', 'option'); ?>
                    </small>
                </div>
                <div class="footer__links">
                    <?php
                        wp_nav_menu(array(
                            'container'            => false,
                            'menu_class'           => 'footer__links__list',
                            'menu_id'              => 'footerNav',
                            'echo'                 => true,
                            'fallback_cb'          => false,
                            'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'item_spacing'         => 'preserve',
                            'depth'                => 1,
                            'theme_location'       => 'footer-links'
                        ));
                    ?>
                </div>
            </div>
        </div><?php // close .wrapper from header.php ?>
        <?php wp_footer(); ?>
    </body>
</html>
