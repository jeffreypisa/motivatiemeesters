(function($) {
  $( document ).ready(function() {
    $('.js-matchheight').matchHeight();
    
    $('.js-removeafterclick').on('click', function() {
	    $(this).hide();
	  });
	  
	  $('.js-addreadmore').on('click', function() {
	    $(this).closest('.card').find('.js-removeafterclick').show();
	  });
  });
}(jQuery));