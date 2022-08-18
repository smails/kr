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

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
$('.calc-modal__hidden').change(function(){
  if(this.name == 'Инженерные[]'){
    $(this).parent().toggleClass('active');
  } else {
    $(this).parent().addClass('active').siblings().removeClass('active');
  }
  let price = 0;
  $('.calc-modal__hidden').each((index, item) => {
    if($(item).prop('checked')){
      let p = $(item).data('value');
      p = String(p);
      p = p.replace(/\s/g, '');
      price += +p;
      
    }
  })
  $('.calc-modal__price-numb span').animateNumber({ number: price, numberStep: comma_separator_number_step })
  $('.calc-modal__price [name="total"]').val(price)
})

$('.calc-modal__hidden-pic').mouseenter(function () {
  $(this).find('img').show()
  $(this).addClass('visible');
})
$('.calc-modal__hidden-pic').mouseleave(function () {
  $(this).find('img').hide()
  $(this).removeClass('visible');
})
$('.js-open-call').click(() => {
  $('.calc-modal').fadeIn();
})
$('.calc-modal__close').click(() => {
  $('.calc-modal').hide();
  $('.calc-form').hide();
})

$('.js-open-calc-form').click((e) => {
  if($(e.target).data('call') == 'smeta' ){
    $('.calc-form__title').text('Мы пришлём Вам расчёты на Вашу почту в течение дня');
    $('[name="Тип"]').val('Заявка на сохранение сметы');
    $('[name="cnt"]').attr('type', 'text').attr('placeholder', 'Ваш email');
  } else {
    $('.calc-form__title').text('Оставить заявку');
    $('[name="Тип"]').val('Заявка на перезвон');
    $('[name="cnt"]').attr('type', 'tel').attr('placeholder', 'Ваш телефон');
    $('input[type="tel"]').mask('+7(999) 999-99-99', { autoclear: false });
  }
  $('.calc-form').fadeIn();
})