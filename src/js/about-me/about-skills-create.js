import aboutSkillsMarkup from './about-skills-markup';

const skillsListCreate = async (skillsItems, aboutSkillsContainer) => {
  const strMarkup = aboutSkillsMarkup(skillsItems);
  aboutSkillsContainer.innerHTML = '';
  aboutSkillsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default skillsListCreate;
