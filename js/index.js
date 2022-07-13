import addZero from "./modules/utils.js";
import getElements from './modules/getElements.js';
const {
  timerElement,
  timerItemDays,
  timerItemHours,
  timerItemMinutes,
  timerCountDays,
  timerCountHour,
  timerCountMin,
  timerUnitsDays,
  timerUnitsHour,
  timerUnitsMin,
  deadLine,
  heroText,
  heroTimer,
} = getElements;
import timer from './modules/timer.js';
// const timerElement = document.querySelector('.timer');
// timerElement.dataset.timerDeadline = '2022/08/08 3:45';
// const timerItemDays = document.querySelector('.timer__item_days');
// const timerItemHours = document.querySelector('.timer__item_hours');
// const timerItemMinutes = document.querySelector('.timer__item_minutes');
// const timerCountDays = document.querySelector('.timer__count_days');
// const timerCountHour = document.querySelector('.timer__count_hours'); 
// const timerCountMin = document.querySelector('.timer__count_minutes');
// const timerUnitsDays = document.querySelector('.timer__units_days');
// const timerUnitsHour = document.querySelector('.timer__units_hours'); 
// const timerUnitsMin = document.querySelector('.timer__units_minutes');
// const deadLine = timerElement.dataset.timerDeadline;
// const heroText = document.querySelector('.hero__text');
// const heroTimer = document.querySelector('.hero__timer');
// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// const timer = deadLine => {
//     const getTimeRemaining = () => {
//     const dateStop = new Date(deadLine).getTime();
//     const dateNow = Date.now();
//     const timeRemaining = dateStop - dateNow;
//     const seconds = Math.floor(timeRemaining / 1000 % 60);
//     const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
//     const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
//     const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
//     return {timeRemaining, seconds, minutes, hours, days}
//     }
// const start = () => {
//     const changeTimer = getTimeRemaining();

//     timerCountDays.textContent = changeTimer.days;
//     if ((timerCountDays.textContent.slice(-1) === '0') || (Number(timerCountDays.textContent) >= 11 && Number(timerCountDays.textContent) <= 19)) {
//         timerUnitsDays.textContent = 'дней'
//     }
//     if ((timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '5') || (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '6')) {
//         timerUnitsDays.textContent = 'дней'
//     }
//      if ((timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '7') || (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '9')) {
//         timerUnitsDays.textContent = 'дней'
//     }
//      if (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '9') {
//         timerUnitsDays.textContent = 'дней'
//     }
//     if (timerCountDays.textContent === '1' || timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '1') {
//         timerUnitsDays.textContent = 'день'
//     }
//     timerCountHour.textContent = addZero(changeTimer.hours);
//     if (timerCountHour.textContent.slice(-1) === '1') {
//         timerUnitsHour.textContent = 'час'
//     }
//     if (Number(timerCountHour.textContent) > 20 && ((timerCountHour.textContent.slice(-1) === '2') || (timerCountHour.textContent.slice(-1) === '3') || (timerCountHour.textContent.slice(-1) === '4'))) {
//         timerUnitsHour.textContent = 'часа'
//     }
//     timerCountMin.textContent = addZero(changeTimer.minutes);
//      if ((timerCountMin.textContent.slice(-1) === '2') || (timerCountMin.textContent.slice(-1) === '3') || (timerCountMin.textContent.slice(-1) === '4')) {
//         timerUnitsMin.textContent = 'минуты'
//     }
//     if (timerCountMin.textContent === '01' || (Number(timerCountMin.textContent) > 20 && timerCountMin.textContent.slice(-1) === '1')) {
//         timerUnitsMin.textContent = 'минута'
//     }
//     const intervalId = setTimeout(start, 60000);
//     if (changeTimer.timeRemaining <= 0) {
//         clearTimeout(intervalId);
//         timerCountDays.textContent = '00';
//         timerCountHour.textContent = '00';
//         timerCountMin.textContent = '00';
//         heroText.style.display = 'none';
//         heroTimer.style.display = 'none';
//     }
// }
// start();
// }
timer(deadLine);
