function el(css) {
  return document.querySelectorAll(css);
}

// function changeCarouselClassName() {
//   var className = localStorage.getItem('className');

//   if (className) {
//     var carouselDiv = document.querySelector('.carousel .carousel-item');
//     carouselDiv.classList.add(className);
//   }
// }

// // Add event listener to trigger class change on load
// window.addEventListener('load', changeCarouselClassName);

function changeCarouselClassName() {
  let data = localStorage.getItem('data');

  if (data) {
    const parsedData = JSON.parse(data);
    const targetDiv = document.getElementById(parsedData.id);
    if (targetDiv) {
      targetDiv.classList.add(parsedData.className);
    }
  }
}
window.addEventListener('load', changeCarouselClassName);
