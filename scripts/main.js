'use strict';

import { initSlider } from './slider.js';
// import { initNavigation } from './menu.js';
// import { initForms } from './forms.js';
import { watcherAnim } from './effects/animation.js';
import { countAnimate } from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  // initNavigation();
  // initForms();
  watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
