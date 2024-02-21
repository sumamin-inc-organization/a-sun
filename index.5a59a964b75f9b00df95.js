/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/home/course.css":
/*!****************************************!*\
  !*** ./src/assets/css/home/course.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/dinner.css":
/*!****************************************!*\
  !*** ./src/assets/css/home/dinner.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/feature.css":
/*!*****************************************!*\
  !*** ./src/assets/css/home/feature.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/hero.css":
/*!**************************************!*\
  !*** ./src/assets/css/home/hero.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/insta.css":
/*!***************************************!*\
  !*** ./src/assets/css/home/insta.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/lunch.css":
/*!***************************************!*\
  !*** ./src/assets/css/home/lunch.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/message.css":
/*!*****************************************!*\
  !*** ./src/assets/css/home/message.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/news.css":
/*!**************************************!*\
  !*** ./src/assets/css/home/news.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/voice.css":
/*!***************************************!*\
  !*** ./src/assets/css/home/voice.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/animations/animateMeatball.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/animations/animateMeatball.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateMeatballIcon)
/* harmony export */ });


function animateMeatballIcon(){
const icon = document.querySelector(".meatball");
icon.classList.toggle('active')
}

/***/ }),

/***/ "./src/assets/js/animations/cardParallaxeffect.js":
/*!********************************************************!*\
  !*** ./src/assets/js/animations/cardParallaxeffect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateCardParallax)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");




gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function activateCardParallax(){
    let images = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(".parallax");

    images.forEach((image) => {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(image, {
        yPercent: -150 * image.dataset.speed,
        ease: "none",
        scrollTrigger: {
          scrub: image.dataset.speed,
        },
      });
    });
    
}

/***/ }),

/***/ "./src/assets/js/animations/crossfadeAnimation.js":
/*!********************************************************!*\
  !*** ./src/assets/js/animations/crossfadeAnimation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateCrossFadeAnimations)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


function activateCrossFadeAnimations(){
    var duration = 2;
var delay = 1;
var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({onComplete:repeat});
const images = document.querySelectorAll('.eyecatcher-slideshow_slide');
const firstImage = images[0];
const totalImages = images.length - 1;

console.log({images,totalImages});

gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(images).forEach((image,index)=>{
    var offset = index === 0 ? 0 : "-=" + duration; //insert first animation at a time of 0 or all other animations at a time that will overlap with the previous animation fading out.
  tl.to(image, {duration,autoAlpha:1,scale:1.5, repeat:1, yoyo:true, repeatDelay:delay}, offset)
  //when the last image fades out we need to cross-fade the first image
  if (index === totalImages){
    console.log("Add tween on the first image");
    tl.to(firstImage, {duration,autoAlpha:1, scale:1.5}, offset)
  }
})


function repeat() {
  tl.play(duration);
}
}

/***/ }),

/***/ "./src/assets/js/eventlisters/naviconEventlistener.js":
/*!************************************************************!*\
  !*** ./src/assets/js/eventlisters/naviconEventlistener.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNavIconEventListener)
/* harmony export */ });
/* harmony import */ var _animations_animateMeatball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/animateMeatball */ "./src/assets/js/animations/animateMeatball.js");


const icon = document.querySelector(".meatball");

function addNavIconEventListener(){
    icon.addEventListener('click',(e)=>{
        e.preventDefault();
        (0,_animations_animateMeatball__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
}

/***/ }),

/***/ "./src/assets/js/eventlisters/screensizeChange.js":
/*!********************************************************!*\
  !*** ./src/assets/js/eventlisters/screensizeChange.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ screenResizeListener)
/* harmony export */ });
/* harmony import */ var _otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherlogic/changeKvSrc */ "./src/assets/js/otherlogic/changeKvSrc.js");
/* harmony import */ var _otherlogic_determineTypeOfAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otherlogic/determineTypeOfAnimation */ "./src/assets/js/otherlogic/determineTypeOfAnimation.js");



function screenResizeListener(){
    window.addEventListener('resize', _otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_0__["default"]);
    // window.addEventListener('resize',determineTypeOfAnimation);
    window.addEventListener('resize',(e)=>{
        // determineTypeOfAnimation();
        (0,_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
}

/***/ }),

/***/ "./src/assets/js/otherlogic/changeKvSrc.js":
/*!*************************************************!*\
  !*** ./src/assets/js/otherlogic/changeKvSrc.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeKvSrc)
/* harmony export */ });
/* harmony import */ var _images_top_hero_sp_kv_sp_1_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-1-min.png */ "./src/assets/images/top/hero/sp/kv-sp-1-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_2_min_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-2-min.png */ "./src/assets/images/top/hero/sp/kv-sp-2-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_3_min_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-3-min.png */ "./src/assets/images/top/hero/sp/kv-sp-3-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_4_min_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-4-min.png */ "./src/assets/images/top/hero/sp/kv-sp-4-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_5_min_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-5-min.png */ "./src/assets/images/top/hero/sp/kv-sp-5-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_7_min_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-7-min.png */ "./src/assets/images/top/hero/sp/kv-sp-7-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_9_min_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-9-min.png */ "./src/assets/images/top/hero/sp/kv-sp-9-min.png");
/* harmony import */ var _images_top_hero_sp_kv_sp_11_min_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/top/hero/sp/kv-sp-11-min.png */ "./src/assets/images/top/hero/sp/kv-sp-11-min.png");
/* harmony import */ var _images_top_hero_kv_1_min_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/top/hero/kv-1-min.png */ "./src/assets/images/top/hero/kv-1-min.png");
/* harmony import */ var _images_top_hero_kv_2_min_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/top/hero/kv-2-min.png */ "./src/assets/images/top/hero/kv-2-min.png");
/* harmony import */ var _images_top_hero_kv_3_min_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/top/hero/kv-3-min.png */ "./src/assets/images/top/hero/kv-3-min.png");
/* harmony import */ var _images_top_hero_kv_4_min_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/top/hero/kv-4-min.png */ "./src/assets/images/top/hero/kv-4-min.png");
/* harmony import */ var _images_top_hero_kv_5_min_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/top/hero/kv-5-min.png */ "./src/assets/images/top/hero/kv-5-min.png");
/* harmony import */ var _images_top_hero_kv_7_min_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/top/hero/kv-7-min.png */ "./src/assets/images/top/hero/kv-7-min.png");
/* harmony import */ var _images_top_hero_kv_9_min_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/top/hero/kv-9-min.png */ "./src/assets/images/top/hero/kv-9-min.png");
/* harmony import */ var _images_top_hero_kv_11_min_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/top/hero/kv-11-min.png */ "./src/assets/images/top/hero/kv-11-min.png");
/* harmony import */ var _isitSP__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isitSP */ "./src/assets/js/otherlogic/isitSP.js");
























function changeKvSrc(){
    const IS_IT_SP = (0,_isitSP__WEBPACK_IMPORTED_MODULE_16__["default"])();
    const SLIDE_ONE = document.querySelector('.eyecatcher-slideshow_slide--one');
    const SLIDE_TWO = document.querySelector('.eyecatcher-slideshow_slide--two');
    const SLIDE_THREE = document.querySelector('.eyecatcher-slideshow_slide--three');
    const SLIDE_FOUR = document.querySelector('.eyecatcher-slideshow_slide--four');
    const SLIDE_FIVE = document.querySelector('.eyecatcher-slideshow_slide--five');
    const SLIDE_SIX = document.querySelector('.eyecatcher-slideshow_slide--six');
    const SLIDE_SEVEN = document.querySelector('.eyecatcher-slideshow_slide--seven');
    const SLIDE_EIGHT = document.querySelector('.eyecatcher-slideshow_slide--eight');
    const SLIDE_NINE = document.querySelector('.eyecatcher-slideshow_slide--nine');
    
    if(IS_IT_SP){
       SLIDE_ONE.src = _images_top_hero_sp_kv_sp_1_min_png__WEBPACK_IMPORTED_MODULE_0__;
       SLIDE_TWO.src = _images_top_hero_sp_kv_sp_2_min_png__WEBPACK_IMPORTED_MODULE_1__;
       SLIDE_THREE.src = _images_top_hero_sp_kv_sp_3_min_png__WEBPACK_IMPORTED_MODULE_2__;
       SLIDE_FOUR.src =  _images_top_hero_sp_kv_sp_4_min_png__WEBPACK_IMPORTED_MODULE_3__;
       SLIDE_FIVE.src =  _images_top_hero_sp_kv_sp_5_min_png__WEBPACK_IMPORTED_MODULE_4__;
       SLIDE_SIX.src =  _images_top_hero_sp_kv_sp_7_min_png__WEBPACK_IMPORTED_MODULE_5__;
       SLIDE_SEVEN.src = _images_top_hero_sp_kv_sp_9_min_png__WEBPACK_IMPORTED_MODULE_6__;
       SLIDE_EIGHT.src =  _images_top_hero_sp_kv_sp_11_min_png__WEBPACK_IMPORTED_MODULE_7__;
    }
    else{
        SLIDE_ONE.src = _images_top_hero_kv_1_min_png__WEBPACK_IMPORTED_MODULE_8__;
        SLIDE_TWO.src = _images_top_hero_kv_2_min_png__WEBPACK_IMPORTED_MODULE_9__;
        SLIDE_THREE.src = _images_top_hero_kv_3_min_png__WEBPACK_IMPORTED_MODULE_10__;
        SLIDE_FOUR.src = _images_top_hero_kv_4_min_png__WEBPACK_IMPORTED_MODULE_11__;
        SLIDE_FIVE.src = _images_top_hero_kv_5_min_png__WEBPACK_IMPORTED_MODULE_12__;
        SLIDE_SIX.src = _images_top_hero_kv_7_min_png__WEBPACK_IMPORTED_MODULE_13__;
        SLIDE_SEVEN.src = _images_top_hero_kv_9_min_png__WEBPACK_IMPORTED_MODULE_14__;
        SLIDE_EIGHT.src = _images_top_hero_kv_11_min_png__WEBPACK_IMPORTED_MODULE_15__;
    }
}

