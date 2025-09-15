
let nums = [1,2,3];  
console.log(nums.reverse());  

let fruits = ["apple","banana","lemon"];  
console.log(fruits.reverse()[0]);  

let chars = ["d","o","o","g"];  
console.log(chars.reverse().join(""));  

let numbers = [5,9,10];  
let revNums = numbers.reverse();  
console.log(Math.max(...revNums));  

let arr = [1,2,3];  
console.log(arr.reverse().join(","));  

let f1 = ["apple","banana"];  
f1.shift();  
console.log(f1);  

let n1 = [1,2,3];  
n1.shift();  
console.log(n1);  

let f2 = ["apple"," orange"];  
console.log(f2.shift());  

let n2 = [10,20,30];  
while(n2.length) console.log(n2.shift());  

let mix = [1,"hello",3];  
mix.shift();  
console.log(mix);  

let f3 = ["greap","banana","pear"];  
console.log(f3.join(","));  

let n3 = [1,2,3];  
console.log(n3.join(" "));  

let words = ["one","two","three"];  
console.log(words.join("-"));  

let c2 = ["h","e","l","l","o"];  
console.log(c2.join(""));  

let names = ["Gio","Luka","Nino"];  
console.log(names.join(" | "));  

console.log(Math.abs(5));  
console.log(Math.abs(-7));  

let n4 = [-1,2,-3];  
console.log(n4.map(Math.abs));  

console.log(Math.abs(15-20));  
console.log(Math.abs(-5));  

console.log(Math.ceil(4.5));  
console.log(Math.ceil(-4.4));  

let dec1 = [1.2,3];  
console.log(dec1.map(Math.ceil));  

console.log(Math.ceil(5/2));  
console.log(Math.ceil(16.89*1.5));  

console.log(Math.floor(4.9));  
console.log(Math.floor(-4.2));  

let dec2 = [1.9,3];  
console.log(dec2.map(Math.floor));  

console.log(Math.floor(7/2));  
console.log(Math.floor(19.99*9.9));  

console.log(Math.round(4.6));  
console.log(Math.round(-4.6));  

let dec3 = [1.4,3];  
console.log(dec3.map(Math.round));  

console.log(Math.round(7/2));  
console.log(Math.round(19.99*1.2));  

console.log(Math.max(5,9));  
console.log(Math.max(3,7));  

let arr2 = [1,2,3];  
console.log(Math.max(...arr2));  

let arr3 = [-5,3];  
console.log(Math.max(...arr3));  

console.log(Math.min(5,9));  
console.log(Math.min(3,7,2));  

let arr5 = [1,2,3];  
console.log(Math.min(...arr5));  

let arr6 = [-5,3];  
console.log(Math.min(...arr6));  

console.log(Math.pow(2,3));  
console.log(Math.pow(5,0.5));  
console.log(Math.pow(4,3));  