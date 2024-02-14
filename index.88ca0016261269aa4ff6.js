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

(0,_assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_20__["default"])();

// determineTypeOfAnimation();
(0,_assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_18__["default"])();

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
   
      },
    });

    tl.from(".company-dot", { scale: 0 });

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

tl.to(".feat-main-left-one", { yPercent: -65 });
// .to(".company-dot", { scale: 1})

let t2 = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t2.to(".feat-main-left-two", { yPercent: -65 });

let t3 = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let intro = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline();

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
    .from(".kv-eng-txt-sp", { opacity: 0, x: -50, duration: 0.5 })
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

gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__.ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  // markers: true,
  onEnterBack: animateLogo,
});

let tween = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.from(".logo__image--sp", { y: " -100% ", duration: 1 });

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
let kvMaintl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  .from(".kv-main-txt-eng-sp", { opacity: 0, x: -20, duration: 0.5 }, "<10%")
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

let kvFoodtl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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

let featureTitle = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();
featureTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__["default"])("feature-title__text--jp", "feature-title-letter");

  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
      // markers: true
    },
  });

  featureTitletl.from(".feature-title__text--jp", {
    opacity: 0,
    x: -50,
    duration: 1,
  });
});

/*-------------------------------
   Feature 1 Animations
   Feature 1 アニメーション
-------------------------------*/

let featureEyetl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyetl.from(".feat-1-eyewrapper", { opacity: 0, y: 70, duration: 1 });

let featureOne = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();

featureOne.add("(min-width: 768px)", () => {
  let featureOnetl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-1-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureOnetl
    .from(".feat-main-left-one", { opacity: 0, y: -100, duration: 1 })
    .from(".feat-main--right-1", { opacity: 0, y: 100, duration: 1 }, "<");
});

/*-------------------------------
   Feature 2 Animations
   Feature 2 アニメーション
-------------------------------*/

let featureEyeTwotl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyeTwotl.from(".feat-2-eyewrapper", { opacity: 0, y: 70, duration: 1 });

let featureTwo = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();

featureTwo.add("(min-width: 768px)", () => {
  let featureTwotl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-2-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureTwotl
    .from(".feat-main-left-two", { opacity: 0, y: -100, duration: 1 })
    .from(".feat-main--right--2", { opacity: 0, y: 100, duration: 1 }, "<");
});

/*-------------------------------
   Feature 3 Animations
   Feature 3 アニメーション
-------------------------------*/

let featureEyeThreetl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=700px",
    scrub: false,
    // markers: true
  },
});

featureEyeThreetl.from(".feat-3-eyewrapper", {
  opacity: 0,
  y: 70,
  duration: 1,
});

let featureThree = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();

featureThree.add("(min-width: 768px)", () => {
  let featureThreetl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-3-eyewrapper",
      start: "+=170px",
      scrub: false,
      // markers: true
    },
  });

  featureThreetl
    .from(".feat-main-left-three", { opacity: 0, y: -100, duration: 1 })
    .from(".feat-main--3-txt", { opacity: 0, y: 100, duration: 1 }, "<");
});

/*-------------------------------
  Course Animations
   Course アニメーション
-------------------------------*/

let courseTitle = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();
courseTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__["default"])("course-title--eng", "course-title--eng-letter");

  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#course",
      start: "-=500px",
      scrub: false,
    },
  });

  courseTitletl.from(".course-title--eng", {
    opacity: 0,
    x: -50,
    duration: 1,
  });
});

/*-------------------------------
  Lunch Animations
   Lunch アニメーション
-------------------------------*/
let LunchImgtl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: "#lunch",
    start: "-=500px",
    scrub: false,
  },
});

LunchImgtl
.fromTo(".reveal", {
  "--width":"100%",
  duration:0.5
},
{
  "--width":"0%",
  duration:0.5
}
).from(".lunch-title-anime",{opacity:0,x:-100})
.from(".lunch-subtitle-anime",{opacity:0,x:100},"<");


/*-------------------------------
  Dinner Animations
   Dinner アニメーション
-------------------------------*/

let dinnerImgtl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
  scrollTrigger: {
    trigger: "#dinner",
    start: "-=500px",
    scrub: false,
    // markers: true,
  },
});