/***/ }),

/***/ "./src/assets/js/otherlogic/determineTypeOfAnimation.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/otherlogic/determineTypeOfAnimation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ determineTypeOfAnimation)
/* harmony export */ });
/* harmony import */ var _animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/cardParallaxeffect */ "./src/assets/js/animations/cardParallaxeffect.js");
/* harmony import */ var _isitSP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isitSP */ "./src/assets/js/otherlogic/isitSP.js");
/* harmony import */ var _isitTAB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isitTAB */ "./src/assets/js/otherlogic/isitTAB.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");






gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);

function determineTypeOfAnimation() {
    let currentWindow = (0,_isitTAB__WEBPACK_IMPORTED_MODULE_2__.isItPc)();
    
    if (currentWindow) {
        (0,_animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_0__["default"])();
    } else {
        currentWindow = (0,_isitSP__WEBPACK_IMPORTED_MODULE_1__["default"])();
        
        if (currentWindow) {
            console.log("It's a Mobile");
            let images = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.toArray(".t");

images.forEach((image) => {
  gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(image, {
    yPercent: -100 * image.dataset.sp,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.sp * 0.1,
    },
  });
});
        } else {
            currentWindow = (0,_isitTAB__WEBPACK_IMPORTED_MODULE_2__.isItTab)();
            
            if (currentWindow) {
                console.log("It's a Tablet");
            }
        }
    }
}


/***/ }),

/***/ "./src/assets/js/otherlogic/isitSP.js":
/*!********************************************!*\
  !*** ./src/assets/js/otherlogic/isitSP.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isItSp)
/* harmony export */ });
function isItSp(){
    const isItSp = window.matchMedia("(max-width: 767px)");
    if(isItSp.matches){
        return true;
    }
    else {
        return false;
    }
}

/***/ }),

/***/ "./src/assets/js/otherlogic/isitTAB.js":
/*!*********************************************!*\
  !*** ./src/assets/js/otherlogic/isitTAB.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isItPc: () => (/* binding */ isItPc),
/* harmony export */   isItTab: () => (/* binding */ isItTab)
/* harmony export */ });
function isItTab() {
    return window.matchMedia("(min-width: 500px) and (max-width: 600px)").matches;
}

function isItPc() {
    return window.matchMedia("(min-width: 650px)").matches;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/header.css */ "./src/assets/css/common/header.css");
/* harmony import */ var _assets_css_common_nav_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/common/nav.css */ "./src/assets/css/common/nav.css");
/* harmony import */ var _assets_css_home_animations_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/home/animations.css */ "./src/assets/css/home/animations.css");
/* harmony import */ var _assets_css_home_hero_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/home/hero.css */ "./src/assets/css/home/hero.css");
/* harmony import */ var _assets_css_home_feature_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/home/feature.css */ "./src/assets/css/home/feature.css");
/* harmony import */ var _assets_css_home_course_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/home/course.css */ "./src/assets/css/home/course.css");
/* harmony import */ var _assets_css_home_lunch_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/home/lunch.css */ "./src/assets/css/home/lunch.css");
/* harmony import */ var _assets_css_home_dinner_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/css/home/dinner.css */ "./src/assets/css/home/dinner.css");
/* harmony import */ var _assets_css_home_message_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/css/home/message.css */ "./src/assets/css/home/message.css");
/* harmony import */ var _assets_css_home_voice_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/css/home/voice.css */ "./src/assets/css/home/voice.css");
/* harmony import */ var _assets_css_home_news_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/css/home/news.css */ "./src/assets/css/home/news.css");
/* harmony import */ var _assets_css_home_insta_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/css/home/insta.css */ "./src/assets/css/home/insta.css");
/* harmony import */ var _assets_css_home_access_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/css/home/access.css */ "./src/assets/css/home/access.css");
/* harmony import */ var _assets_js_eventlisters_naviconEventlistener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/js/eventlisters/naviconEventlistener */ "./src/assets/js/eventlisters/naviconEventlistener.js");
/* harmony import */ var _assets_js_animations_crossfadeAnimation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/js/animations/crossfadeAnimation */ "./src/assets/js/animations/crossfadeAnimation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/js/eventlisters/screensizeChange */ "./src/assets/js/eventlisters/screensizeChange.js");
/* harmony import */ var _assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/js/otherlogic/isitSP */ "./src/assets/js/otherlogic/isitSP.js");
/* harmony import */ var _assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/js/otherlogic/changeKvSrc */ "./src/assets/js/otherlogic/changeKvSrc.js");
/* harmony import */ var _assets_js_animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/js/animations/cardParallaxeffect */ "./src/assets/js/animations/cardParallaxeffect.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_otherlogic_determineTypeOfAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/js/otherlogic/determineTypeOfAnimation */ "./src/assets/js/otherlogic/determineTypeOfAnimation.js");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var _assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/js/otherlogic/splitText */ "./src/assets/js/otherlogic/splitText.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");
/* harmony import */ var _assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/js/animations/activateAccessTitleAnimations */ "./src/assets/js/animations/activateAccessTitleAnimations.js");
/* harmony import */ var _assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/js/otherlogic/getStorage */ "./src/assets/js/otherlogic/getStorage.js");
/* harmony import */ var _assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/js/otherlogic/setStorage */ "./src/assets/js/otherlogic/setStorage.js");
/* harmony import */ var _assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/js/eventlisters/langBtnEventlistener */ "./src/assets/js/eventlisters/langBtnEventlistener.js");
/* harmony import */ var _assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/js/otherlogic/updateLangBtnText */ "./src/assets/js/otherlogic/updateLangBtnText.js");
/* harmony import */ var _assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/js/otherlogic/toggleLanguage */ "./src/assets/js/otherlogic/toggleLanguage.js");
/* harmony import */ var _assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/js/otherlogic/adjustLangBtnLocation */ "./src/assets/js/otherlogic/adjustLangBtnLocation.js");






































gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_36__.ScrollTrigger);
(0,_assets_js_eventlisters_naviconEventlistener__WEBPACK_IMPORTED_MODULE_16__["default"])();

(0,_assets_js_animations_crossfadeAnimation__WEBPACK_IMPORTED_MODULE_17__["default"])();

(0,_assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_21__["default"])();

// determineTypeOfAnimation();
(0,_assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_19__["default"])();

const screenType = (0,_assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_20__["default"])(); // 画面サイズをチェックします /checks for  screen size

(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_27__.toggleSpMenu)();

/*-------------------------------
    dinner background animations
    ディナーの背景アニメーション
-------------------------------*/

// const masterCompany = gsap.timeline();

// let dotAnimations = gsap.matchMedia();

// dotAnimations.add("(max-width: 500px)", () => {
//   function dinnerTopsp() {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".dinner-trigger", //#dinner
//         start: "-=500px top",
//         end: "+=200",
//         scrub: true,
//         // pin: true,
//       },
//     });

//     tl.from(".company-dot", { scale: 0 });

//     return tl;
//   }

