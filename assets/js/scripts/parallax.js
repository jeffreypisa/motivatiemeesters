(function($) {
  $( document ).ready(function() {
	const image = document.getElementsByClassName('js-parallax');
	new simpleParallax(image, {
		delay: 0,
		orientation: 'down',
		scale: 1.3
	});
  });
}(jQuery));