const preloader = () => {
	document.querySelector("html").style.overflowY = "hidden";

	document.addEventListener("DOMContentLoaded", () => {
		const media = document.querySelectorAll("source");
		let i = 0;

		Array.from(media).forEach((file, index) => {
			// console.log(file, index);

			window.addEventListener("load", () => {
				i++;
				const percent = ((i * 100) / media.length).toFixed();
				const loading = document.querySelector(".loading");
				loading.style.bottom = percent + "%";
				loading.style.left = percent + "%";
				if (i === media.length) {
					document.querySelector("html").style.overflowY = "auto";
					const preload = document
						.querySelector(".preloader")
						.classList.add("preloader-hide");
				}
			});
		});
	});
};

export default { preloader };
