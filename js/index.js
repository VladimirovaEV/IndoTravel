import getElements from './modules/getElements.js';
import accordeon from './modules/accordeon.js';
const {
  travelItems,
    travelItemsTitles,
    travelItemsTextWrappers,
    travelItemActive,
    heightWrapper,
} = accordeon;
const {
  deadLine,
} = getElements;
import timer from './modules/timer.js';
import burgerMenu from './modules/burgerMenu.js';
const {
  headerMenuButton,
    headerMenu,
} = burgerMenu;

timer(deadLine);
