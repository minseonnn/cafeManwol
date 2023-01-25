const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  centeredSlides : true,
  autoHeight: false,
  speed: 2500,
  spaceBetween: 20,
  slidesPerView : 3,
  loopAdditionalSlides:1,
  autoplay: {
    delay:4500,
    disableOnInteraction: false,
  }

});

