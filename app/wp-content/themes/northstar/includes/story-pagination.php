<div class="pagination">
    <?php if(get_previous_posts_link()) : ?>
        <div class="pagination__nav pagination__nav--prev">
            <?php previous_posts_link('&laquo; Prev'); ?>
        </div>
    <?php endif; ?>
    <?php if(get_next_posts_link()) : ?>
        <div class="pagination__nav pagination__nav--next">
            <?php next_posts_link('Next &raquo;'); ?>
        </div>
    <?php endif; ?>
</div>
