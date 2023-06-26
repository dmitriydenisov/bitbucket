const getScrollPercentage = () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.body.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
	let test1 = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

	return test1;
};

let scrollEvent = false;
let toHome = document.querySelector(".link-content");
toHome.innerText = getScrollPercentage() + " %";

const progress = document.querySelector(".progress-ring__circle");
const radiusY = progress.ry.baseVal.value;
const radiusX = progress.rx.baseVal.value;
const radius = radiusX + radiusY;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = `${circumference} ${circumference}`;
progress.style.strokeDashoffset = circumference;
function setProgress(percent) {
	// prettier-ignore
	const offset = (circumference - percent / 200 * circumference).toFixed();
	progress.style.strokeDashoffset = offset;
}

document.addEventListener("DOMContentLoaded", function () {
	window.onscroll = function () {
		setProgress(getScrollPercentage());

		toHome.innerText = getScrollPercentage() + " %";
		if (!scrollEvent && getScrollPercentage() === 100) {
			toHome.innerHTML = "<img src= '../images/up.jpg' >";
		}
	};
});

export default { getScrollPercentage };
