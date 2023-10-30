let container = document.querySelector(".container");
let activeIndex = 0;
const circles = [];

function setActiveCircle(index) {
  circles[activeIndex].classList.remove("active");
  circles[index].classList.add("active");
  activeIndex = index;
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const x = Math.random() * (containerWidth - 70);
  const y = Math.random() * (containerHeight - 70);
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const size = Math.floor(Math.random() * (60 - 20 + 1)) + 70;

  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.backgroundColor = `rgb(${r},${g},${b})`;

  circle.addEventListener("click", () =>
    setActiveCircle(circles.indexOf(circle))
  );

  if (circles.length === 0) {
    circle.classList.add("active");

  }
  circles.push(circle);
  container.appendChild(circle);
  return circle;
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Tab") {
	  event.preventDefault();
	  if (event.shiftKey) {
		 setActiveCircle((activeIndex - 1 + circles.length) % circles.length);
	  } else {
		 setActiveCircle((activeIndex + 1) % circles.length);
	  }
	} else if (event.key === "ArrowRight") {
	  circles[activeIndex].style.left =
		 (parseInt(circles[activeIndex].style.left) || 0) + 10 + "px";
	} else if (event.key === "ArrowLeft") {
	  circles[activeIndex].style.left =
		 (parseInt(circles[activeIndex].style.left) || 0) - 10 + "px";
	} else if (event.key === "ArrowDown") {
	  circles[activeIndex].style.top =
		 (parseInt(circles[activeIndex].style.top) || 0) + 10 + "px";
	} else if (event.key === "ArrowUp") {
	  circles[activeIndex].style.top =
		 (parseInt(circles[activeIndex].style.top) || 0) - 10 + "px";
	}
 });
 

function addRandomcircle() {
  const circle = createCircle();
  container.appendChild(circle);
}

for (let i = 0; i < 20; i++) {
  addRandomcircle();
}

console.log(circles);
