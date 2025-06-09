let list1 = new Array("ვაშლი", "ატამი", "მსხალი");
let list2 = new Array(3);  
let list3 = new Array("საზამთრო");


// length და concat გამოყენება
console.log("list1 length:", list1.length); 
console.log("list2 length:", list2.length); 
console.log("list3 length:", list3.length); 

let combinedList = list1.concat(list3);
console.log("combinedList:", combinedList); 
console.log("combinedList length:", combinedList.length); 


function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    while (guess !== randomNumber) {
    guess = parseInt(prompt("შეიყვანე რიცხვი 1-დან 100-მდე:"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("გთხოვ, შეიყვანე სწორ დიაპაზონში მყოფი რიცხვი!");
    } else if (guess > randomNumber) {
        alert("მეტია!");
    } else if (guess < randomNumber) {
        alert("ნაკლებია!");
    } else {
        alert("გილოცავ, გამოიცანი!");
    }
    }
}