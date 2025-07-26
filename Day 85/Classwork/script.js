function EvenNumbers(a, b, c, d, e, f, g, h, i, j) {
const numbers = [a, b, c, d, e, f, g, h, i, j];

for (const num of numbers) {
    if (num % 2 === 0) {
    console.log(num);
    }
}
}

EvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


const Hello1 = function() {
console.log("hello");      // ანონიმურია
};

const Hello2 = () => {
console.log("hello");     // ანონიმურია
};

// ანუ ორივე ფუნქცია არის ანონიმურია
// რადგან მათ არ აქვთ სახელი ფუნქციის გამოცხადებისას (function() და ()=>),



console.log(
(function() {
    return "HELLO!";
})()
);



{
let x = 10;
console.log(x); 
}
console.log(x); 


function showName() {
var names = "Giorgi";
console.log(names); 
}
showName();
console.log(names); 


let lang = "JavaScript";

function printLanguage() {
console.log(lang); 
}
printLanguage();
console.log(lang); 
