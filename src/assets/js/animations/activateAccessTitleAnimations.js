import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitText from "../otherlogic/splitText";
gsap.registerPlugin(ScrollTrigger);

export default function activateAccessTitleAnimations(){
    let accessTitle = gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  splitText("access-eng", "access-eng-letter");

  let accessTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#access",
      start: "-=500px",
      scrub: false,
    },
  });

  accessTitletl
    .from(".access-eng-letter16", { opacity: 0, duration: 1 }, "")
    .from(".access-eng-letter17", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter18", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter19", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter20", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter21", { opacity: 0, duration: 1 }, "<10%");
});

accessTitle.add("(max-width: 767px)", () => {
  let accessTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#access",
      start: "-=500px",
      scrub: false,
    },
  });

  accessTitletl.from(".access-eng", {
    opacity: 0,
    duration: 1,
  });
});

}