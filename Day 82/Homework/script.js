for (let i = 1; i <= 20; i++) {
if (i === 13) break;
console.log(i);
}

const colors = ["red", "green", "yellow", "blue"];

for (let color of colors) {
if (color === "blue") break;
console.log(color);
}


const word = "elephant";

for (let letter of word) {
if (letter === "a") break;
console.log(letter);
}


let total = 0;
let i = 1;

while (true) {
total += i;
if (total >= 100) break;
i++;
}

console.log("Final sum:", total);

for (let i = 1; i <= 20; i++) {
if (i === 13) continue;
console.log(i);
}

const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
if (fruit === "banana") continue;
console.log(fruit);
}

for (let i = 1; i <= 30; i++) {
if (i % 3 === 0) continue;
console.log(i);
}

for (let i = 1; i <= 50; i++) {
if (i % 2 === 0) continue;
console.log(i);
}

const add = (a, b) => a + b;

console.log(add(1, 3)); 

const greet = name => `Hello, ${name}!`;

console.log(greet("GIO")); 

const doubleArray = numbers => numbers.map(num => num * 2);

console.log(doubleArray([1, 2, 3])); 

const Even = num => num % 2 === 0;

console.log(Even(4)); 
console.log(Even(7)); 

const Length = str => str.length;

console.log(Length("hello")); 
