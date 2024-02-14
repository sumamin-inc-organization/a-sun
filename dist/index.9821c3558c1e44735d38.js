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

    pcHeaderAnim.add("(min-width: 768px)", () => {
    
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

/***/ "./src/assets/js/otherlogic/splitText.js":
/*!***********************************************!*\
  !*** ./src/assets/js/otherlogic/splitText.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ splitText)
/* harmony export */ });
function splitText(classname,spanName){
    const textContainer = document.querySelector(`.${classname}`);
const fragments = textContainer.innerHTML.split('<br>');

    textContainer.innerHTML = ''; // Clear the original content
    let classCounter = 1; // Counter for unique class names

    fragments.forEach((fragment, index) => {
      const fragmentWrapper = document.createElement('div');
      fragmentWrapper.innerHTML = fragment;

      const fragmentSpans = fragmentWrapper.childNodes;
      fragmentSpans.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const letters = node.textContent.split('');
          letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add(`${spanName}${classCounter}`);
            textContainer.appendChild(span);
            classCounter++;
          });
        } else {
          textContainer.appendChild(node.cloneNode(true));
        }
      });

      if (index < fragments.length - 1) {
        textContainer.appendChild(document.createElement('br'));
      }
    });

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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/js/eventlisters/screensizeChange */ "./src/assets/js/eventlisters/screensizeChange.js");
/* harmony import */ var _assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/js/otherlogic/isitSP */ "./src/assets/js/otherlogic/isitSP.js");
/* harmony import */ var _assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/js/otherlogic/changeKvSrc */ "./src/assets/js/otherlogic/changeKvSrc.js");
/* harmony import */ var _assets_js_animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/js/animations/cardParallaxeffect */ "./src/assets/js/animations/cardParallaxeffect.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_otherlogic_determineTypeOfAnimation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/js/otherlogic/determineTypeOfAnimation */ "./src/assets/js/otherlogic/determineTypeOfAnimation.js");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var _assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/js/otherlogic/splitText */ "./src/assets/js/otherlogic/splitText.js");





























gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__.ScrollTrigger);
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

const masterCompany = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline();

  let dotAnimations = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();

    dotAnimations.add("(max-width: 500px)", () => {
    

      function dinnerTopsp() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
        let tl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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

let tl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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

let t2 = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t2
.to(".feat-main-left-two", {yPercent:-65})

let t3 = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let intro = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline()

  intro
.from('.transition-item',{y:'100%',delay:2})
.from('.transition-item-white',{y:'100%'})
// .set('.transition-item',{y:'-100%'})
.set('.transition-img',{opacity:0})
.set('.transition-img',{x:"100%" ,})
.to('.transition-item-white',{y:'-100%'})
.to('.transition-item-white',{display:"none"})
.set('.transition-item',{display:"none"})
.from('.keyvisual-top__logo',{opacity:0,duration:1})
.from('.eyecatcher-slideshow',{opacity:0,duration:2},"<25%")
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
.from('.kv-eng-txt-sp',{opacity:0,x:-50,duration:0.5})
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
.from('.letter-eng66',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng67',{opacity:0,duration:0.5},"<10%")
.from('.eyecatcher__scrollimg',{opacity:0,y:-100,duration:1},"<20%")

})

/*-------------------------------
   Logo Animations
   ロゴのアニメーション
-------------------------------*/

gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__.ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  // markers: true,
  onEnterBack: animateLogo
});

let tween =  gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.from(".logo__image--sp", { y:" -100% ",duration:1})

function animateLogo() {
  tween.restart();
}


/*-------------------------------
   Header PC animation
   ヘッダーPCアニメーション
-------------------------------*/

(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_24__["default"])();





/*------------------------------------
  KV Main Content Title Animations
  KVメインコンテンツタイトルのアニメーション
-------------------------------------*/


// let kvMain = gsap.matchMedia();  



