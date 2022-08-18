/* eslint-disable no-undef */
const partners = new Swiper('.partners .swiper-container', {
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2
    },
    1023: {
      slidesPerView: 2.8
    },
    1200: {
      slidesPerView: 4
    },
  }
});
