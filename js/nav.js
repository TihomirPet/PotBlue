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
// document.addEventListener('DOMContentLoaded', () => {
//   const navigation = document.querySelector('.nav-holder');
//   if (!navigation) return;

//   fetch('/sections/navbar.html')
//     .then((res) => res.text())
//     .then((data) => {
//       navigation.innerHTML = data;

//       const isIndex = window.location.pathname.includes('index.html');
//       const isProjectOne = window.location.pathname.includes('projectone.html');

//       if (isIndex) {
//         document.body.classList.add('home-page');
//       } else if (isProjectOne) {
//         document.body.classList.add('project-page');
//       }
//       if (
//         window.location.pathname === '/' ||
//         window.location.pathname.includes('index.html')
//       ) {
//         document.body.classList.add('home-page');
//         setTimeout(() => {
//           document.body.classList.add('force-reapply'); // Eine zusätzliche Klasse für sicherheit
//         }, 50);
//       }

//       // Warten, bis die Navigation geladen ist
//       setTimeout(() => {
//         const contactIndex = document.querySelector('.nav-contact-index');
//         const contactProject = document.querySelector(
//           '.nav-contact-projectone'
//         );
//         const contactBtnIndex = document.querySelector(
//           '.btn-nav-contakt-index'
//         );
//         const contactBtnProject = document.querySelector(
//           '.btn-nav-contakt-projectone'
//         );

//         console.log('Gefundene Buttons:', {
//           contactBtnIndex,
//           contactBtnProject,
//         });

//         // Standardmäßig ALLE Buttons verstecken
//         if (contactIndex) contactIndex.style.display = 'none';
//         if (contactProject) contactProject.style.display = 'none';
//         if (contactBtnIndex) contactBtnIndex.style.display = 'none';
//         if (contactBtnProject) contactBtnProject.style.display = 'none';

//         // Jetzt nur den richtigen Button anzeigen
//         if (isIndex) {
//           if (contactIndex) contactIndex.style.display = 'block';
//           if (contactBtnIndex) contactBtnIndex.style.display = 'flex'; // Flex, falls du Flexbox nutzt
//         } else if (isProjectOne) {
//           if (contactProject) contactProject.style.display = 'block';
//           if (contactBtnProject) contactBtnProject.style.display = 'flex';
//         }
//       }, 50); // Kurzes Delay für sicheres Laden der Navigation

//       document.dispatchEvent(new Event('navLoaded'));
//     })
//     .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
// });

// // Navigation & Hamburger-Menü erst nach dem Laden bearbeiten
// document.addEventListener('navLoaded', () => {
//   const menuButton = document.querySelector('.first-button');
//   const menuIcon = document.querySelector('.animated-icon1');

//   if (menuButton && menuIcon) {
//     menuButton.addEventListener('click', function () {
//       menuIcon.classList.toggle('open');
//     });
//   } else {
//     console.error("Fehler: '.first-button' wurde nicht gefunden!");
//   }
// });
// ###########################################################################################################
// document.addEventListener('DOMContentLoaded', () => {
//   // Navigation dynamisch laden
//   const navigation = document.querySelector('.nav-holder');
//   if (navigation) {
//     fetch('/sections/navbar.html')
//       .then((res) => res.text())
//       .then((data) => {
//         navigation.innerHTML = data;

//         // Prüfe, auf welcher Seite wir sind
//         const isIndex = window.location.pathname.includes('index.html');
//         const isProjectOne =
//           window.location.pathname.includes('projectone.html');

//         if (isIndex) {
//           document.body.classList.add('home-page');
//         } else if (isProjectOne) {
//           document.body.classList.add('project-page');
//         }

//         // Buttons verstecken nach Seitenwahl
//         const contactBtnIndex = document.querySelector(
//           '.btn-nav-contakt-index'
//         );
//         const contactBtnProject = document.querySelector(
//           '.btn-nav-contakt-projectone'
//         );

//         // Verstecke Buttons für index.html
//         if (isIndex) {
//           if (contactBtnIndex) contactBtnIndex.style.display = 'inline-block'; // sichtbar
//           if (contactBtnProject) contactBtnProject.style.display = 'none'; // unsichtbar
//         }

//         // Verstecke Buttons für projectone.html
//         if (isProjectOne) {
//           if (contactBtnIndex) contactBtnIndex.style.display = 'none'; // unsichtbar
//           if (contactBtnProject)
//             contactBtnProject.style.display = 'inline-block'; // sichtbar
//         }

//         // Event auslösen, damit andere Skripte darauf reagieren können
//         document.dispatchEvent(new Event('navLoaded'));
//       })
//       .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
//   }
// });

// *************************************************************************************************************
document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.nav-holder');
  if (!navigation) return;

  fetch('/sections/navbar.html')
    .then((res) => res.text())
    .then((data) => {
      navigation.innerHTML = data;

      const isIndex =
        window.location.pathname.includes('index.html') ||
        window.location.pathname === '/';
      const isProjectOne = window.location.pathname.includes('projectone.html');

      // Klasse für die jeweilige Seite setzen
      if (isIndex) {
        document.body.classList.add('home-page');
      } else if (isProjectOne) {
        document.body.classList.add('project-page');
      }

      // Warten, bis die Navigation tatsächlich geladen wurde
      requestAnimationFrame(() => {
        setTimeout(() => {
          const contactIndex = document.querySelector('.nav-contact-index');
          const contactProject = document.querySelector(
            '.nav-contact-projectone'
          );
          const contactBtnIndex = document.querySelector(
            '.btn-nav-contakt-index'
          );
          const contactBtnProject = document.querySelector(
            '.btn-nav-contakt-projectone'
          );

          console.log('Gefundene Buttons:', {
            contactBtnIndex,
            contactBtnProject,
          });

          // Standardmäßig ALLE Buttons verstecken
          [
            contactIndex,
            contactProject,
            contactBtnIndex,
            contactBtnProject,
          ].forEach((btn) => {
            if (btn) btn.style.display = 'none';
          });

          // Jetzt nur den richtigen Button anzeigen
          if (isIndex) {
            if (contactIndex) contactIndex.style.display = 'block';
            if (contactBtnIndex) contactBtnIndex.style.display = 'flex';
          } else if (isProjectOne) {
            if (contactProject) contactProject.style.display = 'block';
            if (contactBtnProject) contactBtnProject.style.display = 'flex';
          }

          // Navigation als vollständig geladen markieren
          document.body.classList.add('nav-loaded');
          document.dispatchEvent(new Event('navLoaded'));
        }, 100); // Etwas längere Verzögerung für Stabilität
      });
    })
    .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
});

// Navigation & Hamburger-Menü erst nach dem Laden bearbeiten
document.addEventListener('navLoaded', () => {
  const menuButton = document.querySelector('.first-button');
  const menuIcon = document.querySelector('.animated-icon1');

  if (menuButton && menuIcon) {
    menuButton.addEventListener('click', function () {
      menuIcon.classList.toggle('open');
    });
  } else {
    console.error("Fehler: '.first-button' wurde nicht gefunden!");
  }
});


