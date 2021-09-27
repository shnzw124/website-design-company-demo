$(function(){
  // ハンバーガーメニュー
  $('.burger__icon, .burger__item').on('click',function(){
    $('.burger__icon').toggleClass('close');
    $('.burger__wrapper').fadeToggle(500);
  });
  
  // スティッキーヘッダー
  var headerPos = $('#header').offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > headerPos){
      $("#header").css("position", "fixed");
    } else {
      $("#header").css("position", "static");
    }
  });

  // スムーススクロール
  $('.header__link, .header__btn > .btn').click(function(){
    var target = $($(this).attr('href')).offset().top;

    $('html, body').animate({scrollTop: target - 70}, 500);
    return false;
  });

  // アコーディオンパネル
  $('.faq__title').click(function(){
    if($(this).next('.faq__body').hasClass('faq__body--open')){
      $(this).next('.faq__body').removeClass('faq__body--open');
    }else{
      $(this).next('.faq__body').addClass('faq__body--open');
    }
  });

});