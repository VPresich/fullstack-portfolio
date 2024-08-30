import skillsListCreate from './about-skills-create';
import skillsTechData from '../helpers/data/tech-skills-data';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

let swiperSkills;

const skillsRef = document.querySelector('.about-skills-list');
skillsRef && initializeSkilsList();

async function initializeSkilsList() {
  try {
    await skillsListCreate(skillsTechData, skillsRef);
    swiperSkills = new Swiper('.about-skills-container', {
      modules: [Navigation, Keyboard],
      slidesPerView: 2,
      spaceBetween: 2,
      loop: true,
      navigation: {
        nextEl: '.about-arrow-btn-next',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        init: updateActiveElement,
        slideChange: updateActiveElement,
      },
      speed: 700,
      effect: 'slide',
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
  } catch (error) {}
}

// const swiperSkills = new Swiper('.about-skills-container', {
//   modules: [Navigation, Keyboard],
//   slidesPerView: 2,
//   spaceBetween: 2,
//   loop: true,

//   navigation: {
//     nextEl: '.about-arrow-btn-next',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   on: {
//     init: updateActiveElement,
//     slideChange: updateActiveElement,
//   },

//   speed: 700,
//   effect: 'slide',
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 2,
//     },
//     1440: {
//       slidesPerView: 6,
//       spaceBetween: 2,
//     },
//   },
// });

// swiperSkills.on('init', updateActiveElement);
// swiperSkills.on('slideChange', updateActiveElement);

function updateActiveElement() {
  if (!swiperSkills || !swiperSkills.slides) return;
  swiperSkills.slides.forEach(slide => {
    slide.classList.remove('active');
  });
  const activeSlide = swiperSkills.slides[swiperSkills.activeIndex];
  if (activeSlide) {
    activeSlide.classList.add('active');
  }
}
