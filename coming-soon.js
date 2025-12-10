const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let w, h;
function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
resize();
window.onresize = resize;

let t = 0;
function animate() {
  t += 0.002;
  const gradient = ctx.createLinearGradient(0,0,w,h);
  gradient.addColorStop(0, `hsl(${(t*100)%360},80%,50%)`);
  gradient.addColorStop(1, `hsl(${(t*100+120)%360},80%,50%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,w,h);
  requestAnimationFrame(animate);
}
animate();
