const colors = [
  "green",
  "red",
  "blue",
  "indigo",
  "pink",
  "orange",
  "rgba(133, 122, 200)",
  "#f15223",
];
const btn = document.getElementById("btn");
const colorText = document.querySelector(".colorNameText");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
});

// function to get a random Number b/w 0 - 3
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
