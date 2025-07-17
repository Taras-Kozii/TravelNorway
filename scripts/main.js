'use strict';

import { initSlider } from './slider.js';
import { initNavigation } from './menu.js';
import { watcherAnim, watcherToggle } from './effects/animation.js';
import { countAnimate } from './counter.js';
import { initForms } from './form.js';
import { inintHeader } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initNavigation();
  initForms();
  watcherAnim('[data-counter]', 0.2, countAnimate, false);
  inintHeader();
  watcherToggle('.show-top', 0.2);
  watcherToggle('.show-left-right', 0.2);
});
