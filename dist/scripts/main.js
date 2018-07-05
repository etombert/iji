// CALLBACK
$(document).ready(function(){
	// alert('hello');

    $('header ul li a:not(header ul li:last-child a)').addClass('hvr-underline-from-left');

    // ScrollTO Click
    $('.scrollTo').click( function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000; // Durée de l'animation (en ms) (750 à la base)
        $('html, body').animate( { scrollTop: $(page).offset().top -80 }, speed ); // Go
        return false;
    });

  /* FADE // Every time the window is scrolled ... */
    $(window).scroll( function(){

      /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top -450 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                // $(this).animate({'opacity':'1'},500);
                $(this).addClass('showme');

            }

        });

        // set distance user needs to scroll before we start fadeIn
        if ($(window).scrollTop() >= $('.section-2').offset().top -100) {
            $('header').addClass('fixed');
            $('header ul li a:not(header ul li:last-child a)').css({
                'color': '#5556fd'
            });
        } else {
            $('header').removeClass('fixed');
            $('header ul li a:not(header ul li:last-child a)').css({
                'color': '#fff'
            });
        }

    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    var swiper2 = new Swiper('.swiper-container-2', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            850: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            }
        },
    });

    var swiper3 = new Swiper('.swiper-container-3', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        },
    });

    var swiper4 = new Swiper('.swiper-container-4', {
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        },
    });

    // ACCORDION
    var accordion = (function(){

        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');

        // default settings
        var settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function($settings) {
                $accordion_header.on('click', function() {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }

                // reveal the active accordion bodies
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function($this) {

                if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp()
                }

                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();

    $(document).ready(function(){
        accordion.init({ speed: 300, oneOpen: true });
    });
});