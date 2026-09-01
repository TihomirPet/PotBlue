// document.addEventListener('DOMContentLoaded', () => {
//   const navHolder = document.querySelector('.nav-holder');
//   if (!navHolder) return;

//   fetch('/sections/navbar.html')
//     .then((res) => res.text())
//     .then((data) => {
//       navHolder.innerHTML = data;

//       const isIndex =
//         window.location.pathname.includes('index.html') ||
//         window.location.pathname === '/';
//       const isProjectOne = window.location.pathname.includes('projectone.html');

//       if (isIndex) document.body.classList.add('home-page');
//       if (isProjectOne) document.body.classList.add('project-page');

//       requestAnimationFrame(() => {
//         setTimeout(() => {
//           const contactIndex = document.querySelector('.nav-contact-index');
//           const contactProject = document.querySelector(
//             '.nav-contact-projectone'
//           );
//           const contactBtnIndex = document.querySelector(
//             '.btn-nav-contakt-index'
//           );
//           const contactBtnProject = document.querySelector(
//             '.btn-nav-contakt-projectone'
//           );

//           [
//             contactIndex,
//             contactProject,
//             contactBtnIndex,
//             contactBtnProject,
//           ].forEach((btn) => {
//             if (btn) btn.style.display = 'none';
//           });

//           if (isIndex) {
//             if (contactIndex) contactIndex.style.display = 'block';
//             if (contactBtnIndex) contactBtnIndex.style.display = 'flex';
//           } else if (isProjectOne) {
//             if (contactProject) contactProject.style.display = 'block';
//             if (contactBtnProject) contactBtnProject.style.display = 'flex';
//           }

//           document.body.classList.add('nav-loaded');
//           document.dispatchEvent(new Event('navLoaded'));
//         }, 100);
//       });
//     })
//     .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
// });

// // Hamburger Menü
// document.addEventListener('navLoaded', () => {
//   const menuButton = document.querySelector('.first-button');
//   const menuIcon = document.querySelector('.animated-icon1');
//   if (menuButton && menuIcon) {
//     menuButton.addEventListener('click', () =>
//       menuIcon.classList.toggle('open')
//     );
//   }
// });
/**
 * Lädt components/navbar.html per fetch in den Container und
 * initialisiert danach das Hamburger-Menü.
 *
 * Hinweis: fetch() auf lokale Dateien funktioniert nur über einen
 * Server (http://...), nicht per Doppelklick auf index.html (file://).
 * Zum Testen z. B.:
 *   - VS Code: Erweiterung "Live Server" -> "Go Live"
 *   - Terminal: python3 -m http.server  -> http://localhost:8000
 */

async function loadNavbar(containerSelector, navbarPath = "/sections/navbar.html") {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Navbar-Container "${containerSelector}" nicht gefunden.`);
    return;
  }

  try {
    const response = await fetch(navbarPath);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    container.innerHTML = await response.text();
    initNavbar(container);
  } catch (err) {
    console.error("Navbar konnte nicht geladen werden:", err);
  }
}

function initNavbar(scope) {
  const toggle = scope.querySelector("#menuToggle");
  const panel = scope.querySelector("#menuPanel");

  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar(".nav-holder");
});
