// Áudio por TicTacShutUp (CC-BY 4.0): https://freesound.org/s/406/
addEventListener("DOMContentLoaded", function() {
	const click_on = new Audio();
	click_on.src = "/click_on.mp3";
	click_on.setAttribute("preload", "auto");
	const click_off = new Audio();
	click_off.src = "/click_off.mp3";
	click_off.setAttribute("preload", "auto");

	const wrapper = document.getElementById("dark-mode-wrapper");
	wrapper.classList.add("has-js");

	function px(v) { return `${v}px`; }

	const dmode = document.getElementById("dark-mode");
	function resizeDM() {
		const size = Math.max(innerWidth,innerHeight);
		dmode.style.width = px(size*2);
		dmode.style.height = px(size*2);
	}
	resizeDM();
	addEventListener("resize", resizeDM);

	const cb = document.getElementById("dark-mode-checkbox");
	cb.addEventListener("change", function(_) {
		if(cb.checked) {
			click_off.currentTime = 0;
			click_on.pause();
			click_off.play();
			document.body.classList.add("night");
		} else {
			click_on.currentTime = 0;
			click_off.pause();
			click_on.play();
			document.body.classList.remove("night");
		}
	});

	function updateLightPosition(evt) {
		if(!cb.checked) return;
		let pageX = NaN;
		let pageY = NaN;
		if("pageX" in evt) {
			pageX = evt.pageX;
			pageY = evt.pageY;
		} else if("changedTouches" in evt && evt.changedTouches.length) {
			pageX = evt.changedTouches[0].pageX;
			pageY = evt.changedTouches[0].pageY;
		} else if("touches" in evt && evt.touches.length) {
			pageX = evt.touches[0].pageX;
			pageY = evt.touches[0].pageY;
		}
		if(isNaN(pageX) || isNaN(pageY)) return;
		dmode.style.setProperty("--x", px(pageX));
		dmode.style.setProperty("--y", px(pageY));
	};
	addEventListener("mousemove", updateLightPosition);
	addEventListener("mouseup", updateLightPosition);
	addEventListener("touchmove", updateLightPosition);
	addEventListener("touchend", updateLightPosition);
	cb.addEventListener("click", updateLightPosition);
});