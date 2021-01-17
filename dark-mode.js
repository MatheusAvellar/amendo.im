// Áudio por: https://freesound.org/s/406/
addEventListener("DOMContentLoaded", function() {
  const click_on = new Audio();
  click_on.src = "/click_on.mp3";
  const click_off = new Audio();
  click_off.src = "/click_off.mp3";

  function px(v) { return `${v}px`; }

  const wrapper = document.getElementById("dark-mode-wrapper");
  wrapper.classList.add("has-js");

  const dmode = document.getElementById("dark-mode");
  let size = 0;
  function resizeDM() {
    size = Math.max(innerWidth,innerHeight);
    dmode.style.width = px(size*2);
    dmode.style.height = px(size*2);
  }
  resizeDM();
  onresize = resizeDM;

  const cb = document.getElementById("dark-mode-checkbox");
  cb.onchange = e => {
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
  };

  cb.onclick = onmousemove = e => {
    if(!cb.checked) return;
    dmode.style.setProperty("--x", px(e.pageX));
    dmode.style.setProperty("--y", px(e.pageY));
  };
});