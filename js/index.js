import getElements from './modules/getElements.js';
import accordeon from './modules/accordeon.js';
const {
  deadLine,
} = getElements;
import timer from './modules/timer.js';
import burgerMenu from './modules/burgerMenu.js';
import fly from './modules/fly.js';
import loadData from './modules/loadData.js';
import booking from './modules/booking.js';
// import sendData from './modules/sendData.js';
import request from './modules/request.js';
const {
  httpRequest
} = request;

timer(deadLine);
