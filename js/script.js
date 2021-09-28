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

  // フォームバリデーション
  const $submitBtn = $('.form__btn')
  $('.form input, .form textarea').on('change', function () {
    if (
      $('.form__input-name').val() != "" &&
      $('.form__input-mail').val() != "" &&
      $('.form__input-content').val() != "" &&
      $('.form__input-checkbox').prop('checked') == true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  // スライダー
  var swiper = new Swiper('.swiper-container', {
    // デフォルト設定
    slidesPerView: 5,
    spaceBetween: 50,
    // ブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 414px 以下の場合（window width =< 414px）
      414: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // 画面幅が 1024px 以下の場合（window width =< 1024px）
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

});