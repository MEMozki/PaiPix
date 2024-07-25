document.getElementById('addPixel').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    // Random position within the canvas
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    const pixelSize = 10; // Size of the pixel

    const x = Math.floor(Math.random() * (canvasWidth / pixelSize)) * pixelSize;
    const y = Math.floor(Math.random() * (canvasHeight / pixelSize)) * pixelSize;

    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;

    // Add click event to remove the pixel
    pixel.addEventListener('click', () => {
        pixel.remove();
    });

    canvas.appendChild(pixel);
});
