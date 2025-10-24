const numbers = [1, 2, 3, 4, 5]

const updatedNumbers = numbers.map(num => num % 2 === 0 ? num + 10 : num - 10);

console.log("განახლებული მასივი:", updatedNumbers);

function printSum(a, b, c, d, e) {
console.log("ჯამი არის:", a + b + c + d + e);
}

printSum(...updatedNumbers);



function findLargest(...numbers) {
return Math.max(...numbers);
}

console.log(findLargest(3, 5, 10));