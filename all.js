$('#menu').click(function () {
    $('.mb_menu').css('transform', 'translateX(0)')
    $('#menu').css('display', 'none')

})

$('#back').click(function () {
    $('.mb_menu').css('transform', 'translateX(100%)')
    $('#menu').css('display', 'block')

})

$('.hides').click(function () {
    $('.mb_menu').css('transform', 'translateX(100%)')
    $('#menu').css('display', 'block')
})

// 輪播
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});