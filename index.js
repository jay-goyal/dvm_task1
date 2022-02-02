const hamburger = document.querySelector(".hmbgr");
const nav_cont = document.querySelector(".overlay");
const nav_elems = document.querySelectorAll(".overlay>.nav-elem");
hamburger.addEventListener("click", () => {
	if (hamburger.classList.contains("hmbgr-open")) {
		hamburger.classList.remove("hmbgr-open");
		nav_cont.classList.remove("overlay-open");
	} else {
		hamburger.classList.add("hmbgr-open");
		nav_cont.classList.add("overlay-open");
	}
});

nav_elems.forEach(item => {
	item.addEventListener("click", () => {
		if (hamburger.classList.contains("hmbgr-open")) {
			hamburger.classList.remove("hmbgr-open");
			nav_cont.classList.remove("overlay-open");
		}
	});
});