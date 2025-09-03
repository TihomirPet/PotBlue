document.addEventListener('DOMContentLoaded', () => {
  const navHolder = document.querySelector('.nav-holder');
  if (!navHolder) return;

  fetch('/sections/navbar.html')
    .then((res) => res.text())
    .then((data) => {
      navHolder.innerHTML = data;

      const isIndex =
        window.location.pathname.includes('index.html') ||
        window.location.pathname === '/';
      const isProjectOne = window.location.pathname.includes('projectone.html');

      if (isIndex) document.body.classList.add('home-page');
      if (isProjectOne) document.body.classList.add('project-page');

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

          [
            contactIndex,
            contactProject,
            contactBtnIndex,
            contactBtnProject,
          ].forEach((btn) => {
            if (btn) btn.style.display = 'none';
          });

          if (isIndex) {
            if (contactIndex) contactIndex.style.display = 'block';
            if (contactBtnIndex) contactBtnIndex.style.display = 'flex';
          } else if (isProjectOne) {
            if (contactProject) contactProject.style.display = 'block';
            if (contactBtnProject) contactBtnProject.style.display = 'flex';
          }

          document.body.classList.add('nav-loaded');
          document.dispatchEvent(new Event('navLoaded'));
        }, 100);
      });
    })
    .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
});

// Hamburger Menü
document.addEventListener('navLoaded', () => {
  const menuButton = document.querySelector('.first-button');
  const menuIcon = document.querySelector('.animated-icon1');
  if (menuButton && menuIcon) {
    menuButton.addEventListener('click', () =>
      menuIcon.classList.toggle('open')
    );
  }
});
