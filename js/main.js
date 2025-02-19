// function el(css) {
//     return document.querySelector(css)
// }







// let torch =document.getElementsByClassName('image')[0]


// function moveTorch(e) {
//     torch.style.clipPath = `circle(300px at ${e.clientX}px ${e.clientY}px)`;
// }
// function moveTorch(e) {
//    document.documentElement.style.setProperty('--cursorX',`${e.clientX}px`)
//    document.documentElement.style.setProperty('--cursorY',`${e.clientY}px`)
// }




// document.addEventListener('mousemove', moveTorch);


// function moveTorch(e) {
//   document.documentElement.style.setProperty('--cursorX', `${e.clientX}px`);
//   document.documentElement.style.setProperty('--cursorY', `${e.clientY}px`);
// }

// document.addEventListener('mousemove', moveTorch);const canvas = document.querySelector('canvas'),

// ============================================================================================================================

// const canvas = document.querySelector('canvas'),
//   ctx = canvas.getContext('2d');

// canvas.width = canvas.height = 128;

// resize();
// window.onresize = resize;

// function resize() {
//   canvas.width = window.innerWidth * window.devicePixelRatio;
//   canvas.height = window.innerHeight * window.devicePixelRatio;
//   canvas.style.width = window.innerWidth + 'px';
//   canvas.style.height = window.innerHeight + 'px';
// }

// function noise(ctx) {
//   const w = ctx.canvas.width,
//     h = ctx.canvas.height,
//     iData = ctx.createImageData(w, h),
//     buffer32 = new Uint32Array(iData.data.buffer),
//     len = buffer32.length;

//   let i = 0;
//   for (; i < len; i+=2) {
//     if (Math.random() < 0.5) buffer32[i] = 0x32323232; // Weißes Rauschen
//   }

//   ctx.putImageData(iData, 0, 0);
// }

// // Variablen für Mausposition
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// // Mausbewegung speichern
// document.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// function render() {
//   noise(ctx);

//   // Kreis um die Maus zeichnen (um Rauschen zu entfernen)
//   ctx.globalCompositeOperation = 'destination-out'; // Macht den Bereich transparent
//   ctx.beginPath();
//   ctx.arc(
//     mouseX * window.devicePixelRatio,
//     mouseY * window.devicePixelRatio,
//     100,
//     0,
//     Math.PI * 2
//   );
//   ctx.fill();
//   ctx.globalCompositeOperation = 'source-over'; // Setzt den normalen Modus zurück

//   requestAnimationFrame(render);
//   // setTimeout(() => requestAnimationFrame(render), 100); // Langsamer, aber flüssig
// }

// // Start der Animation
// render();
// ============================================================================================================================

// const canvas = document.getElementById('noiseCanvas'),
//   ctx = canvas.getContext('2d');

// resize();
// window.addEventListener('resize', resize);

// function resize() {
//   canvas.width = window.innerWidth * window.devicePixelRatio;
//   canvas.height = window.innerHeight * window.devicePixelRatio;
//   canvas.style.width = window.innerWidth + 'px';
//   canvas.style.height = window.innerHeight + 'px';
// }

// function noise(ctx) {
//   const w = ctx.canvas.width,
//     h = ctx.canvas.height,
//     iData = ctx.createImageData(w, h),
//     buffer32 = new Uint32Array(iData.data.buffer),
//     len = buffer32.length;

//   for (let i = 0; i < len; i +=2) {
//     // Ändert nur jedes 5. Pixel (sanfteres Rauschen)
//     if (Math.random() < 0.5) buffer32[i] = 0x59595959;
//   }

//   ctx.putImageData(iData, 0, 0);
// }

// // Maus-Variablen
// let mouseX = 0,
//   mouseY = 0;
// let mouseMoved = false; // Startet als "false", also kein Loch

// // Mausbewegung erfassen und Loch aktivieren
// document.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX * window.devicePixelRatio;
//   mouseY = e.clientY * window.devicePixelRatio;
//   mouseMoved = true; // Sobald sich die Maus bewegt, wird das Loch sichtbar
// });

// function render() {
//   noise(ctx);

//   if (mouseMoved) {
//     // Das Maus-Loch erst aktivieren, wenn die Maus bewegt wurde
//     // Radialen Verlauf erstellen
//     const gradient = ctx.createRadialGradient(
//       mouseX,
//       mouseY,
//       0,
//       mouseX,
//       mouseY,
//       250
//     );
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Voll sichtbar (keine Rauschen)
//     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent (Rauschen wird sichtbar)

//     // Den Verlauf anwenden
//     ctx.globalCompositeOperation = 'destination-out';
//     ctx.beginPath();
//     ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
//     ctx.fillStyle = gradient;
//     ctx.fill();
//     ctx.globalCompositeOperation = 'source-over';
//   }

//   setTimeout(() => requestAnimationFrame(render), 70); // Verlangsamt das Rauschen
// }

// // Starte die Animation
// render();
// ============================================================================================================================
// const canvas = document.getElementById('noiseCanvas'),
//   ctx = canvas.getContext('2d');

