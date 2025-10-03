function coinFlip() {
    return new Promise((resolve, reject) => {
        const result = Math.random() < 0.5; 
        if (result) {
            resolve("Heads"); 
        } else {
            reject("Tails"); 
        }
    });
}

coinFlip()
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Result:", error));


const strings = ["apple", "banana", "orange"];

const randomStringPromise = new Promise((resolve, reject) => {
    const str = strings[Math.floor(Math.random() * strings.length)];
    str.length % 2 === 0 ? resolve("success") : reject("failure");
});

const successHandler = msg => console.log(msg);
const failureHandler = msg => console.log(msg);

randomStringPromise.then(successHandler, failureHandler);

