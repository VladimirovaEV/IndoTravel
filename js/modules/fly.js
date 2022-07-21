const docEl = document.documentElement;
const fly = document.createElement('div');
fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
right: 0;
bottom: 0;
pointer-events: none;
background: url('../../img/airplane.svg') center/contain no-repeat;
transition: all 0.3s linear;
`;

document.body.append(fly);

const calcPositionFly = () => {
  const maxTop = docEl.scrollHeight - fly.clientHeight;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;
  const top = maxTop * (percentScroll / 100) - window.pageYOffset;
  window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
      fly.style.transform = `translateY(-${top}px) rotate(180deg)`;
    }
    else if (e.deltaY > 0) {
      fly.style.transform = `translateY(-${top}px)`;
    }
  });
};

window.addEventListener('scroll', () => {
  requestAnimationFrame(calcPositionFly);
});

window.addEventListener('resize', () => {
  if (docEl.clientWidth < 758) {
    fly.style.display = 'none';
  } else {
    fly.style.display = 'block';
  }
});

calcPositionFly();
export default {
    docEl,
    fly,
    calcPositionFly,
};
