<?php
  
include 'lib/includes.php';
include 'lib/optionspage.php';
include 'lib/svg.php';
include 'lib/cpt.php';
include 'lib/ctax.php';
include 'lib/wpadmin.php';
include 'lib/timber.php';

add_action('admin_init', 'remove_textarea');

function remove_textarea() {
        remove_post_type_support( 'page', 'editor' );
}