var swiper = new Swiper('.swiper1', {
  
loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
  clickable : true,
},
autoplay: {
  delay:4500,
  disableOnInteraction: false,
},
speed: 2500,
spaceBetween: 0,
autoHeight: false,

});

var swiper = new Swiper('.swiper2', {
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
  // 
  observer: true,
  observeParents: true,
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

