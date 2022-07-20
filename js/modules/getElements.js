const timerElement = document.querySelector('.timer');
timerElement.dataset.deadline = '2022/08/09 07:00';
const timerItemDays = document.querySelector('.timer__item_days');
const timerItemHours = document.querySelector('.timer__item_hours');
const timerItemMinutes = document.querySelector('.timer__item_minutes');
const timerCountDays = document.querySelector('.timer__count_days');
const timerCountHour = document.querySelector('.timer__count_hours'); 
const timerCountMin = document.querySelector('.timer__count_minutes');
const timerUnitsDays = document.querySelector('.timer__units_days');
const timerUnitsHour = document.querySelector('.timer__units_hours'); 
const timerUnitsMin = document.querySelector('.timer__units_minutes');
const deadLine = new Date(timerElement.dataset.deadline);
const heroText = document.querySelector('.hero__text');
const heroTimer = document.querySelector('.hero__timer');

const timerItemSeconds = document.createElement('p');
timerItemSeconds.classList.add('timer__item', 'timer__item_seconds');
const timerCountSeconds = document.createElement('span');
timerCountSeconds.classList.add('timer__count', 'timer__count_seconds');
const timerUnitsSeconds = document.createElement('span');
timerUnitsSeconds.classList.add('timer__units', 'timer__units_seconds');
timerItemSeconds.append(timerCountSeconds, timerUnitsSeconds);
timerElement.append(timerItemSeconds);

timerItemSeconds.style.display = 'none';

export default {
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
  timerItemSeconds,
  timerCountSeconds,
  timerUnitsSeconds,
};

