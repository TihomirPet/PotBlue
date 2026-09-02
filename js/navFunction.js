const toggle = document.getElementById('menuToggle');
const panel = document.getElementById('menuPanel');

toggle.addEventListener('click', () => {
  const isOpen = panel.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// Menü schließen, wenn ein Link angeklickt wird
panel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
