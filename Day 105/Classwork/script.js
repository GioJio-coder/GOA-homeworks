function hasOwn(obj, key) {
return obj.Property(key);
}

const person = { name: "Gio", age: 14 };
const car = { brand: "BMW" };
const phone = { brand: "Samsung" };

console.log(hasOwn(person, "name"));  
console.log(hasOwn(car, "year"));     
console.log(hasOwn(phone, "brand"));  