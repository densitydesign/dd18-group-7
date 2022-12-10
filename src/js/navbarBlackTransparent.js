// navbar collapse/collapse.show
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);
navbarSupportedContent.addEventListener("shown.bs.collapse", function () {
  navbar.classList.remove("bg-transparent");
  navbar.classList.add("t-black");
  navbar.classList.add("navbar-border");
});
navbarSupportedContent.addEventListener("hidden.bs.collapse", function () {
  if (window.scrollY == 0) {
    navbar.classList.remove("navbar-border");
    navbar.classList.remove("t-black");
    navbar.classList.add("bg-transparent");
  }
});
