import utils from './utils.js';
const {
  addZero,
  declOfNum
} = utils;
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
  timerItemSeconds,
  timerCountSeconds,
  timerUnitsSeconds,
  timerItemDays,
} = getElements;

const timer = deadLine => {
  const getTimeRemaining = () => {
    const diff = new Date(deadLine).getTimezoneOffset();
    const dateStop = new Date(deadLine).getTime() + (diff * 60000) + 3 * 3600000;
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
    timerUnitsDays.textContent = declOfNum(changeTimer.days, ['день', 'дня', 'дней']);
    timerCountHour.textContent = addZero(changeTimer.hours);
    timerUnitsHour.textContent = declOfNum(changeTimer.hours, ['час', 'часа', 'часов']);
    timerCountMin.textContent = addZero(changeTimer.minutes);
    timerUnitsMin.textContent = declOfNum(changeTimer.minutes, ['минута', 'минуты', 'минут']);
    timerCountSeconds.textContent = addZero(changeTimer.seconds);
    timerUnitsSeconds.textContent = declOfNum(changeTimer.seconds, ['секунда', 'секунды', 'секунд']);
    const intervalId = setTimeout(start, 1000);
    if (changeTimer.timeRemaining < 86400000) {
      timerItemDays.style.display = 'none';
      timerItemSeconds.style.display = 'flex';
    }
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
