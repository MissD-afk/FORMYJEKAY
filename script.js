const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "YESSS FINALLYY FINALLYYY OFFICIALLLY JHEEVIAAAHHH!! HAHAHHAHAHA. Thank you for accepting me to your life love. 💚🌼";
  yesBtn.textContent = "A very happy YES! 💚";
  yesBtn.disabled = true;
  timeBtn.disabled = true;
  celebrate();
});

timeBtn.addEventListener("click", () => {
  response.textContent = "That's completely okay. Kaya ko la, so what? may balik yan!💚";
  timeBtn.textContent = "Thank you for understanding";
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
