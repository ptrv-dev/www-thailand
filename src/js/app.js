// Menu burger
const burgerButton = document.querySelector(".header__burger");
const nav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", () => {
	document.body.classList.toggle("no-scroll");
	nav.classList.toggle("nav_active");
	burgerButton.classList.toggle("header__burger_active");
});

// Interactive map adaptive
const map = document.querySelector(".map-travel");

function mapScale() {
	if (window.innerWidth < 520) {
		map.style.transform = `scale(${innerWidth / 520})`;
	} else {
		map.style.transform = "";
	}
}

window.addEventListener("resize", () => {
	mapScale();
});
window.addEventListener("load", () => {
	mapScale();
})