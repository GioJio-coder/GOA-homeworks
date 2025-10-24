
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log("3) Even or Odd:", result);

let a = 15, b = 20;
let greater = (a > b) ? a : b;
console.log("4) Greater number is:", greater);

let age = 16;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log("5) Voting eligibility:", eligibility);

let score = 45;
let grade = (score >= 50) ? "Pass" : "Fail";
console.log("6) Grade:", grade);

let number = -5;
let type = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
console.log("7) Number type:", type);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log("8) Merged array:", merged);

let person = { name: "John", age: 25 };
let updatedPerson = { ...person, age: 30 };
console.log("9) Original object:", person);
console.log("9) Updated object:", updatedPerson);

function sum(...numbers) {
return numbers.reduce((total, n) => total + n, 0);
}
console.log("10) Sum:", sum(2, 4, 6, 8));


let user = { name: "Alice", age: 22, country: "USA" };
let { name, ...others } = user;
console.log("11) Other properties:", others);