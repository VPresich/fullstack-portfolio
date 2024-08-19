import marqueeCreate from './marquee-create';
import { projectsUrl } from '../projects/data';

const marqueeRef = document.querySelector('.cover-marquee');

marqueeCreate(projectsUrl, marqueeRef);
