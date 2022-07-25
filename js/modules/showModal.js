import loadStyle from './loadStyle.js';

const showModal = async(err, data) => {
    await loadStyle('css/modal.css');
    const overlay = document.createElement('div');
    const modalWindow = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const date = document.createElement('p');
    const price = document.createElement('p');
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('modal__button');
    const confirm = document.createElement('button');
    const change = document.createElement('button');

    overlay.classList.add('overlay', 'overlay_confirm');
    modalWindow.classList.add('modal');
    title.classList.add('modal__title');
    title.textContent = 'Подтверждение заявки';
    description.classList.add('modal__text');
    description.textContent = 'Бронирование путешествия в Индию на 6 человек';
    date.classList.add('modal__text');
    date.textContent = 'В даты: 24 ноября - 7 декабря';
    price.classList.add('modal__text');
    price.textContent = 'Стоимость тура 459 588₽';
    confirm.classList.add('modal__btn', 'modal__btn_confirm');
    confirm.textContent = 'Подтверждаю';
    change.classList.add('modal__btn', 'modal__btn_edit');
    change.textContent = 'Изменить данные';

    overlay.append(modalWindow);
    btnContainer.append(confirm, change);
    modalWindow.append(title, description, date, price, btnContainer);
    document.body.append(overlay);

    return new Promise(resolve => {
        change.addEventListener('click', () => {
        overlay.remove();
        resolve(false);
        });
        confirm.addEventListener('click', () => {
        overlay.remove();
        resolve(true);
        });
    });
};

export default showModal;
