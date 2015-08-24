$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 300,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 10
    });


    /* input find */

    var inputBlock = $('.header-find'),
        button = inputBlock.find('.header-search'),
        input = inputBlock.find('.input');

    button.on('click', function() {
        input.toggleClass('hide');
    })
});