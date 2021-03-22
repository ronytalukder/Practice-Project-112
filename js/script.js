//counter up js===========start=============


jQuery(document).ready(function ($) {


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Typed js================start==================
    var typed = new Typed('.element', {
        strings: ['Passionate', 'Developer', 'Designer', ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,

    });
    // Typed js================end==================


    //about video start=================
    $('.venobox').venobox();
    //about video end=================

    var mixer = mixitup('.port_mix');


    //clint slider-------------start------------------
    $('.c_slider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    //clint slider-------------end------------------




});
