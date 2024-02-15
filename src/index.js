import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
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
import $ from "jquery";
import screenResizeListener from "./assets/js/eventlisters/screensizeChange";
import isItSp from "./assets/js/otherlogic/isitSP";
import changeKvSrc from "./assets/js/otherlogic/changeKvSrc";
import activateCardParallax from "./assets/js/animations/cardParallaxeffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import determineTypeOfAnimation from "./assets/js/otherlogic/determineTypeOfAnimation";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
import splitText from "./assets/js/otherlogic/splitText";
import { toggleSpMenu } from "./assets/js/eventlisters/toggleSpMenu";
gsap.registerPlugin(ScrollTrigger);
addNavIconEventListener();

activateCrossFadeAnimations();

changeKvSrc();

// determineTypeOfAnimation();
screenResizeListener();

const screenType = isItSp(); // 画面サイズをチェックします /checks for  screen size

toggleSpMenu();

/*-------------------------------
    dinner background animations
    ディナーの背景アニメーション
-------------------------------*/

const masterCompany = gsap.timeline();

let dotAnimations = gsap.matchMedia();

dotAnimations.add("(max-width: 500px)", () => {
  function dinnerTopsp() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dinner-trigger", //#dinner
        start: "-=500px top",
        end: "+=200",
        scrub: true,
        // pin: true,
      },
    });

    tl.from(".company-dot", { scale: 0 });

    return tl;
  }

  masterCompany.add(dinnerTopsp());
});
dotAnimations.add("(min-width: 501px)", () => {
  function dinnerTop() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dinner-trigger", //#dinner
        start: "-=500px top",
        end: "+=200",
        scrub: true,
        // pin: true,
        //  markers: true
      },
    });

    tl.fromTo(".company-dot", { scale: 0 }, { scale: 1.7 });
    // .to(".company-dot", { scale: 1})

    return tl;
  }

  masterCompany.add(dinnerTop());
});

/*-------------------------------
    feature parallax animations
    フィーチャーのパララックスアニメーション
-------------------------------*/

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=200px top",
    // end: "+=200",
    scrub: true,
    // pin: true,
    //  markers: true
  },
});

tl.to(".feat-main-left-one", { yPercent: -65 });
// .to(".company-dot", { scale: 1})

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t2.to(".feat-main-left-two", { yPercent: -65 });

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t3.to(".feat-main-left-three", { yPercent: -65 });

/*-------------------------------
    Loading animation
   ロードアニメーション
-------------------------------*/

// setLoadingAnimation()

document.addEventListener("DOMContentLoaded", (e) => {
  let intro = gsap.timeline();

  intro
    .from(".transition-item", { y: "100%", delay: 2 })
    .from(".transition-item-white", { y: "100%" })
    .set(".transition-img", { opacity: 0 })
    .set(".transition-img", { x: "100%" })
    .to(".transition-item-white", { y: "-100%" })
    .to(".transition-item-white", { display: "none" })
    .set(".transition-item", { display: "none" })
    .from(".keyvisual-top__logo", { opacity: 0, duration: 1 })
    .from(".eyecatcher-slideshow", { opacity: 0, duration: 2 }, "<25%")
    .from(".letter1", { opacity: 0, duration: 0.5 }, "<20%")
    .from(".letter2", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter3", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter4", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter5", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter6", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter7", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter8", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter9", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter10", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter11", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter12", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter13", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter14", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter15", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter16", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter17", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter18", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter19", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter20", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter21", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter22", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter23", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter24", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter25", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter26", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter27", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".kv-eng-txt-sp", { opacity: 0, duration: 0.5 })
    .from(".letter-eng1", { opacity: 0, duration: 0.5 }, "4.5")
    .from(".letter-eng2", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng3", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng4", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng5", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng6", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng7", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng8", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng9", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng10", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng11", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng12", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng13", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng14", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng15", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng16", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng17", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng18", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng19", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng20", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng21", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng22", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng23", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng24", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng25", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng26", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng27", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng28", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng29", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng30", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng31", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng32", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng33", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng34", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng35", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng36", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng37", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng38", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng39", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng40", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng41", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng42", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng43", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng44", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng45", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng46", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng47", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng48", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng49", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng50", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng51", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng52", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng53", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng54", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng55", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng56", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng57", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng58", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng59", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng60", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng61", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng62", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng63", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng64", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng65", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng66", { opacity: 0, duration: 0.5 }, "<10%")
    .from(".letter-eng67", { opacity: 0, duration: 0.5 }, "<10%")
    .from(
      ".eyecatcher__scrollimg",
      { opacity: 0, y: -100, duration: 1 },
      "<25%"
    );
});

/*-------------------------------
   Logo Animations
   ロゴのアニメーション
-------------------------------*/

ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  // markers: true,
  onEnterBack: animateLogo,
});

