$(document).ready(function () {
  $(".projects-carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });
});

const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
