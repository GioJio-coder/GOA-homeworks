let str1 = "Hello";
let str2 = "World";

let result = str1.concat(str2);

console.log(result); 


let a = "Hello";
let b = "World";
let c = "Python";

let sentence = a.concat(" ", b, " ", c);

console.log(sentence); 


let firstName = "Giorgi";
let lastName = "Jioshvili";

let fullName = firstName.concat(" ", lastName);

console.log(fullName); 




let url = "https://example.com/";

if (url.endsWith("/")) {
    console.log("URL that ends with /");
} else {
    console.log("URL which does not end with /");
}


function endsWithS(word) {
    if (word.endsWith("s")) {
        return "word which ends with 's'.";
    } else {
        return "word which does not end with 's'.";
    }
}

console.log(endsWithS("cats"));   
console.log(endsWithS("dog"));    


function Punctuation(sentence) {
    return sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!");
}

console.log(Punctuation("Hello."));  
console.log(Punctuation("How old are you?"));
console.log(Punctuation("Wow!")); 
console.log(Punctuation("How are you")); 
