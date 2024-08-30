import socialLinksCreate from './socialLinks-create';
import socialLinksData from '../helpers/data/socialLinks-data';

const socialLinks = document.querySelector('.hero-social-list');

if (socialLinks) {
  socialLinksCreate(socialLinksData, socialLinks)
    .then(() => {
      socialLinks.addEventListener('click', handleSocialLinks);
    })
    .catch(error => {
      console.error('Error creating social links:', error);
    });
}

function handleSocialLinks(event) {
  const spanElement = event.target.closest('span.hero-social-list-item');
  if (spanElement) {
    const linkElement = spanElement.querySelector('a');
    if (linkElement && linkElement.href) {
      window.open(linkElement.href, '_blank', 'noopener noreferrer');
    }
  }
}
