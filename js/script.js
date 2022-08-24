$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll: 3,
        infinite: false,
            responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    });
});

$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.header-burger,.menu,.logo,.menu-name,.about,.slider').toggleClass('active');
    });
});

