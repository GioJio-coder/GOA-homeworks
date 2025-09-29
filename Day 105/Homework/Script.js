
let obj1 = {a:1, b:2, d:"hi", e:true};
console.log(Object.keys(obj1));
console.log(Object.keys(obj1).length);

function keysUpper(o){ return Object.keys(o).map(k=>k.toUpperCase()); }
console.log(keysUpper(obj1));

console.log(Object.keys(obj1).includes("c"));

let nested = {i:1, x:{y:2,n:3}, z:"ok"};
console.log(Object.keys(nested));

let obj2 = {a:1, b:2, c:"hi", d:4, e:true};
console.log(Object.values(obj2));
console.log(Object.values(obj2).length);

console.log(Object.values(obj2).includes("hi"));

let obj3 = {a:1, b:12, c:"ok", d:5, e:20};
console.log(Object.entries(obj3));

function printObj(o){ Object.entries(o).forEach(([k,v])=>console.log(`${k}: ${v}`)); }
printObj(obj3);

let arr = Object.entries(obj3).map(([k,v])=>`${k}=${v}`);
console.log(arr);

function filterGt10(o){ return Object.fromEntries(Object.entries(o).filter(([k,v])=>v>10)); }
console.log(filterGt10(obj3));


let obj = {a:1, b:2, c:3};
console.log("b" in obj);

console.log("x" in obj);

console.log(Object.hasOwn(obj, "toString"));

obj.d = 4;
console.log(Object.hasOwn(obj, "d"));

delete obj.a;
console.log(Object.hasOwn(obj, "a"));