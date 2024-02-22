import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/news/news.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toggleSpMenu } from "./assets/js/eventlisters/toggleSpMenu";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
import { activateAccessTitleAnimationsFeature } from "./assets/js/animations/activateAccessTitleAnimations";
import setStorageItem from "./assets/js/otherlogic/setStorage";
import toggleLanguage from "./assets/js/otherlogic/toggleLanguage";
import updateLangBtnText from "./assets/js/otherlogic/updateLangBtnText";
import activateLangBtnEventListener from "./assets/js/eventlisters/langBtnEventlistener";
import GetStorageItems from "./assets/js/otherlogic/getStorage";
import adjustLangBtnLocation from "./assets/js/otherlogic/adjustLangBtnLocation";
gsap.registerPlugin(ScrollTrigger);
setLoadingAnimation();
toggleSpMenu();

let kv_title = gsap.timeline({
  scrollTrigger: {
    trigger: ".news-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2, delay: 3 });

let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
  // news title
  let news_title = gsap.timeline({
    scrollTrigger: {
      trigger: "#news-top",
      start: "-=500px",
      scrub: false,
    },
  });

  news_title.from(".news-content", { y: 30, opacity: 0, duration: 2 }, "+=3");

  // news pagination
  let news_pagination = gsap.timeline({
    scrollTrigger: {
      trigger: ".news-pagination",
      start: "-=740px",
      scrub: false,
    },
  });

  news_pagination.from(".news-pagination", { y: 30, opacity: 0, duration: 1 });
});

/* pc */
mm.add("(min-width: 768px)", () => {
  // news content
  let news_title = gsap.timeline({
    scrollTrigger: {
      trigger: "#news-top",
      start: "-=500px",
      scrub: false,
    },
  });

  news_title.from(".news-content", { y: 30, opacity: 0, duration: 2 }, "+=3");
  // news pagination
  let news_pagination = gsap.timeline({
    scrollTrigger: {
      trigger: ".news-pagination",
      start: "-=680px",
      scrub: false,
    },
  });

  news_pagination.from(".news-pagination", { y: 30, opacity: 0, duration: 1 });
});

let home_btn = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-btn",
    start: "-=500px",
    scrub: false,
  },
});
home_btn.from(".home-btn", { y: 30, opacity: 0, duration: 2 });

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
