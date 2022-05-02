<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();

$queried_object = get_queried_object();
$postType = get_post_type_object(get_post_type($queried_object));
$thisPostType = $postType->labels->name;

$currentPostType = get_post_type();

$terms = \Timber::get_terms(array('taxonomy' => 'werkgebieden', 'hide_empty' => true));
$context['categories'] = $terms;

$thisPostTypeLink = get_post_type( get_the_ID() );

$context['posttype'] = $thisPostType;
$context['posttype_current'] = $currentPostType;
$context['posttype_name'] = $thisPostType;

$context['is_single'] = 'single';


$currentID = get_the_ID();

$args_posts = array(
    'post_type'			=> $currentPostType,
    'posts_per_page'    => 3,
    'orderby'           => 'rand',
    'post__not_in'      => array($currentID)
);

$context['moreposts'] = Timber::get_posts($args_posts);

    
$context['post'] = $post;

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}