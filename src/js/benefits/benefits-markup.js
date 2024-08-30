import iconsPath from '../../img/icons/symbols.svg';
function benefitsMarkup(benefitsList = []) {
  return benefitsList.reduce(
    (strMarkup, { iconId, title, description }) =>
      strMarkup +
      `
       <li class="benefit-item">
          <div class="benefit-icon-wrap">
            <svg class="benefit-icon" width="24" height="24">
              <use href="${iconsPath}#${iconId}"></use>
            </svg>
          </div>
          <h3 class="benefit-title">${title}</h3>
          <p class="benefit-description">
           ${description}
          </p>
        </li>
      `,
    ''
  );
}

export default benefitsMarkup;
