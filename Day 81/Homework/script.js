
let i = 1;
do {
console.log(i);
i++;
} while (i <= 5);

let x = 2;
do {
console.log(x);
x += 2;
} while (x <= 10);

let k = 10;
do {
console.log(k);
k--;
} while (k >= 1);

let sum = 0;
let n = 1;
do {
sum += n;
n++;
} while (n <= 10);
console.log("Total sum:", sum);

const numbers = [1, 2, 3];
for (const num of numbers) {
console.log(num);
}

const str = "hello";
for (const char of str) {
console.log(char);
}

let total = 0;
for (const num of numbers) {
total += num;
}
console.log("Total:", total);

for (const num of numbers) {
if (num % 2 === 0) {
    console.log("Even:", num);
}
}

const names = ["giorgi", "nika", "bob"];
for (const name of names) {
console.log(name);
}

const person = {
name: "giorgi",
age: 14,
city: "Tbilisi"
};

for (const key in person) {
console.log("Key:", key);
}

for (const key in person) {
console.log("Value:", person[key]);
}

let count = 0;
for (const key in person) {
  count++;
}
console.log("Property count:", count);

let keyList = "";
for (const key in person) {
keyList += key + ", ";
}
keyList = keyList.slice(0, -2); 
console.log("All keys:", keyList);
