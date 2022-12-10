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
