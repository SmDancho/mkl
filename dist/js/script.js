import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction : 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletClass : 'swiper-pagination-bullet',
      clickable : true,
      currentClass :'swiper-pagination-current',
    },
  
 
  
 
  });