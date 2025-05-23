function compareNums(num1, num2) {
    console.log(`${num1} > ${num2}:`, num1 > num2);
    console.log(`${num1} >= ${num2}:`, num1 >= num2);
    console.log(`${num1} < ${num2}:`, num1 < num2);
    console.log(`${num1} <= ${num2}:`, num1 <= num2);
    console.log(`${num1} == ${num2}:`, num1 == num2);
    console.log(`${num1} === ${num2}:`, num1 === num2);
    console.log(`${num1} != ${num2}:`, num1 != num2);
    console.log(`${num1} !== ${num2}:`, num1 !== num2);}

compareNums(1, 3);
compareNums(3, 5);
compareNums(5, '8');


function Submit(event) {
    let inputValue = document.("inputField").value;  
    alert(inputValue);  
}