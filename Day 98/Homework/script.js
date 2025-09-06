let arr = [1, -2, 3, false, "Hello", null];

console.log(arr.some(n => typeof n === "number" && n > 0));  

console.log(arr.some(n => typeof n === "number" && n % 2 === 0));

console.log(arr.some(s => typeof s === "string" && s.length > 5));

console.log(arr.some(v => !v));

function isPrime(num) {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
}
return true;
}
console.log(arr.some(n => typeof n === "number" && isPrime(n)));


let nums = [10, 20, 30];
let strings = ["apple", "banana"];
let objs = [{name: "Alice"}, {name: "Bob"}];

nums.forEach(el => console.log(el));

nums.forEach((el, i) => console.log(`Index: ${i}, Value: ${el}`));

let sum = 0;
nums.forEach(n => sum += n);
console.log("Sum:", sum);

strings.forEach(s => console.log(s.toUpperCase()));

objs.forEach(obj => console.log(obj.name));


let numbers = [1, 2, 3, 4];
let names = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
let strArr = ["hello", "world"];

console.log(numbers.map(n => n * n));

console.log(numbers.map(n => n * 2));

console.log(strArr.map(s => s.toUpperCase()));

console.log(names.map(obj => obj.name));

console.log(numbers.map(n => n + 10));