import { gsap } from "gsap";

export default function activateCrossFadeAnimations() {
  var duration = 2;
  var delay = 1;
  var tl = gsap.timeline({ onComplete: repeat });
  const images = document.querySelectorAll(".eyecatcher-slideshow_slide");
  const firstImage = images[0];
  const totalImages = images.length - 1;

  console.log({ images, totalImages });

  gsap.utils.toArray(images).forEach((image, index) => {
    var offset = index === 0 ? 0 : "-=" + duration; //insert first animation at a time of 0 or all other animations at a time that will overlap with the previous animation fading out.
    tl.to(
      image,
      {
        duration,
        autoAlpha: 1,
        scale: 1.5,
        repeat: 1,
        yoyo: true,
        repeatDelay: delay,
      },
      offset
    );
    //when the last image fades out we need to cross-fade the first image
    if (index === totalImages) {
      console.log("Add tween on the first image");
      tl.to(firstImage, { duration, autoAlpha: 1, scale: 1.5 }, offset);
    }
  });

  function repeat() {
    tl.play(duration);
  }
}
