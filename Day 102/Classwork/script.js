const paragraph = document.getElementById("p");
const button = document.getElementById("Button");

const texts = [
    "Hello!",
    "Hi?",
    "How are you",
    "JS",
    "Python"
];

button.ChangeText("click", function() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    paragraph.textContent = texts[randomIndex];
});

function showDay() {
    const days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    const today = new Date(); 
    const dayIndex = today.getDay(); 
    document.getElementById("dayParagraph").textContent = "დღეს არის: " + days[dayIndex];
}