let tween = gsap.from(".logo__image--sp", { y: " -100% ", duration: 1 });

function animateLogo() {
  tween.restart();
}

/*-------------------------------
   Header PC animation
   ヘッダーPCアニメーション
-------------------------------*/

activateHeaderAnimations();

/*------------------------------------
  KV Main Content Title Animations
  KVメインコンテンツタイトルのアニメーション
-------------------------------------*/

// let kvMain = gsap.matchMedia();

const textContainer = document.querySelector(".kv-main-txt-eng-pc");
const fragments = textContainer.innerHTML.split("<br>");

textContainer.innerHTML = ""; // Clear the original content
let classCounter = 1; // Counter for unique class names

fragments.forEach((fragment, index) => {
  const fragmentWrapper = document.createElement("div");
  fragmentWrapper.innerHTML = fragment;

  const fragmentSpans = fragmentWrapper.childNodes;
  fragmentSpans.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const letters = node.textContent.split("");
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add(`kv-main__text-eng${classCounter}`);
        textContainer.appendChild(span);
        classCounter++;
      });
    } else {
      textContainer.appendChild(node.cloneNode(true));
    }
  });

  if (index < fragments.length - 1) {
    textContainer.appendChild(document.createElement("br"));
  }
});

/*-------------------------------
   KV Title Animation
   KVタイトルのアニメーション
-------------------------------*/
let kvMaintl = gsap.timeline({
  scrollTrigger: {
    trigger: ".eyecatcher_scrollimg--image",
    start: "-=100px",
    scrub: false,
    // markers: true
  },
});

kvMaintl
  .from(".kv-main-content_title", { opacity: 0, duration: 0.5 }, "")
  .from(".kv-main-content_title1", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title2", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title3", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title4", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title5", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title6", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title7", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title8", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title9", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title10", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title11", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title12", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title13", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-content_title14", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main-txt-eng-sp", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng16", { opacity: 0, duration: 0.5 }, "<")
  .from(".kv-main__text-eng17", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng18", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng20", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng21", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng22", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng23", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng24", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng25", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng26", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng27", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng28", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng30", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng31", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng33", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng34", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng35", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng37", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng38", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng39", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng40", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng41", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng42", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng44", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng45", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng46", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng47", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng49", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng50", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng51", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng52", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng53", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng54", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng55", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng56", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng57", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng59", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng60", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng61", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng62", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng93", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng94", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng95", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng96", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng98", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng99", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng100", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng101", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng103", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng104", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng105", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng106", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng107", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng109", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng110", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng111", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng112", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng114", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng115", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng116", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng117", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng118", { opacity: 0, duration: 0.5 }, "<10%")
  .from(".kv-main__text-eng119", { opacity: 0, duration: 0.5 }, "<10%");

/*-------------------------------
   KV Food Image Animation
   KVフード画像のアニメーション
-------------------------------*/

let kvFoodtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".keyvisual-main_hero",
    start: "-500px",
    scrub: false,
    // markers: true
  },
});

kvFoodtl
  .from(".kv-hero__img--top-right", { opacity: 0, duration: 0.5 })
  .from(".kv-hero__img--right", { opacity: 0, duration: 0.5 })
  .from(".kv-hero__img--bottom", { opacity: 0, duration: 0.5 })
  .from(".kv-hero__img--left", { opacity: 0, duration: 0.5 })
  .from(".kv-hero__img--top-left", { opacity: 0, duration: 0.5 });

/*-------------------------------
   Feature Title Animation
   機能タイトルのアニメーション
-------------------------------*/

