<?php
/**
 * Template Name: Login 
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
 
 
if((isset($_COOKIE['teacher']))) {
	header("Location: " . get_post_type_archive_link( 'teacher' ));
}

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

Timber::render( array( 'page-teacher-material.twig' ), $context );