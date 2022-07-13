const timerElement = document.querySelector('.timer');
timerElement.dataset.timerDeadline = '2022/08/08 03:45';
const timerItemDays = document.querySelector('.timer__item_days');
const timerItemHours = document.querySelector('.timer__item_hours');
const timerItemMinutes = document.querySelector('.timer__item_minutes');
const timerCountDays = document.querySelector('.timer__count_days');
const timerCountHour = document.querySelector('.timer__count_hours'); 
const timerCountMin = document.querySelector('.timer__count_minutes');
const timerUnitsDays = document.querySelector('.timer__units_days');
const timerUnitsHour = document.querySelector('.timer__units_hours'); 
const timerUnitsMin = document.querySelector('.timer__units_minutes');
const deadLine = timerElement.dataset.timerDeadline;
const heroText = document.querySelector('.hero__text');
const heroTimer = document.querySelector('.hero__timer');

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
};

