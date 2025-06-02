let number = Int(prompt("Enter a number to check if it is even or odd:"));
if (number % 2 === 0) {
    alert(number + "Even.");
} else {
    alert(number + "Odd.");
}

let score = Int(prompt("Enter your score to get your grade:"));
if (score >= 90) {
    alert("Grade: A");
} else if (score >= 80) {
    alert("Grade: B");
} else if (score >= 70) {
    alert("Grade: C");
} else if (score >= 60) {
    alert("Grade: D");
} else {
    alert("Grade: Fail");
}

let num1 = Float(prompt("Enter the first number:"));
let num2 = Float(prompt("Enter the second number:"));
let num3 = Float(prompt("Enter the third number:"));
if (num1 === num2 && num2 === num3) {
    alert("All three numbers are equal.");
} else if (num1 >= num2 && num1 >= num3) {
    alert("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert("The largest number is: " + num2);
} else {
    alert("The largest number is: " + num3);
}

let char = prompt("Enter a single alphabet symbol:").LowerCase();
if (char.length !== 1 || !char.match([a-z])) {
    alert("Please enter a single alphabet symbol.");
} else if ("aeiou".includes(char)) {
    alert(char + "Vowel.");
} else {
    alert(char + "Consonant.");
}

let num = Int(prompt("Enter a number to check divisibility by 3 and 5:"));
if (num % 3 === 0 && num % 5 === 0) {
    alert("Divisible by both 3 and 5");
} else if (num % 3 === 0) {
    alert("Divisible by 3 only");
} else if (num % 5 === 0) {
    alert("Divisible by 5 only");
} else {
    alert("Not divisible by either 3 or 5");
}

let age = Int(prompt("Enter your age:"));
if (age >= 0 && age <= 12) {
    alert("You are a Child.");
} else if (age >= 13 && age <= 19) {
    alert("You are a Teenager.");
} else if (age >= 20 && age <= 59) {
    alert("You are an Adult.");
} else if (age >= 60) {
    alert("You are a Senior.");
} else {
    alert("Invalid age entered.");
}

let x = 1;
while (x <= 5) {
    console.log(x);
    x++;
}

let i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}

let y = 10;
while (y >= 1) {
    console.log(y);
    y--;
}

for (let z = 1; z <= 10; z++) {
    console.log(z);
}

for (let v = 1; v <= 5; v++) {
    console.log(v * 3);
}

for (let n = 10; n >= 1; n--) {
    console.log(n);
}

for (let r = 1; r <= 20; r++) {
    if (r % 2 === 0) {
        console.log(r);
    }
}

let sum = 0;
for (let a = 1; a <= 5; a++) {
    sum += a;
}
console.log("Sum from 1 to 5 is:", sum);