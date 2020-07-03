var navbar = document.getElementById('navbarId');

var offsetNavbar = navbar.offsetTop;

window.onscroll = function(e) {
    if(window.scrollY >= offsetNavbar) {
        if(!navbar.classList.contains('position-fixed')) {
            navbar.classList.add('position-fixed');
            navbar.classList.add('bs-navbar');
        }
    } else {
        if(navbar.classList.contains('position-fixed')) {
            navbar.classList.remove('position-fixed');
            navbar.classList.remove('bs-navbar');
        }
    }
};

$(document).ready(function(){
    $(".input-mask-s").inputmask("+38 (999) 999-99-99");

    $('.sect3-slick').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: 'my-slick-dots',
        prevArrow: '<button type="button" class="my-slick-prev"><svg class="icon icon-slick-l"><use xlink:href="#icon-slick-l"></use></svg></button>',
        nextArrow: '<button type="button" class="my-slick-next"><svg class="icon icon-slick-r"><use xlink:href="#icon-slick-r"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots:true,
                    arrows: true,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    arrows: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.sect4-slick, .sect6-slick').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'my-slick-dots',
        prevArrow: '<button type="button" class="my-slick-prev"><svg class="icon icon-slick-l"><use xlink:href="#icon-slick-l"></use></svg></button>',
        nextArrow: '<button type="button" class="my-slick-next"><svg class="icon icon-slick-r"><use xlink:href="#icon-slick-r"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:true,
                    arrows: true,
                    infinite: false,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    arrows: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.sect7-slick').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        dotsClass: 'my-slick-dots',
        prevArrow: '<button type="button" class="my-slick-prev"><svg class="icon icon-slick-l"><use xlink:href="#icon-slick-l"></use></svg></button>',
        nextArrow: '<button type="button" class="my-slick-next"><svg class="icon icon-slick-r"><use xlink:href="#icon-slick-r"></use></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});