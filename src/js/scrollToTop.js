document.addEventListener("DOMContentLoaded", () => {

	const backoTop = document.querySelector('#back-to-top');

	window.addEventListener("scroll", () => {

		if (window.scrollY > 600) {
			backoTop.classList.remove("hidden");
		} else {
			backoTop.classList.add("hidden");
		}
	});

	backoTop.addEventListener("click", (e) => {
		e.currentTarget.blur();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

})