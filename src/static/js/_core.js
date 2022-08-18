/* eslint-disable eqeqeq */

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
});

$('select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
});


$('input[type="tel"]').mask('+7(999) 999-99-99', { autoclear: false });


$('.work__slider').each((index, item) => {
    const sliding = new Swiper(item, {
      slidesPerView: 1,
      loop: true,
      simulateTouch: false,
      observer: true,
      observeParents: true
    });
    $(item).find('.work__swiper-btn_prev').click(() => {
      sliding.slidePrev();
    });
    $(item).find('.work__swiper-btn_next').click(() => {
      sliding.slideNext();
    });
  })

$('.work__tab').click(function () {
  const index = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $('.work__box').hide();
  $(`.work__box`).eq(index).show();
});


window.addEventListener('scroll', () => {
  const up = document.querySelector('.up');
  if(window.pageYOffset > 300){
    up.style.opacity = 1;
  } else{
    up.style.opacity = 0;
  }
})

$('.up').click(function () {
  $('html, body').animate({
    scrollTop: 0
  })
})