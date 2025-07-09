'use strict';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function initSlider() {
  const slider = new Swiper(".places__slider", {
    navigation: {
      nextEl: ".slider-places__next",
      prevEl: ".slider-places__prev" 
    },
    autoHeight: true,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    initialSlide: 1,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    spaceBetween: 16,
    slidesPerView: 1.8,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: { 
      1024: { 
        slidesPerView: 3,
        spaceBetween: 24, 
      }
    },
  });
}
