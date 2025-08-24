const btn_burger = document.querySelector(".nav-burger");
const mobile_menu = document.querySelector(".modal-menu");
const body = document.body;

btn_burger.addEventListener('click', (e) => {
	btn_burger.disabled = true;
	openCloseModalMenu();
});

mobile_menu.addEventListener('click', (e) => {
	const dataLink = e.target.closest(".nav-link");

	if (!dataLink) return;
	openCloseModalMenu();
});

function openCloseModalMenu() {
	btn_burger.classList.toggle("active");
	mobile_menu.classList.toggle("is-open");
	body.classList.toggle("locked");
	btn_burger.disabled = false;
}