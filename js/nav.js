

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
