import projectsListCreate from './projects-list-create';
import { projectsUrl } from './data';

const projectsListRef = document.querySelector('.projects-list');
projectsListRef &&
  projectsListCreate(projectsUrl, projectsListRef)
    .then()
    .catch(error => {
      console.log(error);
    });
