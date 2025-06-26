const button = document.getElementById('Btn');
const image = document.getElementById('Image');

    button.addEventListener('click', function () {
    if (image.style.display === 'none') {
        image.style.display = 'block';
        button.textContent = 'Hide Image';
    } else {
        image.style.display = 'none';
        button.textContent = 'Show Image';
    }
    });


let List = ["ვაშლი", "ბანანი", "ყურძენი", "ფორთოხალი", "საზამთრო"];

let change = setInterval(function () {
    console.log("1:");
    for (let x = 0; x < List.length; x++) {
    console.log(List[x]);
    }
    console.log("-");
}, 1000);

Timeout(function () {
    for (let i = 0; i < List.length; i++) {
    List[i] = " Change Element #" + (i + 1);
    }
    console.log("Change List!");
}, 4000);

Timeout(function () {
    clearInterval(change);
    console.log("Stop Interval");
}, 7000);