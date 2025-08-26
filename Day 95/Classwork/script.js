let text = "banana";
let firstIndex = text.indexOf("a"); 
console.log("First occurrence of 'a':", firstIndex);

let secondIndex = text.indexOf("a", firstIndex + 1);
console.log("Second occurrence of 'a':", secondIndex);

let str = "Hello world";
if (str.indexOf("world") !== -1) {
    console.log("The word 'world' exists in the string.");
} else {
    console.log("The word 'world' does not exist in the string.");
}



let text1 = "The cat is sleeping";
let result1 = text1.replace("cat", "dog");
console.log(result1); 

let text2 = "banana";
let result2 = text2.replace("a", "@");
console.log(result2); 

let text3 = "Hello world";
let result3 = text3.replace("world", "JavaScript");
console.log(result3);



let text4 = "Hello world";
let result = text4.slice(6);
console.log(result); 

let text5 = "JavaScript";
let result4 = text5.slice(0, 5);
console.log(result4);

let text6 = "Python";
let result5 = text6.slice(1);
console.log(result5); 