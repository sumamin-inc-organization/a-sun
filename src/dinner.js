import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/menu/lunch.css";
import "./assets/css/menu/dinner.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toggleSpMenu } from "./assets/js/eventlisters/toggleSpMenu";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
gsap.registerPlugin(ScrollTrigger);

setLoadingAnimation();
toggleSpMenu();

/* slick animation */
var $slide = $(".slick-slide").slick({
  fade: true,
  speed: 1000,
  autoplaySpeed: 2500,
  arrows: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
});

/*  Appearance Animation */
let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
  // overview content
  let overview = gsap.timeline({
    scrollTrigger: {
      trigger: ".overview-grid",
      start: "-=550px",
      scrub: false,
    },
  });
  overview
    .from(
      ".overview-description",
      { y: 30, opacity: 0, duration: 1.5 },
      "+=2.5"
    )
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8");

  // lunchCourse content
  let lunchCourse = gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchCourse",
      start: "-=550px",
      scrub: false,
    },
  });
  lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.2 }, "+=0.5")
    .from(
      ".lunch-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    )
    .from(
      ".lunch-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    )
    .from(
      ".lunch-content:nth-child(3)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    );

  // drink
  let drink = gsap.timeline({
    scrollTrigger: {
      trigger: "#drink",
      start: "-=650px",
      scrub: false,
    },
  });
  drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.2 }, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.2 }, "-=0.5");

  // home btn
  let home_btn = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-btn",
      start: "-=550px",
      scrub: false,
    },
  });
  home_btn.from(".home-btn a", { y: 30, opacity: 0, duration: 1 });
});

/* pc */
mm.add("(min-width: 768px)", () => {
  // overview content
  let overview = gsap.timeline({
    scrollTrigger: {
      trigger: ".overview-grid",
      start: "-=550px",
      scrub: false,
    },
  });
  overview
    .from(
      ".overview-description",
      { y: 30, opacity: 0, duration: 1.5 },
      "+=2.5"
    )
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8");

  // lunchCourse content
  let lunchCourse = gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchCourse",
      start: "-=600px",
      scrub: false,
    },
  });
  lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.5 }, "+=0.5")
    .from(
      ".lunch-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    )
    .from(
      ".lunch-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    )
    .from(
      ".lunch-content:nth-child(3)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    );

  // drink
  let drink = gsap.timeline({
    scrollTrigger: {
      trigger: "#drink",
      start: "-=650px",
      scrub: false,
    },
  });
  drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.5 }, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.5 }, "-=0.5");

  // home btn
  let home_btn = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-btn",
      start: "-=550px",
      scrub: false,
    },
  });
  home_btn.from(".home-btn a", { y: 30, opacity: 0, duration: 1 });
});

activateHeaderAnimations();
