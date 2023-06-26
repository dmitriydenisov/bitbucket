const green = () => {
	let mm = gsap.matchMedia();
	mm.add("(min-width: 800px)", () => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(".pers", {
			scrollTrigger: {
				trigger: ".pers",
				start: "top 450px",
				end: "bottom -200px",
				scrub: true,
			},
			y: 900,
			ease: "none",
			duration: 999,
		});
	});
	gsap.from(".resume__text", {
		opacity: 0,
		duration: 5,
	});
};

export default { green };
