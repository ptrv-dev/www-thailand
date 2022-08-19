// Menu burger
const burgerButton = document.querySelector(".header__burger");
const nav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", () => {
	document.body.classList.toggle("no-scroll")
    nav.classList.toggle("nav_active");
    burgerButton.classList.toggle("header__burger_active")
});
