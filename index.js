var ul = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("button")


function createListItem() {
var li = document.createElement("li");
li.textContent = input.value;
ul.appendChild(li);
input.value = null;
}

function afterClick() {
   if (input.value.length > 0) {
			createListItem();
		} 
}

function afterPress(event) {
if (input.value.length > 0 && event.key === "Enter") {
	createListItem();
}
}

button.addEventListener("click", afterClick);


input.addEventListener("keypress", afterPress);