let featureTitle = gsap.matchMedia();
featureTitle.add("(min-width: 768px)", () => {
  splitText("feature-title__text--jp", "feature-title-letter");

  let featureTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
      // markers: true
    },
  });

  featureTitletl
    .from(".feature-title-letter14", { opacity: 0, duration: 1 }, "")
    .from(".feature-title-letter15", { opacity: 0, duration: 1 }, "<10%")
    .from(".feature-title-letter16", { opacity: 0, duration: 1 }, "<10%")
    .from(".feature-title-letter17", { opacity: 0, duration: 1 }, "<10%")
    .from(".feature-title-letter18", { opacity: 0, duration: 1 }, "<10%")
    .from(".feature-title-letter19", { opacity: 0, duration: 1 }, "<10%")
    .from(".feature-title-letter20", { opacity: 0, duration: 1 }, "<10%");
});

featureTitle.add("(max-width: 767px)", () => {
  let featureTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
      // markers: true
    },
  });

  featureTitletl.from(".feature-title__text--jp", {
    opacity: 0,
    duration: 1,
  });
});

/*-------------------------------
   Feature 1 Animations
   Feature 1 アニメーション
-------------------------------*/

let featureEyetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyetl.from(".feat-1-eyewrapper", { opacity: 0, duration: 1 });

let featureOne = gsap.matchMedia();

featureOne.add("(min-width: 768px)", () => {
  let featureOnetl = gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-1-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureOnetl
    .from(".feat-main-left-one", { opacity: 0, x: -100, duration: 1 })
    .from(".feat-main--right-1", { opacity: 0, x: 100, duration: 1 }, "<");
});

/*-------------------------------
   Feature 2 Animations
   Feature 2 アニメーション
-------------------------------*/

let featureEyeTwotl = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyeTwotl.from(".feat-2-eyewrapper", { opacity: 0, duration: 1 });

let featureTwo = gsap.matchMedia();

featureTwo.add("(min-width: 768px)", () => {
  let featureTwotl = gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-2-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureTwotl
    .from(".feat-main-left-two", { opacity: 0, x: 100, duration: 1 })
    .from(".feat-main--right--2", { opacity: 0, x: -100, duration: 1 }, "<");
});

/*-------------------------------
   Feature 3 Animations
   Feature 3 アニメーション
-------------------------------*/

let featureEyeThreetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyeThreetl.from(".feat-3-eyewrapper", {
  opacity: 0,
  duration: 1,
});

let featureThree = gsap.matchMedia();

featureThree.add("(min-width: 768px)", () => {
  let featureThreetl = gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-3-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureThreetl
    .from(".feat-main-left-three", { opacity: 0, x: -100, duration: 1 })
    .from(".feat-main--3-txt", { opacity: 0, x: 100, duration: 1 }, "<");
});

/*-------------------------------
  Course Animations
   Course アニメーション
-------------------------------*/

let courseTitle = gsap.matchMedia();
courseTitle.add("(min-width: 768px)", () => {
  splitText("course-title--eng", "course-title--eng-letter");

  let courseTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#course",
      start: "-=500px",
      scrub: false,
    },
  });

  courseTitletl
    .from(".course-title--eng-letter14", { opacity: 0, duration: 1 }, "")
    .from(".course-title--eng-letter15", { opacity: 0, duration: 1 }, "<10%")
    .from(".course-title--eng-letter16", { opacity: 0, duration: 1 }, "<10%")
    .from(".course-title--eng-letter17", { opacity: 0, duration: 1 }, "<10%")
    .from(".course-title--eng-letter18", { opacity: 0, duration: 1 }, "<10%")
    .from(".course-title--eng-letter19", { opacity: 0, duration: 1 }, "<10%");
});

courseTitle.add("(max-width: 767px)", () => {
  let courseTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#course",
      start: "-=500px",
      scrub: false,
    },
  });

  courseTitletl.from(".course-title--eng", {
    opacity: 0,
    duration: 1,
  });
});

/*-------------------------------
  Lunch Animations
   Lunch アニメーション
-------------------------------*/
let LunchImgtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#lunch",
    start: "-=500px",
    scrub: false,
  },
});

