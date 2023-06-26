const isActiveMenu = () => {
	const menuBtn = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".menu-mobile");
	const menuClose = document.querySelector(".close");
	const mobileLink = document.querySelectorAll(".js-mobile");

	menuBtn.addEventListener("click", function () {
		mobileMenu.classList.add("menu-open");
		document.querySelector("html").style.overflowY = "hidden";
	});
	menuClose.addEventListener("click", function () {
		mobileMenu.classList.remove("menu-open");
		document.querySelector("html").style.overflowY = "auto";
	});
	mobileLink.forEach((element) => {
		element.addEventListener("click", function () {
			mobileMenu.classList.remove("menu-open");
			document.querySelector("html").style.overflowY = "auto";
		});
	});
};

export default { isActiveMenu };
