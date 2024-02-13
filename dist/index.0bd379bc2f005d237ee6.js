/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/common/header.css":
/*!******************************************!*\
  !*** ./src/assets/css/common/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/nav.css":
/*!***************************************!*\
  !*** ./src/assets/css/common/nav.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/reset.css":
/*!*****************************************!*\
  !*** ./src/assets/css/common/reset.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/typography.css":
/*!**********************************************!*\
  !*** ./src/assets/css/common/typography.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/utility.css":
/*!*******************************************!*\
  !*** ./src/assets/css/common/utility.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/access.css":
/*!****************************************!*\
  !*** ./src/assets/css/home/access.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/home/animations.css":
/*!********************************************!*\
  !*** ./src/assets/css/home/animations.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

/***/ "./src/assets/js/animations/activateHeaderAnimations.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/animations/activateHeaderAnimations.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateHeaderAnimations)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);

function activateHeaderAnimations(){
    let pcHeaderAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.matchMedia();

    pcHeaderAnim.add("(min-width: 800px)", () => {
    
      const showAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from('.header', { 
        yPercent: -150,
        paused: true,
        duration: 0.2
      }).progress(1);
      
      
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });
    });

}

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

/***/ "./src/assets/js/animations/loadingAnimation.js":
/*!******************************************************!*\
  !*** ./src/assets/js/animations/loadingAnimation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setLoadingAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

const letter = document.querySelector('[data-splittext]')

function setLoadingAnimation(){
document.addEventListener('DOMContentLoaded',(e)=>{
    let intro = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline()
  
    intro
  .from('.transition-item',{y:'100%',delay:2})
  .from('.transition-item-white',{y:'100%'})
  // .set('.transition-item',{y:'-100%'})
  .set('.transition-img',{opacity:0})
  .set('.transition-img',{x:"100%" ,})
  .to('.transition-item-white',{y:'-100%'})
  .to('.transition-item-white',{display:"none"})
  .set('.transition-item',{display:"none"})
  })
}

function animateText(){
  let texttl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline()


  texttl
  .from('.keyvisual__text--jp',{opacity:0})

}
// gsap.from(".letter",{y:100,duration:2});

function toggleVisibility(){
  letter.classList.add('visibled');
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
    const isItSp = window.matchMedia("(max-width: 500px)");
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/js/eventlisters/screensizeChange */ "./src/assets/js/eventlisters/screensizeChange.js");
/* harmony import */ var _assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/js/otherlogic/isitSP */ "./src/assets/js/otherlogic/isitSP.js");
/* harmony import */ var _assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/js/otherlogic/changeKvSrc */ "./src/assets/js/otherlogic/changeKvSrc.js");
/* harmony import */ var _assets_js_animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/js/animations/cardParallaxeffect */ "./src/assets/js/animations/cardParallaxeffect.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_otherlogic_determineTypeOfAnimation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/js/otherlogic/determineTypeOfAnimation */ "./src/assets/js/otherlogic/determineTypeOfAnimation.js");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");




























gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_26__.ScrollTrigger);
(0,_assets_js_eventlisters_naviconEventlistener__WEBPACK_IMPORTED_MODULE_16__["default"])();

(0,_assets_js_animations_crossfadeAnimation__WEBPACK_IMPORTED_MODULE_17__["default"])();

(0,_assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_20__["default"])()

// determineTypeOfAnimation();
;(0,_assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_18__["default"])();



const screenType = (0,_assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_19__["default"])(); // 画面サイズをチェックします /checks for  screen size

/*-------------------------------
    dinner background animations
    ディナーの背景アニメーション
-------------------------------*/

const masterCompany = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline();

  let dotAnimations = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.matchMedia();

    dotAnimations.add("(max-width: 500px)", () => {
    

      function dinnerTopsp() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline({
          scrollTrigger: {
            trigger: "#dinner",
            start: "-=500px top",
            end: "+=200",
            scrub: true,
            // pin: true,
            //  markers: true
          },
        });
      
        tl
        .from(".company-dot", { scale: 0})
      
      
        return tl;
      }

      masterCompany.add(dinnerTopsp());
    });
    dotAnimations.add("(min-width: 501px)", () => {
    

      function dinnerTop() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline({
          scrollTrigger: {
            trigger: "#dinner",
            start: "-=500px top",
            end: "+=200",
            scrub: true,
            // pin: true,
            //  markers: true
          },
        });
      
        tl
        .fromTo(".company-dot", { scale:0},{scale: 1.7})
        // .to(".company-dot", { scale: 1})
      
        return tl;
      }
      
      masterCompany.add(dinnerTop());
    });


