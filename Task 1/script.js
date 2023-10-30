document.documentElement.addEventListener("mousedown", onMouseDown);
document.documentElement.addEventListener("mouseup", onMouseUp);
document.documentElement.addEventListener("mousemove", onMouseMove);

let activeBox = null;

container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function createBox() {
  let box = document.createElement("div");
  box.classList.add("box");

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const x = Math.random() * (containerWidth - 70);
  const y = Math.random() * (containerHeight - 70);

  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const size = Math.floor(Math.random() * (70 - 40 + 1)) + 40;

  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.left = x + "px";
  box.style.top = y + "px";
  box.style.backgroundColor = `rgb(${r},${g},${b})`;

  return box;
}

function addRandomBox() {
  const box = createBox();
  container.appendChild(box);
}
addRandomBox();

for (let i = 0; i < 10; i++) {
  addRandomBox();
}

function onMouseDown(event) {
	activeBox = event.target; 
	
	if (activeBox.classList.contains("box")) {
	  activeBox.classList.add("active");
	  activeBox.style.zIndex = 1; 
	}
 }
function onMouseUp() {
	if (activeBox && activeBox.classList.contains("box")) {
	  activeBox.classList.remove("active");
	}
	activeBox = null;
	
 }
 function onMouseMove(event) {
	if (activeBox) {
	  event.preventDefault(); 
 
	  const containerRect = container.getBoundingClientRect();
	  const blockRect = activeBox.getBoundingClientRect();
 
	  const maxX = containerRect.width - (blockRect.width + 5);
	  const maxY = containerRect.height - (blockRect.height + 5);
 
	  const x = event.clientX - containerRect.left - blockRect.width / 2; 
	  const y = event.clientY - containerRect.top - blockRect.height / 2;
 
	  let blockCoord = {
		 x: x,
		 y: y
	  };
 
	  if (blockCoord.y < 0) {
		 blockCoord.y = 0;
	  } else if (blockCoord.y > maxY) {
		 blockCoord.y = maxY;
	  }
 
	  if (blockCoord.x < 0) {
		 blockCoord.x = 0;
	  } else if (blockCoord.x > maxX) {
		 blockCoord.x = maxX;
	  }
 
	  activeBox.style.left = blockCoord.x + 'px';
	  activeBox.style.top = blockCoord.y + 'px';
	}
 }