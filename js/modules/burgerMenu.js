const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
const heroSection = document.querySelector('.hero');
const headerItems = document.querySelectorAll('.header__item');

headerMenuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  headerMenu.classList.toggle('header__menu_active');
});
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList !== '.header__menu') {
    headerMenu.classList.remove('header__menu_active');
  }
  headerItems.forEach(headerItem => {
    if (headerItem === target) {
      headerMenu.classList.remove('header__menu_active');
    }
  });
});

export default {
  headerMenuButton,
  headerMenu,
  heroSection,
};
