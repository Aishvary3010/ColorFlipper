const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".colorNameText");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        hexColor += hex[randomNumber];
    }

    colorText.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
