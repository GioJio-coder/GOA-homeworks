function userLoop() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    if (num1 <= num2) {
    for (let x = num1; x <= num2; x++) {
        console.log(x);
    }
    } else {
    for (let x = num2; x <= num1; x++) {
        console.log(x);
    }
    }
}

// 1) Console-ში გადმოტანა
function changeElements() {
    let input = document.getElementById("Input");
    console.log("Input Value:", input.value);

// 2) ღილაკის შეცვლა
    let button = document.getElementById("Button");
    button.style.backgroundColor = "black";
    button.style.color = "white";

// 3) სათაურის ტექსტის გასწორება 
    let title = document.getElementById("Title");
    title.style.textAlign = "center";

// 4) ვებსაიტის მთლიანი ფონის ფერის შეცვლა
    document.body.style.backgroundColor = "green";
}