// Create canvas for red matrix background
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01"; // can add more symbols like *#$@ for effect
const fontSize = 16; // slightly bigger for visibility
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  // Slightly darker trail to make dots pop
  ctx.fillStyle = "rgba(10,10,10,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#e63946"; // red letters
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    // Reset drop randomly
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Run ~30FPS
setInterval(drawMatrix, 33);

// Adjust canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});
