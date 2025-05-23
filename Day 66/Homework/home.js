
let num1 = 10;
let num2 = 10;
console.log("Are the numbers equal?", num1 === num2);

let num3 = 15;
let num4 = 10;
console.log("Is the first number greater than the second?", num3 > num4); 

let num5 = 8;
let num6 = 12;
console.log("Is the first number less than or equal to the second?", num5 <= num6);

let num7 = 7;
let num8 = 3;
console.log("Are the numbers not equal?", num7 !== num8); 

let num9 = 120;
console.log("Is the number greater than or equal to 100?", num9 >= 100); 

let result = confirm("Do you want to proceed?");
console.log(result);  

function Box() {
    let user = confirm("Are you sure you want to continue?");
    console.log(user);  }

let result0 = confirm("Do you want to proceed?");
alert("Your response was: " + result0);