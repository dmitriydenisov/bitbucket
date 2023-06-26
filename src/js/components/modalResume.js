const modalResume = () => {
	const resumeDescription = document.querySelector(".resume__description");
	const resumeTitle = resumeDescription.querySelector(".resume__title");
	const resumeText = resumeDescription.querySelector(".resume__text");

	const modalContent = document.querySelector(".modal-resume__content");
	const modalTitle = modalContent.querySelector(".resume__title");
	const modalText = modalContent.querySelector(".resume__text");

	const modal = document.querySelector(".modal-resume");

	modalTitle.innerText = resumeTitle.innerText;
	modalText.innerText = resumeText.innerText;

	const socialsList = document.querySelector(".contacts__social");
	const socials = socialsList.querySelectorAll(".contacts__link");

	socials.forEach((social) => {
		social.addEventListener("click", () => {
			event.preventDefault();
			modal.classList.add("active");
			document.querySelector("html").style.overflowY = "hidden";
		});
	});
	modal.addEventListener("click", () => {
		modal.classList.remove("active");
		document.querySelector("html").style.overflowY = "auto";
	});
};

export default { modalResume };
