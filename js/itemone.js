// document.addEventListener('DOMContentLoaded', () => {
//   const navigation = document.querySelector('.carousel-item');
//   if (!navigation) return;

//   fetch('/sections/itemone.html')
//     .then((res) => res.text())
//     .then((data) => {
//       navigation.innerHTML = data;

     
  
//     })
//     .catch((err) => console.error('Fehler beim Laden der Navigation:', err));
// });


document.addEventListener('DOMContentLoaded', () => {
  const componentsToLoad = [
    { selector: '.carousel-item', url: '/sections/itemone.html' },
    { selector: '.carousel-item-two', url: '/sections/itemtwo.html' },
    { selector: '.carousel-item-three', url: '/sections/itemthree.html' },
    { selector: '.carousel-item-four', url: '/sections/itemfour.html' },
  ];

  const loadPromises = componentsToLoad.map(({ selector, url }) => {
    const container = document.querySelector(selector);
    if (!container) return Promise.resolve();
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP-Fehler! Status: ${res.status}`);
        return res.text();
      })
      .then((data) => (container.innerHTML = data))
      .catch((err) => console.error(`Fehler beim Laden von ${url}:`, err));
  });

  Promise.all(loadPromises).then(() => {
    document.dispatchEvent(new Event('componentsLoaded'));
  });
});

