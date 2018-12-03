
$(document).ready(function() {

    // Header Scroll

    /*var $menu = $(".header-wrapp--scroll");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 160 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("headerScroll")
                    .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 160 && $menu.hasClass("headerScroll")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("headerScroll")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });*/

// SHOW MAIN MENU
	$('.header-second-menu .button-menu').click(function(e) {
			//$('.header-second-menu .button-menu').toggleClass('active');
			$('.header-second-menu .box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
        $('.box-main-menu .close-menu').click(function() {
			//$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$(".allWrapper:not('.main-menu')").click(function(e){
			//e.stopPropagation();
			//$('.header-second-menu .button-menu').removeClass('active');
			$('.header-second-menu .box-main-menu').removeClass('open');
		});


    $('.header-button-menu .button-menu').click(function(e) {
        /*$('.button-menu').toggleClass('active');
        $('.box-main-menu').toggleClass('open');*/
        $('.header-second .header-menu').slideToggle();
        e.stopPropagation();
        e.preventDefault();
    });

    // VIDEO
    var controls = {
        video: $(".h-video"),
        playpause: $(".h-paused")
    };

    var video = controls.video[0];

    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            //$(this).toggleClass('play');
        } else {
            video.pause();
            //$(this).removeClass('play');
        }

        $(this).toggleClass("paused");
        $(this).toggleClass('play');
    });

   /* // PARALAX
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    } else {
        $('.b_service, .b_social').parallax("100%", 0, true);
    }

    if( /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {

    } else {
        $('.fixed').css("background-attachment", "fixed");
    }*/

    // TAB
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

    // HOVER REVIEW
    $('.item-review .block-text').hover(function () {
        $(this).parent().toggleClass('active');
    }, function () {
        $('.item-review .wrapp-inner').removeClass('active');
    });

    //SHOW SPECIFICITY
    $('.hide-block').hide();
    $('.list-specificity .item-specificity:first-child .hide-block').show();
    $a = $('.qus');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp();
        $(this).next().slideToggle();
        $(this).toggleClass('qus-open');
        $a.not(this).removeClass('qus-open');

    });

    // SLIDER PROGRAM
    /*$('.slider-program').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        //centerMode: true,
        variableWidth: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    arrows: false,
                }
            }
        ]
    });*/


});





