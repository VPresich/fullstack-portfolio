const colorDropdown = document.getElementById('color-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const selectedColor = document.querySelector('.selected-color');
const colorOptions = document.querySelectorAll('.color-option');
const themeContainer = document.querySelector('.theme-container');

// Показать/скрыть dropdown при нажатии
colorDropdown.addEventListener('click', () => {
  colorDropdown.classList.toggle('active');
});

// Изменение цвета при выборе опции
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const color = option.getAttribute('data-color');
    selectedColor.style.backgroundColor = `var(--${color})`;
    themeContainer.style.backgroundColor = `var(--${color})`;
    colorDropdown.classList.remove('active');
  });
});
