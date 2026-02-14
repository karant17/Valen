const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const btnGroup = document.getElementById("btn-group");

yesBtn.addEventListener("click", () => {
  // Change text
  question.innerHTML = "Yay, Congratulations!!! For always being mine❤️";

  // Change gif
  gif.src = "https://media.giphy.com/media/UUnoFuiomAN9ueUNP/giphy.gif";

  // Remove old buttons
  btnGroup.innerHTML = "";

  // Create new button
  const nextBtn = document.createElement("a");
  nextBtn.href = "index1.html";
  nextBtn.textContent = "Continue 💌";

  // Style it (inline so it works without CSS)
  nextBtn.style.display = "inline-block";
  nextBtn.style.marginTop = "20px";
  nextBtn.style.padding = "12px 20px";
  nextBtn.style.background = "#ff4d6d";
  nextBtn.style.color = "#fff";
  nextBtn.style.textDecoration = "none";
  nextBtn.style.borderRadius = "8px";
  nextBtn.style.fontSize = "16px";

  btnGroup.appendChild(nextBtn);
});

// Keep the playful No button
noBtn.addEventListener("mouseover", () => {
  const rect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
