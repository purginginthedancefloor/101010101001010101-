// === Liquid Canvas Background === //
const canvas = document.getElementById("liquid-bg");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let t = 0;
function animate() {
  t += 0.005;

  // Liquid wave effect
  let gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, `hsl(${(t * 100) % 360}, 80%, 55%)`);
  gradient.addColorStop(1, `hsl(${(t * 100 + 120) % 360}, 80%, 55%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  requestAnimationFrame(animate);
}
animate();

// === Portal Transition === //
function enterSite() {
  const audio = document.getElementById("bg-music");
  audio.muted = false;  // unmute when user interacts

  // Quick mystical fade-out
  document.body.style.transition = "1.5s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "home.html"; // go to main site
  }, 1500);
}
