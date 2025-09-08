// function el(css) {
//   return document.querySelectorAll(css);
// }

// // function changeCarouselClassName() {
// //   var className = localStorage.getItem('className');

// //   if (className) {
// //     var carouselDiv = document.querySelector('.carousel .carousel-item');
// //     carouselDiv.classList.add(className);
// //   }
// // }

// // // Add event listener to trigger class change on load
// // window.addEventListener('load', changeCarouselClassName);

// function changeCarouselClassName() {
//   let data = localStorage.getItem('data');

//   if (data) {
//     const parsedData = JSON.parse(data);
//     const targetDiv = document.getElementById(parsedData.id);
//     if (targetDiv) {
//       targetDiv.classList.add(parsedData.className);
//     }
//   }
// }
// window.addEventListener('load', changeCarouselClassName);
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
      // localStorage.removeItem('data');
    }
  } else {
    // Falls keine Daten vorhanden: den ersten Slide aktivieren
    const firstSlide = document.querySelector('.carousel-item');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }
});
