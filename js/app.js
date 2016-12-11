//typed
$(function(){
	$(".typed").typed({
		strings: ["фотошоп", "скетч", "джаваскрипт", "хтмл", "иллюстратор", "индизайн"],
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
//DOC READY
$(document).ready(function() {
	//particles
	particlesJS.load('section1', 'particlesjs-config.json', function() {
	  console.log('callback - particles.js config loaded');
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
		scrollingSpeed: 1500,
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
			//syren
			if(nextIndex == 2){
				$("#pp-nav").find('span').css('border-color', 'rgba(215, 215, 242, 0.1)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(234, 6, 137, 1)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(234, 6, 137, 1)')
					next();
				});
				$(".parallax-layer").each(function(index){
					$(this).animate({ opacity: 1, top: "300px" }, index * 100 + 700);
				});
			}
			if(index == 2){
				$(".parallax-layer").each(function(index){
					$(this).animate({ opacity: 0, top: "-300px" }, index * 100 + 700);
				});
				//$('.s-syren-parallax').unbind();
			}
			//reaper
			if(nextIndex == 3){
				$("#pp-nav").find('span').css('border-color', 'rgba(215, 215, 242, 0.1)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(75, 255, 135, 0.98)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(75, 255, 135, 0.98)')
					next();
				});
				$(".reaper-parallax-layer").each(function(index){
					$(this).animate({ opacity: 1, top: "400px" }, index * 100 + 700);
				});
			}
			if(index == 3){
				$(".reaper-parallax-layer").each(function(index){
					$(this).animate({ opacity: 0, top: "-400px" }, index * 100 + 700);
				});
				//$('.s-reaper-parallax').unbind();
			}
			//maze
			if(nextIndex == 4){
				$("#pp-nav").find('span').css('border-color', 'rgba(240, 154, 121, 0.95)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(240, 154, 121, 0.95)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(240, 154, 121, 0.95)')
					next();
				});
				$('.maze-img').addClass('animated fadeIn')
			}
			if(index == 4){
				$('.maze-img').removeClass('animated fadeIn')
			}
			//prestigio
			if(nextIndex == 5){
				$("#pp-nav").find('span').css('border-color', 'rgba(245, 226, 204, 0.9)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(245, 226, 204, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(245, 226, 204, 0.9)')
					next();
				});
				$('.prestigio-img').addClass('animated fadeInRight')
			}
			if(index == 5){
				$('.prestigio-img').removeClass('animated fadeInRight')
			}
			//adslist
			if(nextIndex == 6){
				$("#pp-nav").find('span').css('border-color', 'rgba(249, 47, 0, 0.6)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(249, 47, 0, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(249, 47, 0, 0.9)')
					next();
				});
				$('.adslist-img').addClass('animated fadeInRight')
			}
			if(index == 6){
				$('.adslist-img').removeClass('animated fadeInRight')
			}
			//bbw
			if(nextIndex == 7){
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
			if(index == 7){
				$('.bbw-img').removeClass('animated fadeInUp')
				$('.bbw-img').cycle('destroy');
			}
			//mail
			if(nextIndex == 9){
				$("#pp-nav").find('span').css('border-color', 'rgba(0, 0, 0, 0.9)').delay(20).queue(function(next){
					$('#pp-nav').find('.active').find('span').css('border-color', 'rgba(0, 0, 0, 0.9)')
					$('#pp-nav').find('.active').find('span').css('background-color', 'rgba(0, 0, 0, 0.9)')
					next();
				});
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