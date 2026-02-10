let messageIndex = 0;

const messages = [
  "Ти впевнена? 🥺",
  "А якщо я дуже прошу? 💔",
  "Я ж старався 😭",
  "Ну будь ласка 💞",
  "Я без тебе ніяк… 😔",
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
function next(n) {
  document.getElementById("s" + n).classList.remove("active");
  document.getElementById("s" + (n + 1)).classList.add("active");
}

function heart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}

setInterval(heart, 300);
