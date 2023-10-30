function createList() {
	let list = document.createElement("ol");
	list.classList.add("list");
	document.body.appendChild(list);
 
	for (let i = 1; i < 10; i++) {
	  let itemList = document.createElement("li");
	  list.appendChild(itemList);
	  itemList.textContent = `Це елемент списку ${i}`;
 
	  itemList.addEventListener('click', (event) => {
		 let target = event.target;
		 if (target.tagName === "LI") {
			if (event.ctrlKey || event.metaKey) {
			  target.classList.toggle("selected");
			} else {
			  list.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
			  target.classList.add("selected");
			}
		 }
	  });
	}
 }
 
 createList();
 