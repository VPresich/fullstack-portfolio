import iconsPath from '../../img/icons/symbols.svg';

function faqAccordionMarkup(faqList = []) {
  return faqList.reduce(
    (strMarkup, { question, answer }) =>
      strMarkup +
      `
       <li class="ac faq-acc-item">
    <h3 class="faq-acc-header ac-header ac-trigger">
     ${question}
      <button type="button" class="faq-acc-button">
        <svg
          class="faq-acc-icon"
          aria-label="Arrow icon"
          width="18"
          height="18"
        >
          <use href="${iconsPath}#icon-dropdown"></use>
        </svg>
      </button>
    </h3>

    <div class="faq-acc-panel ac-panel">
      <p class="faq-acc-text">
       ${answer}
      </p>
    </div>
  </li>
      `,
    ''
  );
}

export default faqAccordionMarkup;
