document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.img-hover img').forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 0.92, filter: 'grayscale(100%)', opacity: 0.5 }, // Startzustand
      {
        scale: 1,
        filter: 'grayscale(0%)',
        opacity: 1,
        duration: 0.6, // Kürzere Dauer für schnellere Animation
        ease: 'power1.out', // Schnellere Bewegung
        scrollTrigger: {
          trigger: img,
          start: 'top 85%', // Startet etwas später, damit es knackiger wirkt
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
});
