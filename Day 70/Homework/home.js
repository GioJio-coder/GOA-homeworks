for (let x = 1; x <= 10; x++) {
    console.log(x);
}

let num = 2;
while (num <= 20) {
console.log(num);
num += 2;
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let count = 1;
while (count <= 5) {
  console.log(count * 3);
count++;
}

let text = "Hello";
for (let a = 0; a < text.length; a++) {
console.log(text[a]);
}

function changeText() {
    document.getElementById("P").textContent = "Text changed!";
}

function changeColor() {
    document.getElementById("color").style.backgroundColor = "lightblue";}

function Heading() {
        document.getElementById("H").style.fontSize = "40px";
    }

function hideDiv() {
        document.getElementById("Div").style.display = "none";
    }

    function showAlert() {
        alert("Hello! This is your custom message.");
    }