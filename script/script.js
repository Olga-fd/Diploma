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
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },

      320: {
        slidesPerView: 1,
        initialSlide: 1,
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
    new WOW().init();
  });


  const popup = $('.popup-call-order');
  const modal = $('.popup-project-order');
  const call = $('.call-order');
  const close = $('.popup-close');
  const site = $('.site-order');

  $(function(){
    call.on('click', function() {
      popup.css('display', 'flex');   
    });

    close.on('click', function() {
      popup.fadeOut(300);
    });

    popup.on('click', function(event) {
      if (event.target == this) {
        $(this).fadeOut(300);
      };
    });
  });

  $(function(){
    site.on('click', function() {
      modal.css('display', 'flex');   
    });

    close.on('click', function() {
      modal.fadeOut(300);
    });

    modal.on('click', function(event) {
      if (event.target == this) {
        $(this).fadeOut(300);
      };
    });
  });

  $(function(){
      $('input[type="tel"]').inputmask({"mask": "+7 (999)999-99-99"});
  });
});