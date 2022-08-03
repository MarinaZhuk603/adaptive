$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
    });
    $('.slider').slick({
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.burger').click(function(){
        $('.header').addClass('header-burger');
        $('.burger').css("display", "none");
        $('.slider').css("display", "none");
        $('.burger-open').addClass('burger-close');
        $('.logo a svg *').css("fill", "white");
        $('.logo').addClass('logo-burger');
        $('.menu').addClass('menu-burger');
        $('.menu-name').addClass('menu-name-burger');
        $('.menu-item').addClass('menu-name-burger');

    });
    $('.burger-close, .burger-open').click(function(){
        $('.header').removeClass('header-burger');
    });
});
   
