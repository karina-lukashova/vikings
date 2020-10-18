$(function(){

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 0
    }
  });


  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/slider-arrow-prev.png" alt="Перейти к предыдущему герою"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/slider-arrow-next.png" alt="Перейти к следующему герою"></button>'
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
  });

});
