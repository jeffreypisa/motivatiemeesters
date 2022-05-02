<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */
 


    
$templates = array( 'archive-' . $post->post_type . '.twig', 'archive.twig', 'index.twig' );

$context = Timber::get_context();

$postType = get_queried_object();
$thisPostType = $postType->labels->name;
$currentPostType = get_post_type();



$thisPostTypeLink = get_post_type( get_the_ID() );

$context['posttype'] = $thisPostType;
$context['posttype_current'] = $currentPostType;
$context['posttype_link'] = $thisPostTypeLink;

    
/* Load categories */

if ( $currentPostType == 'cases' ) {
	$terms = \Timber::get_terms(array('taxonomy' => 'werkgebieden', 'hide_empty' => true));
	$context['categories'] = $terms;
	
	$postcatid = get_queried_object()->term_id;
	$context['current_category'] = $postcatid;
	$context['posttype'] = 'Cases';
} else {
	$args = array(
	  'post_type'			  => $currentPostType,
		'posts_per_page'  => -1,
		'post_status' => 'publish',
		'orderby' => 'publish_date', 
		'order' => 'DESC'
	);	
	$context['posts'] = Timber::get_posts($args);
} 

Timber::render( $templates, $context );