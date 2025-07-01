
    // Homework 4
    const body = document.body;
    for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    body.appendChild(circle);
    let pos = 0;
    setInterval(() => {
        pos += 10;
        circle.style.left = pos + "px";
    }, 200);
    }

    // Homework 6
    const Btn = document.getElementById("Btn");
    const box = document.getElementById("Box");
    let movePos = 0;
    Btn.onclick = () => {
    movePos += 20;
    box.style.left = movePos + "px";
    box.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    };

    // Homework 7
    const input = document.querySelector('input[type="text"]');
    input.addEventListener("input", () => {
    input.style.backgroundColor = input.value.length > 20 ? "red" : "white";
    });

    // Homework 8
    const dynamicList = document.createElement("ul");
    document.body.appendChild(dynamicList);
    let msgCount = 0;
    const interval = setInterval(() => {
    msgCount++;
    const li = document.createElement("li");
    li.textContent = `Message ${msgCount}`;
    dynamicList.appendChild(li);
    if (msgCount >= 10) clearInterval(interval);
    }, 2000);

    // Homework 9
    const Btn = document.getElementById("hideBtn");
    const toggleDiv = document.getElementById("toggleDiv");
    Btn.onclick = () => {
    toggleDiv.style.display = "none";
    setTimeout(() => {
        toggleDiv.style.display = "block";
    }, 5000);
    };

    // Homework 10
    function countElementsByTag() {
    const tag = prompt("Enter a tag name (e.g., div, p, img)").toLowerCase();
    const count = document.getElementsByTagName(tag).length;
    alert(`There are ${count} <${tag}> elements on the page.`);
    }