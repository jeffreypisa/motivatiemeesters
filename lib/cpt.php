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
  			'menu_icon'               => 'dashicons-welcome-learn-more',
  			'public'                  => true,
  			'has_archive'             => true,
  			'rewrite'                 => array('slug' => 'meesterwerk'),
  			'supports'                => array( 'title', 'editor', 'thumbnail' )
  		)
  	);
    
    register_post_type( 'expertises',
    // CPT Options
      array(
        'labels' => array(
          'name'                  => __( 'Expertises' ),
          'singular_name'         => __( 'Expertise' ),
          'all_items'             => __( 'Alle expertises' ),
          'add_new_item'          => __( 'Nieuwe expertise toevoegen' ),
          'new_item'              => __( 'Nieuwe expertise' ),
          'add_new'               => __( 'Nieuwe expertise' ),
          'edit_item'             => __( 'Bewerk expertise' ),
          'update_item'           => __( 'Update expertise' ),
          'view_item'             => __( 'Bekijk expertise' ),
          'search_items'          => __( 'Zoek expertise' ),
        ),
        'menu_icon'               => 'dashicons-portfolio',
        'public'                  => true,
        'has_archive'             => true,
        'rewrite'                 => array('slug' => 'expertise'),
        'supports'                => array( 'title', 'editor', 'thumbnail' )
      )
    );
    
    register_post_type( 'aanbod',
    // CPT Options
      array(
        'labels' => array(
          'name'                  => __( 'Aanbod' ),
          'singular_name'         => __( 'Aanbod' ),
          'all_items'             => __( 'Alle aanbod' ),
          'add_new_item'          => __( 'Nieuw aanbod toevoegen' ),
          'new_item'              => __( 'Nieuw aanbod' ),
          'add_new'               => __( 'Nieuw aanbod' ),
          'edit_item'             => __( 'Bewerk aanbod' ),
          'update_item'           => __( 'Update aanbod' ),
          'view_item'             => __( 'Bekijk aanbod' ),
          'search_items'          => __( 'Zoek aanbod' ),
        ),
        'menu_icon'               => 'dashicons-image-filter',
        'public'                  => true,
        'has_archive'             => false,
        'rewrite'                 => array('slug' => 'aanbod'),
        'supports'                => array( 'title', 'editor', 'thumbnail' )
      )
    );
    
    register_post_type( 'logos',
    // CPT Options
      array(
        'labels' => array(
          'name'                  => __( 'Logo' ),
          'singular_name'         => __( 'Logo' ),
          'all_items'             => __( 'Alle logos' ),
          'add_new_item'          => __( 'Nieuw logo toevoegen' ),
          'new_item'              => __( 'Nieuw logo' ),
          'add_new'               => __( 'Nieuw logo' ),
          'edit_item'             => __( 'Bewerk logo' ),
          'update_item'           => __( 'Update logo' ),
          'view_item'             => __( 'Bekijk logo' ),
          'search_items'          => __( 'Zoek logo' ),
        ),
        'menu_icon'               => 'dashicons-flag',
        'public'                  => true,
        'has_archive'             => false,
        'supports'                => array( 'title' )
      )
    );
  		
  }
  // Hooking up our function to theme setup
  add_action( 'init', 'create_posttype' ); 

?>