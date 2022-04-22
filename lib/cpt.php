<?php 


  function create_posttype() {
    
    register_post_type( 'wat-ons-drijft',
  	// CPT Options
  		array(
  			'labels' => array(
  				'name'                  => __( 'Wat ons drijft' ),
  				'singular_name'         => __( 'Bericht' ),
      		'all_items'             => __( 'Alle berichten' ),
      		'add_new_item'          => __( 'Nieuw berichten toevoegen' ),
      		'new_item'              => __( 'Nieuw berichten' ),
          'add_new'               => __( 'Nieuw berichten' ),
      		'edit_item'             => __( 'Bewerk berichten' ),
      		'update_item'           => __( 'Update berichten' ),
      		'view_item'             => __( 'Bekijk berichten' ),
      		'search_items'          => __( 'Zoek berichten' ),
  			),
  			'menu_icon'               => 'dashicons-megaphone',
  			'public'                  => true,
  			'has_archive'             => true,
  			'rewrite'                 => array('slug' => 'wat-ons-drijft'),
  			'supports'                => array( 'title', 'editor', 'thumbnail' ),
  		)
  	);
  	
  	register_post_type( 'cases',
  	// CPT Options
  		array(
  			'labels' => array(
  				'name'                  => __( 'Meesterwerk' ),
  				'singular_name'         => __( 'Case' ),
      		'all_items'             => __( 'Alle cases' ),
      		'add_new_item'          => __( 'Nieuwe case toevoegen' ),
      		'new_item'              => __( 'Nieuwe case' ),
          'add_new'               => __( 'Nieuwe case' ),
      		'edit_item'             => __( 'Bewerk case' ),
      		'update_item'           => __( 'Update case' ),
      		'view_item'             => __( 'Bekijk case' ),
      		'search_items'          => __( 'Zoek case' ),
  			),
  			'menu_icon'               => 'dashicons-portfolio',
  			'public'                  => true,
  			'has_archive'             => true,
  			'rewrite'                 => array('slug' => 'meesterwerk'),
  			'supports'                => array( 'title', 'thumbnail' ),
  		)
  	);
  	
  	register_post_type( 'quotes',
  	// CPT Options
  		array(
  			'labels' => array(
  				'name'                  => __( 'Quotes' ),
  				'singular_name'         => __( 'Quote' ),
      		'all_items'             => __( 'Alle quotes' ),
      		'add_new_item'          => __( 'Nieuwe quote toevoegen' ),
      		'new_item'              => __( 'Nieuwe quote' ),
          'add_new'               => __( 'Nieuwe quote' ),
      		'edit_item'             => __( 'Bewerk quote' ),
      		'update_item'           => __( 'Update quote' ),
      		'view_item'             => __( 'Bekijk quote' ),
      		'search_items'          => __( 'Zoek quote' ),
  			),
  			'menu_icon'               => 'dashicons-format-quote',
  			'public'                  => true,
  			'has_archive'             => true,
  			'rewrite'                 => array('slug' => 'quotes'),
  			'supports'                => array( 'title' ),
  		)
  	);
  		
  }
  // Hooking up our function to theme setup
  add_action( 'init', 'create_posttype' ); 

?>