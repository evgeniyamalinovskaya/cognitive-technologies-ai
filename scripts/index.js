const swiperSectionAbout = new Swiper('.about__cards-container', {
  
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   }, 
   
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   slidesPerView: 3,
   spaceBetween: 32,
   initialSlide: 0
});