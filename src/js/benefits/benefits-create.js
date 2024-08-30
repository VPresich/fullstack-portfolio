import benefitsMarkup from './benefits-markup';

const benefitsCreate = async (benefits, benefitsContainer) => {
  const strMarkup = benefitsMarkup(benefits);
  benefitsContainer.innerHTML = '';
  benefitsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default benefitsCreate;
