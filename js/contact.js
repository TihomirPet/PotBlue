// document.addEventListener('DOMContentLoaded', () => {
//   // Navigation dynamisch laden
//   const navigation = document.querySelector('.contact-wrapper');
//   if (navigation) {
//     fetch('/sections/contact.html')
//       .then((res) => res.text())
//       .then((data) => {
//         navigation.innerHTML = data;

//         // Event auslösen, damit andere Skripte darauf reagieren können
//         document.dispatchEvent(new Event('contactLoaded'));
//       })
//       .catch((err) => console.error('Fehler beim Laden Contact:', err));
//   }
// });

// // Guard gegen Mehrfach-Initialisierung: falls `contactLoaded` mehrmals
// // feuert (z.B. bei Navigation zwischen Unterseiten, erneutes Nachladen
// // von contact.html), soll der komplette Setup-Block trotzdem nur EINMAL
// // laufen. Sonst stapeln sich resize-/wheel-Listener und IntersectionObserver
// // bei jedem erneuten Laden -> ruckeliges/instabiles Verhalten.
// let alreadyInitialized = false;

// document.addEventListener('contactLoaded', () => {
//   console.log('`contact.html` ist geladen!');

//   if (alreadyInitialized) {
//     console.log(
//       'Setup bereits initialisiert - überspringe erneute Initialisierung.',
//     );
//     return;
//   }
//   alreadyInitialized = true;

//   // Prüfen, ob ein Canvas existiert
//   const canvases = document.querySelectorAll('.noiseCanvas');

//   if (canvases.length === 0) {
//     console.error('⚠ Fehler: Kein `.noiseCanvas`-Element gefunden!');
//     return;
//   }

//   console.log(`${canvases.length} Canvas-Element(e) gefunden!`);

//   // --- Hilfsfunktion: Alle dynamischen Inhalte geladen ---
//   function waitForComponents() {
//     return new Promise((resolve) => {
//       const check = () => {
//         const dynamicSections = document.querySelectorAll(
//           'section, #projects, .carousel-item, .carousel-item-two, .carousel-item-three',
//         );
//         if (dynamicSections.length > 0) {
//           resolve(dynamicSections);
//         } else {
//           setTimeout(check, 50);
//         }
//       };
//       check();
//     });
//   }

//   waitForComponents().then((sections) => {
//     const main = document.querySelector('main') || document.documentElement;

//     // -------------------- Floating / Stagger --------------------
//     const observer = new IntersectionObserver(
//       (entries, obs) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const floatEls = entry.target.querySelectorAll('.float');
//             floatEls.forEach((el, i) => {
//               el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//               el.style.transitionDelay = `${i * 0.2}s`;
//               el.classList.add('visible');
//             });
//             obs.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 },
//     );

//     sections.forEach((sec) => observer.observe(sec));

//     // -------------------- Grid Canvas (statisch, ohne Rauschen) --------------------
//     // Wird nur einmal gezeichnet (und bei Resize neu) - kein Animation-Loop.
//     const gridCanvases = document.querySelectorAll('.noiseCanvas');
//     gridCanvases.forEach((canvas) => {
//       const ctx = canvas.getContext('2d');

//       // 50 = gewünschte Zellgröße in CSS-Pixeln (optische Größe).
//       const CELL_SIZE_CSS_PX = 50;

//       function resizeCanvas() {
//         canvas.width = window.innerWidth * window.devicePixelRatio;
//         canvas.height = window.innerHeight * window.devicePixelRatio;
//         canvas.style.width = window.innerWidth + 'px';
//         canvas.style.height = window.innerHeight + 'px';

//         drawGrid();
//       }

//       function drawGrid() {
//         const w = canvas.width;
//         const h = canvas.height;
//         const cellSize = CELL_SIZE_CSS_PX * window.devicePixelRatio;

//         ctx.clearRect(0, 0, w, h);

//         ctx.strokeStyle = 'rgba(131, 131, 131, 0.1)';
//         ctx.lineWidth = 1;

//         // Alle Linien in einem Pfad -> ein einziger stroke()-Aufruf
//         ctx.beginPath();

//         for (let x = 0; x < w; x += cellSize) {
//           ctx.moveTo(x, 0);
//           ctx.lineTo(x, h);
//         }

//         for (let y = 0; y < h; y += cellSize) {
//           ctx.moveTo(0, y);
//           ctx.lineTo(w, y);
//         }

//         ctx.stroke();
//       }

//       resizeCanvas();
//       window.addEventListener('resize', resizeCanvas);
//     });

//     // -------------------- Smooth Scroll mit Easing --------------------
//     let isScrolling = false;
//     let targetScroll = main.scrollTop;
//     let currentScroll = main.scrollTop;

//     function easeOutQuad(t) {
//       return t * (2 - t); // klassisches ease-out
//     }

//     function animateScroll() {
//       const diff = targetScroll - currentScroll;
//       currentScroll += diff * easeOutQuad(0.08); // 0.08 = sanfter Faktor
//       main.scrollTop = currentScroll;

//       if (Math.abs(diff) > 0.5) {
//         requestAnimationFrame(animateScroll);
//       } else {
//         main.scrollTop = targetScroll;
//         isScrolling = false;
//       }
//     }

//     main.addEventListener('wheel', (e) => {
//       if (isScrolling) return;
//       isScrolling = true;

//       const scrollPos = main.scrollTop + window.innerHeight / 2;
//       let current = 0;
//       sections.forEach((sec, i) => {
//         if (sec.offsetTop <= scrollPos) current = i;
//       });

//       let next = current + (e.deltaY > 0 ? 1 : -1);
//       next = Math.max(0, Math.min(sections.length - 1, next));

//       targetScroll = sections[next].offsetTop;
//       animateScroll();
//     });
//   }); // Ende waitForComponents
// });

// #################################################################################################
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