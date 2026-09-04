document.addEventListener('DOMContentLoaded', () => {
  // --- Hilfsfunktion: Alle dynamischen Inhalte geladen ---
  function waitForComponents() {
    return new Promise((resolve) => {
      const check = () => {
        const dynamicSections = document.querySelectorAll(
          'section, #projects, .carousel-item, .carousel-item-two, .carousel-item-three',
        );
        if (dynamicSections.length > 0) {
          resolve(dynamicSections);
        } else {
          setTimeout(check, 50);
        }
      };
      check();
    });
  }

  // -------------------- Grid Canvas (statisch, ohne Rauschen) --------------------
  // In eigene Funktion ausgelagert, damit sie sowohl beim initialen Laden
  // als auch nachträglich (z. B. nach dynamischem Nachladen von contact.html)
  // erneut aufgerufen werden kann, ohne bereits initialisierte Canvases
  // doppelt zu verarbeiten.
  function initGridCanvases(root = document) {
    const canvases = root.querySelectorAll(
      '.noiseCanvas:not([data-grid-initialized])',
    );
    canvases.forEach((canvas) => {
      canvas.dataset.gridInitialized = 'true';
      const ctx = canvas.getContext('2d');
      const CELL_SIZE_CSS_PX = 50;

      function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        drawGrid();
      }

      function drawGrid() {
        const w = canvas.width;
        const h = canvas.height;
        const cellSize = CELL_SIZE_CSS_PX * window.devicePixelRatio;

        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(131, 131, 131, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();

        for (let x = 0; x < w; x += cellSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let y = 0; y < h; y += cellSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();
      }

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
    });
  }

  // Für Canvases, die schon beim initialen Laden im DOM stehen
  initGridCanvases();

  // Für Canvases, die erst per fetch nachgeladen werden (z. B. contact.html)
  document.addEventListener('contactLoaded', () => initGridCanvases());

  waitForComponents().then((sections) => {
    const main = document.querySelector('main') || document.documentElement;

    // -------------------- Floating / Stagger --------------------
    // Läuft für JEDE beobachtete Section einzeln, sobald sie in den
    // Sichtbereich kommt -> deckt sowohl "beim Laden" (Hero ist sofort
    // sichtbar) als auch "beim Scrollen" (weitere Sections) ab.
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const floatEls = entry.target.querySelectorAll('.float');
            floatEls.forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`;
              el.classList.add('visible');
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((sec) => observer.observe(sec));

    // -------------------- Smooth Scroll mit echtem Zeit-Easing --------------------
    // Statt einer Lerp-Annäherung (die am Ende "hängen bleibt" und dann
    // hart zum Ziel springt), läuft die Bewegung über eine feste Dauer
    // mit sanftem Start/Ende -> kein abrupter Stopp mehr.
    let isScrolling = false;
    let scrollStartTime = null;
    let scrollStartPos = main.scrollTop;
    let targetScroll = main.scrollTop;

    const SCROLL_DURATION = 900; // ms – Gesamtdauer einer Section-Bewegung

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(timestamp) {
      if (scrollStartTime === null) scrollStartTime = timestamp;
      const elapsed = timestamp - scrollStartTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const eased = easeInOutCubic(progress);

      main.scrollTop = scrollStartPos + (targetScroll - scrollStartPos) * eased;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false;
        scrollStartTime = null;
      }
    }

    main.addEventListener('wheel', (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const scrollPos = main.scrollTop + window.innerHeight / 2;
      let current = 0;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= scrollPos) current = i;
      });

      let next = current + (e.deltaY > 0 ? 1 : -1);
      next = Math.max(0, Math.min(sections.length - 1, next));

      scrollStartPos = main.scrollTop;
      targetScroll = sections[next].offsetTop;
      scrollStartTime = null;
      requestAnimationFrame(animateScroll);
    });
  }); // Ende waitForComponents
}); // Ende DOMContentLoaded