/*-------------------------------
    feature parallax animations
    フィーチャーのパララックスアニメーション
-------------------------------*/

let tl = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=200px top",
    // end: "+=200",
    scrub: true,
    // pin: true,
    //  markers: true
  },
});

tl
.to(".feat-main-left-one", {yPercent:-65})
// .to(".company-dot", { scale: 1})

let t2 = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t2
.to(".feat-main-left-two", {yPercent:-65})

let t3 = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t3
.to(".feat-main-left-three", {yPercent:-65})

/*-------------------------------
    Loading animation
   ロードアニメーション
-------------------------------*/

// setLoadingAnimation()


document.addEventListener('DOMContentLoaded',(e)=>{
  let intro = gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.timeline()

  intro
.from('.transition-item',{y:'100%',delay:2})
.from('.transition-item-white',{y:'100%'})
// .set('.transition-item',{y:'-100%'})
.set('.transition-img',{opacity:0})
.set('.transition-img',{x:"100%" ,})
.to('.transition-item-white',{y:'-100%'})
.to('.transition-item-white',{display:"none"})
.set('.transition-item',{display:"none"})
.from('.keyvisual-top__logo',{opacity:0,x:-100,duration:1})
.from('.letter1',{opacity:0,duration:0.5},"<20%")
.from('.letter2',{opacity:0,duration:0.5},"<10%")
.from('.letter3',{opacity:0,duration:0.5},"<10%")
.from('.letter4',{opacity:0,duration:0.5},"<10%")
.from('.letter5',{opacity:0,duration:0.5},"<10%")
.from('.letter6',{opacity:0,duration:0.5},"<10%")
.from('.letter7',{opacity:0,duration:0.5},"<10%")
.from('.letter8',{opacity:0,duration:0.5},"<10%")
.from('.letter9',{opacity:0,duration:0.5},"<10%")
.from('.letter10',{opacity:0,duration:0.5},"<10%")
.from('.letter11',{opacity:0,duration:0.5},"<10%")
.from('.letter12',{opacity:0,duration:0.5},"<10%")
.from('.letter13',{opacity:0,duration:0.5},"<10%")
.from('.letter14',{opacity:0,duration:0.5},"<10%")
.from('.letter15',{opacity:0,duration:0.5},"<10%")
.from('.letter16',{opacity:0,duration:0.5},"<10%")
.from('.letter17',{opacity:0,duration:0.5},"<10%")
.from('.letter18',{opacity:0,duration:0.5},"<10%")
.from('.letter19',{opacity:0,duration:0.5},"<10%")
.from('.letter20',{opacity:0,duration:0.5},"<10%")
.from('.letter21',{opacity:0,duration:0.5},"<10%")
.from('.letter22',{opacity:0,duration:0.5},"<10%")
.from('.letter23',{opacity:0,duration:0.5},"<10%")
.from('.letter24',{opacity:0,duration:0.5},"<10%")
.from('.letter25',{opacity:0,duration:0.5},"<10%")
.from('.letter26',{opacity:0,duration:0.5},"<10%")
.from('.letter27',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng1',{opacity:0,duration:0.5},"4.5")
.from('.letter-eng2',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng3',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng4',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng5',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng6',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng7',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng8',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng9',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng10',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng11',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng12',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng13',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng14',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng15',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng16',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng17',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng18',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng19',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng20',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng21',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng22',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng23',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng24',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng25',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng26',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng27',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng28',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng29',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng30',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng31',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng32',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng33',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng34',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng35',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng36',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng37',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng38',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng39',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng40',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng41',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng42',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng43',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng44',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng45',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng46',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng47',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng48',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng49',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng50',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng51',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng52',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng53',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng54',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng55',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng56',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng57',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng58',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng59',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng60',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng61',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng62',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng63',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng64',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng65',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng66',{opacity:0,duration:0.5},"<10%");
})

/*-------------------------------
   Logo Animations
   ロゴのアニメーション
-------------------------------*/

gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_26__.ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  // markers: true,
  onEnterBack: animateLogo
});

