const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pixelSize = 10;
const drawInterval = 100;  // Time in milliseconds

function getRandomPosition() {
    const x = Math.floor(Math.random() * canvas.width / pixelSize) * pixelSize;
    const y = Math.floor(Math.random() * canvas.height / pixelSize) * pixelSize;
    return { x, y };
}

function drawPixel() {
    const { x, y } = getRandomPosition();
    ctx.fillStyle = 'cyan';
    ctx.fillRect(x, y, pixelSize, pixelSize);
}

function erasePixel() {
    const { x, y } = getRandomPosition();
    ctx.clearRect(x, y, pixelSize, pixelSize);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    const shouldDraw = Math.random() > 0.5;
    if (shouldDraw) {
        drawPixel();
    } else {
        erasePixel();
    }

    // Randomly clear the canvas with a small probability
    if (Math.random() < 0.01) {
        clearCanvas();
    }
}, drawInterval);
