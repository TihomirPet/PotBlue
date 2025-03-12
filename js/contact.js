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

//  Event-Listener außerhalb von fetch setzen!
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

    function drawNoise(ctx) {
      const w = ctx.canvas.width,
        h = ctx.canvas.height;
      const iData = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(iData.data.buffer);
      for (let i = 0; i < buffer32.length; i += 7) {
        if (Math.random() < 0.3) buffer32[i] = 0xa5a5a5a5; // Hellgraues Rauschen
      }
      ctx.putImageData(iData, 0, 0);
    }

    function render() {
      drawNoise(ctx);
      requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX * window.devicePixelRatio;
      mouseY = e.clientY * window.devicePixelRatio;
      mouseMoved = true;
    });

    render();
  });
});

// #################################################################################################
