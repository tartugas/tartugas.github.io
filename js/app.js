//typed
$(function(){
	$(".typed").typed({
		strings: ["sketch app", "photoshop", "invision", "zeplin", "unity3d", "mindnode", "illustrator", "indesign", "github"],
		backSpeed: 30,
		backDelay: 3000,
		typeSpeed: 80,
		loop: true
	});
});
//typed logo
function type(str){
	$(".l-typed").typed({
		strings: [str],
		typeSpeed: 20
	});
};
//parallax
function parallax(e, target, layer) {
    var layer_coeff = 80 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};
//delay anim
function delay (URL) {
    setTimeout( function() { window.location = URL }, 350 );
}
//EQUO
function equalizer(bar) {
  // Syntax: Math.random() * (max-min = range) + min;
  // My bars will be at least 70px, and at most 170px tall
  var height = Math.random() * 200 + 170;
  // Any timing would do the trick, mine is height times 7.5 to get a speedy yet bouncy vibe
  var timing = height * 1.2;
  // If you need to align them on a baseline, just remove this line and also the "marginTop: marg" from the "animate"
  var marg = (170 - height) / 2;
  
  bar.animate({
      height: height,
      marginTop: marg
  }, timing, function() {
      equalizer($(this));
  });

}

//DOC READY
$(document).ready(function() {
    // Handler for link
	$(".p-link").click(function(){
	$('#link-overlay').show();
	$('#link-overlay').animate({
		opacity: 1,
			width: "100%"
		  }, 400, function() {
		  	$('#link-overlay').css('opacity', '0');
		  	$('#link-overlay').css('width', '0');
			$('#link-overlay').hide();
		});
	});

	//form
	$('.input').blur(function(){
		if( $(this).val() ) {
			$(this).parent('.label-line').addClass('active checked');
		} else {
			$(this).parent('.label-line').removeClass('active checked');
			//alert('no');
		}
	});
	$('.label-line').click(function(){
		$(this).addClass('active');
		if ($('.label-line').hasClass('checked')){}
		else{
			$('.label-line').removeClass('checked');
		}
	});
	//video
	$(".video-toggle").click(function(ev) {
		var clickid = $(this).attr('id');
		var splitid = clickid.split(" ");
		var vidid = splitid[1];
		var vidnamediv = '#videoitem'+vidid;
		var vidname = '#video'+vidid;
		
		$(this).css('display', 'none');
		$(vidnamediv).css('display', 'block');
		$(vidname)[0].src += "&autoplay=1";
		ev.preventDefault();
	});
	//links
	$('#link-contact').click(function(){
		$('#pagepiling').pagepiling.moveTo(6);
	});
	//textillate
	$('.tlt').textillate({
		loop: true,
		autoStart: true,
		minDisplayTime: 0,
		initialDelay: 0,
		in: {
			effect: 'inf-bounce',
			delayScale: 1.5,
			delay: 30,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		},
		out: {
			effect: 'inf-bounce',
			delayScale: 1.5,
			delay: 30,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		}
	});
	$('.tlt-flash').textillate({
		loop: true,
		autoStart: true,
		minDisplayTime: 0,
		initialDelay: 0,
		in: {
			effect: 'flash',
			delayScale: 200,
			delay: 10,
			sync: false,
			shuffle: true,
			reverse: false,
			callback: function () {}
		},
		out: {
			effect: 'flash',
			delayScale: 300,
			delay: 10,
			sync: false,
			shuffle: true,
			reverse: false,
			callback: function () {}
		}
	});
	//pagepilling
	$('#pagepiling').pagepiling({
		navigation: {
			'position': 'left',
			'textColor': '#000',
			'bulletsColor': '#000'
		},
		loopBottom: true,
		anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		scrollingSpeed: 1000,
		easing: 'swing',
		afterLoad: function(anchorLink, index){
			$('.section').find('.item').removeClass('fadeInDown')
			$('.active').find('.item').addClass('fadeInDown')
			$('.section').find('.item-text').removeClass('fadeInUp')
			$('.active').find('.item-text').addClass('fadeInUp')
			
			if(index == 1){
				$('.scroll-down').animate({
					opacity: 1
				  }, 1500, function() {
					// Animation complete.
				});
			}
			
		},
		onLeave: function(index, nextIndex, direction){
			$('.section').find('.item').removeClass('fadeInDown')
			$('.active').find('.item').addClass('fadeInDown')
			$('.section').find('.item-text').removeClass('fadeInUp')
			$('.active').find('.item-text').addClass('fadeInUp')
			$('#pp-nav').find('.active').find('span').css('background-color', '')
			
			if(index == 1){
				$('.scroll-down').animate({
					opacity: 0
				  }, 300, function() {
					// Animation complete.
				});
			}
			
			// main animations
			if(nextIndex == 1){
				$("#pp-nav").find('span').css('border-color', '#000').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('background-color', '#000')
					next();
				});
			}
			// playout
			if(nextIndex == 2){
				$("#pp-nav").find('span').css('border-color', '#151c23').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('background-color', '#151c23')
					next();
				});
				$('.playout-img-i').addClass('animated fadeInUp');
			}
			if(index == 2){
				$('.playout-img-i').removeClass('animated fadeInUp');
			}
			//openledger
			if(nextIndex == 3){
				$("#pp-nav").find('span').css('border-color', 'rgba(215, 215, 242, 0.1)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(78, 144, 221, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(78, 144, 221, 0.9)')
					next();
				});
				$('.openledger-img-i').addClass('animated fadeInUp');
				$('.see-more').addClass('fadeIn');
				// $('.fullsize-back-ol').addClass('animated bounceInDown');
			}
			if(index == 3){
				$('.openledger-img-i').removeClass('animated fadeInUp');
				// $('.fullsize-back-ol').removeClass('animated bounceInDown');
			}
			//NEW
			if(nextIndex == 4){
				// $('#music-bars span').each(function(i) {
				// 	equalizer($(this));
				// });
				$("#pp-nav").find('span').css('border-color', 'rgba(0, 0, 0, 0.9)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(0, 0, 0, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(0, 0, 0, 0.9)')
					next();
				});
				$('.logo1-img-i').addClass('animated fadeInUp');
				// $('.fullsize-back-ol').addClass('animated bounceInDown');
			}
			if(index == 4){
				$('.logo1-img-i').removeClass('animated fadeInUp');
				// $('.fullsize-back-ol').removeClass('animated bounceInDown');
			}
			//syren
			if(nextIndex == 5){
				$("#pp-nav").find('span').css('border-color', 'rgba(215, 215, 242, 0.1)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(234, 6, 137, 1)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(234, 6, 137, 1)')
					next();
				});
				$(".parallax-layer").each(function(index){
					$(this).animate({ opacity: 1, top: "300px" }, index * 100 + 700);
				});
			}
			if(index == 5){
				$(".parallax-layer").each(function(index){
					$(this).animate({ opacity: 0, top: "-300px" }, index * 100 + 700);
				});
				//$('.s-syren-parallax').unbind();
			}
			//prestigio
			if(nextIndex == 6){
				$("#pp-nav").find('span').css('border-color', 'rgba(0, 0, 0, 0.9)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(0, 0, 0, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(0, 0, 0, 0.9)')
					next();
				});
				$('.prestigio-img').addClass('animated fadeInRight')
			}
			if(index == 6){
				$('.prestigio-img').removeClass('animated fadeInRight')
			}
			//reaper
			if(nextIndex == 7){
				$("#pp-nav").find('span').css('border-color', 'rgba(215, 215, 242, 0.1)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(75, 255, 135, 0.98)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(75, 255, 135, 0.98)')
					next();
				});
				$(".reaper-parallax-layer").each(function(index){
					$(this).animate({ opacity: 1, top: "400px" }, index * 100 + 700);
				});
			}
			if(index == 7){
				$(".reaper-parallax-layer").each(function(index){
					$(this).animate({ opacity: 0, top: "-400px" }, index * 100 + 700);
				});
				//$('.s-reaper-parallax').unbind();
			}
			//maze
			if(nextIndex == 8){
				$("#pp-nav").find('span').css('border-color', 'rgba(240, 154, 121, 0.95)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(240, 154, 121, 0.95)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(240, 154, 121, 0.95)')
					next();
				});
				$('.maze-img').addClass('animated fadeIn')
			}
			if(index == 8){
				$('.maze-img').removeClass('animated fadeIn')
			}
			//adslist
			if(nextIndex == 9){
				$("#pp-nav").find('span').css('border-color', 'rgba(249, 47, 0, 0.6)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(249, 47, 0, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(249, 47, 0, 0.9)')
					next();
				});
				$('.adslist-img').addClass('animated fadeInRight')
			}
			if(index == 9){
				$('.adslist-img').removeClass('animated fadeInRight')
			}
			//bbw
			if(nextIndex == 10){
				$("#pp-nav").find('span').css('border-color', 'rgba(17, 11, 21, 0.9)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(17, 11, 21, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(17, 11, 21, 0.9)')
					next();
				});
				$('.bbw-img').addClass('animated fadeInUp')
				$('.bbw-img').cycle({
					fx: 'fade',
					delay: 3000
				});
			}
			if(index == 10){
				$('.bbw-img').removeClass('animated fadeInUp')
				$('.bbw-img').cycle('destroy');
			}
		},
		afterRender: function(){
			$('#intro-back').animate({
				opacity: 0
			  }, 2000, function() {
				$("#intro-back").remove()
			});
				
			$('.active').find('.item').addClass('fadeInDown')
			$('.active').find('.item-text').addClass('fadeInUp')
			$('#pp-nav').find('span').css('border-color', '#000')
			$('#pp-nav').addClass('animated fadeInLeft')
			$('.logo').addClass('fadeInDown')
			$('.links').addClass('fadeInDown')
			
			$('.scroll-down').delay(7000).animate({
				opacity: 1
			  }, 1500, function() {
				// Animation complete.
			});
		}
	});
});