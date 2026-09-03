document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carouselExampleControls');
  if (!carousel) return;

  carousel.addEventListener('slid.bs.carousel', function () {
    carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const nextBtn = document.querySelector('.btn-slider-next');
  const prevBtn = document.querySelector('.btn-slider-prev');

  [nextBtn, prevBtn].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', function () {
      carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
