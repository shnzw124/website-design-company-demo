$(function(){
  // ハンバーガーメニュー
  $('.burger__icon').on('click',function(){
    $('.burger__icon').toggleClass('close');
    $('.burger__wrapper').fadeToggle(500);
  });

  $('.burger__item').on('click',function(){
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
});