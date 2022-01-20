<?php get_header(); ?>
<div class="main" role="main">
    <div class="section">
        <div class="hero">

        </div>
    </div>
    <div class="section">
        <!-- lead in -->
    </div>
    <div class="section">
        <!-- map -->
    </div>
    <div class="section">
        <!-- become a storyteller -->
    </div>
    <div class="section">
        <!-- lead in -->
    </div>

    <?php // featured stories ?>
    <div class="section">
        <div class="feature">
            <div class="feature__hd">
                <h2 class="txt txt--hdg3">Featured <span class="txt txt--upper txt--color-crimson">Stories</span></h2>
            </div>
            <div class="feature__bd">
                <ul class="blocks">
                    <?php for ($i = 1; $i <= 3; $i++) { ?>
                    <li>
                        <a class="d-block">
                            <div class="card">
                                <div class="card__media">
                                    <img class="d-block" src="https://via.placeholder.com/400" alt="First Avenue" />
                                </div>
                                <div class="card__title">
                                    <h3 class="txt txt--hdg4 txt--upper txt--bold">First Avenue</h3>
                                </div>
                                <div class="card__meta">
                                    Minneapolis, MN
                                </div>
                            </div>
                        </a>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>

    <?php // recent stories ?>
    <div class="section">
        <div class="feature">
            <div class="feature__hd">
                <h2 class="txt txt--hdg3">Recent <span class="txt txt--upper txt--color-crimson">Stories</span></h2>
            </div>
            <div class="feature__bd">
                <ul class="blocks">
                    <?php for ($i = 1; $i <= 3; $i++) { ?>
                    <li>
                        <a class="d-block">
                            <div class="card">
                                <div class="card__media">
                                    <img class="d-block" src="https://via.placeholder.com/400" alt="First Avenue" />
                                </div>
                                <div class="card__title">
                                    <h3 class="txt txt--hdg4 txt--upper txt--bold">First Avenue</h3>
                                </div>
                                <div class="card__meta">
                                    Minneapolis, MN
                                </div>
                            </div>
                        </a>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>

</div>
<?php get_footer(); ?>
