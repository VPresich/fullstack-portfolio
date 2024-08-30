import aboutAccordionMarkup from './about-accordion-markup';

const aboutAccodionListCreate = async (aboutMeItems, aboutListContainer) => {
  const strMarkup = aboutAccordionMarkup(aboutMeItems);
  aboutListContainer.innerHTML = '';
  aboutListContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default aboutAccodionListCreate;
