let maxLength = getMaxLengthForViewport();
const atributeName = 'data-original';

export function setupCustomInputHandlers() {
  const customInputsRef = document.querySelectorAll('.js-custom-input');
  customInputsRef.forEach(input => {
    input.addEventListener('change', handleChange);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  });
  window.addEventListener('resize', () => {
    maxLength = getMaxLengthForViewport();
  });
}

export function getCustomInputValue(input) {
  let res = '';
  if (!input) return res;
  if (input.hasAttribute(atributeName)) {
    res = input.dataset.original;
    if (!res) res = input.value.trim();
  } else res = input.value.trim();
  return res;
}

export function resetCustomInputValue(input) {
  if (!input) return;
  if (input.hasAttribute(atributeName)) {
    input.dataset.original = '';
  }
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

function handleChange(event) {
  const input = event.target;
  const currentText = input.value.trim();
  if (input.hasAttribute(atributeName)) {
    input.dataset.original = currentText;
  }
  // if (currentText.length > maxLength) {
  //   input.value = truncateText(currentText, maxLength);
  // }
}

function handleFocus(event) {
  const input = event.target;
  if (input.hasAttribute(atributeName)) {
    input.value = input.dataset.original;
  }
}

function handleBlur(event) {
  const input = event.target;
  const currentText = input.value;
  if (currentText.length > maxLength) {
    input.value = truncateText(currentText, maxLength);
  }
}

function getMaxLengthForViewport() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 768) {
    return 45;
  } else if (viewportWidth < 1440) {
    return 28;
  } else {
    return 49;
  }
}
