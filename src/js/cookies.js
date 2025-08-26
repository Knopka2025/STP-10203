document.addEventListener("DOMContentLoaded", () => {
	const cookieBanner = document.querySelector(".cookies");
	const acceptBtn = cookieBanner.querySelector(".primary-button");
	const declineBtn = cookieBanner.querySelector(".secondary-button");

	const cookiesAccepted = JSON.parse(localStorage.getItem("cookiesAccepted"));

	if (cookiesAccepted) {
		cookieBanner.classList.remove("is-open")
	} else {
		setTimeout(() => {
			cookieBanner.classList.add("is-open");
		}, 2000);
	}

	acceptBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", true);
		cookieBanner.classList.remove("is-open");
	});

	declineBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", false);
		cookieBanner.classList.remove("is-open");
	});
});