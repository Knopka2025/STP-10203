document.addEventListener("DOMContentLoaded", () => {

	const backoTop = document.querySelector('.js-back-to-top');

	window.addEventListener("scroll", () => {

		if (window.scrollY > 600) {
			backoTop.classList.remove("js-hidden");
		} else {
			backoTop.classList.add("js-hidden");
		}
	});

	backoTop.addEventListener("click", (e) => {
		e.currentTarget.blur();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

})