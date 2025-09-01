
let date = "2025-08-31";
let parts = date.split("-");
console.log(parts);  

let text = "one two";
let words = text.split(" ");
console.log(words);  

let person = "Giorgi,Jioshvili";
let values = person.split(",");
console.log(values); 

let str = "ab";
let chars = str.split("");
console.log(chars); 

let phrasewords = "Python is fun";
let phraseWords = phrase.split(" ");
console.log(phraseWords[1]);  


function startsWithHello(str) {
return str.startsWith("Hello");
}

function checkFile(file) {
return file.startsWith("img_") ? "Image file" : "Not an image file";
}

function startsWithOnceUpon(sentence) {
return sentence.startsWith("Once upon");
}

function startsWithAt(str, sub, pos) {
return str.startsWith(sub, pos);
}

function countDoctor(name) {
return name.filter(name => name.startsWith("Dr.")).length;
}

function cleanSpace(str) {
return str.trim();
}

function cleanStart(str) {
return str.trimStart();
}

function cleanEnd(str) {
return str.trimEnd();
}

function cleanUsername(username) {
return username.map(u => u.trim());
}

function EmptyAfterTrim(input) {
return input.trim() === "";
}

function Passed(students) {
return students.every(s => s.score >= 50);
}

function Even(number) {
return number.every(n => n % 2 === 0);
}

function ValidEmail(email) {
return email.every(e => e.includes("@"));
}

function Adult(age) {
return age.every(a => a >= 18);
}

function Below100(price) {
return price.every(p => p < 100);
}
