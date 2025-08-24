document.addEventListener("DOMContentLoaded", () => {
	const cookieBanner = document.querySelector(".cookies");
	const acceptBtn = cookieBanner.querySelector(".primary-button");
	const declineBtn = cookieBanner.querySelector(".secondary-button");

	const cookiesAccepted = JSON.parse(localStorage.getItem("cookiesAccepted"));

	if (!cookiesAccepted) {
		cookieBanner.classList.remove("d-none");
	} else {
		cookieBanner.classList.add("d-none");
	}

	acceptBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", true);
		cookieBanner.classList.add("d-none");
	});

	declineBtn.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", false);
		cookieBanner.classList.add("d-none");
	});
});