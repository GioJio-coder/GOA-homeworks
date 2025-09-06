const strings = [
"hello", "world", "javascript"
];

strings.forEach(str => {
if (str.length > 10) {
    console.log(`"${str}" has more than 10 characters.`);
}
});

const numbers = [1, 3, 5];

numbers.forEach((value, index) => {
console.log(`Index: ${index}, Value: ${value}`);
});


const words = ["apple", "banana"];

const uppercased = words.map(word => word.toUpperCase());

console.log("Uppercased words:", uppercased);