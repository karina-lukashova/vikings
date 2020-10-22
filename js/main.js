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
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/slider-arrow-next.png" alt="Перейти к следующему герою"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
  });

});


var menuBtn = document.querySelector('.menu__btn');
var menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
  menuList.classList.toggle('menu__list--active');
  menuBtn.classList.toggle('menu__btn--active');
});