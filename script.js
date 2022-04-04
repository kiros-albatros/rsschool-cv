document.addEventListener("DOMContentLoaded", function (event) {
	let menu = document.querySelector(".menu");
	let burger = document.querySelector(".burger");

	burger.addEventListener("click", function () {
		menu.classList.toggle("menu--show");
	});
});
