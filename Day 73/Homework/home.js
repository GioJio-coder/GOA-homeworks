
let p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);

let h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
let div = document.getElementById("div");
div.appendChild(h1);

let image = document.createElement("img");
image.src = "https://via.placeholder.com/150"; 
image.alt = "Placeholder Image";
document.body.appendChild(image);

let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

let Div1 = document.getElementById("div1");
if (Div1.firstElementChild) {
div1.removeChild(div1.firstElementChild);
}

let ul = document.getElementById("ul");
if (ul.lastElementChild) {
ul.removeChild(ul.lastElementChild);
}

let item = document.getElementById("Item");
let li = document.createElement("li");
Li.textContent = "New list item";
let oldLi = item.querySelector("li");
if (oldLi) {
ul.replaceChild(Li, oldLi);
}