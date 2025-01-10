document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const closeMenu = document.querySelector(".close-menu");
  const nav = document.querySelector(".main-nav");
  const overlay = document.querySelector(".nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleMenu() {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    burgerMenu.classList.toggle("hidden");
  }

  function closeMenuFn() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    burgerMenu.classList.remove("hidden");
  }

  burgerMenu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", closeMenuFn);
  overlay.addEventListener("click", closeMenuFn);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenuFn);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      closeMenuFn();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slidesTrack = document.querySelector(".slides-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  const dotsContainer = document.querySelector(".slider-dots");

  let currentSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  slides[0].classList.add("active");

  function updateSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);
});
