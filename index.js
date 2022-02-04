const hamburger = document.querySelector(".hmbgr");
const nav_cont = document.querySelector(".overlay");
const nav_elems = document.querySelectorAll(".overlay>.nav-elem");
const dwnld_head = document.querySelector("#dwnld-head>h2");
const dwnld_btn = document.querySelector("#dwnld-btn");

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

const close_nav_click_out = event => {
	if ((!nav_cont.contains(event.target)) && (!hamburger.contains(event.target))) {
		if (hamburger.classList.contains("hmbgr-open")) {
			hamburger.classList.remove("hmbgr-open");
			nav_cont.classList.remove("overlay-open");
		}
	}
};

document.addEventListener("click", close_nav_click_out);
document.addEventListener("scroll", close_nav_click_out);

dwnld_btn.addEventListener("click", () => {
	dwnld_head.id = "dwnld-head-heading";
	setTimeout(() => {
		dwnld_head.id = "";
	}, 2000);
});
