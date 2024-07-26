const body = document.body;
const slidersConfig = [
  {
    dragArea: document.querySelector('.offers_slider'),
    slider: document.querySelector('.offers_wrapper'),
    swiperArrowLeft: document.querySelector('.swiper_arrow.left'),
    swiperArrowRight: document.querySelector('.swiper_arrow.right'),
  },
  {
    dragArea: document.querySelector('.offers_slider.product'),
    slider: document.querySelector('.offers_wrapper.product'),
    swiperArrowLeft: document.querySelector('.swiper_arrow.left.product'),
    swiperArrowRight: document.querySelector('.swiper_arrow.right.product'),
  },
];

const ACTIVE_ARROW_FILTER =
  'invert(12%) sepia(88%) saturate(3694%) hue-rotate(231deg) brightness(107%) contrast(98%)';
const INACTIVE_ARROW_FILTER =
  'invert(99%) sepia(7%) saturate(401%) hue-rotate(169deg) brightness(92%) contrast(94%)';

const MAX_DISTANCE = 0;
const step = 300;

const setArrowFilter = (arrow, filterStyle) => {
  arrow.style.filter = filterStyle;
};

const updateSliderPosition = (slider, cumulativeDistance) => {
  slider.style.transform = `translate3d(${cumulativeDistance}px, 0px, 0px)`;
};

const updateArrowColors = (config) => {
  if (config.cumulativeDistance === MAX_DISTANCE) {
    setArrowFilter(config.swiperArrowLeft, INACTIVE_ARROW_FILTER);
  } else {
    setArrowFilter(config.swiperArrowLeft, ACTIVE_ARROW_FILTER);
  }

  if (config.cumulativeDistance === config.MIN_DISTANCE) {
    setArrowFilter(config.swiperArrowRight, INACTIVE_ARROW_FILTER);
  } else {
    setArrowFilter(config.swiperArrowRight, ACTIVE_ARROW_FILTER);
  }
};

const startDrag = (config, x) => {
  config.startX = x;
  config.dragging = true;
  body.classList.add('noselect');
};

const moveDrag = (config, x) => {
  if (config.dragging) {
    config.dragArea.style.cursor = 'grabbing';
    const distanceX = x - config.startX;
    config.cumulativeDistance += distanceX;
    config.cumulativeDistance = Math.max(
      Math.min(config.cumulativeDistance, MAX_DISTANCE),
      config.MIN_DISTANCE
    );
    updateSliderPosition(config.slider, config.cumulativeDistance);
    config.startX = x;
  }
};

const endDrag = (config, x) => {
  if (config.dragging) {
    config.dragArea.style.cursor = 'grab';
    config.dragging = false;
    body.classList.remove('noselect');
    const distanceX = x - config.startX;
    config.cumulativeDistance += distanceX;
    config.cumulativeDistance = Math.max(
      Math.min(config.cumulativeDistance, MAX_DISTANCE),
      config.MIN_DISTANCE
    );
    updateSliderPosition(config.slider, config.cumulativeDistance);
    updateArrowColors(config);
  }
};

const handleArrowClick = (config, direction) => {
  const arrowToUpdate =
    direction === 'left' ? config.swiperArrowRight : config.swiperArrowLeft;
  setArrowFilter(arrowToUpdate, ACTIVE_ARROW_FILTER);
  config.cumulativeDistance =
    direction === 'left'
      ? Math.min(config.cumulativeDistance + step, MAX_DISTANCE)
      : Math.max(config.cumulativeDistance - step, config.MIN_DISTANCE);
  updateArrowColors(config);
  updateSliderPosition(config.slider, config.cumulativeDistance);
};

const initializeSlider = (config) => {
  let dragAreaWidth = config.dragArea.clientWidth;
  let sliderWidth = config.slider.scrollWidth;
  config.MIN_DISTANCE = dragAreaWidth - sliderWidth;

  if (window.innerWidth < 1440 && window.innerWidth > 485) {
    config.MIN_DISTANCE = dragAreaWidth - sliderWidth - 50;
  } else if (window.innerWidth <= 485) {
    config.MIN_DISTANCE = dragAreaWidth - sliderWidth - 15;
  }

  config.cumulativeDistance = 0;
  config.dragging = false;

  config.dragArea.addEventListener('mousedown', (e) =>
    startDrag(config, e.clientX)
  );
  document.addEventListener('mousemove', (e) => moveDrag(config, e.clientX));
  document.addEventListener('mouseup', (e) => endDrag(config, e.clientX));
  config.dragArea.addEventListener('touchstart', (e) =>
    startDrag(config, e.touches[0].clientX)
  );
  document.addEventListener('touchmove', (e) =>
    moveDrag(config, e.touches[0].clientX)
  );
  document.addEventListener('touchend', (e) =>
    endDrag(config, e.changedTouches[0].clientX)
  );

  config.swiperArrowLeft.addEventListener('click', () =>
    handleArrowClick(config, 'left')
  );
  config.swiperArrowRight.addEventListener('click', () =>
    handleArrowClick(config, 'right')
  );
};

const resizeListener = () => {
  slidersConfig.forEach((config) => {
    let dragAreaWidth = config.dragArea.clientWidth;
    let sliderWidth = config.slider.scrollWidth;
    config.MIN_DISTANCE = dragAreaWidth - sliderWidth;

    if (window.innerWidth < 1440 && window.innerWidth > 485) {
      config.MIN_DISTANCE = dragAreaWidth - sliderWidth - 50;
    } else if (window.innerWidth <= 485) {
      config.MIN_DISTANCE = dragAreaWidth - sliderWidth - 15;
    }

    config.cumulativeDistance = 0;
    updateSliderPosition(config.slider, config.cumulativeDistance);
    updateArrowColors(config);
  });
};

window.addEventListener('resize', resizeListener);
slidersConfig.forEach(initializeSlider);