dinnerImgtl
.fromTo(".reveal-black", {
  "--width": "100%",
  duration: 0.5
}, {
  "--width": "0%",
  duration: 0.5
})
.fromTo(".reveal-black-right", {
  "--width": "100%",
  duration: 0.5
}, {
  "--width": "0%",
  duration: 0.5
}, "<")
.from(".dinner-title-anime",{opacity:0,x:-100})
.from(".dinner-subtitle-anime",{opacity:0,x:100},"<");


/*-------------------------------
  Message Animations
   Message アニメーション
-------------------------------*/


let messageTitle = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();
messageTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__["default"])("message-title--eng", "message-title--eng-letter");

  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#message",
      start: "-=500px",
      scrub: false,
    },
  });

  messageTitletl.from(".message-title--eng", {
    opacity: 0,
    x: -50,
    duration: 1,
  });
});

/*-------------------------------
Voice Animations
 Voice アニメーション
-------------------------------*/
let voiceTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
let newsTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
let instaTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
let accessTitle = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_25__["default"])("access-eng", "access-eng-letter");

  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
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
  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_26__.gsap.timeline({
    scrollTrigger: {
      trigger: "#access",
      start: "-=500px",
      scrub: false,
    },
  });

  accessTitletl.from(".access-eng", {
    opacity: 0,
    x: -50,
    duration: 1,
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODhjYTAwMTYyNjEyNjlhYTRmZjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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LDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hE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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzcz82YzI5Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3M/NTU0MCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3M/NjY5ZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3M/NjdhYSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvY291cnNlLmNzcz8yMzZlIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9kaW5uZXIuY3NzPzIxYTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzPzUzMmYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2hlcm8uY3NzP2ZiNjYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzcz9kMmFkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3M/MGJkNiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3M/MWVlMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3M/OGEzZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvdm9pY2UuY3NzPzYwZjEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3QuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9uYXZpY29uRXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRTUC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0VEFCLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NwbGl0VGV4dC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKXtcbiAgICBsZXQgcGNIZWFkZXJBbmltID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBwY0hlYWRlckFuaW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgICBcbiAgICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcC5mcm9tKCcuaGVhZGVyJywgeyBcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMlxuICAgICAgfSkucHJvZ3Jlc3MoMSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAgIGVuZDogXCJtYXhcIixcbiAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVNZWF0YmFsbEljb24oKXtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lYXRiYWxsXCIpO1xuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxufSIsIlxuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDYXJkUGFyYWxsYXgoKXtcbiAgICBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgIHlQZXJjZW50OiAtMTUwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKXtcbiAgICB2YXIgZHVyYXRpb24gPSAyO1xudmFyIGRlbGF5ID0gMTtcbnZhciB0bCA9IGdzYXAudGltZWxpbmUoe29uQ29tcGxldGU6cmVwZWF0fSk7XG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUnKTtcbmNvbnN0IGZpcnN0SW1hZ2UgPSBpbWFnZXNbMF07XG5jb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5jb25zb2xlLmxvZyh7aW1hZ2VzLHRvdGFsSW1hZ2VzfSk7XG5cbmdzYXAudXRpbHMudG9BcnJheShpbWFnZXMpLmZvckVhY2goKGltYWdlLGluZGV4KT0+e1xuICAgIHZhciBvZmZzZXQgPSBpbmRleCA9PT0gMCA/IDAgOiBcIi09XCIgKyBkdXJhdGlvbjsgLy9pbnNlcnQgZmlyc3QgYW5pbWF0aW9uIGF0IGEgdGltZSBvZiAwIG9yIGFsbCBvdGhlciBhbmltYXRpb25zIGF0IGEgdGltZSB0aGF0IHdpbGwgb3ZlcmxhcCB3aXRoIHRoZSBwcmV2aW91cyBhbmltYXRpb24gZmFkaW5nIG91dC5cbiAgdGwudG8oaW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSxzY2FsZToxLjUsIHJlcGVhdDoxLCB5b3lvOnRydWUsIHJlcGVhdERlbGF5OmRlbGF5fSwgb2Zmc2V0KVxuICAvL3doZW4gdGhlIGxhc3QgaW1hZ2UgZmFkZXMgb3V0IHdlIG5lZWQgdG8gY3Jvc3MtZmFkZSB0aGUgZmlyc3QgaW1hZ2VcbiAgaWYgKGluZGV4ID09PSB0b3RhbEltYWdlcyl7XG4gICAgY29uc29sZS5sb2coXCJBZGQgdHdlZW4gb24gdGhlIGZpcnN0IGltYWdlXCIpO1xuICAgIHRsLnRvKGZpcnN0SW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSwgc2NhbGU6MS41fSwgb2Zmc2V0KVxuICB9XG59KVxuXG5cbmZ1bmN0aW9uIHJlcGVhdCgpIHtcbiAgdGwucGxheShkdXJhdGlvbik7XG59XG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcGxpdHRleHRdJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gICAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpXG4gIFxuICAgIGludHJvXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuICAvLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7b3BhY2l0eTowfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKXtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5cbiAgdGV4dHRsXG4gIC5mcm9tKCcua2V5dmlzdWFsX190ZXh0LS1qcCcse29wYWNpdHk6MH0pXG5cbn1cbi8vIGdzYXAuZnJvbShcIi5sZXR0ZXJcIix7eToxMDAsZHVyYXRpb246Mn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlZCcpO1xufSIsImltcG9ydCBhbmltYXRlTWVhdGJhbGxJY29uIGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbFwiO1xuXG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKXtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbmltYXRlTWVhdGJhbGxJY29uKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4uL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4uL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcmVlblJlc2l6ZUxpc3RlbmVyKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUt2U3JjKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLChlKT0+e1xuICAgICAgICAvLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbiAgICAgICAgY2hhbmdlS3ZTcmMoKTtcbiAgICB9KVxufSIsIlxuaW1wb3J0IHNwU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0yLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0zLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC00LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC01LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC03LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC05LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgcGNTbGlkZTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTEtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTItbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTMtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTQtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTUgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTUtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTYgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTctbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTcgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTktbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTggZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTExLW1pbi5wbmcnO1xuXG5cbmltcG9ydCBpc0l0U3AgZnJvbSAnLi9pc2l0U1AnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUt2U3JjKCl7XG4gICAgY29uc3QgSVNfSVRfU1AgPSBpc0l0U3AoKTtcbiAgICBjb25zdCBTTElERV9PTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW9uZScpO1xuICAgIGNvbnN0IFNMSURFX1RXTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tdHdvJyk7XG4gICAgY29uc3QgU0xJREVfVEhSRUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXRocmVlJyk7XG4gICAgY29uc3QgU0xJREVfRk9VUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZm91cicpO1xuICAgIGNvbnN0IFNMSURFX0ZJVkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZpdmUnKTtcbiAgICBjb25zdCBTTElERV9TSVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXNpeCcpO1xuICAgIGNvbnN0IFNMSURFX1NFVkVOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zZXZlbicpO1xuICAgIGNvbnN0IFNMSURFX0VJR0hUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1laWdodCcpO1xuICAgIGNvbnN0IFNMSURFX05JTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW5pbmUnKTtcbiAgICBcbiAgICBpZihJU19JVF9TUCl7XG4gICAgICAgU0xJREVfT05FLnNyYyA9IHNwU2xpZGUxO1xuICAgICAgIFNMSURFX1RXTy5zcmMgPSBzcFNsaWRlMjtcbiAgICAgICBTTElERV9USFJFRS5zcmMgPSBzcFNsaWRlMztcbiAgICAgICBTTElERV9GT1VSLnNyYyA9ICBzcFNsaWRlNDtcbiAgICAgICBTTElERV9GSVZFLnNyYyA9ICBzcFNsaWRlNTtcbiAgICAgICBTTElERV9TSVguc3JjID0gIHNwU2xpZGU2O1xuICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHNwU2xpZGU3O1xuICAgICAgIFNMSURFX0VJR0hULnNyYyA9ICBzcFNsaWRlODtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgU0xJREVfT05FLnNyYyA9IHBjU2xpZGUxO1xuICAgICAgICBTTElERV9UV08uc3JjID0gcGNTbGlkZTI7XG4gICAgICAgIFNMSURFX1RIUkVFLnNyYyA9IHBjU2xpZGUzO1xuICAgICAgICBTTElERV9GT1VSLnNyYyA9IHBjU2xpZGU0O1xuICAgICAgICBTTElERV9GSVZFLnNyYyA9IHBjU2xpZGU1O1xuICAgICAgICBTTElERV9TSVguc3JjID0gcGNTbGlkZTY7XG4gICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHBjU2xpZGU3O1xuICAgICAgICBTTElERV9FSUdIVC5zcmMgPSBwY1NsaWRlODtcbiAgICB9XG59IiwiaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuLi9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9pc2l0U1BcIjtcbmltcG9ydCB7IGlzSXRQYywgaXNJdFRhYiB9IGZyb20gXCIuL2lzaXRUQUJcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCkge1xuICAgIGxldCBjdXJyZW50V2luZG93ID0gaXNJdFBjKCk7XG4gICAgXG4gICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgYWN0aXZhdGVDYXJkUGFyYWxsYXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50V2luZG93ID0gaXNJdFNwKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFdpbmRvdykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgTW9iaWxlXCIpO1xuICAgICAgICAgICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi50XCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgZ3NhcC50byhpbWFnZSwge1xuICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcCxcbiAgICBlYXNlOiBcIm5vbmVcIixcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcCAqIDAuMSxcbiAgICB9LFxuICB9KTtcbn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRUYWIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBUYWJsZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0U3AoKXtcbiAgICBjb25zdCBpc0l0U3AgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKTtcbiAgICBpZihpc0l0U3AubWF0Y2hlcyl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgIGZ1bmN0aW9uIGlzSXRUYWIoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIikubWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSXRQYygpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2NTBweClcIikubWF0Y2hlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0VGV4dChjbGFzc25hbWUsc3Bhbk5hbWUpe1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdCgnPGJyPicpO1xuXG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbiAgICBsZXQgY2xhc3NDb3VudGVyID0gMTsgLy8gQ291bnRlciBmb3IgdW5pcXVlIGNsYXNzIG5hbWVzXG5cbiAgICBmcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZyYWdtZW50V3JhcHBlci5pbm5lckhUTUwgPSBmcmFnbWVudDtcblxuICAgICAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICAgICAgZnJhZ21lbnRTcGFucy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdCgnJyk7XG4gICAgICAgICAgbGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgJHtzcGFuTmFtZX0ke2NsYXNzQ291bnRlcn1gKTtcbiAgICAgICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjbGFzc0NvdW50ZXIrKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmRleCA8IGZyYWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzc1wiO1xuaW1wb3J0IGFkZE5hdkljb25FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHNjcmVlblJlc2l6ZUxpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZVwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1BcIjtcbmltcG9ydCBjaGFuZ2VLdlNyYyBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyY1wiO1xuaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5pbXBvcnQgYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHNwbGl0VGV4dCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9zcGxpdFRleHRcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5hZGROYXZJY29uRXZlbnRMaXN0ZW5lcigpO1xuXG5hY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKTtcblxuY2hhbmdlS3ZTcmMoKTtcblxuLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG5zY3JlZW5SZXNpemVMaXN0ZW5lcigpO1xuXG5jb25zdCBzY3JlZW5UeXBlID0gaXNJdFNwKCk7IC8vIOeUu+mdouOCteOCpOOCuuOCkuODgeOCp+ODg+OCr+OBl+OBvuOBmSAvY2hlY2tzIGZvciAgc2NyZWVuIHNpemVcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlubmVyIGJhY2tncm91bmQgYW5pbWF0aW9uc1xuICAgIOODh+OCo+ODiuODvOOBruiDjOaZr+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1hc3RlckNvbXBhbnkgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbmxldCBkb3RBbmltYXRpb25zID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmRvdEFuaW1hdGlvbnMuYWRkKFwiKG1heC13aWR0aDogNTAwcHgpXCIsICgpID0+IHtcbiAgZnVuY3Rpb24gZGlubmVyVG9wc3AoKSB7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIC8vIHBpbjogdHJ1ZSxcbiAgIFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRsLmZyb20oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMCB9KTtcblxuICAgIHJldHVybiB0bDtcbiAgfVxuXG4gIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcHNwKCkpO1xufSk7XG5kb3RBbmltYXRpb25zLmFkZChcIihtaW4td2lkdGg6IDUwMXB4KVwiLCAoKSA9PiB7XG4gIGZ1bmN0aW9uIGRpbm5lclRvcCgpIHtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjZGlubmVyXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgIGVuZDogXCIrPTIwMFwiLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgLy8gcGluOiB0cnVlLFxuICAgICAgICAvLyAgbWFya2VyczogdHJ1ZVxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRsLmZyb21UbyhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAwIH0sIHsgc2NhbGU6IDEuNyB9KTtcbiAgICAvLyAudG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMX0pXG5cbiAgICByZXR1cm4gdGw7XG4gIH1cblxuICBtYXN0ZXJDb21wYW55LmFkZChkaW5uZXJUb3AoKSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmVhdHVyZSBwYXJhbGxheCBhbmltYXRpb25zXG4gICAg44OV44Kj44O844OB44Oj44O844Gu44OR44Op44Op44OD44Kv44K544Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MVwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgLy8gZW5kOiBcIis9MjAwXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gcGluOiB0cnVlLFxuICAgIC8vICBtYXJrZXJzOiB0cnVlXG4gIH0sXG59KTtcblxudGwudG8oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgeVBlcmNlbnQ6IC02NSB9KTtcbi8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcblxubGV0IHQyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG50Mi50byhcIi5mZWF0LW1haW4tbGVmdC10d29cIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG5sZXQgdDMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQzXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgICAvLyAgbWFya2VyczogdHJ1ZVxuICB9LFxufSk7XG5cbnQzLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXRocmVlXCIsIHsgeVBlcmNlbnQ6IC02NSB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTG9hZGluZyBhbmltYXRpb25cbiAgIOODreODvOODieOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNldExvYWRpbmdBbmltYXRpb24oKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgaW50cm9cbiAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW1cIiwgeyB5OiBcIjEwMCVcIiwgZGVsYXk6IDIgfSlcbiAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyB5OiBcIjEwMCVcIiB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pbWdcIiwgeyBvcGFjaXR5OiAwIH0pXG4gICAgLnNldChcIi50cmFuc2l0aW9uLWltZ1wiLCB7IHg6IFwiMTAwJVwiIH0pXG4gICAgLnRvKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IHk6IFwiLTEwMCVcIiB9KVxuICAgIC50byhcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAuZnJvbShcIi5rZXl2aXN1YWwtdG9wX19sb2dvXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5leWVjYXRjaGVyLXNsaWRlc2hvd1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiPDI1JVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDIwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmt2LWVuZy10eHQtc3BcIiwgeyBvcGFjaXR5OiAwLCB4OiAtNTAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI0LjVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0M1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0NlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXG4gICAgICBcIi5leWVjYXRjaGVyX19zY3JvbGxpbWdcIixcbiAgICAgIHsgb3BhY2l0eTogMCwgeTogLTEwMCwgZHVyYXRpb246IDEgfSxcbiAgICAgIFwiPDI1JVwiXG4gICAgKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIExvZ28gQW5pbWF0aW9uc1xuICAg44Ot44K044Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICB0cmlnZ2VyOiBcIi50cmlnZ2VyXCIsXG4gIHN0YXJ0OiBcInRvcCAtPTEwXCIsXG4gIC8vIG1hcmtlcnM6IHRydWUsXG4gIG9uRW50ZXJCYWNrOiBhbmltYXRlTG9nbyxcbn0pO1xuXG5sZXQgdHdlZW4gPSBnc2FwLmZyb20oXCIubG9nb19faW1hZ2UtLXNwXCIsIHsgeTogXCIgLTEwMCUgXCIsIGR1cmF0aW9uOiAxIH0pO1xuXG5mdW5jdGlvbiBhbmltYXRlTG9nbygpIHtcbiAgdHdlZW4ucmVzdGFydCgpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEhlYWRlciBQQyBhbmltYXRpb25cbiAgIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEtWIE1haW4gQ29udGVudCBUaXRsZSBBbmltYXRpb25zXG4gIEtW44Oh44Kk44Oz44Kz44Oz44OG44Oz44OE44K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gbGV0IGt2TWFpbiA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rdi1tYWluLXR4dC1lbmctcGNcIik7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdChcIjxicj5cIik7XG5cbnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbmxldCBjbGFzc0NvdW50ZXIgPSAxOyAvLyBDb3VudGVyIGZvciB1bmlxdWUgY2xhc3MgbmFtZXNcblxuZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICBmcmFnbWVudFNwYW5zLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xuICAgICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYGt2LW1haW5fX3RleHQtZW5nJHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNsYXNzQ291bnRlcisrO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGluZGV4IDwgZnJhZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gIH1cbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEtWIFRpdGxlIEFuaW1hdGlvblxuICAgS1bjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGt2TWFpbnRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5leWVjYXRjaGVyX3Njcm9sbGltZy0taW1hZ2VcIixcbiAgICBzdGFydDogXCItPTEwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG5rdk1haW50bFxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTEwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTEzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLXR4dC1lbmctc3BcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMjAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPFwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzYwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc2MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzkzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTAxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIik7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgS1YgRm9vZCBJbWFnZSBBbmltYXRpb25cbiAgIEtW44OV44O844OJ55S75YOP44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGt2Rm9vZHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5rZXl2aXN1YWwtbWFpbl9oZXJvXCIsXG4gICAgc3RhcnQ6IFwiLTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG5rdkZvb2R0bFxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXRvcC1yaWdodFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS1yaWdodFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS1ib3R0b21cIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tbGVmdFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS10b3AtbGVmdFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSBUaXRsZSBBbmltYXRpb25cbiAgIOapn+iDveOCv+OCpOODiOODq+OBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmZlYXR1cmVUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJmZWF0dXJlLXRpdGxlX190ZXh0LS1qcFwiLCBcImZlYXR1cmUtdGl0bGUtbGV0dGVyXCIpO1xuXG4gIGxldCBmZWF0dXJlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2ZlYXR1cmVcIixcbiAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgICB9LFxuICB9KTtcblxuICBmZWF0dXJlVGl0bGV0bFxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIlwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5mZWF0dXJlVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZmVhdHVyZVwiLFxuICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgLy8gbWFya2VyczogdHJ1ZVxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaXRsZXRsLmZyb20oXCIuZmVhdHVyZS10aXRsZV9fdGV4dC0tanBcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogLTUwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgMSBBbmltYXRpb25zXG4gICBGZWF0dXJlIDEg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVFeWV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDFcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgfSxcbn0pO1xuXG5mZWF0dXJlRXlldGwuZnJvbShcIi5mZWF0LTEtZXlld3JhcHBlclwiLCB7IG9wYWNpdHk6IDAsIHk6IDcwLCBkdXJhdGlvbjogMSB9KTtcblxubGV0IGZlYXR1cmVPbmUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuZmVhdHVyZU9uZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZU9uZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuZmVhdC0xLWV5ZXdyYXBwZXJcIixcbiAgICAgIHN0YXJ0OiBcIis9MTcwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgICB9LFxuICB9KTtcblxuICBmZWF0dXJlT25ldGxcbiAgICAuZnJvbShcIi5mZWF0LW1haW4tbGVmdC1vbmVcIiwgeyBvcGFjaXR5OiAwLCB5OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tcmlnaHQtMVwiLCB7IG9wYWNpdHk6IDAsIHk6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSAyIEFuaW1hdGlvbnNcbiAgIEZlYXR1cmUgMiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZUV5ZVR3b3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MlwiLFxuICAgIHN0YXJ0OiBcIi09NzAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gICAgLy8gbWFya2VyczogdHJ1ZVxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWVUd290bC5mcm9tKFwiLmZlYXQtMi1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgeTogNzAsIGR1cmF0aW9uOiAxIH0pO1xuXG5sZXQgZmVhdHVyZVR3byA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG5mZWF0dXJlVHdvLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIGxldCBmZWF0dXJlVHdvdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0LTItZXlld3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgLy8gbWFya2VyczogdHJ1ZVxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUd290bFxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi1sZWZ0LXR3b1wiLCB7IG9wYWNpdHk6IDAsIHk6IC0xMDAsIGR1cmF0aW9uOiAxIH0pXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLS1yaWdodC0tMlwiLCB7IG9wYWNpdHk6IDAsIHk6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSAzIEFuaW1hdGlvbnNcbiAgIEZlYXR1cmUgMyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZUV5ZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQzXCIsXG4gICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICAvLyBtYXJrZXJzOiB0cnVlXG4gIH0sXG59KTtcblxuZmVhdHVyZUV5ZVRocmVldGwuZnJvbShcIi5mZWF0LTMtZXlld3JhcHBlclwiLCB7XG4gIG9wYWNpdHk6IDAsXG4gIHk6IDcwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG5sZXQgZmVhdHVyZVRocmVlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVUaHJlZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0LTMtZXlld3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgLy8gbWFya2VyczogdHJ1ZVxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaHJlZXRsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtdGhyZWVcIiwgeyBvcGFjaXR5OiAwLCB5OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tMy10eHRcIiwgeyBvcGFjaXR5OiAwLCB5OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ291cnNlIEFuaW1hdGlvbnNcbiAgIENvdXJzZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgY291cnNlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmNvdXJzZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImNvdXJzZS10aXRsZS0tZW5nXCIsIFwiY291cnNlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bFxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmNvdXJzZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHg6IC01MCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEx1bmNoIEFuaW1hdGlvbnNcbiAgIEx1bmNoIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgTHVuY2hJbWd0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjbHVuY2hcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbkx1bmNoSW1ndGxcbi5mcm9tVG8oXCIucmV2ZWFsXCIsIHtcbiAgXCItLXdpZHRoXCI6XCIxMDAlXCIsXG4gIGR1cmF0aW9uOjAuNVxufSxcbntcbiAgXCItLXdpZHRoXCI6XCIwJVwiLFxuICBkdXJhdGlvbjowLjVcbn1cbikuZnJvbShcIi5sdW5jaC10aXRsZS1hbmltZVwiLHtvcGFjaXR5OjAseDotMTAwfSlcbi5mcm9tKFwiLmx1bmNoLXN1YnRpdGxlLWFuaW1lXCIse29wYWNpdHk6MCx4OjEwMH0sXCI8XCIpO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBEaW5uZXIgQW5pbWF0aW9uc1xuICAgRGlubmVyIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBkaW5uZXJJbWd0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjZGlubmVyXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICB9LFxufSk7XG5cbmRpbm5lckltZ3RsXG4uZnJvbVRvKFwiLnJldmVhbC1ibGFja1wiLCB7XG4gIFwiLS13aWR0aFwiOiBcIjEwMCVcIixcbiAgZHVyYXRpb246IDAuNVxufSwge1xuICBcIi0td2lkdGhcIjogXCIwJVwiLFxuICBkdXJhdGlvbjogMC41XG59KVxuLmZyb21UbyhcIi5yZXZlYWwtYmxhY2stcmlnaHRcIiwge1xuICBcIi0td2lkdGhcIjogXCIxMDAlXCIsXG4gIGR1cmF0aW9uOiAwLjVcbn0sIHtcbiAgXCItLXdpZHRoXCI6IFwiMCVcIixcbiAgZHVyYXRpb246IDAuNVxufSwgXCI8XCIpXG4uZnJvbShcIi5kaW5uZXItdGl0bGUtYW5pbWVcIix7b3BhY2l0eTowLHg6LTEwMH0pXG4uZnJvbShcIi5kaW5uZXItc3VidGl0bGUtYW5pbWVcIix7b3BhY2l0eTowLHg6MTAwfSxcIjxcIik7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1lc3NhZ2UgQW5pbWF0aW9uc1xuICAgTWVzc2FnZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbmxldCBtZXNzYWdlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJtZXNzYWdlLXRpdGxlLS1lbmdcIiwgXCJtZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBtZXNzYWdlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI21lc3NhZ2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBtZXNzYWdlVGl0bGV0bFxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgbWVzc2FnZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNtZXNzYWdlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWVzc2FnZVRpdGxldGwuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogLTUwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblZvaWNlIEFuaW1hdGlvbnNcbiBWb2ljZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IHZvaWNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjdm9pY2VcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gIH0sXG59KTtcblxudm9pY2VUaXRsZXRsLmZyb20oXCIudm9pY2UtdGl0bGUtYW5pbWVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuTkVXUyBBbmltYXRpb25zXG4gTkVXUyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IG5ld3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNuZXdzXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICB9LFxufSk7XG5cbm5ld3NUaXRsZXRsLmZyb20oXCIubmV3cy10aXRsZS1hbmltZVwiLCB7XG4gIG9wYWNpdHk6IDAsXG4gIHk6IC01MCxcbiAgZHVyYXRpb246IDEsXG59KTtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkluc3RhIEFuaW1hdGlvbnNcbiBJbnN0YSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGluc3RhVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjaW5zdGFcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gIH0sXG59KTtcblxuaW5zdGFUaXRsZXRsLmZyb20oXCIuaW5zdGEtdGl0bGVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB4OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hY2VzcyBBbmltYXRpb25zXG4gYWNlc3Mg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBhY2Nlc3NUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuYWNjZXNzVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiYWNjZXNzLWVuZ1wiLCBcImFjY2Vzcy1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bFxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIlwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmFjY2Vzc1RpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bC5mcm9tKFwiLmFjY2Vzcy1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogLTUwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy00NTk5NGRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==