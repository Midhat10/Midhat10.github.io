// init Swiper:
const swiper = new window.Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 1.3,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      direction: 'vertical',
      slidesPerView: '2',
      centeredSlides: false
    },
    1024: {
      slidesPerView: '3',
      centeredSlides: false
    }
  }
});

// var urlLogos = [] ;
var list = document.querySelector('.swiper-wrapper');
var items = list.children;

var swiperTemplate = document.querySelector('#slide-template').content;
var newSlideTemplate = swiperTemplate.querySelector('.swiper-slide');

var addSlide = function (logotype) {
  var slide =newSlideTemplate.cloneNode(true);
  var logo = slide.querySelector('.logoplace');
  logo.style.backgroundImage =  `url(${logotype})`
  console.log(`url(${logotype})`);

  list.appendChild(slide);
}

for (var i = 1; i <= 8; i++) {
  addSlide(`img/logo-${i}.png`);
}

for (var i = 1; i <= 3; i++) {
  addSlide(`img/logo-${i}.png`);
}






