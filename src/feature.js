import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/common/footer.css";
import "./assets/css/feature/feature.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toggleSpMenu } from "./assets/js/eventlisters/toggleSpMenu";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { activateAccessTitleAnimationsFeature } from "./assets/js/animations/activateAccessTitleAnimations";
import setStorageItem from "./assets/js/otherlogic/setStorage";
import toggleLanguage from "./assets/js/otherlogic/toggleLanguage";
import updateLangBtnText from "./assets/js/otherlogic/updateLangBtnText";
import activateLangBtnEventListener from "./assets/js/eventlisters/langBtnEventlistener";
import GetStorageItems from "./assets/js/otherlogic/getStorage";
import adjustLangBtnLocation from "./assets/js/otherlogic/adjustLangBtnLocation";

gsap.registerPlugin(ScrollTrigger);
toggleSpMenu();
setLoadingAnimation();
// slick
$(document).ready(function () {
  $(".slick1").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: false,
    dots: true,
    prevArrow: $(".prev-arrow1"),
    nextArrow: $(".next-arrow1"),
    centerMode: true,
    centerPadding: "13%",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1230,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "5%",
        },
      },
    ],
  });

  $(".slick2").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: false,
    dots: true,
    prevArrow: $(".prev-arrow2"),
    nextArrow: $(".next-arrow2"),
    centerMode: true,
    centerPadding: "13%",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1230,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "6%",
        },
      },
    ],
  });
});

// 出現アニメーション
let kv_title = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2, delay: 3.5 });

let feature1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#feature1",
    start: "-=500px",
    scrub: false,
  },
});
feature1
  .from("#feature1 .feature-title", {
    y: 30,
    opacity: 0,
    duration: 2,
    delay: 3.5,
  })
  .from(
    "#feature1 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick1", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let feature2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature1-inner",
    start: "+=500px",
    scrub: false,
  },
});
feature2
  .from("#feature2 .feature-title", { y: 30, opacity: 0, duration: 2 })
  .from(
    "#feature2 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick2", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let feature3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature2-inner",
    start: "-=500px",
    scrub: false,
  },
});
feature3
  .from("#feature3 .feature-title", { y: 30, opacity: 0, duration: 2 })
  .from(
    "#feature3 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick3", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".home-btn", { y: 30, opacity: 0, duration: 2 }, "-=0.5");

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
activateHeaderAnimations();

activateAccessTitleAnimationsFeature();

/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang"; //the key to the local storage language
let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY, currentLang);
toggleLanguage(currentLang);
updateLangBtnText(currentLang);
activateLangBtnEventListener();

/*-----------------------------------
  デバイスごとの調整に関するスクリプト
--------------------------------------*/
adjustLangBtnLocation();
