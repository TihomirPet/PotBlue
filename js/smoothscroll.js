document.addEventListener('DOMContentLoaded', () => {
  // --- Hilfsfunktion: Alle dynamischen Inhalte geladen ---
  function waitForComponents() {
    return new Promise((resolve) => {
      const check = () => {
        const dynamicSections = document.querySelectorAll(
          'section, #projects, .carousel-item, .carousel-item-two, .carousel-item-three'
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

  waitForComponents().then((sections) => {
    const main = document.querySelector('main') || document.documentElement;

    // -------------------- Floating / Stagger --------------------
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const floatEls = entry.target.querySelectorAll('.float');
            floatEls.forEach((el, i) => {
              el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              el.style.transitionDelay = `${i * 0.2}s`;
              el.classList.add('visible');
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    // -------------------- Noise Canvas --------------------
    const canvases = document.querySelectorAll('.noiseCanvas');
    canvases.forEach((canvas) => {
      const ctx = canvas.getContext('2d');
      let mouseX = -500,
        mouseY = -500,
        mouseMoved = false;

      function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
      }

      function drawNoise() {
        const w = canvas.width,
          h = canvas.height;
        const iData = ctx.createImageData(w, h);
        const buffer32 = new Uint32Array(iData.data.buffer);

        for (let i = 0; i < buffer32.length; i += 7) {
          if (Math.random() < 0.3) buffer32[i] = 0xa5a5a5a5;
        }
        ctx.putImageData(iData, 0, 0);

        ctx.strokeStyle = 'rgba(253, 251, 236, 0.3)';
        ctx.lineWidth = 1;
        const cellSize = 200;
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

        if (mouseMoved) {
          const gradient = ctx.createRadialGradient(
            mouseX,
            mouseY,
            0,
            mouseX,
            mouseY,
            250
          );
          gradient.addColorStop(0, 'rgba(255,255,255,1)');
          gradient.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
        }

        requestAnimationFrame(drawNoise);
      }

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX * window.devicePixelRatio;
        mouseY = e.clientY * window.devicePixelRatio;
        mouseMoved = true;
      });

      drawNoise();
    });

    // -------------------- Smooth Scroll mit Easing --------------------
    let isScrolling = false;
    let targetScroll = main.scrollTop;
    let currentScroll = main.scrollTop;

    function easeOutQuad(t) {
      return t * (2 - t); // klassisches ease-out
    }

    function animateScroll() {
      const diff = targetScroll - currentScroll;
      currentScroll += diff * easeOutQuad(0.08); // 0.08 = sanfter Faktor
      main.scrollTop = currentScroll;

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(animateScroll);
      } else {
        main.scrollTop = targetScroll;
        isScrolling = false;
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

      targetScroll = sections[next].offsetTop;
      animateScroll();
    });
  }); // Ende waitForComponents
}); // Ende DOMContentLoaded

