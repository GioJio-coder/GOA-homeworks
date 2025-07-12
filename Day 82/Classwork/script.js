function sumNums() {
    let sum = 0;
    let i = 0;

    while (i <= 10) {
    if (i % 2 !== 0) {
        i++;
    }

    sum += i;
    i++;
}

    console.log("even numbers:", sum);
}

sumNums();


let dayNum = 1; 

switch (dayNum) {
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("Sunday");
    break;
    console.log("დაწერე რიცხვი 1-დან 7-ჩათ.");
}


const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}