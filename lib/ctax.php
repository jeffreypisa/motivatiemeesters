<?php

// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_cases_tax', 0 );

function create_cases_tax() {

	$labels = array(
		'name'              => _x( 'Werkgebieden', 'taxonomy general name' ),
		'singular_name'     => _x( 'Werkgebied', 'taxonomy singular name' ),
		'search_items'      => __( 'Zoek werkgebied' ),
		'all_items'         => __( 'Alle werkgebieden' ),
		'parent_item'       => __( 'Parent werkgebied' ),
		'parent_item_colon' => __( 'Parent werkgebied' ),
		'edit_item'         => __( 'Bewerk werkgebied' ),
		'update_item'       => __( 'Update werkgebied' ),
		'add_new_item'      => __( 'Nieuw werkgebied toevoegen' ),
		'new_item_name'     => __( 'Naam nieuw werkgebied' ),
		'menu_name'         => __( 'Werkgebieden' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'werkgebieden' ),
	);

  register_taxonomy('werkgebieden', array('cases'), $args);

}