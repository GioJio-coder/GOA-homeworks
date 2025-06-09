let fruits = ["apple", "banana", "cherry", "mango", "grape"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);

let numbers = [2, 3, 4];
for (let x = 0; x < numbers.length; x++) {
  console.log(numbers[x] * 2);
}

let words = ["banana", "apple", "pear", "orange"];
words.sort();                          
let res = words.join(", ");
console.log(res);                   

function RandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(RandomNumber());


