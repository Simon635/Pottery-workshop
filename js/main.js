
const swiper = new Swiper('.subscription-swiper', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.subscription-button-next',
		prevEl: '.subscription-button-prev',
	},
});
