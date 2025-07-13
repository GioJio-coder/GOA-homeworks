
const numbers = [1, 3, 5];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    if (total > 50) {
        break;
    }
}
console.log("ჯამი:", total);


const printString = (string) => {
for (let i = 0; i < string.length; i++) {
    if (string[i].length <= 5) {
    continue; 
    }
    console.log(string[i]);
}
};

const words = ["Georgia", "USA", "Spain"];

printString(words);