const textContainer = document.querySelector('.kv-main-txt-eng-pc');
const fragments = textContainer.innerHTML.split('<br>');

    textContainer.innerHTML = ''; // Clear the original content
    let classCounter = 1; // Counter for unique class names

    fragments.forEach((fragment, index) => {
      const fragmentWrapper = document.createElement('div');
      fragmentWrapper.innerHTML = fragment;

      const fragmentSpans = fragmentWrapper.childNodes;
      fragmentSpans.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const letters = node.textContent.split('');
          letters.forEach(letter => {
            const span = document.createElement('span');
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
        textContainer.appendChild(document.createElement('br'));
      }
    });


/*-------------------------------
   KV Title Animation
   KVタイトルのアニメーション
-------------------------------*/
let kvMaintl= gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".eyecatcher_scrollimg--image",
    start: "-=100px",
    scrub: false,
    // markers: true
  },
});

kvMaintl
.from('.kv-main-content_title',{opacity:0,duration:0.5},"")
  .from('.kv-main-content_title1',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title2',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title3',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title4',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title5',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title6',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title7',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title8',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title9',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title10',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title11',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title12',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title13',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-content_title14',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main-txt-eng-sp',{opacity:0,x:-20,duration:0.5},"<10%")
  .from('.kv-main__text-eng16',{opacity:0,duration:0.5},"<")
  .from('.kv-main__text-eng17',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng18',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng20',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng21',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng22',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng23',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng24',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng25',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng26',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng27',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng28',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng30',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng31',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng33',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng34',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng35',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng37',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng38',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng39',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng40',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng41',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng42',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng44',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng45',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng46',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng47',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng49',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng50',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng51',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng52',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng53',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng54',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng55',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng56',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng57',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng59',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng60',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng61',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng62',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng93',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng94',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng95',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng96',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng98',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng99',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng100',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng101',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng103',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng104',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng105',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng106',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng107',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng109',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng110',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng111',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng112',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng114',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng115',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng116',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng117',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng118',{opacity:0,duration:0.5},"<10%")
  .from('.kv-main__text-eng119',{opacity:0,duration:0.5},"<10%")


/*-------------------------------
   KV Food Image Animation
   KVフード画像のアニメーション
-------------------------------*/


  let kvFoodtl= gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: ".keyvisual-main_hero",
      start: "-500px",
      scrub: false,
      // markers: true
    },
  });
  
  kvFoodtl
  .from('.kv-hero__img--top-right',{opacity:0,duration:0.5})
  .from('.kv-hero__img--right',{opacity:0,duration:0.5})
  .from('.kv-hero__img--bottom',{opacity:0,duration:0.5})
  .from('.kv-hero__img--left',{opacity:0,duration:0.5})
  .from('.kv-hero__img--top-left',{opacity:0,duration:0.5})
  

  /*-------------------------------
   Feature Title Animation
   機能タイトルのアニメーション
-------------------------------*/

let featureTitle = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia(); 
featureTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__["default"])("feature-title__text--jp","feature-title-letter")

  let featureTitletl= gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-600px",
      scrub: false,
      markers: true
    },
  });
  
  featureTitletl
  .from('.feature-title-letter14',{opacity:0,duration:1},"")
    .from('.feature-title-letter15',{opacity:0,duration:1},"<10%")
    .from('.feature-title-letter16',{opacity:0,duration:1},"<10%")
    .from('.feature-title-letter17',{opacity:0,duration:1},"<10%")
    .from('.feature-title-letter18',{opacity:0,duration:1},"<10%")
    .from('.feature-title-letter19',{opacity:0,duration:1},"<10%")
    .from('.feature-title-letter20',{opacity:0,duration:1},"<10%")
  
 
});

