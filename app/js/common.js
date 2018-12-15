
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
			$('.header-second-menu .box-main-menu').addClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
        $('header').click(function(e){
            e.stopPropagation();
        });
        $('.box-main-menu .close-menu').click(function() {
			//$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$(".allWrapper:not(.box-main-menu)").click(function(e){
			//e.stopPropagation();
			//$('.header-second-menu .button-menu').removeClass('active');
			$('.header-second-menu .box-main-menu').removeClass('open');
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
            $(".video__text .wrapp-inner").slideUp();
            //$(this).toggleClass('play');
        } else {
            video.pause();
            $(".video__text .wrapp-inner").slideToggle();
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

        $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
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

    // SLIDER
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        //centerMode: true,
        //variableWidth: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    //arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    //variableWidth: false,
                    //arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    // SLIDER WE
    $('.slider-we').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        /*responsive: [
            {
                breakpoint: 992,
                settings: {
                    //arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    //variableWidth: false,
                    //arrows: false,
                    //slidesToShow: 1,
                }
            }
        ]*/
    });


});

/**
 * @package     SP Simple Portfolio
 *
 * @copyright   Copyright (C) 2010 - 2015 JoomShaper. All rights reserved.
 * @license     GNU General Public License version 2 or later.
 */

jQuery(function($) {

    var $container 	= $('.sp-simpleportfolio-items');

    $(window).load(function() {
        var $sizer = $container.find('.shuffle__sizer');

        $container.shuffle({
            itemSelector: '.sp-simpleportfolio-item',
            sequentialFadeDelay: 150,
            sizer: $sizer
        });
    });


    // Filters
    $('.sp-simpleportfolio-filter li a').on('click', function(event){
        event.preventDefault();
        var $self = $(this);
        var $this = $(this).parent();

        if($this.hasClass('active')) {
            return;
        }

        $self.closest('ul').children().removeClass('active');
        $self.parent().addClass('active');

        $container.shuffle( 'shuffle', $this.data('group') );
    });

});





