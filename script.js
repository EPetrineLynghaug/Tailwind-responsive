document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navMenuMobile = document.getElementById("nav-menu-mobile");

  menuBtn.addEventListener("click", () => {
    navMenuMobile.classList.toggle("hidden");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
    menuBtn.setAttribute("aria-expanded", !expanded);
  });

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  showSlide(slideIndex);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("slide-active");
      if (i === index) {
        slide.classList.add("slide-active");
      }
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
  }
  function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
  }
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  let slideInterval = setInterval(nextSlide, 5000);
  // Pause auto-play on hover
  const slideshowContainer = document.querySelector(".relative");
  slideshowContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });
  slideshowContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
});
