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
});

// Pop Up

const popUp = document.querySelector(".pop-up");
const popUpClose = document.querySelectorAll("button.pop-up__close");

let currentPopUp = undefined;

const popUpShow = (id) => {
	popUp.classList.add("_active");
	document.body.classList.add("no-scroll");
	document.querySelector(`#${id}`).classList.add("_active");
};

const popUpHide = () => {
	popUp.classList.remove("_active");
	document.body.classList.remove("no-scroll");
	document.querySelector(`#${currentPopUp}`).classList.remove("_active");
	currentPopUp = undefined;
};

popUpClose.forEach((e) => {
	e.addEventListener("click", () => {
		popUpHide();
	});
});

document.body.addEventListener("keydown", (e) => {
	if (e.key ==="Escape"){
		if (currentPopUp != undefined) {
			popUpHide();
		}
	}
});

document
	.querySelector("button.bottom-travel-video__button")
	.addEventListener("click", () => {
		popUpShow("video-pop-up");
		currentPopUp = "video-pop-up";
	});

document.querySelector("button.header__user").addEventListener("click", ()=> {
	popUpShow("login-pop-up");
	currentPopUp = "login-pop-up";
});