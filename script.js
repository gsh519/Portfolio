
//スムーススクロール
$(function() {
  $('a[href^="#"]').click(function() {
    let speed = 500;
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('html,body').animate({scrollTop:position},speed,"swing");
    return false;
  });
});


//ハンバーガーメニュー
$(function() {
  //ハンバーガーボタンをクリックしたとき
  $('#humbergar').click(function() {
    $(this).toggleClass('active');

    $('#navbar').toggleClass('active');

    $('main').toggleClass('active');
    //他の部分を押すとナブバーを消えるようにする
    if ($('#humbergar').hasClass('active')) {
      //navbar以外の要素をクリックしたとき
      $('main,header').click(function() {
        //ハンバーガーボタンとナブバーのactiveを取り外す
        $('#humbergar').removeClass('active');
        $('#navbar').removeClass('active');
      });
    }
  });
});

