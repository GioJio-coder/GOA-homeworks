
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

if (isNaN(value1)) {
console.log("First value: Is not a number");
} else {
console.log("First value: Is number");
}

if (isNaN(value2)) {
console.log("Second value: Is not a number");
} else {
console.log("Second value: Is number");
}



let value3 = prompt("Enter the first decimal number:");
let value4  = prompt("Enter the second decimal number:");

let int = parseInt(value3) + parseInt(value4);
console.log("Sum with parseInt:", int);

let Float = parseFloat(value1) + parseFloat(value2);
console.log("Sum with parseFloat:", Float);

if (int === Float) {
console.log(" sums  equal (=== true)");
} else {
console.log("Sums are different (=== false)");
}