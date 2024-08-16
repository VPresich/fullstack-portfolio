import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.reviews-swiper-container', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 2,
  loop: false,
  navigation: {
    nextEl: '.reviews-arrow-btn-next',
    prevEl: '.reviews-arrow-btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  },
});
