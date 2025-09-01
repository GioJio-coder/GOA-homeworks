function Words(sentence) {
let cleaned = sentence.trim();
let words = cleaned.split();
return words.length;
}


const items = [
{ id: 1, status: "active" },
{ id: 2, status: "active" },
{ id: 3, status: "active" },
{ id: 4, status: "inactive" }
];
const allAreActive = items.every(item => item.status === "active");
console.log(allAreActive); 