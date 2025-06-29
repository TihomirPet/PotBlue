document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.carousel-item');
  if (!navigation) return;

  fetch('/sections/itemone.html')
    .then((res) => res.text())
    .then((data) => {
      navigation.innerHTML = data;

     
  
    })
    .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
});