LunchImgtl.fromTo(
  ".reveal",
  {
    "--width": "100%",
    duration: 0.5,
  },
  {
    "--width": "0%",
    duration: 0.5,
  }
)
  .from(".lunch-title-anime", { opacity: 0, x: -100, duration: 1 })
  .from(".lunch-subtitle-anime", { opacity: 0, x: 100, duration: 1 }, "<");

/*-------------------------------
  Dinner Animations
   Dinner アニメーション
-------------------------------*/

let dinnerImgtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#dinner",
    start: "-=500px",
    scrub: false,
    // markers: true,
  },
});

dinnerImgtl
  .fromTo(
    ".reveal-black",
    {
      "--width": "100%",
      duration: 0.5,
    },
    {
      "--width": "0%",
      duration: 0.5,
    }
  )
  .fromTo(
    ".reveal-black-right",
    {
      "--width": "100%",
      duration: 0.5,
    },
    {
      "--width": "0%",
      duration: 0.5,
    },
    "<"
  )
  .from(".dinner-title-anime", { opacity: 0, x: -100, duration: 1 })
  .from(".dinner-subtitle-anime", { opacity: 0, x: 100, duration: 1 }, "<");

let dinnerBottomtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#dinner-seemore",
    start: "-=300px",
    scrub: false,
    markers: true,
  },
});

dinnerBottomtl
  .fromTo(
    ".bottom-left__img",
    {
      "--path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    {
      "--path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    }
  )
  .fromTo(
    ".bottom-img-right__img",
    {
      "--path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    {
      "--path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    "<"
  );

/*-------------------------------
  Message Animations
   Message アニメーション
-------------------------------*/

let messageTitle = gsap.matchMedia();
messageTitle.add("(min-width: 768px)", () => {
  splitText("message-title--eng", "message-title--eng-letter");

  let messageTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#message",
      start: "-=500px",
      scrub: false,
    },
  });

  messageTitletl
    .from(".message-title--eng-letter14", { opacity: 0, duration: 1 }, "")
    .from(".message-title--eng-letter15", { opacity: 0, duration: 1 }, "<10%")
    .from(".message-title--eng-letter16", { opacity: 0, duration: 1 }, "<10%")
    .from(".message-title--eng-letter17", { opacity: 0, duration: 1 }, "<10%")
    .from(".message-title--eng-letter18", { opacity: 0, duration: 1 }, "<10%")
    .from(".message-title--eng-letter19", { opacity: 0, duration: 1 }, "<10%")
    .from(".message-title--eng-letter20", { opacity: 0, duration: 1 }, "<10%");
});

messageTitle.add("(max-width: 767px)", () => {
  let messageTitletl = gsap.timeline({
    scrollTrigger: {
      trigger: "#message",
      start: "-=500px",
      scrub: false,
    },
  });

  messageTitletl.from(".message-title--eng", {
    opacity: 0,
    duration: 1,
  });
});

let messageImgtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".message-bottom-wrapper",
    start: "-=500px",
    scrub: false,
  },
});

messageImgtl
  .from(".flower-anime", {
    opacity: 0,
    x: 100,
    duration: 1,
  })
  .from(
    ".chef-anime",
    {
      opacity: 0,
      x: -100,
      duration: 1,
    },
    "<"
  );

/*-------------------------------
Voice Animations
 Voice アニメーション
-------------------------------*/
let voiceTitletl = gsap.timeline({
  scrollTrigger: {
    trigger: "#voice",
    start: "-=500px",
    scrub: false,
    // markers: true,
  },
});

voiceTitletl.from(".voice-title-anime", {
  opacity: 0,
  y: -50,
  duration: 1,
});

/*-------------------------------
NEWS Animations
 NEWS アニメーション
-------------------------------*/
let newsTitletl = gsap.timeline({
  scrollTrigger: {
    trigger: "#news",
    start: "-=500px",
    scrub: false,
    // markers: true,
  },
});

newsTitletl.from(".news-title-anime", {
  opacity: 0,
  y: -50,
  duration: 1,
});

/*-------------------------------
Insta Animations
 Insta アニメーション
-------------------------------*/
let instaTitletl = gsap.timeline({
  scrollTrigger: {
    trigger: "#insta",
    start: "-=500px",
    scrub: false,
    // markers: true,
  },
});

instaTitletl.from(".insta-title", {
  opacity: 0,
  x: -50,
  duration: 1,
});

/*-------------------------------
acess Animations
 acess アニメーション
-------------------------------*/
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
