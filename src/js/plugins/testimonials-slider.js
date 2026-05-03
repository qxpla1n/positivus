import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'

export function initTestimonialsSlider() {
	new Swiper('.testimonials__slider', {
		modules: [Navigation, Pagination],

		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 30,
		centeredSlides: true,

		navigation: {
			nextEl: '.testimonials__arrow-button--next',
			prevEl: '.testimonials__arrow-button--prev',
		},

		pagination: {
			el: '.testimonials__pagination',
			clickable: true,

			bulletClass: 'pagination__button',
			bulletActiveClass: 'is-current',

			renderBullet: (index, className) => {
				return `
          <button class="${className}" type="button">
           <span class="visually-hidden">Slide ${index + 1}</span>
            <svg class="pagination__icon icon" aria-hidden="true">
              <use href="/positivus/__spritemap#icon-star-pagination"></use>
            </svg>
          </button> 
        `
			},
		},

		breakpoints: {
			768: {
				spaceBetween: 50,
			},
		},
	})
}
