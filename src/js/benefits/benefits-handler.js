import { customScrollToElement } from '../helpers/scroll';
import benefitsCreate from './benefits-create';
import benefitsData from '../helpers/data/benefits-data';

const benefitsListRef = document.querySelector('.benefits-list');
benefitsListRef && benefitsCreate(benefitsData, benefitsListRef);

const orderRef = document.querySelector('.js-project-order');
orderRef && orderRef.addEventListener('click', handlerLink);

function handlerLink(event) {
  event.preventDefault();
  const item = event.target;
  if (!item.matches('a')) return;
  const targetId = item.getAttribute('href').substring(1);
  customScrollToElement(targetId);
}
