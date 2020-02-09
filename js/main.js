$(document).ready(function() {

    // $('.link-hover').hover(function(){
    //     $(this).toggleClass('active');
    //     $(this).find('.dropdown-menu').toggleClass('active');
    // })

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 40) {
                $('.mobile-header').addClass('stickytop');
                $('.mobile-dropdown').addClass('top');
            } else {
                $('.mobile-header').removeClass('stickytop');
                $('.mobile-dropdown').removeClass('top');
            }
        });
    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-dropdown').fadeToggle();
        $('body').classToggle('overflow');
    });


    $('#main-slider').slick({
        slidesToShow: 1,
        fade: true,
        speed: 600,
        dots: true
    });

    $('#adress-slide').slick({
        slidesToShow: 1,
        arrows: false,
        // fade: true,
        speed: 600,
        // dots: true
        centerMode: true,
        infinite: true,
        centerPadding: '20px',
        responsive: [{

            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }

        }, {

            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }

        }]
    });


    $('#brands-slider').slick({
        slidesToShow: 11,
        slidesToScroll: 2,
        speed: 600,
        dots: true,
        responsive: [{

            breakpoint: 1280,
            settings: {
                slidesToShow: 10
            }

        }, {

            breakpoint: 992,
            settings: {
                slidesToShow: 8
            }

        }, {

            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }

        }, {

            breakpoint: 400,
            settings: {
                slidesToShow: 2
            }

        }]
    });

    $('.photos-slider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        speed: 600,
        dots: true
    });

    //Yandex map API
    ymaps.ready(function() {
        const myMap = new ymaps.Map('map', {
            center: [55.753215, 37.622504],
            zoom: 8,
            controls: ['smallMapDefaultSet']
        });

    });

});
