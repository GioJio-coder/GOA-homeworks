function randomPromise() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const num = Math.random();
    num > 0.5 ? resolve(`Resolve: ${num}`) : reject(`Reject: ${num}`);
    }, 1000);
});
}

randomPromise()
.then(res => console.log(res))
.catch(err => console.log(err));



function createPromise() {
return new Promise((resolve) => {
    resolve("resolved"); 
});
}

const h1 = createPromise();
const h2 = createPromise();
const h3 = createPromise();

Promise.all([h1, h2, h3])
.then((results) => {
    console.log(results); 
});


function workingOnPromise(str) {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (str.length > 5) {
        resolve(`YES "${str}" არის საკმარისად გრძელი (${str.length} სიმბოლო)`);
    } else {
        reject(`NO "${str}" ძალიან მოკლეა (${str.length} სიმბოლო)`);
    }
    }, 1000); 
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

workingOnPromise("Giorgi");
workingOnPromise("Promise");
workingOnPromise("JS");