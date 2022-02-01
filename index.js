const hamburger = document.querySelector(".hmbgr");
const nav_cont = document.querySelector(".overlay");
hamburger.addEventListener("click", () => {
	if (hamburger.classList.contains("hmbgr-open")) {
		hamburger.classList.remove("hmbgr-open");
		nav_cont.classList.remove("overlay-open");
	} else {
		hamburger.classList.add("hmbgr-open");
		nav_cont.classList.add("overlay-open");
	}
});