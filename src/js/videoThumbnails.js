import * as p5 from "p5";

let videoThumbnail;
let thumbnailWidth;
let thumbnailHeight;

let animationThumbnails = document.getElementById("animation-thumbnails");
let animationThumbnailsWidth = animationThumbnails.offsetWidth;
let animationThumbnailsHeight = animationThumbnails.offsetHeight;
console.log(animationThumbnailsWidth, animationThumbnailsHeight);

window.onload = (event) => {
  // thank u Luca and Andrea
  videoThumbnail = document.querySelector(".video-thumbnail");
  console.log(videoThumbnail);
  thumbnailWidth = videoThumbnail.width;
  thumbnailHeight = videoThumbnail.height;
  console.log(thumbnailHeight, thumbnailWidth);
};

let s = (sk) => {
  let thumbnails;
  let iterator = 0;
  let seed = 500;
  let octaves = 2;
  let falloff = 0.2;

  sk.setup = () => {
    sk.noCanvas();
    sk.noiseSeed(seed);
    sk.noiseDetail(octaves, falloff);
    thumbnails = document.querySelectorAll(".video-thumbnail");
    thumbnails.forEach((thumbnail) => {
      thumbnail.style.position = "absolute";
      console.log(thumbnail.offsetTop);
      console.log(thumbnail.offsetLeft);
    });
    // thumbnails = sk.selectAll(".video-thumbnail");
    // thumbnails.forEach((thumbnail) => {
    //   thumbnail.style("position: absolute");
    // });
  };

  sk.draw = () => {
    iterator++;
    thumbnails.forEach((thumbnail, i) => {
      let x = sk.noise((iterator + 50 * i) / 400);
      let mapx = sk.map(x, 0, 0.55, 0.2, 1);
      let posx = mapx * (animationThumbnailsWidth - thumbnailWidth);
      // let posx = mapx * (sk.windowWidth - thumbnailWidth);

      let y = sk.noise((iterator - 50 * i) / 400);
      let mapy = sk.map(y, 0, 0.55, 0.2, 1);
      let posy = mapy * (animationThumbnailsHeight - thumbnailHeight);
      // let posy = mapy * (sk.windowHeight - thumbnailHeight);

      // console.log(posx, posy);

      thumbnail.style.left = posx + "px";
      thumbnail.style.top = posy + "px";
      // thumbnail.position(posx, posy);
    });
  };
};

const videoThumbnailsAnimation = new p5(s);

window.addEventListener("resize", (event) => {
  thumbnailWidth = videoThumbnail.width;
  thumbnailHeight = videoThumbnail.height;
  console.log(thumbnailHeight, thumbnailWidth);
  animationThumbnailsWidth = animationThumbnails.offsetWidth;
  animationThumbnailsHeight = animationThumbnails.offsetHeight;
  console.log(animationThumbnailsWidth, animationThumbnailsHeight);
});