featureTitle.add("(max-width: 767px)", () => {
 

  let featureTitletl= gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-600px",
      scrub: false,
      markers: true
    },
  });
  
  featureTitletl
  .from('.feature-title__text--jp',{opacity:0,x:-50,duration:1}) 
});

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
/******/ 			"src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTgyMWMzNTU4YzFlNDQ3MzVkMzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QUM3QyxzQkFBc0IsdUJBQXVCO0FBQzdDLHNCQUFzQix1QkFBdUI7QUFDN0Msc0JBQXNCLHVCQUF1QjtBQUM3QyxzQkFBc0IsdUJBQXVCO0FBQzdDLHNCQUFzQix1QkFBdUI7QUFDN0Msc0JBQXNCLHVCQUF1QjtBQUM3Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtB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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2hlYWRlci5jc3M/NmMyOSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzPzU1NDAiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzcz9jOGUyIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzPzY2OWYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzPzY3YWEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3M/MjM2ZSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzcz8yMWEzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9mZWF0dXJlLmNzcz81MzJmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzcz9mYjY2Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9pbnN0YS5jc3M/ZDJhZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbHVuY2guY3NzPzBiZDYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL21lc3NhZ2UuY3NzPzFlZTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL25ld3MuY3NzPzhhM2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzcz82MGYxIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9hbmltYXRlTWVhdGJhbGwuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvY2FyZFBhcmFsbGF4ZWZmZWN0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2Nyb3NzZmFkZUFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9zY3JlZW5zaXplQ2hhbmdlLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1AuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFRBQi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9zcGxpdFRleHQuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCl7XG4gICAgbGV0IHBjSGVhZGVyQW5pbSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4gICAgcGNIZWFkZXJBbmltLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgXG4gICAgICBjb25zdCBzaG93QW5pbSA9IGdzYXAuZnJvbSgnLmhlYWRlcicsIHsgXG4gICAgICAgIHlQZXJjZW50OiAtMTUwLFxuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAwLjJcbiAgICAgIH0pLnByb2dyZXNzKDEpO1xuICAgICAgXG4gICAgICBcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgICBlbmQ6IFwibWF4XCIsXG4gICAgICAgIG9uVXBkYXRlOiAoc2VsZikgPT4ge1xuICAgICAgICAgIHNlbGYuZGlyZWN0aW9uID09PSAtMSA/IHNob3dBbmltLnBsYXkoKSA6IHNob3dBbmltLnJldmVyc2UoKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlTWVhdGJhbGxJY29uKCl7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcbmljb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbn0iLCJcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCl7XG4gICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5wYXJhbGxheFwiKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgZ3NhcC50byhpbWFnZSwge1xuICAgICAgICB5UGVyY2VudDogLTE1MCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbn0iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zKCl7XG4gICAgdmFyIGR1cmF0aW9uID0gMjtcbnZhciBkZWxheSA9IDE7XG52YXIgdGwgPSBnc2FwLnRpbWVsaW5lKHtvbkNvbXBsZXRlOnJlcGVhdH0pO1xuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlJyk7XG5jb25zdCBmaXJzdEltYWdlID0gaW1hZ2VzWzBdO1xuY29uc3QgdG90YWxJbWFnZXMgPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuY29uc29sZS5sb2coe2ltYWdlcyx0b3RhbEltYWdlc30pO1xuXG5nc2FwLnV0aWxzLnRvQXJyYXkoaW1hZ2VzKS5mb3JFYWNoKChpbWFnZSxpbmRleCk9PntcbiAgICB2YXIgb2Zmc2V0ID0gaW5kZXggPT09IDAgPyAwIDogXCItPVwiICsgZHVyYXRpb247IC8vaW5zZXJ0IGZpcnN0IGFuaW1hdGlvbiBhdCBhIHRpbWUgb2YgMCBvciBhbGwgb3RoZXIgYW5pbWF0aW9ucyBhdCBhIHRpbWUgdGhhdCB3aWxsIG92ZXJsYXAgd2l0aCB0aGUgcHJldmlvdXMgYW5pbWF0aW9uIGZhZGluZyBvdXQuXG4gIHRsLnRvKGltYWdlLCB7ZHVyYXRpb24sYXV0b0FscGhhOjEsc2NhbGU6MS41LCByZXBlYXQ6MSwgeW95bzp0cnVlLCByZXBlYXREZWxheTpkZWxheX0sIG9mZnNldClcbiAgLy93aGVuIHRoZSBsYXN0IGltYWdlIGZhZGVzIG91dCB3ZSBuZWVkIHRvIGNyb3NzLWZhZGUgdGhlIGZpcnN0IGltYWdlXG4gIGlmIChpbmRleCA9PT0gdG90YWxJbWFnZXMpe1xuICAgIGNvbnNvbGUubG9nKFwiQWRkIHR3ZWVuIG9uIHRoZSBmaXJzdCBpbWFnZVwiKTtcbiAgICB0bC50byhmaXJzdEltYWdlLCB7ZHVyYXRpb24sYXV0b0FscGhhOjEsIHNjYWxlOjEuNX0sIG9mZnNldClcbiAgfVxufSlcblxuXG5mdW5jdGlvbiByZXBlYXQoKSB7XG4gIHRsLnBsYXkoZHVyYXRpb24pO1xufVxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuY29uc3QgbGV0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3BsaXR0ZXh0XScpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvYWRpbmdBbmltYXRpb24oKXtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLChlKT0+e1xuICAgIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKVxuICBcbiAgICBpbnRyb1xuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6JzEwMCUnfSlcbiAgLy8gLnNldCgnLnRyYW5zaXRpb24taXRlbScse3k6Jy0xMDAlJ30pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse3g6XCIxMDAlXCIgLH0pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6Jy0xMDAlJ30pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse2Rpc3BsYXk6XCJub25lXCJ9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVUZXh0KCl7XG4gIGxldCB0ZXh0dGwgPSBnc2FwLnRpbWVsaW5lKClcblxuXG4gIHRleHR0bFxuICAuZnJvbSgnLmtleXZpc3VhbF9fdGV4dC0tanAnLHtvcGFjaXR5OjB9KVxuXG59XG4vLyBnc2FwLmZyb20oXCIubGV0dGVyXCIse3k6MTAwLGR1cmF0aW9uOjJ9KTtcblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpe1xuICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZWQnKTtcbn0iLCJpbXBvcnQgYW5pbWF0ZU1lYXRiYWxsSWNvbiBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlTWVhdGJhbGxcIjtcblxuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVhdGJhbGxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5hdkljb25FdmVudExpc3RlbmVyKCl7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYW5pbWF0ZU1lYXRiYWxsSWNvbigpO1xuICAgIH0pXG59IiwiaW1wb3J0IGNoYW5nZUt2U3JjIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JlZW5SZXNpemVMaXN0ZW5lcigpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VLdlNyYyk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoZSk9PntcbiAgICAgICAgLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG4gICAgICAgIGNoYW5nZUt2U3JjKCk7XG4gICAgfSlcbn0iLCJcbmltcG9ydCBzcFNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMi1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNC1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtOS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlOCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMTEtbWluLnBuZyc7XG5cblxuaW1wb3J0IHBjU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0yLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0zLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi00LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi01LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi03LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi05LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgaXNJdFNwIGZyb20gJy4vaXNpdFNQJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VLdlNyYygpe1xuICAgIGNvbnN0IElTX0lUX1NQID0gaXNJdFNwKCk7XG4gICAgY29uc3QgU0xJREVfT05FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1vbmUnKTtcbiAgICBjb25zdCBTTElERV9UV08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXR3bycpO1xuICAgIGNvbnN0IFNMSURFX1RIUkVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS10aHJlZScpO1xuICAgIGNvbnN0IFNMSURFX0ZPVVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZvdXInKTtcbiAgICBjb25zdCBTTElERV9GSVZFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1maXZlJyk7XG4gICAgY29uc3QgU0xJREVfU0lYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zaXgnKTtcbiAgICBjb25zdCBTTElERV9TRVZFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tc2V2ZW4nKTtcbiAgICBjb25zdCBTTElERV9FSUdIVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZWlnaHQnKTtcbiAgICBjb25zdCBTTElERV9OSU5FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1uaW5lJyk7XG4gICAgXG4gICAgaWYoSVNfSVRfU1Ape1xuICAgICAgIFNMSURFX09ORS5zcmMgPSBzcFNsaWRlMTtcbiAgICAgICBTTElERV9UV08uc3JjID0gc3BTbGlkZTI7XG4gICAgICAgU0xJREVfVEhSRUUuc3JjID0gc3BTbGlkZTM7XG4gICAgICAgU0xJREVfRk9VUi5zcmMgPSAgc3BTbGlkZTQ7XG4gICAgICAgU0xJREVfRklWRS5zcmMgPSAgc3BTbGlkZTU7XG4gICAgICAgU0xJREVfU0lYLnNyYyA9ICBzcFNsaWRlNjtcbiAgICAgICBTTElERV9TRVZFTi5zcmMgPSBzcFNsaWRlNztcbiAgICAgICBTTElERV9FSUdIVC5zcmMgPSAgc3BTbGlkZTg7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFNMSURFX09ORS5zcmMgPSBwY1NsaWRlMTtcbiAgICAgICAgU0xJREVfVFdPLnNyYyA9IHBjU2xpZGUyO1xuICAgICAgICBTTElERV9USFJFRS5zcmMgPSBwY1NsaWRlMztcbiAgICAgICAgU0xJREVfRk9VUi5zcmMgPSBwY1NsaWRlNDtcbiAgICAgICAgU0xJREVfRklWRS5zcmMgPSBwY1NsaWRlNTtcbiAgICAgICAgU0xJREVfU0lYLnNyYyA9IHBjU2xpZGU2O1xuICAgICAgICBTTElERV9TRVZFTi5zcmMgPSBwY1NsaWRlNztcbiAgICAgICAgU0xJREVfRUlHSFQuc3JjID0gcGNTbGlkZTg7XG4gICAgfVxufSIsImltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vaXNpdFNQXCI7XG5pbXBvcnQgeyBpc0l0UGMsIGlzSXRUYWIgfSBmcm9tIFwiLi9pc2l0VEFCXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFdpbmRvdyA9IGlzSXRQYygpO1xuICAgIFxuICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRTcCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIE1vYmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudFwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gIGdzYXAudG8oaW1hZ2UsIHtcbiAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3AsXG4gICAgZWFzZTogXCJub25lXCIsXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3AgKiAwLjEsXG4gICAgfSxcbiAgfSk7XG59KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSBpc0l0VGFiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgVGFibGV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdFNwKCl7XG4gICAgY29uc3QgaXNJdFNwID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIik7XG4gICAgaWYoaXNJdFNwLm1hdGNoZXMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICBmdW5jdGlvbiBpc0l0VGFiKCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIpLm1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0l0UGMoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjUwcHgpXCIpLm1hdGNoZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFRleHQoY2xhc3NuYW1lLHNwYW5OYW1lKXtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xuY29uc3QgZnJhZ21lbnRzID0gdGV4dENvbnRhaW5lci5pbm5lckhUTUwuc3BsaXQoJzxicj4nKTtcblxuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBvcmlnaW5hbCBjb250ZW50XG4gICAgbGV0IGNsYXNzQ291bnRlciA9IDE7IC8vIENvdW50ZXIgZm9yIHVuaXF1ZSBjbGFzcyBuYW1lc1xuXG4gICAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZnJhZ21lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50U3BhbnMgPSBmcmFnbWVudFdyYXBwZXIuY2hpbGROb2RlcztcbiAgICAgIGZyYWdtZW50U3BhbnMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgY29uc3QgbGV0dGVycyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQoJycpO1xuICAgICAgICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYCR7c3Bhbk5hbWV9JHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY2xhc3NDb3VudGVyKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kZXggPCBmcmFnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgfVxuICAgIH0pO1xuXG59IiwiaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9jb3Vyc2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2Rpbm5lci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL21lc3NhZ2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS92b2ljZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL25ld3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9pbnN0YS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBhZGROYXZJY29uRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL25hdmljb25FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2Nyb3NzZmFkZUFuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCBzY3JlZW5SZXNpemVMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2VcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFNQXCI7XG5pbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuaW1wb3J0IHNldExvYWRpbmdBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvblwiO1xuaW1wb3J0IGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucyBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnNcIjtcbmltcG9ydCBzcGxpdFRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0XCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKTtcblxuYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zKCk7XG5cbmNoYW5nZUt2U3JjKClcblxuLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG5zY3JlZW5SZXNpemVMaXN0ZW5lcigpO1xuXG5cblxuY29uc3Qgc2NyZWVuVHlwZSA9IGlzSXRTcCgpOyAvLyDnlLvpnaLjgrXjgqTjgrrjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZkgL2NoZWNrcyBmb3IgIHNjcmVlbiBzaXplXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGRpbm5lciBiYWNrZ3JvdW5kIGFuaW1hdGlvbnNcbiAgICDjg4fjgqPjg4rjg7zjga7og4zmma/jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBtYXN0ZXJDb21wYW55ID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIGxldCBkb3RBbmltYXRpb25zID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBkb3RBbmltYXRpb25zLmFkZChcIihtYXgtd2lkdGg6IDUwMHB4KVwiLCAoKSA9PiB7XG4gICAgXG5cbiAgICAgIGZ1bmN0aW9uIGRpbm5lclRvcHNwKCkge1xuICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNkaW5uZXJcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgLy8gcGluOiB0cnVlLFxuICAgICAgICAgICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICB0bFxuICAgICAgICAuZnJvbShcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAwfSlcbiAgICAgIFxuICAgICAgXG4gICAgICAgIHJldHVybiB0bDtcbiAgICAgIH1cblxuICAgICAgbWFzdGVyQ29tcGFueS5hZGQoZGlubmVyVG9wc3AoKSk7XG4gICAgfSk7XG4gICAgZG90QW5pbWF0aW9ucy5hZGQoXCIobWluLXdpZHRoOiA1MDFweClcIiwgKCkgPT4ge1xuICAgIFxuXG4gICAgICBmdW5jdGlvbiBkaW5uZXJUb3AoKSB7XG4gICAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT01MDBweCB0b3BcIixcbiAgICAgICAgICAgIGVuZDogXCIrPTIwMFwiLFxuICAgICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgICAgICAvLyBwaW46IHRydWUsXG4gICAgICAgICAgICAvLyAgbWFya2VyczogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIHRsXG4gICAgICAgIC5mcm9tVG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTowfSx7c2NhbGU6IDEuN30pXG4gICAgICAgIC8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcbiAgICAgIFxuICAgICAgICByZXR1cm4gdGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcCgpKTtcbiAgICB9KTtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmZWF0dXJlIHBhcmFsbGF4IGFuaW1hdGlvbnNcbiAgICDjg5XjgqPjg7zjg4Hjg6Pjg7zjga7jg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICAvLyBlbmQ6IFwiKz0yMDBcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgICAvLyBwaW46IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50bFxuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LW9uZVwiLCB7eVBlcmNlbnQ6LTY1fSlcbi8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcblxubGV0IHQyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50MlxuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXR3b1wiLCB7eVBlcmNlbnQ6LTY1fSlcblxubGV0IHQzID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0M1wiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50M1xuLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXRocmVlXCIsIHt5UGVyY2VudDotNjV9KVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBMb2FkaW5nIGFuaW1hdGlvblxuICAg44Ot44O844OJ44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gc2V0TG9hZGluZ0FuaW1hdGlvbigpXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKVxuXG4gIGludHJvXG4uZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OicxMDAlJ30pXG4vLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbi5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0pXG4uc2V0KCcudHJhbnNpdGlvbi1pbWcnLHt4OlwiMTAwJVwiICx9KVxuLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbi50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse2Rpc3BsYXk6XCJub25lXCJ9KVxuLnNldCgnLnRyYW5zaXRpb24taXRlbScse2Rpc3BsYXk6XCJub25lXCJ9KVxuLmZyb20oJy5rZXl2aXN1YWwtdG9wX19sb2dvJyx7b3BhY2l0eTowLGR1cmF0aW9uOjF9KVxuLmZyb20oJy5leWVjYXRjaGVyLXNsaWRlc2hvdycse29wYWNpdHk6MCxkdXJhdGlvbjoyfSxcIjwyNSVcIilcbi5mcm9tKCcubGV0dGVyMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDIwJVwiKVxuLmZyb20oJy5sZXR0ZXIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyMjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcua3YtZW5nLXR4dC1zcCcse29wYWNpdHk6MCx4Oi01MCxkdXJhdGlvbjowLjV9KVxuLmZyb20oJy5sZXR0ZXItZW5nMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiNC41XCIpXG4uZnJvbSgnLmxldHRlci1lbmcyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxMCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzEyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxMycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxNicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxOScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzIxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzMwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzMzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0MCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0Mycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0Nicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0OScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzUxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1Micse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1NScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1OCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzYwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2MScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzYzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzY2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2Nycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5leWVjYXRjaGVyX19zY3JvbGxpbWcnLHtvcGFjaXR5OjAseTotMTAwLGR1cmF0aW9uOjF9LFwiPDIwJVwiKVxuXG59KVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIExvZ28gQW5pbWF0aW9uc1xuICAg44Ot44K044Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICB0cmlnZ2VyOiBcIi50cmlnZ2VyXCIsXG4gIHN0YXJ0OiBcInRvcCAtPTEwXCIsXG4gIC8vIG1hcmtlcnM6IHRydWUsXG4gIG9uRW50ZXJCYWNrOiBhbmltYXRlTG9nb1xufSk7XG5cbmxldCB0d2VlbiA9ICBnc2FwLmZyb20oXCIubG9nb19faW1hZ2UtLXNwXCIsIHsgeTpcIiAtMTAwJSBcIixkdXJhdGlvbjoxfSlcblxuZnVuY3Rpb24gYW5pbWF0ZUxvZ28oKSB7XG4gIHR3ZWVuLnJlc3RhcnQoKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEhlYWRlciBQQyBhbmltYXRpb25cbiAgIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cblxuXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgS1YgTWFpbiBDb250ZW50IFRpdGxlIEFuaW1hdGlvbnNcbiAgS1bjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4Tjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8vIGxldCBrdk1haW4gPSBnc2FwLm1hdGNoTWVkaWEoKTsgIFxuXG5cblxuY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rdi1tYWluLXR4dC1lbmctcGMnKTtcbmNvbnN0IGZyYWdtZW50cyA9IHRleHRDb250YWluZXIuaW5uZXJIVE1MLnNwbGl0KCc8YnI+Jyk7XG5cbiAgICB0ZXh0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgb3JpZ2luYWwgY29udGVudFxuICAgIGxldCBjbGFzc0NvdW50ZXIgPSAxOyAvLyBDb3VudGVyIGZvciB1bmlxdWUgY2xhc3MgbmFtZXNcblxuICAgIGZyYWdtZW50cy5mb3JFYWNoKChmcmFnbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZyYWdtZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZnJhZ21lbnRXcmFwcGVyLmlubmVySFRNTCA9IGZyYWdtZW50O1xuXG4gICAgICBjb25zdCBmcmFnbWVudFNwYW5zID0gZnJhZ21lbnRXcmFwcGVyLmNoaWxkTm9kZXM7XG4gICAgICBmcmFnbWVudFNwYW5zLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGNvbnN0IGxldHRlcnMgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KCcnKTtcbiAgICAgICAgICBsZXR0ZXJzLmZvckVhY2gobGV0dGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGBrdi1tYWluX190ZXh0LWVuZyR7Y2xhc3NDb3VudGVyfWApO1xuICAgICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIGNsYXNzQ291bnRlcisrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGV4IDwgZnJhZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEtWIFRpdGxlIEFuaW1hdGlvblxuICAgS1bjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGt2TWFpbnRsPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmV5ZWNhdGNoZXJfc2Nyb2xsaW1nLS1pbWFnZVwiLFxuICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgLy8gbWFya2VyczogdHJ1ZVxuICB9LFxufSk7XG5cbmt2TWFpbnRsXG4uZnJvbSgnLmt2LW1haW4tY29udGVudF90aXRsZScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiXCIpXG4gIC5mcm9tKCcua3YtbWFpbi1jb250ZW50X3RpdGxlMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW4tY29udGVudF90aXRsZTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluLWNvbnRlbnRfdGl0bGUzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbi1jb250ZW50X3RpdGxlNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW4tY29udGVudF90aXRsZTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluLWNvbnRlbnRfdGl0bGU2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbi1jb250ZW50X3RpdGxlNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW4tY29udGVudF90aXRsZTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluLWNvbnRlbnRfdGl0bGU5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbi1jb250ZW50X3RpdGxlMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW4tY29udGVudF90aXRsZTEyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbi1jb250ZW50X3RpdGxlMTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluLWNvbnRlbnRfdGl0bGUxNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW4tdHh0LWVuZy1zcCcse29wYWNpdHk6MCx4Oi0yMCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjxcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzE3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzIxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcyMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzI0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcyNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzI3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcyOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMzAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzMxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmczMycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMzQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzM1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmczNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMzgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzM5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc0MCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNDEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzQyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc0NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNDUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzQ2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc0Nycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNDknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzUwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc1MScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzUzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc1NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzU2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc1Nycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzYwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc2MScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nNjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzkzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc5NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nOTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzk2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmc5OCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nOTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzEwMCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTAxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxMDMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzEwNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTA1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxMDYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzEwNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTA5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzExMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTEyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxMTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzExNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTE2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4gIC5mcm9tKCcua3YtbWFpbl9fdGV4dC1lbmcxMTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbiAgLmZyb20oJy5rdi1tYWluX190ZXh0LWVuZzExOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuICAuZnJvbSgnLmt2LW1haW5fX3RleHQtZW5nMTE5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBLViBGb29kIEltYWdlIEFuaW1hdGlvblxuICAgS1bjg5Xjg7zjg4nnlLvlg4/jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgbGV0IGt2Rm9vZHRsPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5rZXl2aXN1YWwtbWFpbl9oZXJvXCIsXG4gICAgICBzdGFydDogXCItNTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgICB9LFxuICB9KTtcbiAgXG4gIGt2Rm9vZHRsXG4gIC5mcm9tKCcua3YtaGVyb19faW1nLS10b3AtcmlnaHQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSlcbiAgLmZyb20oJy5rdi1oZXJvX19pbWctLXJpZ2h0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0pXG4gIC5mcm9tKCcua3YtaGVyb19faW1nLS1ib3R0b20nLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSlcbiAgLmZyb20oJy5rdi1oZXJvX19pbWctLWxlZnQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSlcbiAgLmZyb20oJy5rdi1oZXJvX19pbWctLXRvcC1sZWZ0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0pXG4gIFxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSBUaXRsZSBBbmltYXRpb25cbiAgIOapn+iDveOCv+OCpOODiOODq+OBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTsgXG5mZWF0dXJlVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiZmVhdHVyZS10aXRsZV9fdGV4dC0tanBcIixcImZlYXR1cmUtdGl0bGUtbGV0dGVyXCIpXG5cbiAgbGV0IGZlYXR1cmVUaXRsZXRsPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNmZWF0dXJlXCIsXG4gICAgICBzdGFydDogXCItNjAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIG1hcmtlcnM6IHRydWVcbiAgICB9LFxuICB9KTtcbiAgXG4gIGZlYXR1cmVUaXRsZXRsXG4gIC5mcm9tKCcuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNCcse29wYWNpdHk6MCxkdXJhdGlvbjoxfSxcIlwiKVxuICAgIC5mcm9tKCcuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNScse29wYWNpdHk6MCxkdXJhdGlvbjoxfSxcIjwxMCVcIilcbiAgICAuZnJvbSgnLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MX0sXCI8MTAlXCIpXG4gICAgLmZyb20oJy5mZWF0dXJlLXRpdGxlLWxldHRlcjE3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjF9LFwiPDEwJVwiKVxuICAgIC5mcm9tKCcuZmVhdHVyZS10aXRsZS1sZXR0ZXIxOCcse29wYWNpdHk6MCxkdXJhdGlvbjoxfSxcIjwxMCVcIilcbiAgICAuZnJvbSgnLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTknLHtvcGFjaXR5OjAsZHVyYXRpb246MX0sXCI8MTAlXCIpXG4gICAgLmZyb20oJy5mZWF0dXJlLXRpdGxlLWxldHRlcjIwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjF9LFwiPDEwJVwiKVxuICBcbiBcbn0pO1xuXG5mZWF0dXJlVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiBcblxuICBsZXQgZmVhdHVyZVRpdGxldGw9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2ZlYXR1cmVcIixcbiAgICAgIHN0YXJ0OiBcIi02MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgbWFya2VyczogdHJ1ZVxuICAgIH0sXG4gIH0pO1xuICBcbiAgZmVhdHVyZVRpdGxldGxcbiAgLmZyb20oJy5mZWF0dXJlLXRpdGxlX190ZXh0LS1qcCcse29wYWNpdHk6MCx4Oi01MCxkdXJhdGlvbjoxfSkgXG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTQ1OTk0ZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzXCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=