import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/top-nav.css";
import "./assets/css/home/hero.css";
import "./assets/css/home/feature.css";
import "./assets/css/home/course.css";
import "./assets/css/home/lunch.css";
import "./assets/css/home/dinner.css";
import "./assets/css/home/message.css";
import "./assets/css/home/voice.css";
import "./assets/css/home/news.css";
import "./assets/css/home/insta.css";
import "./assets/css/home/access.css";
import addNavIconEventListener from "./assets/js/eventlisters/naviconEventlistener";
import activateCrossFadeAnimations from "./assets/js/animations/crossfadeAnimation";

import { gsap } from "gsap";
import screenResizeListener from "./assets/js/eventlisters/screensizeChange";
import isItSp from "./assets/js/otherlogic/isitSP";
import changeKvSrc from "./assets/js/otherlogic/changeKvSrc";
import activateCardParallax from "./assets/js/animations/cardParallaxeffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
addNavIconEventListener();

activateCrossFadeAnimations();

changeKvSrc()
screenResizeListener();

// let images = gsap.utils.toArray(".parallax");

// images.forEach((image) => {
//   gsap.to(image, {
//     yPercent: -100 * image.dataset.speed,
//     ease: "none",
//     scrollTrigger: {
//       scrub: image.dataset.speed,
//     },
//   });
// });