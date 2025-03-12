document.addEventListener('DOMContentLoaded', () => {
  // Navigation dynamisch laden
  const navigation = document.querySelector('.contact-wrapper');
  if (navigation) {
    fetch('/sections/contact.html')
      .then((res) => res.text())
      .then((data) => {
        navigation.innerHTML = data;

        // Event auslösen, damit andere Skripte darauf reagieren können
        document.dispatchEvent(new Event('contactLoaded'));
      })
      .catch((err) => console.error('Fehler beim Laden Contact:', err));
  }
});

document.addEventListener('contactLoaded', () => {
  console.log(' `contact.html` ist geladen!');

  // Prüfen, ob ein Canvas existiert
  const canvases = document.querySelectorAll('.noiseCanvas');

  if (canvases.length === 0) {
    console.error('⚠ Fehler: Kein `.noiseCanvas`-Element gefunden!');
    return;
  }

  console.log(` ${canvases.length} Canvas-Element(e) gefunden!`);

  // Noise-Effekt starten
  canvases.forEach((canvas) => {
  const ctx = canvas.getContext('2d');

  let mouseX = -500,
    mouseY = -500,
    mouseMoved = false;

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }

  function drawGrid(ctx, cellSize = 200) {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    //  Hintergrundrauschen erzeugen
    const iData = ctx.createImageData(w, h);
    const buffer32 = new Uint32Array(iData.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i +=7) {
      // Verändert nur jedes 7. Pixel (sanfteres Rauschen)
      if (Math.random() < 0.3) buffer32[i] = 0xa5a5a5a5; // Hellgraues Rauschen
    }

    ctx.putImageData(iData, 0, 0);

    //  Rasterlinien zeichnen
    ctx.strokeStyle = 'rgba(253, 251, 236, 0.3)'; // Weiße Linien mit Transparenz
    ctx.lineWidth = 1;

    for (let x = 0; x < w; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y < h; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    //  Maus-Hover Effekt (Rauschen verschwindet)
    if (mouseMoved) {
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        250
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Voll sichtbar
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    setTimeout(() => requestAnimationFrame(() => drawGrid(ctx, cellSize)), 80);
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX * window.devicePixelRatio;
    mouseY = e.clientY * window.devicePixelRatio;
    mouseMoved = true;
  });

  drawGrid(ctx, 200);
  });
});

// #################################################################################################
