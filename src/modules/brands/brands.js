const brands = new Swiper('.brands__slider .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 115,
  breakpoints: {
    575: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 60,
    },
    1023: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    1500: {
      spaceBetween: 70
    }
  }
});
$('.brands__btn_next').click(() =>{
  brands.slideNext();
})
$('.brands__btn_prev').click(() =>{
  brands.slidePrev();
})