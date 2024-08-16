import reviewsMarkup from './reviews-markup';

const reviewsCreate = async (data, reviewsContainer) => {
  const strMarkup = reviewsMarkup(data);
  reviewsContainer.innerHTML = '';
  reviewsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default reviewsCreate;
