// const main = document.querySelector('.main'); // Stelle sicher, dass es das richtige Element ist!

// let currentScroll = 0; // Aktuelle Scrollposition
// let targetScroll = 0; // Ziel-Scrollposition
// const easeFactor = 0.07; // Steuerung der Glätte des Scrollens

// function smoothScroll() {
//   currentScroll += (targetScroll - currentScroll) * easeFactor;
//   main.style.transform = `translateY(-${currentScroll}px)`;

//   if (Math.abs(targetScroll - currentScroll) > 0.5) {
//     requestAnimationFrame(smoothScroll);
//   }
// }

// window.addEventListener('wheel', (event) => {
//   targetScroll += event.deltaY;

//   // Begrenzung der Zielposition
//   targetScroll = Math.max(
//     0,
//     Math.min(targetScroll, main.scrollHeight - window.innerHeight)
//   );

//   requestAnimationFrame(smoothScroll);
// });

// ==================================================================================================================================================
