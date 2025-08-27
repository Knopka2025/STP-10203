document.addEventListener("DOMContentLoaded", () => {
	const cookieBanner = document.querySelector(".js-cookies");
	const acceptBtn = cookieBanner.querySelector(".js-primary-button");
	const declineBtn = cookieBanner.querySelector(".js-secondary-button");

	const cookiesAccepted = localStorage.getItem("cookiesAccepted");

	if (cookiesAccepted !== null) {
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