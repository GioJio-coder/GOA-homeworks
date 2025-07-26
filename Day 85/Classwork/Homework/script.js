
function printArg(...arg) {
    console.log("Printing all arguments:");
    for (let arg of arg) {
        console.log(arg);
    }
}

function countArgs(...arg) {
    console.log(`Total number of arguments: ${arg.length}`);
}

function NumericArg(...arg) {
    let total = 0;
    for (let arg of arg) {
        if (typeof arg === 'number') {
            total += arg;
        }
    }
    console.log(`Sum of numeric arguments: ${total}`);
}

function printUntilZero(...arg) {
    console.log("Printing arguments until 0 is found:");
    for (let arg of arg) {
        if (arg === 0) {
            console.log("0 found, stopping.");
            break;
        }
        console.log(arg);
    }
}

function printOnlyNumbers(...arg) {
    console.log("Printing only numeric arguments:");
    for (let arg of arg) {
        if (typeof arg === 'string') {
            continue;
        }
        console.log(arg);
    }
}



const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(3, 4)); 


setInterval(function() {
    console.log("This message logs every 2 seconds");
}, 2000);



document.getElementById("Button").addEventListener("click", function() {
        alert("Button was clicked!");
    });

(function() {
    console.log("Hello, world!");
})();


(function(num) {
    console.log(`Square of ${num} is:`, num * num);
})(5); 


(function(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log("Sum of array elements:", sum);
})([1, 2, 3, 4, 5]);

