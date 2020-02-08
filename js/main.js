$(document).ready(function() {

    // $('.link-hover').hover(function(){
    //     $(this).toggleClass('active');
    //     $(this).find('.dropdown-menu').toggleClass('active');
    // })

    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 40) {
                $('.mobile-header').addClass('stickytop');
                $('.mobile-dropdown').addClass('top');
            }
            else{
                $('.mobile-header').removeClass('stickytop');
                $('.mobile-dropdown').removeClass('top');
            }
        });
    });

    $('.burger').click(function(){
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


    $('#brands-slider').slick({
        slidesToShow: 11,
        slidesToScroll: 11,
        speed: 600,
        dots: true
    });

    $('.photos-slider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        speed: 600,
        dots: true
    });

//Yandex map API
    ymaps.ready(function () {
        const myMap = new ymaps.Map('map', {
            center: [55.753215, 37.622504],
            zoom: 8,
            controls: ['smallMapDefaultSet']
        });

    });

});
