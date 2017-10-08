$(document).ready(function() {

	// Initialize Masonry
	$('#content').masonry({
		gutterWidth: 40,
		itemSelector: '.item',
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});

});