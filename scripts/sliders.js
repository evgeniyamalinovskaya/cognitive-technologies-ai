export const swiperSectionAbout = new Swiper('.about__cards-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	scrollbar: {
		draggable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	mousewheel: true,
	slidesPerView: 1.03,
	spaceBetween: 10,
	initialSlide: 0,

	breakpoints: {
		400: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		900: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
	},
});
