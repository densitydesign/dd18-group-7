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
