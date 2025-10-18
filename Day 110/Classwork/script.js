async function getFootballData() {
const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal"; 

const response = await fetch(url);     
const data = await response.json();    
console.log(data);                   
}

getFootballData();


function getPromise() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    Math.random() < 0.5 ? resolve("success") : reject("fail");
    }, 2000);
});
}

async function run() {
try {
    console.log(await getPromise());
} catch (err) {
    console.log(err);
}
}

run();



async function getData() {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Error:", error);
}
}

getData();