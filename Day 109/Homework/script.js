// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
console.log(firstSentence, secondSentence);
}


async function withAsync(num){
if (num === 0){
    return 'zero';
    } else {
    return 'not zero';
    }
}

withAsync(100)
.then((resolveValue) => {
console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});


// async/await version:
async function announceDinner() {
  // Write your code below:
let meal = await brainstormDinner();
console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();