let tween =  gsap__WEBPACK_IMPORTED_MODULE_25__.gsap.from(".logo__image--sp", { y:" -100% ",duration:1})

function animateLogo() {
  tween.restart();
}


/*-------------------------------
   Header PC animation
   ヘッダーPCアニメーション
-------------------------------*/

(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_24__["default"])();

// let letters = gsap.utils.toArray(".letter");

// letters.forEach((letter) => {
//   gsap.from(letter, {
//    opacity:0
//   });
// });

// const master = gsap.timeline({paused:true});

// const loader = gsap
//   .timeline()
//   .from('.transition-item',{y:'100%',delay:2})
// .from('.transition-item-white',{y:'100%'})
// .set('.transition-img',{opacity:0} )
// .set('.transition-img',{x:"100%" ,})
// .to('.transition-item-white',{y:'-100%'})
// .to('.transition-item-white',{display:"none"})
// .set('.transition-item',{display:"none"})
// .from('.keyvisual-top__logo',{opacity:0,x:-100,duration:1});

// const textAnime = gsap.timeline()
// .from('.letter1',{opacity:0,duration:0.5},"<20%")
// .from('.letter2',{opacity:0,duration:0.5},"<10%")
// .from('.letter3',{opacity:0,duration:0.5},"<10%")
// .from('.letter4',{opacity:0,duration:0.5},"<10%")
// .from('.letter5',{opacity:0,duration:0.5},"<10%")
// .from('.letter6',{opacity:0,duration:0.5},"<10%")
// .from('.letter7',{opacity:0,duration:0.5},"<10%")
// .from('.letter8',{opacity:0,duration:0.5},"<10%")
// .from('.letter9',{opacity:0,duration:0.5},"<10%")
// .from('.letter10',{opacity:0,duration:0.5},"<10%")
// .from('.letter11',{opacity:0,duration:0.5},"<10%")
// .from('.letter12',{opacity:0,duration:0.5},"<10%")
// .from('.letter13',{opacity:0,duration:0.5},"<10%")
// .from('.letter14',{opacity:0,duration:0.5},"<10%")
// .from('.letter15',{opacity:0,duration:0.5},"<10%")
// .from('.letter16',{opacity:0,duration:0.5},"<10%")
// .from('.letter17',{opacity:0,duration:0.5},"<10%")
// .from('.letter18',{opacity:0,duration:0.5},"<10%")
// .from('.letter19',{opacity:0,duration:0.5},"<10%")
// .from('.letter20',{opacity:0,duration:0.5},"<10%")
// .from('.letter21',{opacity:0,duration:0.5},"<10%")
// .from('.letter22',{opacity:0,duration:0.5},"<10%")
// .from('.letter23',{opacity:0,duration:0.5},"<10%")
// .from('.letter24',{opacity:0,duration:0.5},"<10%")
// .from('.letter25',{opacity:0,duration:0.5},"<10%")
// .from('.letter26',{opacity:0,duration:0.5},"<10%")
// .from('.letter27',{opacity:0,duration:0.5},"<10%")



