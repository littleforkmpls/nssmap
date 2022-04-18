<div class="wrap">
    <h1>Story Sync</h1>
    <div id="poststuff">
        <div id="post-body" class="metabox-holder">
            <div id="post-body-content">
                <div id="postbox-container-1" class="postbox-container">
                    <div class="postbox">
                        <div class="postbox-header">
                            <h2>Sync Instructions</h2>
                        </div>
                        <div class="inside">
                            <p>Copy new stories submitted via TypeForm into WordPress posts as drafts. When the sync is completed, <a href="<?php echo admin_url(); ?>edit.php">review and publish the posts</a>.</p>
                            <form method="post" action="">
                                <?php wp_nonce_field(); ?>
                                <button class="button-primary" type="submit">&#8634;&nbsp; Sync Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="postbox-container-2" class="postbox-container">
                    <div class="postbox">
                        <div class="postbox-header">
                            <h2>Sync Log</h2>
                        </div>
                        <div>
                            <table class="widefat striped" style="width: 100%; border: none;">
                                <thead>
                                    <tr>
                                        <th>
                                            <strong>Date/Time</strong>
                                        </th>
                                        <th>
                                            <strong>Status</strong>
                                        </th>
                                        <th>
                                            <strong>Records</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php for ($i = 10; $i > 0; $i--) { ?>
                                    <tr>
                                        <td>2022-Mar-<?php echo $i; ?> at 11:24 pm</td>
                                        <td>Complete</td>
                                        <td><?php echo rand(2,13); ?></td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
