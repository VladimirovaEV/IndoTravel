const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
const heroSection = document.querySelector('.hero');
const headerItems = document.querySelectorAll('.header__item');
const fly = document.createElement('div');
fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
right: 0;
top: 0;
pointer-events: none;
background: url('../../img/plane.svg') center/contain no-repeat;
display: none;
`;
document.body.append(fly);
const duration = 3000;
const distance = 1000;
let requestId = NaN;
const startAnimation = (duration, callback) => {
    let startAnimation = NaN;
    requestId = requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;
        const progress = (timestamp - startAnimation) / duration;
        callback(progress);
        if (progress < 1) {
            requestId = requestAnimationFrame(step);
        }
    });
};
const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

let startTime = NaN;
const durationOpacity = 1500;
const showMenu = (timestamp) => {
  console.log(timestamp);
    startTime ||= timestamp;
    let progress = (timestamp - startTime) / durationOpacity;
    headerMenu.style.opacity = 0 + progress;
    console.log(progress);
      requestId = requestAnimationFrame(showMenu);
    if (progress > 1) {
      cancelAnimationFrame(requestId);
    }
};

headerMenuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  fly.style.display = 'block';
  startAnimation(duration, (progress) => {
        const right = easeInOut(progress) * distance;
        fly.style.transform = `translateX(-${right}px)`;
    });
  showMenu();
  headerMenu.classList.toggle('header__menu_active');
});
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList !== '.header__menu') {
    headerMenu.classList.remove('header__menu_active');
  }
  headerItems.forEach(headerItem => {
    if (headerItem === target) {
      headerMenu.classList.remove('header__menu_active');
    }
  });
});

export default {
  headerMenuButton,
  headerMenu,
  heroSection,
};
