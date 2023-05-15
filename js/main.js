$(function(){
    $('.header__slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 2000,
    });

    $('.nav__btn').on('click', function(){
        $('.nav-list').slideToggle();
    });
});