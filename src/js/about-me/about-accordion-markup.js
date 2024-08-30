import iconsPath from '../../img/icons/symbols.svg';

function aboutAccordionMarkup(aboutList = []) {
  return aboutList.reduce((strMarkup, { title, content }) => {
    const contentMarkup = content
      .map(item => `<li class="about-acc-list-item">${item}</li>`)
      .join('');
    return (
      strMarkup +
      `
      <li class="about-acc-item ac">
        <h3 class="about-acc-header ac-header ac-trigger">
          ${title}
          <button type="button" class="about-acc-button">
            <svg
              class="about-acc-icon"
              aria-label="Arrow icon"
              width="18"
              height="18"
            >
              <use href="${iconsPath}#icon-dropdown"></use>
            </svg>
          </button>
        </h3>

        <div class="about-acc-panel ac-panel">
          <ul class="about-acc-text">
            ${contentMarkup}
          </ul>
        </div>
      </li>
    `
    );
  }, '');
}

export default aboutAccordionMarkup;
