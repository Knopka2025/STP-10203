document.addEventListener("DOMContentLoaded", () => {
	const cookieBanner = document.querySelector(".cookies");
	const acceptBtn = cookieBanner.querySelector(".js-primary-button");
	const declineBtn = cookieBanner.querySelector(".js-secondary-button");

	const cookiesAccepted = JSON.parse(localStorage.getItem("cookiesAccepted"));

	if (cookiesAccepted) {
		cookieBanner.classList.remove("js-is-open")
	} else {
		setTimeout(() => {
			cookieBanner.classList.add("js-is-open");
		}, 2000);
	}

	acceptBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", true);
		cookieBanner.classList.remove("js-is-open");
	});

	declineBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", false);
		cookieBanner.classList.remove("js-is-open");
	});
});