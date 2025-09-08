
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleControls");

    // Event, wenn ein Slide gewechselt wird
    carousel.addEventListener("slid.bs.carousel", function () {
      // Scrollt den Carousel-Container ganz nach oben
      carousel.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Optional: Scroll auch, wenn Buttons direkt geklickt werden
    const nextBtn = document.querySelector(".btn-slider-next");
    const prevBtn = document.querySelector(".btn-slider-prev");

    [nextBtn, prevBtn].forEach((btn) => {
      btn.addEventListener("click", function () {
        carousel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  });

