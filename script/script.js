'use strict';

 // Initialize Swiper

$(document).ready(function () {

  const swiper = new Swiper('.swiper-container', {
    
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
       
    breakpoints: {

      1439: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      },
           
      652: {
        slidesPerView: 2,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },

      320: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    },
  });

  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
  });
});

  $(function(){
    $('.call-order').on('click', function() {
      $('.popup-container').css('display', 'flex');   
    });
    $('.popup-close').on('click', function() {
      $('.popup-container').fadeOut(600);
      });
    });


  $(function(){
    $('.site-order').on('click', function() {
      $('.modal-box').css('display', 'flex');   
    });
    $('.popup-close').on('click', function() {
      $('.modal-box').fadeOut(600);
      });
    });
  });

  $(function(){
      $('input[type="tel"]').inputmask({"mask": "+7 (999)999-99-99"}); //specifying options
  });