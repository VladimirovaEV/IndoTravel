import addZero from './utils.js';
import getElements from './getElements.js';
const {
  timerCountDays,
  timerCountHour,
  timerCountMin,
  timerUnitsDays,
  timerUnitsHour,
  timerUnitsMin,
  heroText,
  heroTimer,
} = getElements;

const timer = deadLine => {
  const getTimeRemaining = () => {
    const dateStop = new Date(deadLine).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    return {timeRemaining, seconds, minutes, hours, days};
  };
  const start = () => {
    const changeTimer = getTimeRemaining();
    timerCountDays.textContent = changeTimer.days;
    if ((timerCountDays.textContent.slice(-1) === '0') || (Number(timerCountDays.textContent) >= 11 && Number(timerCountDays.textContent) <= 19)) {
      timerUnitsDays.textContent = 'дней';
    }
    if ((timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '5') || (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '6')) {
      timerUnitsDays.textContent = 'дней';
    }
    if ((timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '7') || (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '9')) {
      timerUnitsDays.textContent = 'дней';
    }
    if (timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '9') {
      timerUnitsDays.textContent = 'дней';
    }
    if (timerCountDays.textContent === '1' || timerCountDays.textContent.length > 1 && timerCountDays.textContent.slice(-1) === '1') {
      timerUnitsDays.textContent = 'день';
    }
    timerCountHour.textContent = addZero(changeTimer.hours);
    if (timerCountHour.textContent.slice(-1) === '1') {
      timerUnitsHour.textContent = 'час';
    }
    if (Number(timerCountHour.textContent) > 20 && ((timerCountHour.textContent.slice(-1) === '2') || (timerCountHour.textContent.slice(-1) === '3') || (timerCountHour.textContent.slice(-1) === '4'))) {
      timerUnitsHour.textContent = 'часа';
    }
    timerCountMin.textContent = addZero(changeTimer.minutes);
    if ((timerCountMin.textContent.slice(-1) === '2') || (timerCountMin.textContent.slice(-1) === '3') || (timerCountMin.textContent.slice(-1) === '4')) {
      timerUnitsMin.textContent = 'минуты';
    }
    if (timerCountMin.textContent === '01' || (Number(timerCountMin.textContent) > 20 && timerCountMin.textContent.slice(-1) === '1')) {
      timerUnitsMin.textContent = 'минута';
    }
    const intervalId = setTimeout(start, 1000);
    if (changeTimer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerCountDays.textContent = '00';
      timerCountHour.textContent = '00';
      timerCountMin.textContent = '00';
      heroText.style.display = 'none';
      heroTimer.style.display = 'none';
    }
};
  start();
};

export default timer;
