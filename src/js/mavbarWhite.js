// navbar collapse/collapse.show
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);
navbarSupportedContent.addEventListener("shown.bs.collapse", (event) => {
  navbar.classList.remove("bg-transparent");
  navbar.classList.add("t-white");
  navbar.classList.add("navbar-border");
});
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  if (window.scrollY == 0) {
    navbar.classList.remove("navbar-border");
    navbar.classList.remove("t-white");
    navbar.classList.add("bg-transparent");
  }
});
