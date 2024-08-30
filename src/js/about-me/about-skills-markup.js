const aboutSkillsMarkup = (skillsList = []) => {
  return skillsList.reduce(
    (strMarkup, skill, index) =>
      strMarkup +
      `
      <li class="about-skills-item swiper-slide${index === 0 ? ' active' : ''}">
          <span>${skill}</span>
      </li>
    `,
    ''
  );
};

export default aboutSkillsMarkup;
