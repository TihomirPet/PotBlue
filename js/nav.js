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
      })
      .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
  }
});
