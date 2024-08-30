import faqAccordionMarkup from './faq-accordion-markup';

const faqAccodionListCreate = async (faqList, faqListContainer) => {
  const strMarkup = faqAccordionMarkup(faqList);
  faqListContainer.innerHTML = '';
  faqListContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default faqAccodionListCreate;