// let mouseX = -500,
//   mouseY = -500,
//   mouseMoved = false;

// resize();
// window.addEventListener('resize', resize);
// window.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX * window.devicePixelRatio;
//   mouseY = e.clientY * window.devicePixelRatio;
//   mouseMoved = true;
// });

// function resize() {
//   canvas.width = window.innerWidth * window.devicePixelRatio;
//   canvas.height = window.innerHeight * window.devicePixelRatio;
//   canvas.style.width = window.innerWidth + 'px';
//   canvas.style.height = window.innerHeight + 'px';
// }

// function drawGrid(ctx, cellSize = 20) {
//   const w = ctx.canvas.width;
//   const h = ctx.canvas.height;

//   //  Hintergrundrauschen erzeugen
//   const iData = ctx.createImageData(w, h);
//   const buffer32 = new Uint32Array(iData.data.buffer);
//   const len = buffer32.length;

//   for (let i = 0; i < len; i += 7) {
//     if (Math.random() < 0.4) buffer32[i] = 0xa5a5a5a5; // Hellgraues Rauschen
//   }

//   ctx.putImageData(iData, 0, 0);

//   // Raster aus kleinen Punkten zeichnen
//   ctx.fillStyle = 'white'; // Farbe der Rasterpunkte
//   for (let x = 0; x < w; x += cellSize) {
//     for (let y = 0; y < h; y += cellSize) {
//       ctx.fillRect(x, y, 2, 2);
//     }
//   }

//   //  Maus-Hover Effekt (wenn Maus bewegt wurde)
//   if (mouseMoved) {
//     const gradient = ctx.createRadialGradient(
//       mouseX,
//       mouseY,
//       0,
//       mouseX,
//       mouseY,
//       250
//     );
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Voll sichtbar (Rauschen verschwindet)
//     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Weiche Kante (Rauschen bleibt)

//     ctx.globalCompositeOperation = 'destination-out';
//     ctx.beginPath();
//     ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
//     ctx.fillStyle = gradient;
//     ctx.fill();
//     ctx.globalCompositeOperation = 'source-over';
//   }

//   //  Rauschen verlangsamen (70ms statt 60fps)
//   setTimeout(
//     () => requestAnimationFrame(drawGrid.bind(null, ctx, cellSize)),
//     70
//   );
// }

// drawGrid(ctx, 20);

// ============================================================================================================================

// const canvas = document.getElementById('noiseCanvas'),
//   ctx = canvas.getContext('2d');

// let mouseX = -500,
//   mouseY = -500,
//   mouseMoved = false;

// resize();
// window.addEventListener('resize', resize);
// window.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX * window.devicePixelRatio;
//   mouseY = e.clientY * window.devicePixelRatio;
//   mouseMoved = true;
// });

// function resize() {
//   canvas.width = window.innerWidth * window.devicePixelRatio;
//   canvas.height = window.innerHeight * window.devicePixelRatio;
//   canvas.style.width = window.innerWidth + 'px';
//   canvas.style.height = window.innerHeight + 'px';
// }

// function drawGrid(ctx, cellSize = 200) {
//   // 50px große Zellen
//   const w = ctx.canvas.width;
//   const h = ctx.canvas.height;

//   //  Hintergrundrauschen erzeugen
//   const iData = ctx.createImageData(w, h);
//   const buffer32 = new Uint32Array(iData.data.buffer);
//   const len = buffer32.length;

//   for (let i = 0; i < len; i += 7) {
//     if (Math.random() < 0.3) buffer32[i] = 0xa5a5a5a5; // Hellgraues Rauschen
//   }

//   ctx.putImageData(iData, 0, 0);

//   //  Raster zeichnen (vertikale + horizontale Linien)
//   ctx.strokeStyle = 'rgba(253, 251, 236, 0.3)'; // Weiße Linien mit Transparenz
//   ctx.lineWidth = 1;

//   for (let x = 0; x < w; x += cellSize) {
//     ctx.beginPath();
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, h);
//     ctx.stroke();
//   }

//   for (let y = 0; y < h; y += cellSize) {
//     ctx.beginPath();
//     ctx.moveTo(0, y);
//     ctx.lineTo(w, y);
//     ctx.stroke();
//   }

//   //  Maus-Hover Effekt (Rauschen verschwinden lassen)
//   if (mouseMoved) {
//     const gradient = ctx.createRadialGradient(
//       mouseX,
//       mouseY,
//       0,
//       mouseX,
//       mouseY,
//       250
//     );
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
//     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

//     ctx.globalCompositeOperation = 'destination-out';
//     ctx.beginPath();
//     ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
//     ctx.fillStyle = gradient;
//     ctx.fill();
//     ctx.globalCompositeOperation = 'source-over';
//   }

//   setTimeout(
//     () => requestAnimationFrame(drawGrid.bind(null, ctx, cellSize)),
//     80
//   );
// }

// drawGrid(ctx, 200);
// =========================================================================================================
const canvases = document.querySelectorAll('.noiseCanvas'); // Alle Canvas-Elemente mit dieser Klasse auswählen

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

