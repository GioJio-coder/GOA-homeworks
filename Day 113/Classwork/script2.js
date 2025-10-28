
function isEven(num) {
return num % 2 === 0 ? true : false;
}

export default isEven;




    let savedword = localStorage.getItem("word");

    if (!savedWord) {
    let userWord = prompt("შეიყვანეთ ნებისმიერი სიტყვა:");
    if (userWord) {
        localStorage.setItem("word", userWord); 
        savedword = userWord;
    }
    }

    const outputParagraph = document.getElementById("output");
    outputParagraph.textContent = savedWord ? savedWord : "The word isnot saved. ";
