
    function print() {
    console.log("გიორგი ჯიოშვილი");
    }

    let interval = setInterval(print, 10000);

    document.getElementById("stop-timer").addEventListener("click", function() {
    clearInterval(interval);
    console.log("STOP Interval");
    });

const myArray = [
    "Hello",       
    1,             
    false,            
    {surname:"ჯიოშვილი", academy:"GOA"},  
    [1, 3, 5]        
];

console.log(myArray);


function traverseArr(arr) {
for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);
}
}

traverseArr([1, 2, 3]);

traverseArr(["mercedes", "bmw", "audi"]);