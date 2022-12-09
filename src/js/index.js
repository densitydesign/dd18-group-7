// Import custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import do-slide's JS
import DoSlide from "do-slide";

const slide = new DoSlide(".ds-container", {
  duration: 500,
  timingFunction: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  minInterval: 50,
});

const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// rip
// if (navbarSupportedContent.classList.contains("collapsing")) {
//   console.log("cagotto molle");
//   navbar.classList.add("navbar-border");
// } else if (
//   navbarSupportedContent.classList.contains("collapse") &&
//   navbarSupportedContent.classList.contains("show")
// ) {
//   console.log("caca");
//   navbar.classList.add("navbar-border");
// } else {
//   navbar.classList.remove("navbar-border");
// }

// ok
navbarSupportedContent.addEventListener("shown.bs.collapse", function () {
  navbar.classList.add("navbar-border");
});
navbarSupportedContent.addEventListener("hidden.bs.collapse", function () {
  if (window.scrollY == 0) {
    navbar.classList.remove("navbar-border");
  }
});
