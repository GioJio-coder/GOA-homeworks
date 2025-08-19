
let expr1 = prompt("Enter a math expression:");
alert("Result: " + eval(expr1));

let expr2 = prompt("Enter an expression with parentheses:");
alert("Result: " + eval(expr2));

let expr3 = prompt("Enter a division:");
alert("Result: " + eval(expr3));

let num = prompt("Enter a number to square:");
alert("Square: " + eval(num + "*" + num));

let input1 = prompt("Enter something:");
if (isNaN(input1)) {
    alert("Not a number");
} else {
    alert("It's a number");
}

let age = prompt("Enter your age:");
if (isNaN(age)) {
    alert("Invalid age");
} else {
    alert("Valid age");
}

let input2 = prompt("Type anything:");
if (isNaN(input2)) {
    alert("You typed text");
} else {
    alert("You typed a number");
}

let n1 = prompt("Enter first number:");
let n2 = prompt("Enter second number:");
let op = prompt("Enter operator (+, -, *, /):");

if (isNaN(n1) || isNaN(n2)) {
    alert("Invalid input! Both must be numbers.");
} else {
    let result = eval(n1 + op + n2); 
    alert("Result: " + result);
}

let strNum = prompt('Enter a whole number as a string:');
let num1 = parseInt(strNum);
alert("Converted to number: " + num1);

let pxValue = prompt('Enter a value like "55px":');
alert("Extracted number: " + parseInt(pxValue));

let hexVal = prompt('Enter a hexadecimal number:');
alert("Converted value: " + parseInt(hexVal));

let celsius = prompt('Enter temperature in Celsius (e.g., "36.6"):');
let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
alert(celsius + "°C = " + fahrenheit.toFixed(2) + "°F");

let weight = prompt('Enter weight in kg (e.g., "70.5"):');
let height = prompt('Enter height in meters (e.g., "1.75"):');
let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
alert("Your BMI = " + bmi.toFixed(2));