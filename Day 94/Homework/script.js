let str = "JavaScript";
console.log(str.at(0)); 

let word = "OpenAI";
console.log(word.at(-1)); 

let text = "Programming";
console.log(text.at(4)); 

function getMiddleChar(str) {
let midIndex = Math.floor(str.length / 2);
return str.at(midIndex);
}

console.log(getMiddleChar("Hello"));     
console.log(getMiddleChar("Worlds"));    

let message = "Hello World";
console.log(message.at(-2)); 


let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(str2)); 


let greeting = "Hello";
console.log(greeting.concat("!")); 

let file = "filename.pdf";
console.log(file.endsWith(".pdf")); 

let url = "https://example.com/";
console.log(url.endsWith("/")); 


function endsWithS(word) {
return word.endsWith("s");
}
console.log(endsWithS("cats"));   
console.log(endsWithS("dog"));    


let lang = "JavaScript";
console.log(lang.endsWith("Java", 4)); 