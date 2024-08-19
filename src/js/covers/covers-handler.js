import marqueeCreate from './marquee-create';
import { projectsUrl } from '../projects/data';

const marqueeRef = document.querySelector('.covers-marquee');

marqueeCreate(projectsUrl, marqueeRef);
