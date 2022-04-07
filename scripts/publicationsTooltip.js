const buttonsShare = document.querySelectorAll('.publications__card-btn')
const cards = document.querySelector('.publications__cards')
const tooltip = document.querySelector('.publications__card-tooltip')

buttonsShare.forEach((el) => {
	el.addEventListener('click', (e) => {
		tooltip.style.left = `${e.clientX - 90}px`
		tooltip.style.top = `${e.clientY - 98}px`
		tooltip.classList.toggle('publications__card-tooltip_active')
	});
});

cards.addEventListener('mousemove', (e) => {
	if (e.target.classList.contains('publications__cards'))
		tooltip.classList.remove('publications__card-tooltip_active')
});

tooltip.addEventListener('click', () => tooltip.classList.remove('publications__card-tooltip_active'))
