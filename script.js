/* 🔊 SON RETRO */
const sound = document.getElementById("clickSound");
document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    sound.cloneNode().play();
  });
});

/* 🎉 CONFETTIS */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confettis = [];
let confettiActive = false;

function resize(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

function createConfetti(){
  for(let i=0;i<150;i++){
    confettis.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height - canvas.height,
      r: Math.random()*6+2,
      d: Math.random()*5+2,
      c: `hsl(${Math.random()*360},70%,80%)`
    });
  }
}

function drawConfetti(){
  if(!confettiActive) return;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  confettis.forEach(c=>{
    c.y += c.d;
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
    ctx.fillStyle = c.c;
    ctx.fill();
  });

  requestAnimationFrame(drawConfetti);
}

/* 📄 DOWNLOAD + CONFETTI */
document.getElementById("downloadBtn").addEventListener("click",()=>{
  confettiActive = true;
  createConfetti();
  drawConfetti();

  const link = document.createElement("a");
  link.href = "Bernice.pdf"; // 🔁 remplace ici
  link.download = "Joyeux_Anniversaire_Bernice.pdf";
  link.click();

  setTimeout(()=>confettiActive=false, 5000);
});
