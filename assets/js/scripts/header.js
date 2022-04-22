(function($) {
  $( document ).ready(function() {
    $('body').addClass('loaded');
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 250) {
        $("body").addClass("scrolled");
      } else {
        $("body").removeClass("scrolled");
      }
    });
  });
}(jQuery));