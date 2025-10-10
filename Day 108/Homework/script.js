
getData1("https://fakestoreapi.com/products")
.then(data => console.log("დაბრუნებული JSON:", data));
console.log("https://fakestoreapi.com/products")


function getData(apiLink) {
    fetch(apiLink)
    .then(response => response.json())
    .then(data => {
        console.log("მიღებული მონაცემები: ", data)
    })
    .catch(error => console.error("შეცდომა: ", error))
}

getData("https://goa-api.onrender.com/mentors/Data Tezelashvili") 

async function getData(apiLink) {
    try {
        const response = await fetch(apiLink);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("შეცდომა: ", error)
    }
}