// Import main.js
import "./main";

// Import relativeFullscreenSizing
import "./relativeFullscreenSizing";

// Import do-slide's JS
import DoSlide from "do-slide";

// do-slide setup
const slide = new DoSlide(".ds-container", {
  duration: 500,
  timingFunction: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  minInterval: 50,
});

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// show
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.remove("t-transparent");
  navbar.classList.add("t-filled");
  navbar.classList.add("navbar-border");
});

// hide
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("t-filled");
  navbar.classList.remove("navbar-border");
  navbar.classList.add("t-transparent");
});