//   masterCompany.add(dinnerTopsp());
// });
// dotAnimations.add("(min-width: 501px)", () => {
//   function dinnerTop() {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".dinner-trigger", //#dinner
//         start: "-=500px top",
//         end: "+=200",
//         scrub: true,
//       },
//     });

//     tl.fromTo(".company-dot", { scale: 0 }, { scale: 1.7 });
//     // .to(".company-dot", { scale: 1})

//     return tl;
//   }

//   masterCompany.add(dinnerTop());
// });

/*-------------------------------
    feature parallax animations
    フィーチャーのパララックスアニメーション
-------------------------------*/

let tl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=200px top",
    scrub: true,
  },
});

tl.to(".feat-main-left-one", { yPercent: -65 });

let t2 = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
  },
});

t2.to(".feat-main-left-two", { yPercent: -65 });

let t3 = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=200px top",
    scrub: true,
  },
});

t3.to(".feat-main-left-three", { yPercent: -65 });

/*-------------------------------
    Loading animation
   ロードアニメーション
-------------------------------*/
document.addEventListener("DOMContentLoaded", (e) => {
  let intro = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline();

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

gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_36__.ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  onEnterBack: animateLogo,
});

let tween = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.from(".logo__image--sp", { y: " -100% ", duration: 1 });

function animateLogo() {
  tween.restart();
}

/*-------------------------------
   Header PC animation
   ヘッダーPCアニメーション
-------------------------------*/

(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_25__["default"])();

/*------------------------------------
  KV Main Content Title Animations
  KVメインコンテンツタイトルのアニメーション
-------------------------------------*/

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
let kvMaintl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".eyecatcher_scrollimg--image",
    start: "-=100px",
    scrub: false,
    toggleActions:'play play play reset',
  },
});

kvMaintl
  .from(".kv-main-content_title", { opacity: 0, duration: 0.5 }, "")
  .from(".kv-main-txt-eng-sp", { opacity: 0, duration: 2 }, "<")
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
  // .from(".kv-main-txt-eng-sp", { opacity: 0, duration: 0.5 }, "<")
  .from(".kv-main__text-eng16", { opacity: 0, duration: 0.5 }, 0)
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

let kvFoodtl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".keyvisual-main_hero",
    start: "-500px",
    scrub: false,
    toggleActions:'play play play reset',
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

let featureTitle = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.matchMedia();
featureTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("feature-title__text--jp", "feature-title-letter");

  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
      toggleActions:'play play play reverse',
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
  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
      toggleActions:'play play play reverse',
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

let featureEyetl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=700px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureEyetl
.from(".feat-1-eyewrapper", { opacity: 0, duration: 1 })
.from(".feature-title__img", { opacity: 0, duration: 0.5 });

let featureOne = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.matchMedia();

// featureOne.add("(min-width: 768px)", () => {
//   let featureOnetl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".feat-1-eyewrapper",
//       start: "+=170px",
//       scrub: false,
//     },
//   });

//   featureOnetl
//     // .from(".feat-main-left-one", { opacity: 0, x: -100, duration: 1 })
//     .from(".feat-main--right-1", { opacity: 0,  duration: 3 });
// });
let featureOnetl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat-1-eyewrapper",
    start: "+=170px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureOnetl
  // .from(".feat-main-left-one", { opacity: 0, x: -100, duration: 1 })
  .from(".feat-main--right-1", { opacity: 0,  duration: 2 });
/*-------------------------------
   Feature 2 Animations
   Feature 2 アニメーション
-------------------------------*/

let featureEyeTwotl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=700px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureEyeTwotl.from(".feat-2-eyewrapper", { opacity: 0, duration: 2 });

// let featureTwo = gsap.matchMedia();

// featureTwo.add("(min-width: 768px)", () => {
//   let featureTwotl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".feat-2-eyewrapper",
//       start: "+=170px",
//       scrub: false,
//     },
//   });

//   featureTwotl
//     // .from(".feat-main-left-two", { opacity: 0, x: 100, duration: 1 })
//     .from(".feat-main--right--2", { opacity: 0,  duration: 1 });
// });
let featureTwotl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat-2-eyewrapper",
    start: "+=170px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureTwotl
  // .from(".feat-main-left-two", { opacity: 0, x: 100, duration: 1 })
  .from(".feat-main--right--2", { opacity: 0,  duration: 1 });
/*-------------------------------
   Feature 3 Animations
   Feature 3 アニメーション
-------------------------------*/

let featureEyeThreetl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=700px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureEyeThreetl.from(".feat-3-eyewrapper", {
  opacity: 0,
  duration: 1,
});

// let featureThree = gsap.matchMedia();

// featureThree.add("(min-width: 768px)", () => {
//   let featureThreetl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".feat-3-eyewrapper",
//       start: "+=170px",
//       scrub: false,
//     },
//   });

//   featureThreetl
//     .from(".feat-main-left-three", { opacity: 0, x: -100, duration: 1 })
//     .from(".feat-main--3-txt", { opacity: 0, x: 100, duration: 1 }, "<");
// });
let featureThreetl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat-3-eyewrapper",
    start: "+=170px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});

featureThreetl
  // .from(".feat-main-left-three", { opacity: 0, x: -100, duration: 1 })
  .from(".feat-main--3-txt", { opacity: 0, duration: 2 });
/*-------------------------------
  Course Animations
   Course アニメーション
-------------------------------*/

let courseTitle = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.matchMedia();
courseTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("course-title--eng", "course-title--eng-letter");

  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#course",
      start: "-=500px",
      scrub: false,
      toggleActions:'play play play reverse',
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
  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#course",
      start: "-=500px",
      scrub: false,
      toggleActions:'play play play reverse',
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
let LunchImgtl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: "#lunch",
    start: "-=500px",
    scrub: false,
    toggleActions:'play play play reverse',
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

// let dinnerImgtl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#dinner",
//     start: "-=500px",
//     scrub: false,
//     // markers:true
//   },
// });

// dinnerImgtl
//   .fromTo(
//     ".reveal-black",
//     {
//       "--width": "100%",
//       duration: 0.5,
//     },
//     {
//       "--width": "0%",
//       duration: 0.5,
//     }
//   )
//   .fromTo(
//     ".reveal-black-right",
//     {
//       "--width": "100%",
//       duration: 0.5,
//     },
//     {
//       "--width": "0%",
//       duration: 0.5,
//     },
//     "<"
//   )
//   .from(".dinner-title-anime", { opacity: 0, x: -100, duration: 1 })
//   .from(".dinner-subtitle-anime", { opacity: 0, x: 100, duration: 1 }, "<");

let dinnerBottomtl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".dinner-seemore-trigger",
    start: "-=500px",
    scrub: false,
    // markers:true
    toggleActions:'play play play reverse',
  },
});

// ディナーセクションの下部画像のアニメーションタイムライン

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
    
  );

/*-------------------------------
  Message Animations
  Message アニメーション
-------------------------------*/

let messageTitle = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.matchMedia();
messageTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("message-title--eng", "message-title--eng-letter");

  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#message",
      start: "-=500px",
      scrub: false,
      toggleActions:'play play play reverse',
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
  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: "#message",
      start: "-=500px",
      scrub: false,
      toggleActions:'play play play reverse',
    },
  });

  messageTitletl.from(".message-title--eng", {
    opacity: 0,
    duration: 1,
  });
});

let messageImgtl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".message-bottom-wrapper",
    start: "-=500px",
    scrub: false,
    toggleActions:'play play play reverse',
  },
});