// master.add(loader);
// master.add(textAnime);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"index": 0,
/******/ 			"src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-aea31c": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js","vendors-node_modules_gsap_ScrollTrigger_js","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-aea31c"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGJkMzc5YmMyZjAwNWQyMzdlZTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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O0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVC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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2hlYWRlci5jc3M/NmMyOSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzPzU1NDAiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzcz9jOGUyIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzPzY2OWYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzPzY3YWEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3M/MjM2ZSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzcz8yMWEzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9mZWF0dXJlLmNzcz81MzJmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzcz9mYjY2Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9pbnN0YS5jc3M/ZDJhZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbHVuY2guY3NzPzBiZDYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL21lc3NhZ2UuY3NzPzFlZTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL25ld3MuY3NzPzhhM2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzcz82MGYxIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9hbmltYXRlTWVhdGJhbGwuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvY2FyZFBhcmFsbGF4ZWZmZWN0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2Nyb3NzZmFkZUFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9zY3JlZW5zaXplQ2hhbmdlLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1AuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFRBQi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKXtcbiAgICBsZXQgcGNIZWFkZXJBbmltID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBwY0hlYWRlckFuaW0uYWRkKFwiKG1pbi13aWR0aDogODAwcHgpXCIsICgpID0+IHtcbiAgICBcbiAgICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcC5mcm9tKCcuaGVhZGVyJywgeyBcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMlxuICAgICAgfSkucHJvZ3Jlc3MoMSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAgIGVuZDogXCJtYXhcIixcbiAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVNZWF0YmFsbEljb24oKXtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lYXRiYWxsXCIpO1xuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxufSIsIlxuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDYXJkUGFyYWxsYXgoKXtcbiAgICBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgIHlQZXJjZW50OiAtMTUwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKXtcbiAgICB2YXIgZHVyYXRpb24gPSAyO1xudmFyIGRlbGF5ID0gMTtcbnZhciB0bCA9IGdzYXAudGltZWxpbmUoe29uQ29tcGxldGU6cmVwZWF0fSk7XG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUnKTtcbmNvbnN0IGZpcnN0SW1hZ2UgPSBpbWFnZXNbMF07XG5jb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5jb25zb2xlLmxvZyh7aW1hZ2VzLHRvdGFsSW1hZ2VzfSk7XG5cbmdzYXAudXRpbHMudG9BcnJheShpbWFnZXMpLmZvckVhY2goKGltYWdlLGluZGV4KT0+e1xuICAgIHZhciBvZmZzZXQgPSBpbmRleCA9PT0gMCA/IDAgOiBcIi09XCIgKyBkdXJhdGlvbjsgLy9pbnNlcnQgZmlyc3QgYW5pbWF0aW9uIGF0IGEgdGltZSBvZiAwIG9yIGFsbCBvdGhlciBhbmltYXRpb25zIGF0IGEgdGltZSB0aGF0IHdpbGwgb3ZlcmxhcCB3aXRoIHRoZSBwcmV2aW91cyBhbmltYXRpb24gZmFkaW5nIG91dC5cbiAgdGwudG8oaW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSxzY2FsZToxLjUsIHJlcGVhdDoxLCB5b3lvOnRydWUsIHJlcGVhdERlbGF5OmRlbGF5fSwgb2Zmc2V0KVxuICAvL3doZW4gdGhlIGxhc3QgaW1hZ2UgZmFkZXMgb3V0IHdlIG5lZWQgdG8gY3Jvc3MtZmFkZSB0aGUgZmlyc3QgaW1hZ2VcbiAgaWYgKGluZGV4ID09PSB0b3RhbEltYWdlcyl7XG4gICAgY29uc29sZS5sb2coXCJBZGQgdHdlZW4gb24gdGhlIGZpcnN0IGltYWdlXCIpO1xuICAgIHRsLnRvKGZpcnN0SW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSwgc2NhbGU6MS41fSwgb2Zmc2V0KVxuICB9XG59KVxuXG5cbmZ1bmN0aW9uIHJlcGVhdCgpIHtcbiAgdGwucGxheShkdXJhdGlvbik7XG59XG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcGxpdHRleHRdJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gICAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpXG4gIFxuICAgIGludHJvXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuICAvLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7b3BhY2l0eTowfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKXtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5cbiAgdGV4dHRsXG4gIC5mcm9tKCcua2V5dmlzdWFsX190ZXh0LS1qcCcse29wYWNpdHk6MH0pXG5cbn1cbi8vIGdzYXAuZnJvbShcIi5sZXR0ZXJcIix7eToxMDAsZHVyYXRpb246Mn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlZCcpO1xufSIsImltcG9ydCBhbmltYXRlTWVhdGJhbGxJY29uIGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbFwiO1xuXG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKXtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbmltYXRlTWVhdGJhbGxJY29uKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4uL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4uL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcmVlblJlc2l6ZUxpc3RlbmVyKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUt2U3JjKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLChlKT0+e1xuICAgICAgICAvLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbiAgICAgICAgY2hhbmdlS3ZTcmMoKTtcbiAgICB9KVxufSIsIlxuaW1wb3J0IHNwU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0yLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0zLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC00LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC01LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC03LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC05LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgcGNTbGlkZTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTEtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTItbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTMtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTQtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTUgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTUtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTYgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTctbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTcgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTktbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTggZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTExLW1pbi5wbmcnO1xuXG5cbmltcG9ydCBpc0l0U3AgZnJvbSAnLi9pc2l0U1AnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUt2U3JjKCl7XG4gICAgY29uc3QgSVNfSVRfU1AgPSBpc0l0U3AoKTtcbiAgICBjb25zdCBTTElERV9PTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW9uZScpO1xuICAgIGNvbnN0IFNMSURFX1RXTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tdHdvJyk7XG4gICAgY29uc3QgU0xJREVfVEhSRUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXRocmVlJyk7XG4gICAgY29uc3QgU0xJREVfRk9VUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZm91cicpO1xuICAgIGNvbnN0IFNMSURFX0ZJVkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZpdmUnKTtcbiAgICBjb25zdCBTTElERV9TSVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXNpeCcpO1xuICAgIGNvbnN0IFNMSURFX1NFVkVOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zZXZlbicpO1xuICAgIGNvbnN0IFNMSURFX0VJR0hUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1laWdodCcpO1xuICAgIGNvbnN0IFNMSURFX05JTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW5pbmUnKTtcbiAgICBcbiAgICBpZihJU19JVF9TUCl7XG4gICAgICAgU0xJREVfT05FLnNyYyA9IHNwU2xpZGUxO1xuICAgICAgIFNMSURFX1RXTy5zcmMgPSBzcFNsaWRlMjtcbiAgICAgICBTTElERV9USFJFRS5zcmMgPSBzcFNsaWRlMztcbiAgICAgICBTTElERV9GT1VSLnNyYyA9ICBzcFNsaWRlNDtcbiAgICAgICBTTElERV9GSVZFLnNyYyA9ICBzcFNsaWRlNTtcbiAgICAgICBTTElERV9TSVguc3JjID0gIHNwU2xpZGU2O1xuICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHNwU2xpZGU3O1xuICAgICAgIFNMSURFX0VJR0hULnNyYyA9ICBzcFNsaWRlODtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgU0xJREVfT05FLnNyYyA9IHBjU2xpZGUxO1xuICAgICAgICBTTElERV9UV08uc3JjID0gcGNTbGlkZTI7XG4gICAgICAgIFNMSURFX1RIUkVFLnNyYyA9IHBjU2xpZGUzO1xuICAgICAgICBTTElERV9GT1VSLnNyYyA9IHBjU2xpZGU0O1xuICAgICAgICBTTElERV9GSVZFLnNyYyA9IHBjU2xpZGU1O1xuICAgICAgICBTTElERV9TSVguc3JjID0gcGNTbGlkZTY7XG4gICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHBjU2xpZGU3O1xuICAgICAgICBTTElERV9FSUdIVC5zcmMgPSBwY1NsaWRlODtcbiAgICB9XG59IiwiaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuLi9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9pc2l0U1BcIjtcbmltcG9ydCB7IGlzSXRQYywgaXNJdFRhYiB9IGZyb20gXCIuL2lzaXRUQUJcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCkge1xuICAgIGxldCBjdXJyZW50V2luZG93ID0gaXNJdFBjKCk7XG4gICAgXG4gICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgYWN0aXZhdGVDYXJkUGFyYWxsYXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50V2luZG93ID0gaXNJdFNwKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFdpbmRvdykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgTW9iaWxlXCIpO1xuICAgICAgICAgICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi50XCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgZ3NhcC50byhpbWFnZSwge1xuICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcCxcbiAgICBlYXNlOiBcIm5vbmVcIixcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcCAqIDAuMSxcbiAgICB9LFxuICB9KTtcbn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRUYWIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBUYWJsZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0U3AoKXtcbiAgICBjb25zdCBpc0l0U3AgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDUwMHB4KVwiKTtcbiAgICBpZihpc0l0U3AubWF0Y2hlcyl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgIGZ1bmN0aW9uIGlzSXRUYWIoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIikubWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSXRQYygpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2NTBweClcIikubWF0Y2hlcztcbn1cbiIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2hlcm8uY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9mZWF0dXJlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvY291cnNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbHVuY2guY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9kaW5uZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9tZXNzYWdlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvdm9pY2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9uZXdzLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvaW5zdGEuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzXCI7XG5pbXBvcnQgYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIgZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9uYXZpY29uRXZlbnRsaXN0ZW5lclwiO1xuaW1wb3J0IGFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucyBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9jcm9zc2ZhZGVBbmltYXRpb25cIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgc2NyZWVuUmVzaXplTGlzdGVuZXIgZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9zY3JlZW5zaXplQ2hhbmdlXCI7XG5pbXBvcnQgaXNJdFNwIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRTUFwiO1xuaW1wb3J0IGNoYW5nZUt2U3JjIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjXCI7XG5pbXBvcnQgYWN0aXZhdGVDYXJkUGFyYWxsYXggZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvY2FyZFBhcmFsbGF4ZWZmZWN0XCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IGRldGVybWluZVR5cGVPZkFuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9kZXRlcm1pbmVUeXBlT2ZBbmltYXRpb25cIjtcbmltcG9ydCBzZXRMb2FkaW5nQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb25cIjtcbmltcG9ydCBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKTtcblxuYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zKCk7XG5cbmNoYW5nZUt2U3JjKClcblxuLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG5zY3JlZW5SZXNpemVMaXN0ZW5lcigpO1xuXG5cblxuY29uc3Qgc2NyZWVuVHlwZSA9IGlzSXRTcCgpOyAvLyDnlLvpnaLjgrXjgqTjgrrjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZkgL2NoZWNrcyBmb3IgIHNjcmVlbiBzaXplXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRpbm5lciBiYWNrZ3JvdW5kIGFuaW1hdGlvbnNcbiAgICDjg4fjgqPjg4rjg7zjga7og4zmma/jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBtYXN0ZXJDb21wYW55ID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIGxldCBkb3RBbmltYXRpb25zID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBkb3RBbmltYXRpb25zLmFkZChcIihtYXgtd2lkdGg6IDUwMHB4KVwiLCAoKSA9PiB7XG4gICAgXG5cbiAgICAgIGZ1bmN0aW9uIGRpbm5lclRvcHNwKCkge1xuICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNkaW5uZXJcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgLy8gcGluOiB0cnVlLFxuICAgICAgICAgICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICB0bFxuICAgICAgICAuZnJvbShcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAwfSlcbiAgICAgIFxuICAgICAgXG4gICAgICAgIHJldHVybiB0bDtcbiAgICAgIH1cblxuICAgICAgbWFzdGVyQ29tcGFueS5hZGQoZGlubmVyVG9wc3AoKSk7XG4gICAgfSk7XG4gICAgZG90QW5pbWF0aW9ucy5hZGQoXCIobWluLXdpZHRoOiA1MDFweClcIiwgKCkgPT4ge1xuICAgIFxuXG4gICAgICBmdW5jdGlvbiBkaW5uZXJUb3AoKSB7XG4gICAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT01MDBweCB0b3BcIixcbiAgICAgICAgICAgIGVuZDogXCIrPTIwMFwiLFxuICAgICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgICAgICAvLyBwaW46IHRydWUsXG4gICAgICAgICAgICAvLyAgbWFya2VyczogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIHRsXG4gICAgICAgIC5mcm9tVG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTowfSx7c2NhbGU6IDEuN30pXG4gICAgICAgIC8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcbiAgICAgIFxuICAgICAgICByZXR1cm4gdGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcCgpKTtcbiAgICB9KTtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmZWF0dXJlIHBhcmFsbGF4IGFuaW1hdGlvbnNcbiAgICDjg5XjgqPjg7zjg4Hjg6Pjg7zjga7jg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICAvLyBlbmQ6IFwiKz0yMDBcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgICAvLyBwaW46IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50bFxuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LW9uZVwiLCB7eVBlcmNlbnQ6LTY1fSlcbi8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcblxubGV0IHQyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50MlxuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXR3b1wiLCB7eVBlcmNlbnQ6LTY1fSlcblxubGV0IHQzID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0M1wiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50M1xuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXRocmVlXCIsIHt5UGVyY2VudDotNjV9KVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBMb2FkaW5nIGFuaW1hdGlvblxuICAg44Ot44O844OJ44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gc2V0TG9hZGluZ0FuaW1hdGlvbigpXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKVxuXG4gIGludHJvXG4uZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OicxMDAlJ30pXG4vLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbi5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0pXG4uc2V0KCcudHJhbnNpdGlvbi1pbWcnLHt4OlwiMTAwJVwiICx9KVxuLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbi50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse2Rpc3BsYXk6XCJub25lXCJ9KVxuLnNldCgnLnRyYW5zaXRpb24taXRlbScse2Rpc3BsYXk6XCJub25lXCJ9KVxuLmZyb20oJy5rZXl2aXN1YWwtdG9wX19sb2dvJyx7b3BhY2l0eTowLHg6LTEwMCxkdXJhdGlvbjoxfSlcbi5mcm9tKCcubGV0dGVyMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDIwJVwiKVxuLmZyb20oJy5sZXR0ZXIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjQuNVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nOScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzExJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzIwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzIzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczMCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzMyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczMycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczNicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczOScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0Micse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0NScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0OCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzUwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1MScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzUzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1Nycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2MCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzYyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2Mycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzY1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2Nicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKTtcbn0pXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgTG9nbyBBbmltYXRpb25zXG4gICDjg63jgrTjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gIHRyaWdnZXI6IFwiLnRyaWdnZXJcIixcbiAgc3RhcnQ6IFwidG9wIC09MTBcIixcbiAgLy8gbWFya2VyczogdHJ1ZSxcbiAgb25FbnRlckJhY2s6IGFuaW1hdGVMb2dvXG59KTtcblxubGV0IHR3ZWVuID0gIGdzYXAuZnJvbShcIi5sb2dvX19pbWFnZS0tc3BcIiwgeyB5OlwiIC0xMDAlIFwiLGR1cmF0aW9uOjF9KVxuXG5mdW5jdGlvbiBhbmltYXRlTG9nbygpIHtcbiAgdHdlZW4ucmVzdGFydCgpO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvblxuICAg44OY44OD44OA44O8UEPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKTtcblxuLy8gbGV0IGxldHRlcnMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIubGV0dGVyXCIpO1xuXG4vLyBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuLy8gICBnc2FwLmZyb20obGV0dGVyLCB7XG4vLyAgICBvcGFjaXR5OjBcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gY29uc3QgbWFzdGVyID0gZ3NhcC50aW1lbGluZSh7cGF1c2VkOnRydWV9KTtcblxuLy8gY29uc3QgbG9hZGVyID0gZ3NhcFxuLy8gICAudGltZWxpbmUoKVxuLy8gICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuLy8gLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OicxMDAlJ30pXG4vLyAuc2V0KCcudHJhbnNpdGlvbi1pbWcnLHtvcGFjaXR5OjB9IClcbi8vIC5zZXQoJy50cmFuc2l0aW9uLWltZycse3g6XCIxMDAlXCIgLH0pXG4vLyAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OictMTAwJSd9KVxuLy8gLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4vLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4vLyAuZnJvbSgnLmtleXZpc3VhbC10b3BfX2xvZ28nLHtvcGFjaXR5OjAseDotMTAwLGR1cmF0aW9uOjF9KTtcblxuLy8gY29uc3QgdGV4dEFuaW1lID0gZ3NhcC50aW1lbGluZSgpXG4vLyAuZnJvbSgnLmxldHRlcjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwyMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXIzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXI2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXI5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjEwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjExJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjEyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjEzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjE5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjIwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjIxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjIzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjI0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjI2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjI3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG5cblxuXG4vLyBtYXN0ZXIuYWRkKGxvYWRlcik7XG4vLyBtYXN0ZXIuYWRkKHRleHRBbmltZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLWFlYTMxY1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzXCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtYWVhMzFjXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=