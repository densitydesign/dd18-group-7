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

const fullscreenAnimationThumbnails = document.getElementById(
  "fullscreen-animation-thumbnails"
);
fullscreenAnimationThumbnails.style.opacity = 0;
let fullscreenAnimationThumbnailsCounter = 0;

const fullscreenAnimationStrategies = document.getElementById(
  "fullscreen-animation-strategies"
);
fullscreenAnimationStrategies.style.opacity = 0;

// one-time appearances (todo: infinite)
slide.onBeforeChange(function (curIndex, tarIndex, cur, tar) {
  if (curIndex == 1) {
    fullscreenAnimationThumbnailsCounter++;
    if (fullscreenAnimationThumbnailsCounter < 2) {
      fullscreenAnimationThumbnails.style.opacity = 1;
      return false;
    }
  }
  if (curIndex == 2) {
    fullscreenAnimationStrategies.style.opacity = 1;
    if (tarIndex == 1) {
    }
    if (tarIndex == 3) {
      return false;
    }
  }
});

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// show
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.remove("t-transparent");
  navbar.classList.remove("difference");
  navbar.classList.add("t-filled");
  navbar.classList.add("navbar-border");
});

// hide
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("t-filled");
  navbar.classList.remove("navbar-border");
  navbar.classList.add("t-transparent");
  navbar.classList.add("difference");
});