messageImgtl
.fromTo(
  ".flower-anime",
  {
    "--path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  {
    "--path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  }
)
.fromTo(
  ".chef-anime",
  {
    "--path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  {
    "--path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  
);

/*-------------------------------
Voice Animations
 Voice アニメーション
-------------------------------*/
let voiceTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: "#voice",
    start: "-=500px",
    scrub: false,
    toggleActions:'play play play reverse',
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
let newsTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: "#news",
    start: "-=500px",
    scrub: false,
    toggleActions:'play play play reverse',
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
let instaTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: "#insta",
    start: "-=500px",
    scrub: false,
    toggleActions:'play play play reverse',
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
// let accessTitle = gsap.matchMedia();
// accessTitle.add("(min-width: 768px)", () => {
//   splitText("access-eng", "access-eng-letter");

//   let accessTitletl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#access",
//       start: "-=500px",
//       scrub: false,
//     },
//   });

//   accessTitletl
//     .from(".access-eng-letter16", { opacity: 0, duration: 1 }, "")
//     .from(".access-eng-letter17", { opacity: 0, duration: 1 }, "<10%")
//     .from(".access-eng-letter18", { opacity: 0, duration: 1 }, "<10%")
//     .from(".access-eng-letter19", { opacity: 0, duration: 1 }, "<10%")
//     .from(".access-eng-letter20", { opacity: 0, duration: 1 }, "<10%")
//     .from(".access-eng-letter21", { opacity: 0, duration: 1 }, "<10%");
// });

// accessTitle.add("(max-width: 767px)", () => {
//   let accessTitletl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#access",
//       start: "-=500px",
//       scrub: false,
//     },
//   });

//   accessTitletl.from(".access-eng", {
//     opacity: 0,
//     duration: 1,
//   });
// });


(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_28__.activateAccessTitleAnimations)();

/// 背景/タイトルアニメーショントリガー


let dinnerTitletl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
  scrollTrigger: {
    trigger: ".dinner-trigger",
    start: "top top", // トリガーの上部がビューポートの上部に到達したとき
    // scrub: true,  // scrubはスクロール時にアニメーションが発生します。（falseの場合、ユーザーがスクロールした距離に関係なく、アニメーションは最初から最後まで進みます）
    toggleActions:'play play play reverse',
  },
});

// 背景/タイトルアニメーションタイムライン
dinnerTitletl
  .to("#dinner", {backgroundColor:"#505050" }, "")
  .from(".dinner-subtitle-anime", {color:"#505050" ,opacity:0}, "<") // "<" は、前のアニメーションの開始時点に挿入することを意味します
  .from(".dinner-title-anime", {color:"#505050",opacity:0 }, "<")
  


  /// ギャラリー画像トリガー

  let  dinnerImgtl = gsap__WEBPACK_IMPORTED_MODULE_35__.gsap.timeline({
    scrollTrigger: {
      trigger: ".dinner-gallary-wrapper",
      start: "-=400px",
      scrub: false,
      toggleActions:'play play play reverse',
    },
  });
  
  
  // ギャラリーアニメーションタイムライン

  dinnerImgtl
  .fromTo(
    ".dinner-anime",
    {
      "--path": "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    {
      "--path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    }
  )



/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang" ; //the key to the local storage language
let currentLang = (0,_assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_29__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
// const langBtns = document.querySelectorAll(".lang-btn-text");
(0,_assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_30__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
(0,_assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_33__["default"])(currentLang)
;(0,_assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_32__["default"])(currentLang);
(0,_assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_31__["default"])();

/*-----------------------------------
  デバイスごとの調整に関するスクリプト
--------------------------------------*/
(0,_assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_34__["default"])();

/***/ }),

/***/ "./src/assets/images/top/hero/kv-1-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-1-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-1-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-11-min.png":
/*!**************************************************!*\
  !*** ./src/assets/images/top/hero/kv-11-min.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-11-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-2-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-2-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-2-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-3-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-3-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-3-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-4-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-4-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-4-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-5-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-5-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-5-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-7-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-7-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-7-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/kv-9-min.png":
/*!*************************************************!*\
  !*** ./src/assets/images/top/hero/kv-9-min.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-9-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-1-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-1-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-1-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-11-min.png":
/*!********************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-11-min.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-11-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-2-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-2-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-2-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-3-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-3-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-3-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-4-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-4-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-4-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-5-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-5-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-5-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-7-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-7-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-7-min.png";

/***/ }),

