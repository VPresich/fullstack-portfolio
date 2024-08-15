import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 2,
    },
  },
});
