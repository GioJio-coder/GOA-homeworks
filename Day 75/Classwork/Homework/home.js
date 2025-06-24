
let count = 1;
const interval = setInterval(() => {
console.log(count);
if (count === 5) {
    clearInterval(interval);
}
count++;
}, 1000);

const Interval = setInterval(() => {
console.log("Hello!");
}, 2000);

setTimeout(() => {
clearInterval(Interval);
}, 10000);

let timer = 0;
const countUp = setInterval(() => {
timer++;
console.log("Timer: ${timer} seconds");
if (timer === 10) {
    clearInterval(countUp);
}
}, 1000);

const numbers = [10, 20, 30, 40];
console.log(numbers[1]); 

const arr = [5, 10, 15, 20];
arr[0] = 100;
console.log(arr); 

const fruits = ["Apple", "Banana", "watermelon"];
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 