export const scrollToElement = elementId => {
  const element = document.getElementById(elementId);
  element && element.scrollIntoView({ behavior: 'smooth' });
};
