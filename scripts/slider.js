'use strict';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function initSlider() {
  const slider = new Swiper(".places-slider__body", {
    navigation: {
      nextEl: ".places-slider__next",
      prevEl: ".places-slider__prev" 
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
    slidesPerView: 1.5,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: { 
      1024: { 
        slidesPerView: 3,
        // spaceBetween: 24, 
      }
    },
  });
}
