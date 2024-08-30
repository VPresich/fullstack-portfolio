import socialLinksMarkup from './socialLinks-markup';

const socialLinksCreate = async (links, socialLinksContainer) => {
  const strMarkup = socialLinksMarkup(links);
  socialLinksContainer.innerHTML = '';
  socialLinksContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default socialLinksCreate;
