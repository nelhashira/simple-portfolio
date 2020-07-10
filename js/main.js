const navToggle = document.querySelector("#nav-toggle");
const navBars = document.querySelector("#nav-bars");
const navLinks = document.querySelectorAll(".nav-item");

navToggle.addEventListener("click", function () {
   navBars.classList.toggle("nav-active");
   navToggle.classList.toggle("fa-times");
});

navLinks.forEach((link) => {
   link.addEventListener("click", function () {
      navToggle.classList.toggle("fa-times");
      navBars.classList.remove("nav-active");
   });
});
