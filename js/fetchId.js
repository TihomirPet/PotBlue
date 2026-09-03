
// =====================================================================================================================
window.addEventListener('DOMContentLoaded', () => {
  // Daten aus localStorage auslesen
  const data = JSON.parse(localStorage.getItem('data'));

  if (data && data.id) {
    const target = document.getElementById(data.id);

    if (target) {
      // Alle aktiven Slides zurücksetzen
      document.querySelectorAll('.carousel-item').forEach((item) => {
        item.classList.remove('active');
      });

      // Gewünschten Slide aktivieren
      target.classList.add('active');

      // Optional: LocalStorage löschen, damit kein alter Wert hängen bleibt
       localStorage.removeItem('data');
    }
  } else {
    // Falls keine Daten vorhanden: den ersten Slide aktivieren
    const firstSlide = document.querySelector('.carousel-item');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }
});
// ##############################################################################################################################''
