const products = [
{ name: "Mobile", price: 500 },
{ name: "Mouse", price: 20 },
{ name: "Keyboard", price: 50 },
];

const Product = products.filter(product => product.price < 100);

console.log(Product);


const words = ["Watermelon", "bmw", "tiger"];

const BWord = words.find(word => word.startsWith("b"));

console.log(BWord); 


let numbers = [1, 20, 5];

numbers.splice(2, 0, 99);

console.log(numbers);