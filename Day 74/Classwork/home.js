
let paragraph = document.getElementById('P');

function Text() {
paragraph.style.textAlign = "center";
}

paragraph.onmouseover = centerText;




let button = document.getElementById('Button');

button.addEventListener('click', function(event) {
console.log(event);

document.body.style.backgroundColor = 'black';

document.body.style.color = 'white';});



let link = document.getElementById('Link');

link.addEventListener('pointerover', function(a) {
    let target = a.target;

    console.log("Target Element:", target);
});