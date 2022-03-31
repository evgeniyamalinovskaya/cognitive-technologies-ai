const swiperAbout = new Swiper('.about__cards-container', {
	pagination: {
		el: '.about__cards-pagination',
		clickable: true,
	},

	scrollbar: {
		draggable: true,
	},

	navigation: {
		nextEl: '.about__cards-button_next',
		prevEl: '.about__cards-button_prev',
	},

	mousewheel: true,
	slidesPerView: 1.025,
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

const swiperPublications = new Swiper('.publications__cards-container', {
	pagination: {
		el: '.publications__cards-pagination',
		clickable: true,
	},

	scrollbar: {
		draggable: true,
	},

	navigation: {
		nextEl: '.publications__cards-button_next',
		prevEl: '.publications__cards-button_prev',
	},

	mousewheel: true,
	slidesPerView: 1.027,
	spaceBetween: 10,
	initialSlide: 0,

	breakpoints: {
		500: {
			slidesPerView: 1.5,
			spaceBetween: 8,			
		},

		600: {
			slidesPerView: 2,
			spaceBetween: 30,
			grid: {
				rows: 1,
			  },
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			grid: {
				rows: 2,
			  },
			
		},

		1132: {
			slidesPerView: 3,
			spaceBetween: 32,
			grid: {
				rows: 2,
			  },
			
		},
	},
});
