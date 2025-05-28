let number = Float(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

let age = Int(prompt("Enter your age:"));

if (age >= 18) {
    alert("You can vote!");
} else {
    alert("You cannot to vote.");
}

let num1 = Float(prompt("Enter the first number:"));
let num2 = Float(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The first number is greater.");
} else if (num2 > num1) {
    alert("The second number is greater.");
} else {
    alert("Both numbers are equal.");
}