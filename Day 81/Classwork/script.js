let total = 0;

do {
num = Number(prompt("Enter number:"));
total += num;
} while (total <= 100);

alert("sum: " + total);




let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

let ul = document.getElementById("List");

for (let key in myObj) {
    let keyItem = document.createElement("li");
    keyItem.textContent = "Key: " + key;
    ul.appendChild(keyItem);

    let valueItem = document.createElement("li");

    if (Array.isArray(myObj[key])) {
        valueItem.textContent = "Value: " + myObj[key].join(", ");
    } else {
        valueItem.textContent = "Value: " + myObj[key];
    }

    ul.appendChild(valueItem);
}



let myArray = ["Hello", "Giorgi", 1, 3, true, false];

for (let item of myArray) {
if (typeof item === "string") {
    console.log(item);
} else if (typeof item === "number") {
    console.log(item + 10);
} else if (typeof item === "boolean") {
    console.log(item);
}
}
