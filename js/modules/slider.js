const albumSlider = document.querySelector('.album__slider');
albumSlider.classList.add('swiper');
const albumList = document.querySelector('.album__list');
albumList.classList.add('swiper-wrapper');
const albumItems = document.querySelectorAll('.album__item');
albumItems.forEach(item => {
    item.classList.add('swiper-slide');
});
const swiper = new Swiper('.swiper', {
  loop: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },

  navigation: {
    nextEl: '.album__right',
    prevEl: '.album__left',
  },

});
export default {
    albumSlider,
    albumList,
    swiper,
};
