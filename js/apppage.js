if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}

//delay anim
function delay (URL) {
    setTimeout( function() { window.location = URL }, 350 );
}

// $(function(){
//     $('#header_nav').data('size','big');
// });

// $(window).scroll(function(){
//     if($(document).scrollTop() > 750)
//     {
//         if($('#header_nav').data('size') == 'big')
//         {
//             $('#header_nav').data('size','small');
//             $('#header_nav').stop().animate({
//                 height:'60px'
//             },600);
//             $('.head-scroll').css('-webkit-clip-path', 'none');
//             $('.main-title').hide();
//         }
//     }
//     else
//     {
//         if($('#header_nav').data('size') == 'small')
//         {
//             $('#header_nav').data('size','big');
//             $('#header_nav').stop().animate({
//                 height:'750px'
//             },600);
//             $('.head-scroll').css('-webkit-clip-path', 'polygon(0 0,100% 0,100% 100%,0 calc(100% - 4vw))');
//             $('.main-title').show();
//         }  
//     }
// });

// $(document).on('scroll', function() {
//     if($(this).scrollTop()>=$('#first-section').position().top){
//         $('#main-navigation').show();
//     }
//     else
//     {
//     	$('#main-navigation').hide();
//     }
// })

//DOC READY
$(document).ready(function() {

	//slider
	$('.slider').bxSlider({
		infiniteLoop: true,
		speed: 200,
		mode: 'fade'
	});

	// Handler for link
    $(".p-link").click(function(){
    	$('#link-overlay').show();
    	$('#link-overlay').animate({
    		opacity: 1,
			width: "100%",
			marginLeft: "0"
		  }, 400, function() {
		  	$('#link-overlay').css('opacity', '0');
		  	$('#link-overlay').css('width', '0');
			$('#link-overlay').hide();
		});
	});

	$('.content').addClass('fadeIn');
	$('.content-wide').addClass('fadeIn');
	$('.navigation').addClass('fadeIn');

});