import { marqueeInnerMarkup } from './marquee-markup';

const marqueeCreate = async (projects, marqueeContainer) => {
  const strMarkup = marqueeInnerMarkup(projects);
  console.log('MARQ', strMarkup);
  marqueeContainer.innerHTML = '';
  marqueeContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default marqueeCreate;
