import { scrollToElement } from './scroll-to-element';

const menuBtn = document.querySelector('.js-header-menu-btn');
const headerMenuRef = document.querySelector('.js-header-menu');
const headerOrderLinkRef = document.querySelector('.js-header-order-link');

menuBtn && menuBtn.addEventListener('click', handleMenuOpen);
headerMenuRef && headerMenuRef.addEventListener('click', handleScrollDocument);

headerOrderLinkRef &&
  headerOrderLinkRef.addEventListener('click', handleScrollDocument);

function handleMenuOpen() {
  headerMenuRef && headerMenuRef.classList.toggle('isopen');
}

function handleScrollDocument(event) {
  event.preventDefault();
  const item = event.target;
  if (!item.matches('a')) return;
  const targetId = item.getAttribute('href').substring(1);
  scrollToElement(targetId);
  handleMenuOpen();
}
