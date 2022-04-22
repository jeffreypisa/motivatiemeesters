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

$postType = get_queried_object();
$thisPostType = $postType->labels->name;
$currentPostType = get_post_type();

$terms = \Timber::get_terms(array('taxonomy' => 'werkgebieden', 'hide_empty' => true));
$context['categories'] = $terms;

$thisPostTypeLink = get_post_type( get_the_ID() );

$context['posttype'] = $thisPostType;
$context['posttype_current'] = $currentPostType;
$context['posttype_link'] = $thisPostTypeLink;


$context['is_single'] = 'single';


if((!isset($_COOKIE['teacher'])) && ( $currentPostType == 'teacher')) {
	header("Location: " . get_site_url() . "/teacher-material");
}

$context['post'] = $post;

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}