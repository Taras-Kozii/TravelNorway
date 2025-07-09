'use strict';

// import { initSlider } from './sliders.js';
// import { initNavigation } from './menu.js';
// import { initPopups } from './popups.js';
// import { initForms } from './forms.js';
// import { initImageTranslate } from './hover-efects.js';
import { watcherAnim } from './effects/animation.js';
import { countAnimate } from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
  // initSlider();
  // initNavigation();
  // initPopups();
  // initForms();
  // initImageTranslate();
  watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
