import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/common/footer.css";
import "./assets/css/information/information.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import { gsap } from "gsap";
import $ from "jquery";
setLoadingAnimation();
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

toggleSpMenu();

// 出現アニメーション
let kv_title = gsap.timeline({
  scrollTrigger: {
    trigger: ".information-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2 , delay: 3});

let information_top = gsap.timeline({
  scrollTrigger: {
    trigger: "#information-top",
    start: "-=500px",
    scrub: false,
  },
});
information_top
  .from(".information-top-text", { y: 30, opacity: 0, duration: 2 }, "+=3")
  .from(".room-rent", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".information-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")

let information_bottom = gsap.timeline({
  scrollTrigger: {
    trigger: "#information-bottom",
    start: "-=500px",
    scrub: false,
  },
});
information_bottom
  .from(".information-bottom-title", { y: 30, opacity: 0, duration: 2 })
  .from("table", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".home-btn", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
activateHeaderAnimations();



activateAccessTitleAnimationsFeature();

/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang" ; //the key to the local storage language
let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
// const langBtns = document.querySelectorAll(".lang-btn-text");
setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
toggleLanguage(currentLang);
updateLangBtnText(currentLang);
activateLangBtnEventListener();

/*-----------------------------------
  デバイスごとの調整に関するスクリプト
--------------------------------------*/
adjustLangBtnLocation();