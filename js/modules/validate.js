const telMask = new Inputmask('+7 (999)-999-99-99');
const phone = document.querySelector('#reservation__phone');

telMask.mask(phone);
const justValidate = new JustValidate('.reservation__form');
justValidate
    .addField('.reservation__input_name', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваше имя',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Не менее 3-х символов',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Слишком длинное имя',
        }
    ])
    .addField('#reservation__phone', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваш телефон',
        },
        {
            validator(value) {
                const phoneNum = phone.inputmask.unmaskedvalue();
                return !!(Number(phoneNum) && phoneNum.length === 10);
            },
            errorMessage: 'Телефон указан некорректно',
        }
    ])

const justValidateForm = new JustValidate('.footer__form');
justValidateForm
    .addField('.footer__input', [
        {
            rule: 'email',
            errorMessage: 'email указан некорректно',
        },
    ]);


export default {
  telMask,
  justValidate,
  justValidateForm,
};
