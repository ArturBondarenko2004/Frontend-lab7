const slider = document.querySelector(".slider");
const button = document.querySelector(".button");

let isMove = false;
button.addEventListener("mousedown", (event) => {
  isMove = true;
  slider.classList.add("active");
  updateSlider(event);
});
document.addEventListener("mousemove", (event) => {
  if (isMove) {
    updateSlider(event);
  }
});
document.addEventListener("mouseup", () => {
  if (isMove) {
    isMove = false;
    slider.classList.remove("active");
  }
});
function updateSlider(event) {
  const move = slider.getBoundingClientRect();
  let newX = event.clientX - move.left;
  if (newX < 0) {
    newX = 0;
  } else if (newX > move.width) {
    newX = move.width;
  }

  button.style.left = newX + "px";
}
