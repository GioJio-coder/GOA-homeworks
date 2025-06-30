
const liTags = document.querySelectorAll('li');
liTags.forEach(li => {
console.log(li.textContent);
});

const divTags = document.querySelectorAll('div');
divTags.forEach(div => {
div.style.backgroundColor = 'lightgray';
});

const imgTag = document.querySelector('img');
if (imgTag) {
imgTag.src = 'https://via.placeholder.com/150'; 
}

const errors = document.querySelectorAll('.error');
errors.forEach(el => {
el.style.color = 'red';
});


const items = document.querySelectorAll('.item');
items.forEach(el => {
console.log(el.innerHTML);
});

const firstButton = document.querySelector('.button');
if (firstButton) {
firstButton.textContent = 'Clicked!';
}

const div = document.getElementById('slide');
let leftPosition = 0;

setInterval(() => {
    leftPosition += 5;
    div.style.left = leftPosition + 'px';
}, 100);

const interval = setInterval(() => {
leftPosition += 5;
div.style.left = leftPosition + 'px';

if (leftPosition >= 500) {
    clearInterval(interval);
}
}, 100);
