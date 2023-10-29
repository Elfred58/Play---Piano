const keys = document.querySelectorAll(".key");
const now = document.querySelector(".nowplaying");

function get(e){
  const note = e.keyCode
  const type = document.querySelector(`.key[data-key="${note}"]`);
  const hear = document.querySelector(`audio[data-key="${note}"]`);

  const content = type.getAttribute("data-note");

  type.classList.add("playing");
  now.textContent = content;
  hear.currentTime = 0;
  hear.play();
}

function remove(e){
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
keys.forEach(key => key.addEventListener("transitionend", remove));
window.addEventListener("keydown", get);