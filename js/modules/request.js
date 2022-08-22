import booking from './booking.js';
const {
reservationInfo,
reservationPrice,
reservDate,
reservPeople,
} = booking;
import modal from './modal.js';
const {
    overlaySuccess,
    overlayFail,
} = modal;
import showModal from './showModal.js';

const form = document.querySelector('.reservation__form');
const name = document.querySelector('.reservation__input_name');
const phone = document.querySelector('#reservation__phone');
const formButton = document.querySelector('.reservation__button');
const emailForm = document.querySelector('.footer__form');
const email = document.querySelector('.footer__input');
const footerFormTitle = document.querySelector('.footer__form-title');
const footerFormText = document.querySelector('.footer__text');
const footerInputWrap = document.querySelector('.footer__input-wrap');


const httpRequest = (url, {
    method = 'GET',
    callback,
    body = {},
    headers,
}) => {
    try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (headers) {
        for (const [key, value] of Object.keys(headers)) {
            xhr.setRequestHeader(key, value);
        }
    }
    xhr.addEventListener('load', () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            callback(new Error(xhr.status), xhr.response);
            return;
        }
        const data = JSON.parse(xhr.response);
        if (callback) callback(null, data);
    });

    xhr.addEventListener('error', () => {
        callback(new Error(xhr.status), xhr.response);
    });

    xhr.send(JSON.stringify(body));
    } catch (err) {
        callback(new Error(err));
    }
};
name.addEventListener('input', () => {
    name.value = name.value.replace(/[^А-ЯЁ ]/ig, '');
    
});
phone.addEventListener('input', () => {
    phone.value = phone.value.replace(/[^+0-9]/g, '');
});
const reg = /[а-яё]+( [а-яё]+)+( [а-яё]+)+/i;
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.dates.value === '' || form.people.value === '') {
       alert('Заполнены не все поля');
        return;
    }
    if (!reg.test(name.value)) {
        alert('Поле ФИО заполнено не полностью');
        return;
    }
    const checkResult = await showModal();
    if (checkResult) {
    httpRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {
            dates: form.dates.value,
            people: form.people.value,
            name: name.value,
            phone: phone.value,
        },
        callback(err, data) {
            if (err) {
                console.warn(err, data);
                overlayFail.classList.add('active');
            }
        reservationInfo.textContent = `${name.value},`;
        reservationPrice.textContent = 'ваша заявка отправлена';
        // form.reset();
        reservDate.setAttribute('disabled', '');
        reservPeople.setAttribute('disabled', '');
        formButton.setAttribute('disabled', '');
        overlaySuccess.classList.add('active');
        },
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });
 }
});
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    httpRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: {
        email: email.value,
    },
    callback(err, data) {
        if (err) {
                console.warn(err, data);
                alert('Что-то пошло не так...');
            }
        footerFormTitle.textContent = 'Ваша заявка успешно отправлена';
        footerFormText.textContent = 'Наши менеджеры свяжутся с вами в течении 3-х рабочих дней';
        footerFormText.style.border = '3px solid #9f100a';
        footerFormText.style.padding = '10px';
        footerInputWrap.style.display = 'none';
    }, headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });
});

export default {
    httpRequest,
};
