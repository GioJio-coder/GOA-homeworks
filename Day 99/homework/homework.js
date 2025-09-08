
let arr1 = ["Banana", "Apple"];
console.log(arr1.find(str => str.startsWith("A")));

let users1 = [{name:"Giorgi", age:14}];
console.log(users1.find(u => u.age > 10));

let words1 = ["audi", "banana"];
console.log(words1.find(w => w.length > 5));

let products1 = [{name:"pencil", price:5}];
console.log(products1.find(p => p.price < 3));

let students1 = [{name:"Giorgi", grade:"A"}];
console.log(students1.find(s => s.grade === "A"));

let nums1 = [1, 3, -2];
console.log(nums1.findIndex(n => n < 0));

let arr2 = ["run", "doing"];
console.log(arr2.findIndex(s => s.endsWith("ing")));

let users2 = [{name:"Giorgi", Active:true}];
console.log(users2.findIndex(u => u.Active));

let nums2 = [5, 10, 20];
console.log(nums2.findIndex(n => n % 10 === 0));

let fruits1 = ["pear", "orange"];
console.log(fruits1.findIndex(f => f.length === 5));

let nums3 = [50, 100, 200];
console.log(nums3.findLast(n => n > 100));

let arr3 = ["tree", "Bmw", "mercedes"];
console.log(arr3.findLast(s => s.includes("e")));

let users3 = [{name:"Ana", age:20}];
console.log(users3.findLast(u => u.age < 25));

let nums4 = [30, 40, 70];
console.log(nums4.findLast(n => n % 2 === 1));

let nums5 = [80, 90, 130];
console.log(nums5.findLastIndex(n => n > 50));

let arr4 = ["Apple", "Sky", "banana"];
console.log(arr4.findLastIndex(s => s.startsWith("S")));

let users4 = [{isActive:true}, {isActive:true}, {isActive:false}];
console.log(users4.findLastIndex(u => u.isActive));

let nums6 = [1, 3, 2];
console.log(nums6.findLastIndex(n => n % 3 === 0));

let words3 = ["tree", "play", "game"];
console.log(words3.findLastIndex(w => w.length === 4));

let nums7 = [10, 25, 30];
console.log(nums7.indexOf(25));

let fruits2 = ["banana", "apple", "orange"];
console.log(fruits2.indexOf("apple"));

let letters1 = ["b", "c", "a"];
console.log(letters1.indexOf("a"));

let animals1 = ["dog", "lion", "bird"];
console.log(animals1.indexOf("lion"));

let nums8 = [10, 20, 30];
console.log(nums8.indexOf(100));

let nums9 = [10, 20, 50, 10];
console.log(nums9.lastIndexOf(10));

let fruits3 = ["pear", "pear", "apple"];
console.log(fruits3.lastIndexOf("pear"));

let letters2 = ["a", "b", "d", "a"];
console.log(letters2.lastIndexOf("a"));

let animals2 = ["dog", "cat", "dog", "bird"];
console.log(animals2.lastIndexOf("dog"));

let nums10 = [0, 1, -1];
console.log(nums10.lastIndexOf(0));

let nums11 = [1, 2, 3];
console.log(nums11.pop());

let fruits4 = ["apple", "mango", "banana"];
console.log(fruits4.pop());

let arr5 = [5, 10, 15];
while(arr5.length > 0) console.log(arr5.pop());

let users5 = [{id:1}, {id:2}, {id:3}];
console.log(users5.pop());

let arr6 = ["x", "i", "t"];
let removed = arr6.pop();
console.log(removed);

let arr7 = [1, 2, 3];
arr7.splice(0, 2);
console.log(arr7);

let fruits5 = ["apple", "banana", "watermelon"];
fruits5.splice(1, 0, "orange", "watermelon");
console.log(fruits5);

let arr8 = ["a", "b", "c", "d"];
arr8.splice(2, 1, "mango");
console.log(arr8);

let arr9 = [10, 20, 30];
arr9.splice(-3);
console.log(arr9);

let nums12 = [1, 2, 3, 4];
nums12.splice(Math.floor(nums12.length / 2), 0, 99);
console.log(nums12);