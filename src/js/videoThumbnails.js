import * as p5 from "p5";

const videoThumbnail = document.querySelector(".video-thumbnail");
let thumbnailWidth;
let thumbnailHeight;

videoThumbnail.onload = function () {
  thumbnailWidth = videoThumbnail.width;
  thumbnailHeight = videoThumbnail.height;
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
    thumbnails = sk.selectAll(".video-thumbnail");

    thumbnails.forEach((thumbnail) => {
      thumbnail.style("position: absolute");
    });
  };

  sk.draw = () => {
    iterator++;
    thumbnails.forEach((thumbnail, i) => {
      let x = sk.noise((iterator + 50 * i) / 400);
      let mapx = sk.map(x, 0, 0.6, 0, 1);
      let posx = mapx * (sk.windowWidth - thumbnailWidth);
      let y = sk.noise((iterator - 50 * i) / 400);
      let mapy = sk.map(y, 0, 0.5, 0, 1);
      let posy = mapy * (sk.windowHeight - thumbnailHeight);
      thumbnail.position(posx, posy);
    });
  };
};

const P5 = new p5(s);

window.addEventListener("resize", (event) => {
  thumbnailWidth = videoThumbnail.width;
  thumbnailHeight = videoThumbnail.height;
});
