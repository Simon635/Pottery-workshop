document.addEventListener('click', function (e) {
	const btnUp = e.target.closest('.cards-favourite-button-up');
	const btnDown = e.target.closest('.cards-favourite-button-down');

	if (!btnUp && !btnDown) return;

	e.preventDefault();

	const container = (btnUp || btnDown).closest('.cards-favourite-num-container');
	if (!container) return;

	const input = container.querySelector('.cards-favourite-input');
	if (!input) return;

	let value = parseInt(input.value, 10);
	if (Number.isNaN(value)) {
		value = parseInt(input.placeholder, 10) || 1;
	}

	if (btnUp) {
		value++;
	} else {
		value = Math.max(1, value - 1);
	}

	input.value = value;
});
