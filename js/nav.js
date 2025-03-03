// document.addEventListener('DOMContentLoaded', () => {
//   // Navigation dynamisch laden
//   const navigation = document.querySelector('.nav-holder');
//   if (navigation) {
//     fetch('/sections/navbar.html')
//       .then((res) => res.text())
//       .then((data) => {
//         navigation.innerHTML = data;

//         // Event auslösen, damit andere Skripte darauf reagieren können
//         document.dispatchEvent(new Event('navLoaded'));
//       })
//       .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
//   }
// });

// ================================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Navigation dynamisch laden
  const navigation = document.querySelector('.nav-holder');
  if (navigation) {
    fetch('/sections/navbar.html')
      .then((res) => res.text())
      .then((data) => {
        navigation.innerHTML = data;

        // Event auslösen, damit andere Skripte darauf reagieren können
        document.dispatchEvent(new Event('navLoaded'));

        // Erst jetzt das Event für das Hamburger-Menü setzen
        const menuButton = document.querySelector('.first-button');
        if (menuButton) {
          menuButton.addEventListener('click', function () {
            document.querySelector('.animated-icon1').classList.toggle('open');
          });
        } else {
          console.error("Fehler: '.first-button' wurde nicht gefunden!");
        }
      })
      .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
  }
});