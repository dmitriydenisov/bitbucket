const isActive = () => {
	const menus = document.querySelectorAll(".js-active");
	menus.forEach(function (item) {
		item.addEventListener("click", function () {
			for (const menu of menus) {
				menu.classList.remove("is-active");
			}
			item.classList.add("is-active");
		});
	});
};

export default { isActive };
