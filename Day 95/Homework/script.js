console.log("The quick brown fox jumps over the lazy dog".includes("dog"));

function hasAtSymbol(str) {
return str.includes("@");
}
console.log(hasAtSymbol("name@example.com"));
console.log(hasAtSymbol("hello.com"));

console.log("JavaScript".includes("Java"));

console.log("banana".includes("apple"));

function containsNot(sentence) {
return sentence.includes("not");
}
console.log(containsNot("This is not good."));
console.log(containsNot("Everything is good."));

console.log("The quick brown fox jumps over the lazy dog".indexOf("fox"));

console.log("Hello world".indexOf("o"));

console.log("Happy New Year 2025!".indexOf("2025"));

console.log("This is a simple test".indexOf("is"));

function atSymbolIndex(str) {
return str.indexOf("@");
}
console.log(atSymbolIndex("name@example.com"));
console.log(atSymbolIndex("hello.com"));

console.log("Hello world".lastIndexOf("o"));

console.log("banana".lastIndexOf("a"));

console.log("This is a test, and it is simple".lastIndexOf("is"));

console.log("dog dog dog".lastIndexOf("dog"));

console.log("Happy 2025, welcome 2025!".lastIndexOf("2025"));

console.log("ha".repeat(3));

console.log("*".repeat(10));

console.log("---".repeat(5));

function repeatWord(word, n) {
return word.repeat(n);
}
console.log(repeatWord("Hi", 4));

console.log("Hello ".repeat(4));

console.log("The cat chased the cat".replace("cat", "dog"));

console.log("JavaScript is cool".replace("Java", "Type"));

function replaceFirstSpace(sentence) {
return sentence.replace(" ", "-");
}
console.log(replaceFirstSpace("Hello World!"));

console.log("banana".replace("a", "@"));

console.log("Happy New Year 2024!".replace("2024", "2025"));

console.log("The cat chased another cat and found a cat".replaceAll("cat", "dog"));

console.log("I love JavaScript so much".replaceAll(" ", "-"));

console.log("banana".replaceAll("a", "@"));

console.log("2024 was great, but 2024 is over".replaceAll("2024", "2025"));

console.log("Wait. Stop. Go. Run.".replaceAll(".", "!"));

console.log("Hello world".slice(6));

console.log("JavaScript".slice(0, 4));

console.log("Python".slice(1));

console.log("Banana".slice(-3));

function firstHalf(str) {
return str.slice(0, Math.floor(str.length / 2));
}
console.log(firstHalf("JavaScript"));
console.log(firstHalf("Banana"));