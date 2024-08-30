import marqueeCreate from './marquee-create';
import { projectsUrl } from '../helpers/data/projectsList-data';

const marqueeRef = document.querySelector('.covers-marquee');
marqueeCreate(projectsUrl, marqueeRef);

const coversObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-covers');
      } else {
        entry.target.classList.remove('animate-covers');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const coversSection = document.querySelector('.covers-section');
if (coversSection) {
  coversObserver.observe(coversSection);
}
