$('.accordion').click(function () {
    $(this).children('.accordian-content').toggleClass('collapsed');
    $(this).children('.accordian-header').children('img').toggleClass('open');
});

$('.questions .accordian').click(function () {
    $(this).toggleClass('open');
})
 
var n = 1;

$('.slick-prev').click(() => {
    var x = Number($('.slick-track.upper').css('transform').split(',')[4]);
    if (x < 0) {
        x += 500;
        $('.slick-track.upper').css('transform', 'translate3d(' + x + 'px, 0px, 0px)');
        $('.slick-dots.upper li').removeClass('slick-active');
        n -= 1;
        $(`.slick-dots.upper li:nth-child(${n})`).addClass('slick-active');
    } else {

    }
})

$('.slick-next').click(() => {
    var x = Number($('.slick-track.upper').css('transform').split(',')[4]);
    if (x > -1000) {
        x -= 500;
        $('.slick-track.upper').css('transform', 'translate3d(' + x + 'px, 0px, 0px)');
        $('.slick-dots.upper li').removeClass('slick-active');
        n += 1;
        $(`.slick-dots.upper li:nth-child(${n})`).addClass('slick-active');
    } else {

    }
})