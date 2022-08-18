const head = document.querySelector('.header');
let oldScrollTopPosition = 0;
let timerClose;
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300){
    head.classList.add('fix');
  } else{
    head.classList.remove('fix');
  }
})

window.onscroll = () => {
	const scrollTopPosition = document.documentElement.scrollTop;
	if(oldScrollTopPosition > scrollTopPosition){
    head.classList.remove('over');
    clearTimeout(timerClose);
    timerClose = setTimeout(() => {
      head.classList.add('over');
    }, 5000);
  } else {
    head.classList.add('over'); 
  }
  if(window.pageYOffset < 300){
    head.classList.remove('over');
    clearTimeout(timerClose);
  }
	oldScrollTopPosition = scrollTopPosition;
}

$('.burger').click(function () {
  if (!$('.burger').hasClass('open')) {
    $('.burger').addClass('open');
    $('.header__nav').slideDown();
    $('body').css('overflow', 'hidden');
  } else {
    $('body').removeAttr('style');
    $('.burger').removeClass('open');
    $('.header__nav').slideUp();
  }
})
// $('.header__search').click(function () {
//   if (!$('.header__search').hasClass('open')) {
//     $('.header__search').addClass('open');
//     $('.header__search-form').slideDown();
//   } else {
//     $('.header__search').removeClass('open');
//     $('.header__search-form').slideUp();
//   }
//   if(window.innerWidth < 1023){
//     $('.header__list').removeAttr('style');
//     $('.burger').removeClass('open');
//   }
// })