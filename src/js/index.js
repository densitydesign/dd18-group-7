// Import main.js
import "./main";

// Import relativeFullscreenSizing
import "./relativeFullscreenSizing";

// Import fullpage.js
import fullpage from "fullpage.js";

// Sections animations
const fullscreenAnimationThumbnails = document.getElementById(
  "animation-thumbnails"
);
let fullscreenAnimationThumbnailsCounter = 0;
const fullscreenAnimationStrategies = document.getElementById(
  "animation-strategies"
);
let fullscreenAnimationStrategiesCounter = 0;

// fullpage.js setup
var fullpageInstance = new fullpage("#fullpage", {
  // License and credits
  licenseKey: "gplv3-license",
  credits: {
    enabled: false,
    label: "Made with fullPage.js",
    position: "right",
  },

  // Scrolling
  css3: true,
  scrollingSpeed: 500,
  easingcss3: "cubic-bezier(0.8, 0, 0.2, 1.0)",
  touchSensitivity: 15,

  // Design
  // todo or totry: paddingTop, paddingBottom

  // Loading
  lazyLoading: false,

  // Events
  beforeLeave: function (origin, destination, direction, trigger) {
    if (origin.index == 1 && direction == "down") {
      fullscreenAnimationThumbnailsCounter++;
      if (fullscreenAnimationThumbnailsCounter < 2) {
        fullscreenAnimationThumbnails.classList.add("active");
        return false;
      }
    }
    if (origin.index == 2 && direction == "down") {
      fullscreenAnimationStrategiesCounter++;
      if (fullscreenAnimationStrategiesCounter < 2) {
        fullscreenAnimationStrategies.classList.add("active");
      }
      return false;
    }
  },
  onLeave: function (origin, destination, direction, trigger) {},
  afterLoad: function (origin, destination, direction, trigger) {
    if (origin.index == 1) {
      fullscreenAnimationThumbnails.classList.remove("active");
      fullscreenAnimationThumbnailsCounter = 0;
    }
    if (origin.index == 2) {
      fullscreenAnimationStrategies.classList.remove("active");
      fullscreenAnimationStrategiesCounter = 0;
    }
    if (origin.index == 3) {
      fullscreenAnimationThumbnails.classList.remove("active");
      fullscreenAnimationThumbnailsCounter = 0;
    }
  },
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (
    section,
    origin,
    destination,
    direction,
    trigger
  ) {},
  onSlideLeave: function (section, origin, destination, direction, trigger) {},
  onScrollOverflow: function (section, slide, position, direction) {},
});

// Navbar
const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
);

// Show
navbarSupportedContent.addEventListener("show.bs.collapse", (event) => {
  navbar.classList.remove("t-transparent");
  navbar.classList.remove("difference");
  navbar.classList.add("t-filled");
  navbar.classList.add("navbar-border");
});

// Hide
navbarSupportedContent.addEventListener("hidden.bs.collapse", (event) => {
  navbar.classList.remove("t-filled");
  navbar.classList.remove("navbar-border");
  navbar.classList.add("t-transparent");
  navbar.classList.add("difference");
});
