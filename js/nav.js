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
// document.addEventListener('DOMContentLoaded', () => {
//   // Navigation dynamisch laden
//   const navigation = document.querySelector('.nav-holder');
//   if (navigation) {
//     fetch('/sections/navbar.html')
//       .then((res) => res.text())
//       .then((data) => {
//         navigation.innerHTML = data;

//         // Prüfe, auf welcher Seite wir sind und setze Klasse im <body>
//         if (window.location.pathname.includes('index.html')) {
//           document.body.classList.add('home-page');
//         } else if (window.location.pathname.includes('projectone.html')) {
//           document.body.classList.add('project-page');
//         }

//         // Event auslösen, damit andere Skripte darauf reagieren können
//         document.dispatchEvent(new Event('navLoaded'));

//         // Navigation erst nach dem Laden bearbeiten
//         document.addEventListener('navLoaded', () => {
//           const navBar = document.querySelector('.navbar-nav');
//           if (document.body.classList.contains('home-page')) {
//             navBar.classList.add('home-nav');
//           } else if (document.body.classList.contains('project-page')) {
//             navBar.classList.add('project-nav');
//           }
//         });

//         // Hamburger-Menü nach dem Laden setzen
//         const menuButton = document.querySelector('.first-button');
//         const menuIcon = document.querySelector('.animated-icon1');

//         if (menuButton && menuIcon) {
//           menuButton.addEventListener('click', function () {
//             menuIcon.classList.toggle('open');
//           });
//         } else {
//           console.error("Fehler: '.first-button' wurde nicht gefunden!");
//         }
//       })
//       .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
//   }
// });

// #########################################################################################
document.addEventListener('DOMContentLoaded', () => {
  // Navigation dynamisch laden
  const navigation = document.querySelector('.nav-holder');
  if (navigation) {
    fetch('/sections/navbar.html')
      .then((res) => res.text())
      .then((data) => {
        navigation.innerHTML = data;

        // Prüfe, auf welcher Seite wir sind
        if (window.location.pathname.includes('index.html')) {
          document.body.classList.add('home-page');
        } else if (window.location.pathname.includes('projectone.html')) {
          document.body.classList.add('project-page');
        }

        // Event auslösen, damit andere Skripte darauf reagieren können
        document.dispatchEvent(new Event('navLoaded'));
      })
      .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
  }
});

// Navigation & Hamburger-Menü erst nach dem Laden bearbeiten
document.addEventListener('navLoaded', () => {
  const navBar = document.querySelector('.navbar-nav');
  const menuButton = document.querySelector('.first-button');
  const menuIcon = document.querySelector('.animated-icon1');

  // if (navBar) {
  //   if (document.body.classList.contains('home-page')) {
  //     navBar.classList.add('home-nav');
  //   } else if (document.body.classList.contains('project-page')) {
  //     navBar.classList.add('project-nav');
  //   }
  // }

  // Hamburger-Menü aktivieren
  if (menuButton && menuIcon) {
    menuButton.addEventListener('click', function () {
      menuIcon.classList.toggle('open');
      // document.querySelector('.navbar-collapse').classList.toggle('show');
    });
  } else {
    console.error("Fehler: '.first-button' wurde nicht gefunden!");
  }
});
