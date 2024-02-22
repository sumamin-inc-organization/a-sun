import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function activateCardParallax() {
  let images = gsap.utils.toArray(".parallax");

  images.forEach((image) => {
    gsap.to(image, {
      yPercent: -150 * image.dataset.speed,
      ease: "none",
      scrollTrigger: {
        scrub: image.dataset.speed,
      },
    });
  });
}
