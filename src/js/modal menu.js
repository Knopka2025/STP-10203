const btn_burger = document.querySelector(".js-nav-burger");
const mobile_menu = document.querySelector(".js-modal-menu");
const body = document.body;

btn_burger.addEventListener('click', (e) => {
	btn_burger.disabled = true;
	openCloseModalMenu();
});

mobile_menu.addEventListener('click', (e) => {
	const dataLink = e.target.closest(".js-nav-link");

	if (!dataLink) return;
	openCloseModalMenu();
});

function openCloseModalMenu() {
	btn_burger.classList.toggle("js-active");
	mobile_menu.classList.toggle("js-is-open");
	body.classList.toggle("js-locked");
	btn_burger.disabled = false;
}