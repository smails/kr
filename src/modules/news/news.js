$('.news-index__line').click(function () {
$(this).addClass('active').siblings().removeClass('active');
$('.news-index__pic').removeClass('active');
$('.news-index__pic').eq($(this).index()).addClass('active');
})