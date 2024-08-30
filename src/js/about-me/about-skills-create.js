import aboutSkillsMarkup from './about-skills-markup';

const skillsListCreate = async (skillsItems, aboutSkillsContainer) => {
  const strMarkup = await aboutSkillsMarkup(skillsItems);
  aboutSkillsContainer.innerHTML = '';
  aboutSkillsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default skillsListCreate;
