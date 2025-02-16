function el(css) {
  return document.querySelector(css);
}

let nav = el('.nav-holder');
// const nav = document.querySelector('.nav-holder');

fetch('./navbar.html')
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
    //   nav.insertAdjacentHTML('beforeend', data);
  });
// console.log(nav);
