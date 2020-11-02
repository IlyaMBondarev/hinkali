$(document).ready(function() {
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        margin: 15,
        mouseDrag: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            630: {
                items: 2,
            },
            950: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    $('.carousel-slider__arrow-right').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.carousel-slider__arrow-left').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});