/***/ "./src/assets/images/top/hero/sp/kv-sp-9-min.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/top/hero/sp/kv-sp-9-min.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kv-sp-9-min.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunka_sun"] = self["webpackChunka_sun"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-32f890"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNWE1OWE5NjRiNzVmOWIwMGRmOTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0VlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINEI7QUFDdUI7QUFDbkQsc0NBQUksZ0JBQWdCLDZEQUFhO0FBQ2xCO0FBQ2YsaUJBQWlCLHNDQUFJOztBQUVyQjtBQUNBLE1BQU0sc0NBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEI7O0FBRWI7QUFDZjtBQUNBO0FBQ0EsU0FBUyxzQ0FBSSxXQUFXLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBbUI7O0FBRWhDLHNDQUFJO0FBQ0osb0RBQW9EO0FBQ3BELGdCQUFnQix1RUFBdUU7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmdFOztBQUVoRTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSxRQUFRLHVFQUFtQjtBQUMzQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUb0Q7QUFDMEI7O0FBRS9EO0FBQ2Ysc0NBQXNDLCtEQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LDRCQUE0QiwyQkFBMkI7QUFDdkQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELFlBQVksdUNBQUksNEJBQTRCLDJCQUEyQjs7QUFFdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJGQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9ELGlDQUFpQyx5QkFBeUI7QUFDMUQscUNBQXFDLDJCQUEyQjtBQUNoRSxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUscUNBQXFDLDJCQUEyQjtBQUNoRSxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUscUNBQXFDLDJCQUEyQjtBQUNoRSxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUsc0NBQXNDLDJCQUEyQjtBQUNqRSxzQ0FBc0MsMkJBQTJCO0FBQ2pFLHNDQUFzQywyQkFBMkI7QUFDakUsc0NBQXNDLDJCQUEyQjtBQUNqRSxzQ0FBc0MsMkJBQTJCO0FBQ2pFLG9DQUFvQywyQkFBMkI7QUFDL0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FB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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvY291cnNlLmNzcz8yMzZlIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9kaW5uZXIuY3NzPzIxYTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzPzUzMmYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2hlcm8uY3NzP2ZiNjYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzcz9kMmFkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3M/MGJkNiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3M/MWVlMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3M/OGEzZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvdm9pY2UuY3NzPzYwZjEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYW5pbWF0ZU1lYXRiYWxsLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jcm9zc2ZhZGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9uYXZpY29uRXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRTUC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0VEFCLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZU1lYXRiYWxsSWNvbigpe1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVhdGJhbGxcIik7XG5pY29uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG59IiwiXG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNhcmRQYXJhbGxheCgpe1xuICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIucGFyYWxsYXhcIik7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucygpe1xuICAgIHZhciBkdXJhdGlvbiA9IDI7XG52YXIgZGVsYXkgPSAxO1xudmFyIHRsID0gZ3NhcC50aW1lbGluZSh7b25Db21wbGV0ZTpyZXBlYXR9KTtcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZScpO1xuY29uc3QgZmlyc3RJbWFnZSA9IGltYWdlc1swXTtcbmNvbnN0IHRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cbmNvbnNvbGUubG9nKHtpbWFnZXMsdG90YWxJbWFnZXN9KTtcblxuZ3NhcC51dGlscy50b0FycmF5KGltYWdlcykuZm9yRWFjaCgoaW1hZ2UsaW5kZXgpPT57XG4gICAgdmFyIG9mZnNldCA9IGluZGV4ID09PSAwID8gMCA6IFwiLT1cIiArIGR1cmF0aW9uOyAvL2luc2VydCBmaXJzdCBhbmltYXRpb24gYXQgYSB0aW1lIG9mIDAgb3IgYWxsIG90aGVyIGFuaW1hdGlvbnMgYXQgYSB0aW1lIHRoYXQgd2lsbCBvdmVybGFwIHdpdGggdGhlIHByZXZpb3VzIGFuaW1hdGlvbiBmYWRpbmcgb3V0LlxuICB0bC50byhpbWFnZSwge2R1cmF0aW9uLGF1dG9BbHBoYToxLHNjYWxlOjEuNSwgcmVwZWF0OjEsIHlveW86dHJ1ZSwgcmVwZWF0RGVsYXk6ZGVsYXl9LCBvZmZzZXQpXG4gIC8vd2hlbiB0aGUgbGFzdCBpbWFnZSBmYWRlcyBvdXQgd2UgbmVlZCB0byBjcm9zcy1mYWRlIHRoZSBmaXJzdCBpbWFnZVxuICBpZiAoaW5kZXggPT09IHRvdGFsSW1hZ2VzKXtcbiAgICBjb25zb2xlLmxvZyhcIkFkZCB0d2VlbiBvbiB0aGUgZmlyc3QgaW1hZ2VcIik7XG4gICAgdGwudG8oZmlyc3RJbWFnZSwge2R1cmF0aW9uLGF1dG9BbHBoYToxLCBzY2FsZToxLjV9LCBvZmZzZXQpXG4gIH1cbn0pXG5cblxuZnVuY3Rpb24gcmVwZWF0KCkge1xuICB0bC5wbGF5KGR1cmF0aW9uKTtcbn1cbn0iLCJpbXBvcnQgYW5pbWF0ZU1lYXRiYWxsSWNvbiBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlTWVhdGJhbGxcIjtcblxuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVhdGJhbGxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5hdkljb25FdmVudExpc3RlbmVyKCl7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYW5pbWF0ZU1lYXRiYWxsSWNvbigpO1xuICAgIH0pXG59IiwiaW1wb3J0IGNoYW5nZUt2U3JjIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JlZW5SZXNpemVMaXN0ZW5lcigpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VLdlNyYyk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoZSk9PntcbiAgICAgICAgLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG4gICAgICAgIGNoYW5nZUt2U3JjKCk7XG4gICAgfSlcbn0iLCJcbmltcG9ydCBzcFNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMi1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNC1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtOS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlOCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMTEtbWluLnBuZyc7XG5cblxuaW1wb3J0IHBjU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0yLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0zLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi00LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi01LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi03LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi05LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgaXNJdFNwIGZyb20gJy4vaXNpdFNQJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VLdlNyYygpe1xuICAgIGNvbnN0IElTX0lUX1NQID0gaXNJdFNwKCk7XG4gICAgY29uc3QgU0xJREVfT05FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1vbmUnKTtcbiAgICBjb25zdCBTTElERV9UV08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXR3bycpO1xuICAgIGNvbnN0IFNMSURFX1RIUkVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS10aHJlZScpO1xuICAgIGNvbnN0IFNMSURFX0ZPVVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZvdXInKTtcbiAgICBjb25zdCBTTElERV9GSVZFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1maXZlJyk7XG4gICAgY29uc3QgU0xJREVfU0lYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zaXgnKTtcbiAgICBjb25zdCBTTElERV9TRVZFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tc2V2ZW4nKTtcbiAgICBjb25zdCBTTElERV9FSUdIVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZWlnaHQnKTtcbiAgICBjb25zdCBTTElERV9OSU5FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1uaW5lJyk7XG4gICAgXG4gICAgaWYoSVNfSVRfU1Ape1xuICAgICAgIFNMSURFX09ORS5zcmMgPSBzcFNsaWRlMTtcbiAgICAgICBTTElERV9UV08uc3JjID0gc3BTbGlkZTI7XG4gICAgICAgU0xJREVfVEhSRUUuc3JjID0gc3BTbGlkZTM7XG4gICAgICAgU0xJREVfRk9VUi5zcmMgPSAgc3BTbGlkZTQ7XG4gICAgICAgU0xJREVfRklWRS5zcmMgPSAgc3BTbGlkZTU7XG4gICAgICAgU0xJREVfU0lYLnNyYyA9ICBzcFNsaWRlNjtcbiAgICAgICBTTElERV9TRVZFTi5zcmMgPSBzcFNsaWRlNztcbiAgICAgICBTTElERV9FSUdIVC5zcmMgPSAgc3BTbGlkZTg7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFNMSURFX09ORS5zcmMgPSBwY1NsaWRlMTtcbiAgICAgICAgU0xJREVfVFdPLnNyYyA9IHBjU2xpZGUyO1xuICAgICAgICBTTElERV9USFJFRS5zcmMgPSBwY1NsaWRlMztcbiAgICAgICAgU0xJREVfRk9VUi5zcmMgPSBwY1NsaWRlNDtcbiAgICAgICAgU0xJREVfRklWRS5zcmMgPSBwY1NsaWRlNTtcbiAgICAgICAgU0xJREVfU0lYLnNyYyA9IHBjU2xpZGU2O1xuICAgICAgICBTTElERV9TRVZFTi5zcmMgPSBwY1NsaWRlNztcbiAgICAgICAgU0xJREVfRUlHSFQuc3JjID0gcGNTbGlkZTg7XG4gICAgfVxufSIsImltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vaXNpdFNQXCI7XG5pbXBvcnQgeyBpc0l0UGMsIGlzSXRUYWIgfSBmcm9tIFwiLi9pc2l0VEFCXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFdpbmRvdyA9IGlzSXRQYygpO1xuICAgIFxuICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRTcCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIE1vYmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudFwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gIGdzYXAudG8oaW1hZ2UsIHtcbiAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3AsXG4gICAgZWFzZTogXCJub25lXCIsXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3AgKiAwLjEsXG4gICAgfSxcbiAgfSk7XG59KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSBpc0l0VGFiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgVGFibGV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdFNwKCl7XG4gICAgY29uc3QgaXNJdFNwID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIik7XG4gICAgaWYoaXNJdFNwLm1hdGNoZXMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICBmdW5jdGlvbiBpc0l0VGFiKCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIpLm1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0l0UGMoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjUwcHgpXCIpLm1hdGNoZXM7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzc1wiO1xuaW1wb3J0IGFkZE5hdkljb25FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHNjcmVlblJlc2l6ZUxpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZVwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1BcIjtcbmltcG9ydCBjaGFuZ2VLdlNyYyBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyY1wiO1xuaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5pbXBvcnQgYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHNwbGl0VGV4dCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9zcGxpdFRleHRcIjtcbmltcG9ydCB7IHRvZ2dsZVNwTWVudSB9IGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvdG9nZ2xlU3BNZW51XCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9ucyB9IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zXCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBzZXRTdG9yYWdlSXRlbSBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9zZXRTdG9yYWdlXCI7XG5pbXBvcnQgYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL2xhbmdCdG5FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgdXBkYXRlTGFuZ0J0blRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvdXBkYXRlTGFuZ0J0blRleHRcIjtcbmltcG9ydCB0b2dnbGVMYW5ndWFnZSBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy90b2dnbGVMYW5ndWFnZVwiO1xuaW1wb3J0IGFkanVzdExhbmdCdG5Mb2NhdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9hZGp1c3RMYW5nQnRuTG9jYXRpb25cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5hZGROYXZJY29uRXZlbnRMaXN0ZW5lcigpO1xuXG5hY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKTtcblxuY2hhbmdlS3ZTcmMoKTtcblxuLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG5zY3JlZW5SZXNpemVMaXN0ZW5lcigpO1xuXG5jb25zdCBzY3JlZW5UeXBlID0gaXNJdFNwKCk7IC8vIOeUu+mdouOCteOCpOOCuuOCkuODgeOCp+ODg+OCr+OBl+OBvuOBmSAvY2hlY2tzIGZvciAgc2NyZWVuIHNpemVcblxudG9nZ2xlU3BNZW51KCk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRpbm5lciBiYWNrZ3JvdW5kIGFuaW1hdGlvbnNcbiAgICDjg4fjgqPjg4rjg7zjga7og4zmma/jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBjb25zdCBtYXN0ZXJDb21wYW55ID0gZ3NhcC50aW1lbGluZSgpO1xuXG4vLyBsZXQgZG90QW5pbWF0aW9ucyA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4vLyBkb3RBbmltYXRpb25zLmFkZChcIihtYXgtd2lkdGg6IDUwMHB4KVwiLCAoKSA9PiB7XG4vLyAgIGZ1bmN0aW9uIGRpbm5lclRvcHNwKCkge1xuLy8gICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuLy8gICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgICB0cmlnZ2VyOiBcIi5kaW5uZXItdHJpZ2dlclwiLCAvLyNkaW5uZXJcbi8vICAgICAgICAgc3RhcnQ6IFwiLT01MDBweCB0b3BcIixcbi8vICAgICAgICAgZW5kOiBcIis9MjAwXCIsXG4vLyAgICAgICAgIHNjcnViOiB0cnVlLFxuLy8gICAgICAgICAvLyBwaW46IHRydWUsXG4vLyAgICAgICB9LFxuLy8gICAgIH0pO1xuXG4vLyAgICAgdGwuZnJvbShcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAwIH0pO1xuXG4vLyAgICAgcmV0dXJuIHRsO1xuLy8gICB9XG5cbi8vICAgbWFzdGVyQ29tcGFueS5hZGQoZGlubmVyVG9wc3AoKSk7XG4vLyB9KTtcbi8vIGRvdEFuaW1hdGlvbnMuYWRkKFwiKG1pbi13aWR0aDogNTAxcHgpXCIsICgpID0+IHtcbi8vICAgZnVuY3Rpb24gZGlubmVyVG9wKCkge1xuLy8gICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuLy8gICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgICB0cmlnZ2VyOiBcIi5kaW5uZXItdHJpZ2dlclwiLCAvLyNkaW5uZXJcbi8vICAgICAgICAgc3RhcnQ6IFwiLT01MDBweCB0b3BcIixcbi8vICAgICAgICAgZW5kOiBcIis9MjAwXCIsXG4vLyAgICAgICAgIHNjcnViOiB0cnVlLFxuLy8gICAgICAgfSxcbi8vICAgICB9KTtcblxuLy8gICAgIHRsLmZyb21UbyhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAwIH0sIHsgc2NhbGU6IDEuNyB9KTtcbi8vICAgICAvLyAudG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMX0pXG5cbi8vICAgICByZXR1cm4gdGw7XG4vLyAgIH1cblxuLy8gICBtYXN0ZXJDb21wYW55LmFkZChkaW5uZXJUb3AoKSk7XG4vLyB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmVhdHVyZSBwYXJhbGxheCBhbmltYXRpb25zXG4gICAg44OV44Kj44O844OB44Oj44O844Gu44OR44Op44Op44OD44Kv44K544Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MVwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gIH0sXG59KTtcblxudGwudG8oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgeVBlcmNlbnQ6IC02NSB9KTtcblxubGV0IHQyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gIH0sXG59KTtcblxudDIudG8oXCIuZmVhdC1tYWluLWxlZnQtdHdvXCIsIHsgeVBlcmNlbnQ6IC02NSB9KTtcblxubGV0IHQzID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0M1wiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gIH0sXG59KTtcblxudDMudG8oXCIuZmVhdC1tYWluLWxlZnQtdGhyZWVcIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBMb2FkaW5nIGFuaW1hdGlvblxuICAg44Ot44O844OJ44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiB7XG4gIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKTtcblxuICBpbnRyb1xuICAgIC5mcm9tKFwiLnRyYW5zaXRpb24taXRlbVwiLCB7IHk6IFwiMTAwJVwiLCBkZWxheTogMiB9KVxuICAgIC5mcm9tKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IHk6IFwiMTAwJVwiIH0pXG4gICAgLnNldChcIi50cmFuc2l0aW9uLWltZ1wiLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAuc2V0KFwiLnRyYW5zaXRpb24taW1nXCIsIHsgeDogXCIxMDAlXCIgfSlcbiAgICAudG8oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgeTogXCItMTAwJVwiIH0pXG4gICAgLnRvKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgLnNldChcIi50cmFuc2l0aW9uLWl0ZW1cIiwgeyBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgIC5mcm9tKFwiLmtleXZpc3VhbC10b3BfX2xvZ29cIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmV5ZWNhdGNoZXItc2xpZGVzaG93XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCI8MjUlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MjAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIua3YtZW5nLXR4dC1zcFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI0LjVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0M1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0NlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXG4gICAgICBcIi5leWVjYXRjaGVyX19zY3JvbGxpbWdcIixcbiAgICAgIHsgb3BhY2l0eTogMCwgeTogLTEwMCwgZHVyYXRpb246IDEgfSxcbiAgICAgIFwiPDI1JVwiXG4gICAgKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIExvZ28gQW5pbWF0aW9uc1xuICAg44Ot44K044Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICB0cmlnZ2VyOiBcIi50cmlnZ2VyXCIsXG4gIHN0YXJ0OiBcInRvcCAtPTEwXCIsXG4gIG9uRW50ZXJCYWNrOiBhbmltYXRlTG9nbyxcbn0pO1xuXG5sZXQgdHdlZW4gPSBnc2FwLmZyb20oXCIubG9nb19faW1hZ2UtLXNwXCIsIHsgeTogXCIgLTEwMCUgXCIsIGR1cmF0aW9uOiAxIH0pO1xuXG5mdW5jdGlvbiBhbmltYXRlTG9nbygpIHtcbiAgdHdlZW4ucmVzdGFydCgpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEhlYWRlciBQQyBhbmltYXRpb25cbiAgIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEtWIE1haW4gQ29udGVudCBUaXRsZSBBbmltYXRpb25zXG4gIEtW44Oh44Kk44Oz44Kz44Oz44OG44Oz44OE44K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua3YtbWFpbi10eHQtZW5nLXBjXCIpO1xuY29uc3QgZnJhZ21lbnRzID0gdGV4dENvbnRhaW5lci5pbm5lckhUTUwuc3BsaXQoXCI8YnI+XCIpO1xuXG50ZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIENsZWFyIHRoZSBvcmlnaW5hbCBjb250ZW50XG5sZXQgY2xhc3NDb3VudGVyID0gMTsgLy8gQ291bnRlciBmb3IgdW5pcXVlIGNsYXNzIG5hbWVzXG5cbmZyYWdtZW50cy5mb3JFYWNoKChmcmFnbWVudCwgaW5kZXgpID0+IHtcbiAgY29uc3QgZnJhZ21lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZnJhZ21lbnRXcmFwcGVyLmlubmVySFRNTCA9IGZyYWdtZW50O1xuXG4gIGNvbnN0IGZyYWdtZW50U3BhbnMgPSBmcmFnbWVudFdyYXBwZXIuY2hpbGROb2RlcztcbiAgZnJhZ21lbnRTcGFucy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBjb25zdCBsZXR0ZXJzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChcIlwiKTtcbiAgICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGBrdi1tYWluX190ZXh0LWVuZyR7Y2xhc3NDb3VudGVyfWApO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjbGFzc0NvdW50ZXIrKztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpbmRleCA8IGZyYWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICB9XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBLViBUaXRsZSBBbmltYXRpb25cbiAgIEtW44K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBrdk1haW50bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZXllY2F0Y2hlcl9zY3JvbGxpbWctLWltYWdlXCIsXG4gICAgc3RhcnQ6IFwiLT0xMDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICB0b2dnbGVBY3Rpb25zOidwbGF5IHBsYXkgcGxheSByZXNldCcsXG4gIH0sXG59KTtcblxua3ZNYWludGxcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIlwiKVxuICAuZnJvbShcIi5rdi1tYWluLXR4dC1lbmctc3BcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIjxcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC8vIC5mcm9tKFwiLmt2LW1haW4tdHh0LWVuZy1zcFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8XCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIDApXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzMzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzYxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc2MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTAwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBLViBGb29kIEltYWdlIEFuaW1hdGlvblxuICAgS1bjg5Xjg7zjg4nnlLvlg4/jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQga3ZGb29kdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmtleXZpc3VhbC1tYWluX2hlcm9cIixcbiAgICBzdGFydDogXCItNTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmVzZXQnLFxuICB9LFxufSk7XG5cbmt2Rm9vZHRsXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tdG9wLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLWJvdHRvbVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXRvcC1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIFRpdGxlIEFuaW1hdGlvblxuICAg5qmf6IO944K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuZmVhdHVyZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImZlYXR1cmUtdGl0bGVfX3RleHQtLWpwXCIsIFwiZmVhdHVyZS10aXRsZS1sZXR0ZXJcIik7XG5cbiAgbGV0IGZlYXR1cmVUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZmVhdHVyZVwiLFxuICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVRpdGxldGxcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG59KTtcblxuZmVhdHVyZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBmZWF0dXJlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2ZlYXR1cmVcIixcbiAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaXRsZXRsLmZyb20oXCIuZmVhdHVyZS10aXRsZV9fdGV4dC0tanBcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEsXG4gIH0pO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSAxIEFuaW1hdGlvbnNcbiAgIEZlYXR1cmUgMSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZUV5ZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MVwiLFxuICAgIHN0YXJ0OiBcIi09NzAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuZmVhdHVyZUV5ZXRsXG4uZnJvbShcIi5mZWF0LTEtZXlld3JhcHBlclwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pXG4uZnJvbShcIi5mZWF0dXJlLXRpdGxlX19pbWdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pO1xuXG5sZXQgZmVhdHVyZU9uZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4vLyBmZWF0dXJlT25lLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4vLyAgIGxldCBmZWF0dXJlT25ldGwgPSBnc2FwLnRpbWVsaW5lKHtcbi8vICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAgICAgICB0cmlnZ2VyOiBcIi5mZWF0LTEtZXlld3JhcHBlclwiLFxuLy8gICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuLy8gICAgICAgc2NydWI6IGZhbHNlLFxuLy8gICAgIH0sXG4vLyAgIH0pO1xuXG4vLyAgIGZlYXR1cmVPbmV0bFxuLy8gICAgIC8vIC5mcm9tKFwiLmZlYXQtbWFpbi1sZWZ0LW9uZVwiLCB7IG9wYWNpdHk6IDAsIHg6IC0xMDAsIGR1cmF0aW9uOiAxIH0pXG4vLyAgICAgLmZyb20oXCIuZmVhdC1tYWluLS1yaWdodC0xXCIsIHsgb3BhY2l0eTogMCwgIGR1cmF0aW9uOiAzIH0pO1xuLy8gfSk7XG5sZXQgZmVhdHVyZU9uZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0LTEtZXlld3JhcHBlclwiLFxuICAgIHN0YXJ0OiBcIis9MTcwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuZmVhdHVyZU9uZXRsXG4gIC8vIC5mcm9tKFwiLmZlYXQtbWFpbi1sZWZ0LW9uZVwiLCB7IG9wYWNpdHk6IDAsIHg6IC0xMDAsIGR1cmF0aW9uOiAxIH0pXG4gIC5mcm9tKFwiLmZlYXQtbWFpbi0tcmlnaHQtMVwiLCB7IG9wYWNpdHk6IDAsICBkdXJhdGlvbjogMiB9KTtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSAyIEFuaW1hdGlvbnNcbiAgIEZlYXR1cmUgMiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZUV5ZVR3b3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09NzAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuZmVhdHVyZUV5ZVR3b3RsLmZyb20oXCIuZmVhdC0yLWV5ZXdyYXBwZXJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9KTtcblxuLy8gbGV0IGZlYXR1cmVUd28gPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuLy8gZmVhdHVyZVR3by5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuLy8gICBsZXQgZmVhdHVyZVR3b3RsID0gZ3NhcC50aW1lbGluZSh7XG4vLyAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgdHJpZ2dlcjogXCIuZmVhdC0yLWV5ZXdyYXBwZXJcIixcbi8vICAgICAgIHN0YXJ0OiBcIis9MTcwcHhcIixcbi8vICAgICAgIHNjcnViOiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBmZWF0dXJlVHdvdGxcbi8vICAgICAvLyAuZnJvbShcIi5mZWF0LW1haW4tbGVmdC10d29cIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0pXG4vLyAgICAgLmZyb20oXCIuZmVhdC1tYWluLS1yaWdodC0tMlwiLCB7IG9wYWNpdHk6IDAsICBkdXJhdGlvbjogMSB9KTtcbi8vIH0pO1xubGV0IGZlYXR1cmVUd290bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdC0yLWV5ZXdyYXBwZXJcIixcbiAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICB9LFxufSk7XG5cbmZlYXR1cmVUd290bFxuICAvLyAuZnJvbShcIi5mZWF0LW1haW4tbGVmdC10d29cIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0pXG4gIC5mcm9tKFwiLmZlYXQtbWFpbi0tcmlnaHQtLTJcIiwgeyBvcGFjaXR5OiAwLCAgZHVyYXRpb246IDEgfSk7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgMyBBbmltYXRpb25zXG4gICBGZWF0dXJlIDMg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVFeWVUaHJlZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0M1wiLFxuICAgIHN0YXJ0OiBcIi09NzAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuZmVhdHVyZUV5ZVRocmVldGwuZnJvbShcIi5mZWF0LTMtZXlld3JhcHBlclwiLCB7XG4gIG9wYWNpdHk6IDAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8vIGxldCBmZWF0dXJlVGhyZWUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuLy8gZmVhdHVyZVRocmVlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4vLyAgIGxldCBmZWF0dXJlVGhyZWV0bCA9IGdzYXAudGltZWxpbmUoe1xuLy8gICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMy1leWV3cmFwcGVyXCIsXG4vLyAgICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4vLyAgICAgICBzY3J1YjogZmFsc2UsXG4vLyAgICAgfSxcbi8vICAgfSk7XG5cbi8vICAgZmVhdHVyZVRocmVldGxcbi8vICAgICAuZnJvbShcIi5mZWF0LW1haW4tbGVmdC10aHJlZVwiLCB7IG9wYWNpdHk6IDAsIHg6IC0xMDAsIGR1cmF0aW9uOiAxIH0pXG4vLyAgICAgLmZyb20oXCIuZmVhdC1tYWluLS0zLXR4dFwiLCB7IG9wYWNpdHk6IDAsIHg6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xuLy8gfSk7XG5sZXQgZmVhdHVyZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQtMy1leWV3cmFwcGVyXCIsXG4gICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICB0b2dnbGVBY3Rpb25zOidwbGF5IHBsYXkgcGxheSByZXZlcnNlJyxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlVGhyZWV0bFxuICAvLyAuZnJvbShcIi5mZWF0LW1haW4tbGVmdC10aHJlZVwiLCB7IG9wYWNpdHk6IDAsIHg6IC0xMDAsIGR1cmF0aW9uOiAxIH0pXG4gIC5mcm9tKFwiLmZlYXQtbWFpbi0tMy10eHRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9KTtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBDb3Vyc2UgQW5pbWF0aW9uc1xuICAgQ291cnNlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBjb3Vyc2VUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuY291cnNlVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiY291cnNlLXRpdGxlLS1lbmdcIiwgXCJjb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXJcIik7XG5cbiAgbGV0IGNvdXJzZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNjb3Vyc2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvdXJzZVRpdGxldGxcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5jb3Vyc2VUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgY291cnNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2NvdXJzZVwiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTHVuY2ggQW5pbWF0aW9uc1xuICAgTHVuY2gg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBMdW5jaEltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNsdW5jaFwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuTHVuY2hJbWd0bC5mcm9tVG8oXG4gIFwiLnJldmVhbFwiLFxuICB7XG4gICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH0sXG4gIHtcbiAgICBcIi0td2lkdGhcIjogXCIwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH1cbilcbiAgLmZyb20oXCIubHVuY2gtdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAuZnJvbShcIi5sdW5jaC1zdWJ0aXRsZS1hbmltZVwiLCB7IG9wYWNpdHk6IDAsIHg6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRGlubmVyIEFuaW1hdGlvbnNcbiAgIERpbm5lciDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBsZXQgZGlubmVySW1ndGwgPSBnc2FwLnRpbWVsaW5lKHtcbi8vICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuLy8gICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbi8vICAgICBzY3J1YjogZmFsc2UsXG4vLyAgICAgLy8gbWFya2Vyczp0cnVlXG4vLyAgIH0sXG4vLyB9KTtcblxuLy8gZGlubmVySW1ndGxcbi8vICAgLmZyb21Ubyhcbi8vICAgICBcIi5yZXZlYWwtYmxhY2tcIixcbi8vICAgICB7XG4vLyAgICAgICBcIi0td2lkdGhcIjogXCIxMDAlXCIsXG4vLyAgICAgICBkdXJhdGlvbjogMC41LFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgXCItLXdpZHRoXCI6IFwiMCVcIixcbi8vICAgICAgIGR1cmF0aW9uOiAwLjUsXG4vLyAgICAgfVxuLy8gICApXG4vLyAgIC5mcm9tVG8oXG4vLyAgICAgXCIucmV2ZWFsLWJsYWNrLXJpZ2h0XCIsXG4vLyAgICAge1xuLy8gICAgICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuLy8gICAgICAgZHVyYXRpb246IDAuNSxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIFwiLS13aWR0aFwiOiBcIjAlXCIsXG4vLyAgICAgICBkdXJhdGlvbjogMC41LFxuLy8gICAgIH0sXG4vLyAgICAgXCI8XCJcbi8vICAgKVxuLy8gICAuZnJvbShcIi5kaW5uZXItdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuLy8gICAuZnJvbShcIi5kaW5uZXItc3VidGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcblxubGV0IGRpbm5lckJvdHRvbXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5kaW5uZXItc2VlbW9yZS10cmlnZ2VyXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICAvLyBtYXJrZXJzOnRydWVcbiAgICB0b2dnbGVBY3Rpb25zOidwbGF5IHBsYXkgcGxheSByZXZlcnNlJyxcbiAgfSxcbn0pO1xuXG4vLyDjg4fjgqPjg4rjg7zjgrvjgq/jgrfjg6fjg7Pjga7kuIvpg6jnlLvlg4/jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjgr/jgqTjg6Djg6njgqTjg7NcblxuZGlubmVyQm90dG9tdGxcbiAgLmZyb21UbyhcbiAgICBcIi5ib3R0b20tbGVmdF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfVxuICApXG4gIC5mcm9tVG8oXG4gICAgXCIuYm90dG9tLWltZy1yaWdodF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfSxcbiAgICBcbiAgKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1lc3NhZ2UgQW5pbWF0aW9uc1xuICBNZXNzYWdlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBtZXNzYWdlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJtZXNzYWdlLXRpdGxlLS1lbmdcIiwgXCJtZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBtZXNzYWdlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI21lc3NhZ2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICAgIH0sXG4gIH0pO1xuXG4gIG1lc3NhZ2VUaXRsZXRsXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG59KTtcblxubWVzc2FnZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBtZXNzYWdlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI21lc3NhZ2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICAgIH0sXG4gIH0pO1xuXG4gIG1lc3NhZ2VUaXRsZXRsLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG5sZXQgbWVzc2FnZUltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5tZXNzYWdlLWJvdHRvbS13cmFwcGVyXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICB0b2dnbGVBY3Rpb25zOidwbGF5IHBsYXkgcGxheSByZXZlcnNlJyxcbiAgfSxcbn0pO1xuXG5cblxubWVzc2FnZUltZ3RsXG4uZnJvbVRvKFxuICBcIi5mbG93ZXItYW5pbWVcIixcbiAge1xuICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDAgMCwgMCAxMDAlLCAwIDEwMCUpXCIsXG4gIH0sXG4gIHtcbiAgICBcIi0tcGF0aFwiOiBcInBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiLFxuICB9XG4pXG4uZnJvbVRvKFxuICBcIi5jaGVmLWFuaW1lXCIsXG4gIHtcbiAgICBcIi0tcGF0aFwiOiBcInBvbHlnb24oMCAwLCAwIDAsIDAgMTAwJSwgMCAxMDAlKVwiLFxuICB9LFxuICB7XG4gICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSlcIixcbiAgfSxcbiAgXG4pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblZvaWNlIEFuaW1hdGlvbnNcbiBWb2ljZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IHZvaWNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjdm9pY2VcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICB9LFxufSk7XG5cbnZvaWNlVGl0bGV0bC5mcm9tKFwiLnZvaWNlLXRpdGxlLWFuaW1lXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeTogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbk5FV1MgQW5pbWF0aW9uc1xuIE5FV1Mg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBuZXdzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjbmV3c1wiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxubmV3c1RpdGxldGwuZnJvbShcIi5uZXdzLXRpdGxlLWFuaW1lXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeTogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkluc3RhIEFuaW1hdGlvbnNcbiBJbnN0YSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGluc3RhVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjaW5zdGFcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICB9LFxufSk7XG5cbmluc3RhVGl0bGV0bC5mcm9tKFwiLmluc3RhLXRpdGxlXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeDogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFjZXNzIEFuaW1hdGlvbnNcbiBhY2VzcyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gbGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4vLyBhY2Nlc3NUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuLy8gICBzcGxpdFRleHQoXCJhY2Nlc3MtZW5nXCIsIFwiYWNjZXNzLWVuZy1sZXR0ZXJcIik7XG5cbi8vICAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbi8vICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAgICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbi8vICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbi8vICAgICAgIHNjcnViOiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBhY2Nlc3NUaXRsZXRsXG4vLyAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4vLyAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuLy8gICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbi8vICAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4vLyAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuLy8gICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG4vLyB9KTtcblxuLy8gYWNjZXNzVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbi8vICAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbi8vICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAgICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbi8vICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbi8vICAgICAgIHNjcnViOiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBhY2Nlc3NUaXRsZXRsLmZyb20oXCIuYWNjZXNzLWVuZ1wiLCB7XG4vLyAgICAgb3BhY2l0eTogMCxcbi8vICAgICBkdXJhdGlvbjogMSxcbi8vICAgfSk7XG4vLyB9KTtcblxuXG5hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9ucygpO1xuXG4vLy8g6IOM5pmvL+OCv+OCpOODiOODq+OCouODi+ODoeODvOOCt+ODp+ODs+ODiOODquOCrOODvFxuXG5cbmxldCBkaW5uZXJUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5kaW5uZXItdHJpZ2dlclwiLFxuICAgIHN0YXJ0OiBcInRvcCB0b3BcIiwgLy8g44OI44Oq44Ks44O844Gu5LiK6YOo44GM44OT44Ol44O844Od44O844OI44Gu5LiK6YOo44Gr5Yiw6YGU44GX44Gf44Go44GNXG4gICAgLy8gc2NydWI6IHRydWUsICAvLyBzY3J1YuOBr+OCueOCr+ODreODvOODq+aZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBjOeZuueUn+OBl+OBvuOBmeOAgu+8iGZhbHNl44Gu5aC05ZCI44CB44Om44O844K244O844GM44K544Kv44Ot44O844Or44GX44Gf6Led6Zui44Gr6Zai5L+C44Gq44GP44CB44Ki44OL44Oh44O844K344On44Oz44Gv5pyA5Yid44GL44KJ5pyA5b6M44G+44Gn6YCy44G/44G+44GZ77yJXG4gICAgdG9nZ2xlQWN0aW9uczoncGxheSBwbGF5IHBsYXkgcmV2ZXJzZScsXG4gIH0sXG59KTtcblxuLy8g6IOM5pmvL+OCv+OCpOODiOODq+OCouODi+ODoeODvOOCt+ODp+ODs+OCv+OCpOODoOODqeOCpOODs1xuZGlubmVyVGl0bGV0bFxuICAudG8oXCIjZGlubmVyXCIsIHtiYWNrZ3JvdW5kQ29sb3I6XCIjNTA1MDUwXCIgfSwgXCJcIilcbiAgLmZyb20oXCIuZGlubmVyLXN1YnRpdGxlLWFuaW1lXCIsIHtjb2xvcjpcIiM1MDUwNTBcIiAsb3BhY2l0eTowfSwgXCI8XCIpIC8vIFwiPFwiIOOBr+OAgeWJjeOBruOCouODi+ODoeODvOOCt+ODp+ODs+OBrumWi+Wni+aZgueCueOBq+aMv+WFpeOBmeOCi+OBk+OBqOOCkuaEj+WRs+OBl+OBvuOBmVxuICAuZnJvbShcIi5kaW5uZXItdGl0bGUtYW5pbWVcIiwge2NvbG9yOlwiIzUwNTA1MFwiLG9wYWNpdHk6MCB9LCBcIjxcIilcbiAgXG5cblxuICAvLy8g44Ku44Oj44Op44Oq44O855S75YOP44OI44Oq44Ks44O8XG5cbiAgbGV0ICBkaW5uZXJJbWd0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmRpbm5lci1nYWxsYXJ5LXdyYXBwZXJcIixcbiAgICAgIHN0YXJ0OiBcIi09NDAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgcGxheSBwbGF5IHJldmVyc2UnLFxuICAgIH0sXG4gIH0pO1xuICBcbiAgXG4gIC8vIOOCruODo+ODqeODquODvOOCouODi+ODoeODvOOCt+ODp+ODs+OCv+OCpOODoOODqeOCpOODs1xuXG4gIGRpbm5lckltZ3RsXG4gIC5mcm9tVG8oXG4gICAgXCIuZGlubmVyLWFuaW1lXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfVxuICApXG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1VTFRJIExBTkdVQUdFIFNJVEUgUkVMQVRFRCBTQ1JJUFRTXG4g44Oe44Or44OB6KiA6Kqe44K144Kk44OI44Gr6Zai6YCj44GZ44KL44K544Kv44Oq44OX44OIXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZID0gXCJhc3VuLmxhbmdcIiA7IC8vdGhlIGtleSB0byB0aGUgbG9jYWwgc3RvcmFnZSBsYW5ndWFnZVxubGV0IGN1cnJlbnRMYW5nID0gR2V0U3RvcmFnZUl0ZW1zKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZKSB8fCBcImpwXCI7IC8vY2hlY2tzIHdoZXRoZXIgdGhlcmVzIGEgbGFuZ3VhZ2UgcHJlZmZyZWQgYnkgIGEgdXNlciB3aG8gaGFzIHZpc2l0ZWQgYmVmb3JlLiBpZiBub3QgaXQgd2lsbCBkZWZhdWx0IHRvIFwianBcIlxuLy8gY29uc3QgbGFuZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnRuLXRleHRcIik7XG5zZXRTdG9yYWdlSXRlbShMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSxjdXJyZW50TGFuZyk7XG50b2dnbGVMYW5ndWFnZShjdXJyZW50TGFuZylcbnVwZGF0ZUxhbmdCdG5UZXh0KGN1cnJlbnRMYW5nKTtcbmFjdGl2YXRlTGFuZ0J0bkV2ZW50TGlzdGVuZXIoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICDjg4fjg5DjgqTjgrnjgZTjgajjga7oqr/mlbTjgavplqLjgZnjgovjgrnjgq/jg6rjg5fjg4hcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFkanVzdExhbmdCdG5Mb2NhdGlvbigpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTMyZjg5MFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9