const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "YESSS FINALLYY FINALLYYY OFFICIALLLY JHEEVIAAAHHH!! HAHAHHAHAHA. Thank you for accepting me to your life love. 💚🌼";
  yesBtn.textContent = "Labag sa loob na YES! 💚";
  yesBtn.disabled = true;
  timeBtn.disabled = true;
  celebrate();
});

timeBtn.addEventListener("click", () => {
  response.textContent = "That's completely okay. Kaya ko la, so what? may balik yan!💚";
  timeBtn.textContent = "Better luck next time, bossinggg!";
  brokenHearts();
});

function celebrate() {
  const layer = document.querySelector(".petal-layer");
  for (let i = 0; i < 28; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = Math.random() > 0.35 ? "✿" : "♡";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (3 + Math.random() * 4) + "s";
    petal.style.animationDelay = Math.random() * 1.5 + "s";
    petal.style.fontSize = (14 + Math.random() * 18) + "px";
    layer.appendChild(petal);
    setTimeout(() => petal.remove(), 8500);
  }
}

function brokenHearts() {
  const layer = document.querySelector(".petal-layer");

  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("span");

    heart.className = "petal";
    heart.textContent = "💔";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    heart.style.animationDelay = Math.random() * 1.5 + "s";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    layer.appendChild(heart);

    setTimeout(() => heart.remove(), 8500);
  }
}
