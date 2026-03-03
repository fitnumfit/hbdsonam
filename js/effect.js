$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$(document).ready(function(){
		var vw, balloonOffset = 60;
		function getBalloonGap() {
			var w = $(window).width();
			if (w < 380) return 36;
			if (w < 480) return 46;
			if (w < 768) return 62;
			return 90;
		}
		$(window).on('resize', function(){
			vw = $(window).width() / 2;
			balloonOffset = getBalloonGap();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			if ($('#b11').length) 			$('#b11').animate({top: 240, left: vw - balloonOffset * 3.5}, 650);
			if ($('#b22').length) $('#b22').animate({top: 240, left: vw - balloonOffset * 2.5}, 650);
			if ($('#b33').length) $('#b33').animate({top: 240, left: vw - balloonOffset * 1.5}, 650);
			if ($('#b44').length) $('#b44').animate({top: 240, left: vw - balloonOffset * 0.5}, 650);
			if ($('#b55').length) $('#b55').animate({top: 240, left: vw + balloonOffset * 0.5}, 650);
			if ($('#b66').length) $('#b66').animate({top: 240, left: vw + balloonOffset * 1.5}, 650);
			if ($('#b77').length) $('#b77').animate({top: 240, left: vw + balloonOffset * 2.5}, 650);
			if ($('#b88').length) $('#b88').animate({top: 240, left: vw + balloonOffset * 3.5}, 650);
		}).trigger('resize');

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(700).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(700).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');

		$(this).fadeOut('slow').delay(1200).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
			$('.album-photo').fadeIn('slow');
			$('.can-zoom-wrap').fadeIn('slow');
		});
	});

	var animDur = 2600;
	function loopOne() {
		$('#b1').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopOne);
	}
	function loopTwo() {
		$('#b2').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopTwo);
	}
	function loopThree() {
		$('#b3').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopThree);
	}
	function loopFour() {
		$('#b4').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopFour);
	}
	function loopFive() {
		$('#b5').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopFive);
	}
	function loopSix() {
		$('#b6').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopSix);
	}
	function loopSeven() {
		$('#b7').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopSeven);
	}
	function loopEight() {
		$('#b8').animate({left: 1000*Math.random(), bottom: 500*Math.random()}, animDur, loopEight);
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top: -500}, 5200);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		$(this).fadeOut('slow').delay(1200).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(900).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width() / 2;
		balloonOffset = getBalloonGap();
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		$('#b8').attr('id','b88');
		$('#b11').animate({top: 240, left: vw - balloonOffset * 3.5}, 650);
		$('#b22').animate({top: 240, left: vw - balloonOffset * 2.5}, 650);
		$('#b33').animate({top: 240, left: vw - balloonOffset * 1.5}, 650);
		$('#b44').animate({top: 240, left: vw - balloonOffset * 0.5}, 650);
		$('#b55').animate({top: 240, left: vw + balloonOffset * 0.5}, 650);
		$('#b66').animate({top: 240, left: vw + balloonOffset * 1.5}, 650);
		$('#b77').animate({top: 240, left: vw + balloonOffset * 2.5}, 650);
		$('#b88').animate({top: 240, left: vw + balloonOffset * 3.5}, 650);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(1600);
		$(this).fadeOut('slow').delay(1200).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('slow').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		var $messages = $('.message .col-md-12 > p');
		var totalMessages = $messages.length;
		var messageReadMs = 4200;
		var messageFadeMs = 650;
		function msgLoop(i) {
			if (i < totalMessages - 1) {
				$messages.eq(i).fadeIn(messageFadeMs).delay(messageReadMs).fadeOut(messageFadeMs).promise().done(function(){
					msgLoop(i + 1);
				});
			} else {
				$messages.eq(i).fadeIn(messageFadeMs).delay(messageReadMs).promise().done(function(){
					$('.message-reply').fadeIn(messageFadeMs);
				});
			}
		}
		msgLoop(0);
	});
	$('#message_done').on('click', function(){
		$('.message').fadeOut('slow');
		$('.message-reply').hide();
		$('.message .col-md-12 > p').hide();
		$('.cake').fadeIn('slow');
	});

});

// Zoom (lightbox) feature
$('.album-photo').click(function() {
    var src = $(this).attr('src');
    $('#lightbox img').attr('src', src);

    // Force flex only when showing
    $('#lightbox').css('display', 'flex').hide().fadeIn('fast');
});

// Close when clicking outside image
$('#lightbox').click(function(e) {
    if (e.target !== this) return; // only close if background clicked
    $('#lightbox').fadeOut('fast');
});




//alert('hello');