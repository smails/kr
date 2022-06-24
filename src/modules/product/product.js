var productSlider = new Swiper(".product__slider ", {
  loop: true,
  navigation: {
    nextEl: ".product__swiper-btn_next",
    prevEl: ".product__swiper-btn_prev",
  },
});

$('.product__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.product__box').hide();
  $('.product__box').eq($(this).index()).show();
})