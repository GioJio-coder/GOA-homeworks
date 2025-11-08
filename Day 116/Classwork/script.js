const list = document.getElementById("List");

    if (Math.random() > 0.5) {
    const li1 = document.createElement("li");
    li1.textContent = "This is First Element"; 
    list.appendChild(li1);
    }

    const li2 = document.createElement("li");
    if (Math.random() > 0.5) {
    li2.textContent = "hello";
    } else {
    li2.textContent = "goodbye";
    }
    list.appendChild(li2);



const interests = [
"პროგრამირება",
"სპორტი"
];

const ul = document.createElement('ul');

interests.map((interest) => {
const li = document.createElement('li');
li.textContent = interest; 
li.setAttribute('key', interest);
ul.appendChild(li);
});

