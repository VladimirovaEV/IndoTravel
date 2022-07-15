const travelItems = document.querySelectorAll('.travel__item');
const travelItemsTitles = document.querySelectorAll('.travel__item-title');
const travelItemsTextWrappers = document.querySelectorAll('.travel__item-text-wrapper');
const travelItemActive = document.querySelector('.travel__item_active');

let heightWrapper = 0;
travelItemsTextWrappers.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

travelItemsTitles.forEach((travelItemsTitle, index) => {
  travelItemsTitle.addEventListener('click', () => {
    for (let i = 0; i < travelItems.length; i += 1) {
      if (index === i) {
        travelItemsTextWrappers[i].style.height =
        travelItems[i].classList.contains('travel__item_active') ? '' : `${heightWrapper}px`;
        travelItems[i].classList.toggle('travel__item_active');
      } else {
        travelItems[i].classList.remove('travel__item_active');
        travelItemsTextWrappers[i].style.height = '';
      }
    }
  });
});
export default {
  travelItems,
  travelItemsTitles,
  travelItemsTextWrappers,
  travelItemActive,
  heightWrapper,
};