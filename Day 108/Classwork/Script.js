
function checkStringLength(str) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (str.length % 2 === 0) {
        resolve(str); 
    } else {
        reject(str); 
    }
    }, 2000); 
});
}

const promise1 = checkStringLength("Hello");  
const promise2 = checkStringLength("World!"); 
const promise3 = checkStringLength("JS");     

Promise.allSettled([promise1, promise2, promise3])
.then((results) => {
    results.forEach((result) => {
    if (result.status === "fulfilled") {
        console.log("Resolved:", result.value);
    } else {
        console.log("Rejected:", result.reason);
    }
    });
});


function getData(apiLink) {
fetch(apiLink)
    .then(response => response.json())
    .then(data => {
    console.log("მიღებული მონაცემები:", data);
    })
    .catch(error => console.error("შეცდომა:", error));
}

getData("https://goa-api.onrender.com/mentors");



async function getData(apiLink) {
try {
    const response = await fetch(apiLink);
    const data = await response.json();
    return data; 
} catch (error) {
    console.error("შეცდომა:", error);
}
}

getData("https://goa-api.onrender.com/mentors")
.then(data => console.log("დაბრუნებული JSON:", data));
console.log("https://goa-api.onrender.com/mentors")




function getData1(apiLink1) {
fetch(apiLink1)
    .then(response => response.json())
    .then(data => {
        console.log("მიღებული მონაცემები: ", data)
    })
    .catch(error => console.error("შეცდომა: ", error))
}

getData1("https://fakestoreapi.com/products")

async function getData1(apiLink1) {
try {
    const response = await fetch(apiLink1);
    const data = await response.json();
    return data; 
} catch (error) {
    console.error("შეცდომა:", error);
}
}

getData1("https://fakestoreapi.com/products")
.then(data => console.log("დაბრუნებული JSON:", data));
console.log("https://fakestoreapi.com/products")