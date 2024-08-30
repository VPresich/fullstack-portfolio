import Accordion from 'accordion-js';
import faqAccodionListCreate from './faq-accordionList-create';
import faqListData from '../helpers/data/faqList-data';

let faqAccordion;

const faqListRef = document.querySelector('.faq-acc-container');
faqListRef && initializeFaqAccordion();

async function initializeFaqAccordion() {
  try {
    await faqAccodionListCreate(faqListData, faqListRef);
    faqAccordion = new Accordion('.faq-acc-container');
  } catch (error) {
    console.log(error.message);
  }
}

// new Accordion('.faq-acc-container');
