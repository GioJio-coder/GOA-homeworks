document.getElementById("alert").addEventListener("click", function() {
    alert("Button was clicked!");
});

document.getElementById("Input").addEventListener("click", function() {
    console.log("Input value:", this.value);
});

document.getElementById("imgBtn").addEventListener("click", function() {
    let img = document.getElementById("Image");
    img.style.display = img.style.display === "none",  "block",  "none";
});