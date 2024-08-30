// import Accordion from 'accordion-js';

// const accordion = new Accordion('.accordion-container', {
//   duration: 500,
//   openOnInit: [0],
// });

import Accordion from 'accordion-js';
import aboutAccodionListCreate from './about-accordion-create';
import aboutMeItems from '../helpers/data/aboutme-data';

let aboutAccordion;

const aboutListRef = document.querySelector('.accordion-container');
aboutListRef && initializeAboutMeAccordion();

async function initializeAboutMeAccordion() {
  try {
    await aboutAccodionListCreate(aboutMeItems, aboutListRef);
    aboutAccordion = new Accordion('.accordion-container', {
      duration: 500,
      openOnInit: [0],
    });
  } catch (error) {
    console.log(error.message);
  }
}
