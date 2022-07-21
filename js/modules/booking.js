import loadData from './loadData.js';
const reservDate = document.querySelector('#reservation__date');
const reservPeople = document.querySelector('#reservation__people');
const tourDate = document.querySelector('#tour__date');
const tourPeople = document.querySelector('#tour__people');
const reservationInfo = document.querySelector('.reservation__data');
const reservationPrice = document.querySelector('.reservation__price');

const renderTours = async () => {
  const data = await loadData();
  let tourPrice;
  let dateTour;
  let peopleQuantity;

  const oldDateOptions = reservDate.querySelectorAll('.reservation__option');
  const removeOptions = (elem) => {
    elem.forEach(item => {
        item.remove();
    });
  };

removeOptions(oldDateOptions);
const oldTourDates = tourDate.querySelectorAll('.tour__option');
oldTourDates.forEach((item) => {
    if (item.value !== '') {
        item.remove();
    }
});

const newDateOptions = (element, data) => {
    data.map((item) => {
        element.insertAdjacentHTML(
            'beforeend',
            `<option value="${item.date}" class="tour__option reservation__option">${item.date}</option>`)
    });
};

newDateOptions(reservDate, data);
newDateOptions(tourDate, data);
tourDate.addEventListener('change', (e) => {
    const options = tourPeople.querySelectorAll('option');
    const target = e.target;
    data.forEach((item) => {
        if (target.value === item.date) {
            const keys = Object.values(item);
            for (let i = keys[1]; i <= keys[2]; i++) {
                tourPeople.insertAdjacentHTML(
                    'beforeend',
            `<option value="${i}" class="tour__option reservation__option">${i}</option>`)
            }
        }
    });
    const oldOpt = [...options];
    oldOpt.slice(1).forEach((el) => {
      el.remove();
    });
});

reservDate.addEventListener('change', (e) => {
    const options = reservPeople.querySelectorAll('option');
    const target = e.target;
    data.forEach((item) => {
        if (target.value === item.date) {
            const keys = Object.values(item);
            for (let i = keys[1]; i <= keys[2]; i++) {
                reservPeople.insertAdjacentHTML(
                    'beforeend',
            `<option value="${i}" class="tour__option reservation__option new__option">${i}</option>`)
            }
        }
    });
    const oldOpt = [...options];
    oldOpt.slice(1).forEach((el) => {
      el.remove();
    });
});
reservDate.addEventListener('change', (e) => {
    dateTour = e.target.value;
   reservPeople.addEventListener('change', (e) => {
      peopleQuantity = e.target.value;
      reservationInfo.textContent = `${dateTour}, ${peopleQuantity} человека`;
      data.forEach((item) => {
        if (dateTour === item.date) {
            tourPrice = item.price * peopleQuantity;
            reservationPrice.textContent = `${tourPrice}₽`;
        }
    });
    });
});

};
renderTours();


export default renderTours;
