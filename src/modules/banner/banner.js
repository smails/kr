/* eslint-disable no-undef */
const banner = new Swiper('.banner .swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-next',
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
