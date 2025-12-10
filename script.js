// Canvas Setup for Liquid Background
const canvas = document.getElementById("liquid-bg");
const ctx = canvas.getContext("2d");
let w, h;
function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
resize();
window.onresize = resize;

let t = 0;

// Background Music Setup for Pulsation
const audio = document.getElementById("bg-music");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);
analyser.fftSize = 256;
const dataArray = new Uint8Array(analyser.frequencyBinCount);

// Floating Title Setup
const title = document.getElementById("floating-title");
let titleX = Math.random() * (window.innerWidth - 200);
let titleY = Math.random() * (window.innerHeight - 100);
let dx = 0.3 + Math.random()*0.3;
let dy = 0.3 + Math.random()*0.3;
let trail = [];

// Animate Everything
function animate() {
  requestAnimationFrame(animate);

  // Update music data
  analyser.getByteFrequencyData(dataArray);
  let avg = dataArray.reduce((a,b)=>a+b,0)/dataArray.length; // average frequency
  let pulse = 1 + avg/500; // pulsate between 1 and ~1.5

  // Liquid Gradient Background
  t += 0.005;
  const gradient = ctx.createLinearGradient(0,0,w,h);
  gradient.addColorStop(0, `hsl(${(t*100)%360},80%,55%)`);
  gradient.addColorStop(1, `hsl(${(t*100+120)%360},80%,55%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,w,h);

  // Add current title position to trail
  trail.push({x:titleX, y:titleY, opacity:0.3 + Math.random()*0.3, hue:(t*100)%360});
  if(trail.length>30) trail.shift();

  // Draw trail
  trail.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x + 50, p.y + 20, 25, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${p.hue},100%,75%,${p.opacity})`;
    ctx.fill();
  });

  // Move title
  titleX += dx;
  titleY += dy;
  if(titleX <= 0 || titleX >= window.innerWidth - 200) dx = -dx;
  if(titleY <= 0 || titleY >= window.innerHeight - 50) dy = -dy;

  // Apply pulsation via CSS transform
  title.style.transform = `translate(${titleX}px, ${titleY}px) scale(${pulse})`;
}
animate();

// Enter Site Function with Smooth Fade
function enterSite() {
  audio.muted = false;

  canvas.style.transition = "opacity 2s ease";
  canvas.style.opacity = "0";
  title.style.transition = "opacity 2s ease";
  title.style.opacity = "0";
  document.querySelector(".center-container").style.transition = "opacity 2s ease";
  document.querySelector(".center-container").style.opacity = "0";

  setTimeout(() => {
    window.location.href = "coming-soon.html";
  }, 2000);
}

