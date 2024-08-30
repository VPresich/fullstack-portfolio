const aboutSkillsMarkup = async (skillsList = []) => {
  return skillsList.reduce(
    (strMarkup, skill) =>
      strMarkup +
      `
    <li class="about-skills-item swiper-slide">
        <span>${skill}</span>
    </li>
  `,
    ''
  );
};

export default aboutSkillsMarkup;
