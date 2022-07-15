const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
// const headerMenuActive = document.querySelector('.header__menu_active');

headerMenuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu_active');
});

export default {
    headerMenuButton,
    headerMenu,
};