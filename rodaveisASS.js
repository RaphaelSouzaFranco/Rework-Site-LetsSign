// ==================== CANVAS DE ASSINATURA ====================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function ajustarCanvas() {
    const style = getComputedStyle(canvas);
    const width = parseInt(style.width);
    const height = parseInt(style.height);
    canvas.width = width;
    canvas.height = height;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
  }
  
  ajustarCanvas();
  window.addEventListener('resize', ajustarCanvas); // re-ajusta em redimensionamentos
  
let desenhando = false;

function getPos(evt) {
    const rect = canvas.getBoundingClientRect();
    if (evt.touches) {
        return {
            x: evt.touches[0].clientX - rect.left,
            y: evt.touches[0].clientY - rect.top
        };
    } else {
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

function iniciarDesenho(evt) {
    desenhando = true;
    const pos = getPos(evt);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
}

function desenhar(evt) {
    if (!desenhando) return;
    evt.preventDefault();
    const pos = getPos(evt);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
}

function pararDesenho() {
    desenhando = false;
    ctx.closePath();
}

canvas.addEventListener('mousedown', iniciarDesenho);
canvas.addEventListener('mousemove', desenhar);
canvas.addEventListener('mouseup', pararDesenho);
canvas.addEventListener('mouseout', pararDesenho);
canvas.addEventListener('touchstart', iniciarDesenho);
canvas.addEventListener('touchmove', desenhar);
canvas.addEventListener('touchend', pararDesenho);

document.getElementById('limpar').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('confirmar').addEventListener('click', () => {
    alert('Assinatura confirmada!');
});

