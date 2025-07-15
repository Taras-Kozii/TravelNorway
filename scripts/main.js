'use strict';

import { initSlider } from './slider.js';
// import { initNavigation } from './menu.js';
import { watcherAnim } from './effects/animation.js';
import { countAnimate } from './counter.js';
import { initForms } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  // initNavigation();
  initForms();
  watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
