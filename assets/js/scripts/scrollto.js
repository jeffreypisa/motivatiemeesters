(function($) {
  $( document ).ready(function() {
    $('.js-scrollto').on('click', function() {
      var href = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 500);
      return false;
    });
    $('.js-scrolltonextsection').on('click', function() {
      var href = $(this).closest('section').next();
      if ( $('body').hasClass('mobilewidth')) {
	      var theoffset = 0;
      } else {
	      var theoffset = 220;
      }
      $('html, body').animate({
        scrollTop: $(href).offset().top - 220
      }, 500);
      return false;
    });
    
    
    function onResizeReadMoreLayout(){
			if ($(window).width() <= 767) {
				$('body').addClass('mobilewidth');
      }
      else{
				$('body').removeClass('mobilewidth');
      }  
		}
			
		// initial state
		onResizeReadMoreLayout();
		
		// on resize
		$(window).on('resize', onResizeReadMoreLayout);
 
  });
}(jQuery));