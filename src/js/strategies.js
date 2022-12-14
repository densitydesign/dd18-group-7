// Import main.js
import "./main";

// Import relativeFullscreenSizing
import "./relativeFullscreenSizing";

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// show
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.add("navbar-border");
});

// hide
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("navbar-border");
});

// Mouseover
let regulatoryStatementsContentCopyU1 = document.getElementById(
  "regulatory-statements-content-copy-u1"
);
let regulatoryStatementsContentCopyU1Image = document.getElementById(
  "regulatory-statements-content-copy-u1-image"
);

regulatoryStatementsContentCopyU1.addEventListener("mouseover", (event) => {
  regulatoryStatementsContentCopyU1Image.classList.remove("opacity-0");
  regulatoryStatementsContentCopyU1Image.classList.add("opacity-100");
});

regulatoryStatementsContentCopyU1.addEventListener("mouseleave", (event) => {
  regulatoryStatementsContentCopyU1Image.classList.remove("opacity-100");
  regulatoryStatementsContentCopyU1Image.classList.add("opacity-0");
});
