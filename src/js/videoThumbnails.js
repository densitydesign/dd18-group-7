import * as p5 from "p5";

//a P5 moire pattern.
let s = (sk) => {
  let thumbnails;
  let iterator = 0;
  let octaves = 2;
  let falloff = 0.2;

  sk.setup = () => {
    sk.noCanvas();
    sk.noiseDetail(octaves, falloff);
    thumbnails = sk.selectAll(".video-thumbnail");

    thumbnails.forEach((thumbnail) => {
      thumbnail.style("position: absolute");
      // thumbnail.mouseOver(sk.noLoop);
      // thumbnail.mouseOut(sk.loop);
    });
  };

  sk.draw = () => {
    iterator++;
    thumbnails.forEach((thumbnail, i) => {
      let x = sk.noise((iterator + 40 * i) / 400) * sk.windowWidth;
      let y = sk.noise((iterator - 40 * i) / 400) * sk.windowHeight;
      thumbnail.position(x, y);
    });
  };
};

const P5 = new p5(s);
