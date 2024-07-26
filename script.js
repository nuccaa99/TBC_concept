const body = document.body;
const dragArea = document.querySelector('.offers_slider');
const slider = document.querySelector('.offers_wrapper');

const swiperArrowLeft = document.querySelector('.swiper_arrow.left');
const swiperArrowRight = document.querySelector('.swiper_arrow.right');

//constants
const MAX_DISTANCE = 0;
const step = 300;
let startX,
  cumulativeDistance = 0,
  dragging = false;

let dragAreaWidth = dragArea.clientWidth;
let sliderWidth = slider.scrollWidth;

let MIN_DISTANCE = dragAreaWidth - sliderWidth;

if (window.innerWidth < 1440 && window.innerWidth > 485) {
  MIN_DISTANCE = dragAreaWidth - sliderWidth - 50;
} else if (window.innerWidth <= 485) {
  MIN_DISTANCE = dragAreaWidth - sliderWidth - 15;
}

const updateSliderPosition = () => {
  slider.style.transform = `translate3d(${cumulativeDistance}px, 0px, 0px)`;
};

const startDrag = (x) => {
  startX = x;
  dragging = true;
  body.classList.add('noselect');
};

const moveDrag = (x) => {
  if (dragging) {
    dragArea.style.cursor = 'grabbing';
    const distanceX = x - startX;
    cumulativeDistance += distanceX;

    cumulativeDistance = Math.max(
      Math.min(cumulativeDistance, MAX_DISTANCE),
      MIN_DISTANCE
    );

    updateSliderPosition();

    startX = x;
  }
};

const endDrag = (x) => {
  if (dragging) {
    dragArea.style.cursor = 'grab';
    dragging = false;

    body.classList.remove('noselect');

    const distanceX = x - startX;
    cumulativeDistance += distanceX;

    cumulativeDistance = Math.max(
      Math.min(cumulativeDistance, MAX_DISTANCE),
      MIN_DISTANCE
    );

    updateSliderPosition();
  }
};

dragArea.addEventListener('mousedown', (e) => {
  startDrag(e.clientX);
});

document.addEventListener('mousemove', (e) => {
  if (dragging) {
    moveDrag(e.clientX);
  }
});

document.addEventListener('mouseup', (e) => {
  endDrag(e.clientX);
});

dragArea.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  startDrag(touch.clientX);
});

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  if (dragging) {
    moveDrag(touch.clientX);
  }
});

document.addEventListener('touchend', (e) => {
  const touch = e.changedTouches[0];
  endDrag(touch.clientX);
});

window.addEventListener('resize', () => {
  cumulativeDistance = 0;
  dragAreaWidth = dragArea.clientWidth;
  sliderWidth = slider.scrollWidth;
  MIN_DISTANCE = dragAreaWidth - sliderWidth;

  if (window.innerWidth < 1440 && window.innerWidth > 485) {
    MIN_DISTANCE = dragAreaWidth - sliderWidth - 50;
  } else if (window.innerWidth <= 485) {
    MIN_DISTANCE = dragAreaWidth - sliderWidth - 15;
  }

  slider.style.transform = `translate3d(0px, 0px, 0px)`;
  swiperArrowRight.style.filter = `invert(12%) sepia(88%) saturate(3694%) hue-rotate(231deg)
    brightness(107%) contrast(98%)`;
  swiperArrowLeft.style.filter = `invert(99%) sepia(7%) saturate(401%) hue-rotate(169deg) brightness(92%) contrast(94%)`;
});

swiperArrowLeft.addEventListener('click', () => {
  swiperArrowRight.style.filter = `invert(12%) sepia(88%) saturate(3694%) hue-rotate(231deg)
    brightness(107%) contrast(98%)`;
  cumulativeDistance = Math.min(cumulativeDistance + step, MAX_DISTANCE);
  if (cumulativeDistance === MAX_DISTANCE) {
    swiperArrowLeft.style.filter = `invert(99%) sepia(7%) saturate(401%) hue-rotate(169deg) brightness(92%) contrast(94%)`;
  }
  updateSliderPosition();
});

swiperArrowRight.addEventListener('click', () => {
  swiperArrowLeft.style.filter = `invert(12%) sepia(88%) saturate(3694%) hue-rotate(231deg)
    brightness(107%) contrast(98%)`;
  cumulativeDistance = Math.max(cumulativeDistance - step, MIN_DISTANCE);
  if (cumulativeDistance === MIN_DISTANCE) {
    swiperArrowRight.style.filter = `invert(99%) sepia(7%) saturate(401%) hue-rotate(169deg) brightness(92%) contrast(94%)`;
  }
  updateSliderPosition();
});
