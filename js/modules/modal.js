const overlaySuccess = document.createElement('div');
overlaySuccess.classList.add('overlay');
const overlayFail = document.createElement('div');
overlayFail.classList.add('overlay');
overlaySuccess.insertAdjacentHTML('beforeend',
`<div class="overlay__modal modal modal__success">
      <h2 class="modal__title">Ваша заявка успешно отправлена</h2>
      <p class="modal__text">Наши менеджеры свяжутся с вами в течении 3-х рабочих дней</p>
      <button class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="50" fill="#78EC6E" />
          <path
            d="M42.2618 60.8332L31.4285 49.9999L27.8174 53.611L42.2618 68.0554L73.2142 37.1031L69.6031 33.4919L42.2618 60.8332Z"
            fill="white" />
        </svg>
      </button>
    </div>`);
overlayFail.insertAdjacentHTML('beforeend',
`<div class="overlay__modal modal modal__fail">
      <h2 class="modal__title">Упс... Что-то пошло не так</h2>
      <p class="modal__text">Не удалось отправить заявку. Пожалуйста, повторите отправку еще раз</p>
      <button class="modal__btn">Забронировать</button>
    </div>`);
const body = document.querySelector('body');
body.append(overlaySuccess);
body.append(overlayFail);
const modalClose = document.querySelector('.modal__close');
const modalBtn = document.querySelector('.modal__btn');
modalClose.addEventListener('click', () => {
    overlaySuccess.classList.remove('active');
})
modalBtn.addEventListener('click', () => {
    overlayFail.classList.remove('active');
})
export default {
    overlaySuccess,
    overlayFail,
};