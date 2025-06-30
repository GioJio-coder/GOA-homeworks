
    let paragraphs = document.getElementsByTagName("p");

    let paragraphTexts = [];

    for (let x = 0; x < paragraphs.length; x++) {
    }

    console.log(paragraphTexts);

    let div = document.getElementById("myDiv");


    for (let i = 1; i <= 5; i++) {

    let p = document.createElement("p");

    p.textContent = `ეს არის პარაგრაფი ნომერი ${i}`;

    div.appendChild(p);}



    const div = document.getElementById("myDiv");

    const paragraphs = div.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "green"; 
    paragraphs[i].style.backgroundColor = "black";}