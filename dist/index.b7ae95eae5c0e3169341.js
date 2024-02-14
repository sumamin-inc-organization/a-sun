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
.from('.letter-eng66',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng67',{opacity:0,duration:0.5},"<10%")
.from('.eyecatcher-slideshow',{opacity:0,scale:0,duration:2},"4.5")
.from('.eyecatcher__scrollimg',{opacity:0,y:-100,duration:2},"<50%")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjdhZTk1ZWFlNWMwZTMxNjkzNDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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O0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVC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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzPzZjMjkiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzcz81NTQwIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzcz9iN2ZiIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzPzRiN2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzcz82NjlmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzcz82N2FhIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9jb3Vyc2UuY3NzPzIzNmUiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2Rpbm5lci5jc3M/MjFhMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3M/NTMyZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvaGVyby5jc3M/ZmI2NiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvaW5zdGEuY3NzP2QyYWQiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzcz8wYmQ2Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9tZXNzYWdlLmNzcz8xZWUzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9uZXdzLmNzcz84YTNkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS92b2ljZS5jc3M/NjBmMSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYW5pbWF0ZU1lYXRiYWxsLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jcm9zc2ZhZGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL25hdmljb25FdmVudGxpc3RlbmVyLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyYy5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9kZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFNQLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRUQUIuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCl7XG4gICAgbGV0IHBjSGVhZGVyQW5pbSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4gICAgcGNIZWFkZXJBbmltLmFkZChcIihtaW4td2lkdGg6IDgwMHB4KVwiLCAoKSA9PiB7XG4gICAgXG4gICAgICBjb25zdCBzaG93QW5pbSA9IGdzYXAuZnJvbSgnLmhlYWRlcicsIHsgXG4gICAgICAgIHlQZXJjZW50OiAtMTUwLFxuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAwLjJcbiAgICAgIH0pLnByb2dyZXNzKDEpO1xuICAgICAgXG4gICAgICBcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgICBlbmQ6IFwibWF4XCIsXG4gICAgICAgIG9uVXBkYXRlOiAoc2VsZikgPT4ge1xuICAgICAgICAgIHNlbGYuZGlyZWN0aW9uID09PSAtMSA/IHNob3dBbmltLnBsYXkoKSA6IHNob3dBbmltLnJldmVyc2UoKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlTWVhdGJhbGxJY29uKCl7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcbmljb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbn0iLCJcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCl7XG4gICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5wYXJhbGxheFwiKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgZ3NhcC50byhpbWFnZSwge1xuICAgICAgICB5UGVyY2VudDogLTE1MCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbn0iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zKCl7XG4gICAgdmFyIGR1cmF0aW9uID0gMjtcbnZhciBkZWxheSA9IDE7XG52YXIgdGwgPSBnc2FwLnRpbWVsaW5lKHtvbkNvbXBsZXRlOnJlcGVhdH0pO1xuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlJyk7XG5jb25zdCBmaXJzdEltYWdlID0gaW1hZ2VzWzBdO1xuY29uc3QgdG90YWxJbWFnZXMgPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuY29uc29sZS5sb2coe2ltYWdlcyx0b3RhbEltYWdlc30pO1xuXG5nc2FwLnV0aWxzLnRvQXJyYXkoaW1hZ2VzKS5mb3JFYWNoKChpbWFnZSxpbmRleCk9PntcbiAgICB2YXIgb2Zmc2V0ID0gaW5kZXggPT09IDAgPyAwIDogXCItPVwiICsgZHVyYXRpb247IC8vaW5zZXJ0IGZpcnN0IGFuaW1hdGlvbiBhdCBhIHRpbWUgb2YgMCBvciBhbGwgb3RoZXIgYW5pbWF0aW9ucyBhdCBhIHRpbWUgdGhhdCB3aWxsIG92ZXJsYXAgd2l0aCB0aGUgcHJldmlvdXMgYW5pbWF0aW9uIGZhZGluZyBvdXQuXG4gIHRsLnRvKGltYWdlLCB7ZHVyYXRpb24sYXV0b0FscGhhOjEsc2NhbGU6MS41LCByZXBlYXQ6MSwgeW95bzp0cnVlLCByZXBlYXREZWxheTpkZWxheX0sIG9mZnNldClcbiAgLy93aGVuIHRoZSBsYXN0IGltYWdlIGZhZGVzIG91dCB3ZSBuZWVkIHRvIGNyb3NzLWZhZGUgdGhlIGZpcnN0IGltYWdlXG4gIGlmIChpbmRleCA9PT0gdG90YWxJbWFnZXMpe1xuICAgIGNvbnNvbGUubG9nKFwiQWRkIHR3ZWVuIG9uIHRoZSBmaXJzdCBpbWFnZVwiKTtcbiAgICB0bC50byhmaXJzdEltYWdlLCB7ZHVyYXRpb24sYXV0b0FscGhhOjEsIHNjYWxlOjEuNX0sIG9mZnNldClcbiAgfVxufSlcblxuXG5mdW5jdGlvbiByZXBlYXQoKSB7XG4gIHRsLnBsYXkoZHVyYXRpb24pO1xufVxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuY29uc3QgbGV0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3BsaXR0ZXh0XScpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvYWRpbmdBbmltYXRpb24oKXtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLChlKT0+e1xuICAgIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKVxuICBcbiAgICBpbnRyb1xuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6JzEwMCUnfSlcbiAgLy8gLnNldCgnLnRyYW5zaXRpb24taXRlbScse3k6Jy0xMDAlJ30pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse3g6XCIxMDAlXCIgLH0pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6Jy0xMDAlJ30pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse2Rpc3BsYXk6XCJub25lXCJ9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVUZXh0KCl7XG4gIGxldCB0ZXh0dGwgPSBnc2FwLnRpbWVsaW5lKClcblxuXG4gIHRleHR0bFxuICAuZnJvbSgnLmtleXZpc3VhbF9fdGV4dC0tanAnLHtvcGFjaXR5OjB9KVxuXG59XG4vLyBnc2FwLmZyb20oXCIubGV0dGVyXCIse3k6MTAwLGR1cmF0aW9uOjJ9KTtcblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpe1xuICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZWQnKTtcbn0iLCJpbXBvcnQgYW5pbWF0ZU1lYXRiYWxsSWNvbiBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbmltYXRlTWVhdGJhbGxcIjtcblxuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVhdGJhbGxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5hdkljb25FdmVudExpc3RlbmVyKCl7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYW5pbWF0ZU1lYXRiYWxsSWNvbigpO1xuICAgIH0pXG59IiwiaW1wb3J0IGNoYW5nZUt2U3JjIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2NoYW5nZUt2U3JjXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuLi9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JlZW5SZXNpemVMaXN0ZW5lcigpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VLdlNyYyk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoZSk9PntcbiAgICAgICAgLy8gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCk7XG4gICAgICAgIGNoYW5nZUt2U3JjKCk7XG4gICAgfSlcbn0iLCJcbmltcG9ydCBzcFNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMi1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNC1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtOS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlOCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMTEtbWluLnBuZyc7XG5cblxuaW1wb3J0IHBjU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0yLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0zLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi00LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi01LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi03LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi05LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgaXNJdFNwIGZyb20gJy4vaXNpdFNQJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VLdlNyYygpe1xuICAgIGNvbnN0IElTX0lUX1NQID0gaXNJdFNwKCk7XG4gICAgY29uc3QgU0xJREVfT05FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1vbmUnKTtcbiAgICBjb25zdCBTTElERV9UV08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXR3bycpO1xuICAgIGNvbnN0IFNMSURFX1RIUkVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS10aHJlZScpO1xuICAgIGNvbnN0IFNMSURFX0ZPVVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZvdXInKTtcbiAgICBjb25zdCBTTElERV9GSVZFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1maXZlJyk7XG4gICAgY29uc3QgU0xJREVfU0lYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zaXgnKTtcbiAgICBjb25zdCBTTElERV9TRVZFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tc2V2ZW4nKTtcbiAgICBjb25zdCBTTElERV9FSUdIVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZWlnaHQnKTtcbiAgICBjb25zdCBTTElERV9OSU5FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1uaW5lJyk7XG4gICAgXG4gICAgaWYoSVNfSVRfU1Ape1xuICAgICAgIFNMSURFX09ORS5zcmMgPSBzcFNsaWRlMTtcbiAgICAgICBTTElERV9UV08uc3JjID0gc3BTbGlkZTI7XG4gICAgICAgU0xJREVfVEhSRUUuc3JjID0gc3BTbGlkZTM7XG4gICAgICAgU0xJREVfRk9VUi5zcmMgPSAgc3BTbGlkZTQ7XG4gICAgICAgU0xJREVfRklWRS5zcmMgPSAgc3BTbGlkZTU7XG4gICAgICAgU0xJREVfU0lYLnNyYyA9ICBzcFNsaWRlNjtcbiAgICAgICBTTElERV9TRVZFTi5zcmMgPSBzcFNsaWRlNztcbiAgICAgICBTTElERV9FSUdIVC5zcmMgPSAgc3BTbGlkZTg7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFNMSURFX09ORS5zcmMgPSBwY1NsaWRlMTtcbiAgICAgICAgU0xJREVfVFdPLnNyYyA9IHBjU2xpZGUyO1xuICAgICAgICBTTElERV9USFJFRS5zcmMgPSBwY1NsaWRlMztcbiAgICAgICAgU0xJREVfRk9VUi5zcmMgPSBwY1NsaWRlNDtcbiAgICAgICAgU0xJREVfRklWRS5zcmMgPSBwY1NsaWRlNTtcbiAgICAgICAgU0xJREVfU0lYLnNyYyA9IHBjU2xpZGU2O1xuICAgICAgICBTTElERV9TRVZFTi5zcmMgPSBwY1NsaWRlNztcbiAgICAgICAgU0xJREVfRUlHSFQuc3JjID0gcGNTbGlkZTg7XG4gICAgfVxufSIsImltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vaXNpdFNQXCI7XG5pbXBvcnQgeyBpc0l0UGMsIGlzSXRUYWIgfSBmcm9tIFwiLi9pc2l0VEFCXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFdpbmRvdyA9IGlzSXRQYygpO1xuICAgIFxuICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRTcCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIE1vYmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudFwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gIGdzYXAudG8oaW1hZ2UsIHtcbiAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3AsXG4gICAgZWFzZTogXCJub25lXCIsXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3AgKiAwLjEsXG4gICAgfSxcbiAgfSk7XG59KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSBpc0l0VGFiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgVGFibGV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdFNwKCl7XG4gICAgY29uc3QgaXNJdFNwID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1MDBweClcIik7XG4gICAgaWYoaXNJdFNwLm1hdGNoZXMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICBmdW5jdGlvbiBpc0l0VGFiKCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIpLm1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0l0UGMoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjUwcHgpXCIpLm1hdGNoZXM7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzc1wiO1xuaW1wb3J0IGFkZE5hdkljb25FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHNjcmVlblJlc2l6ZUxpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZVwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1BcIjtcbmltcG9ydCBjaGFuZ2VLdlNyYyBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyY1wiO1xuaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5pbXBvcnQgYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9uc1wiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmFkZE5hdkljb25FdmVudExpc3RlbmVyKCk7XG5cbmFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucygpO1xuXG5jaGFuZ2VLdlNyYygpXG5cbi8vIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpO1xuc2NyZWVuUmVzaXplTGlzdGVuZXIoKTtcblxuXG5cbmNvbnN0IHNjcmVlblR5cGUgPSBpc0l0U3AoKTsgLy8g55S76Z2i44K144Kk44K644KS44OB44Kn44OD44Kv44GX44G+44GZIC9jaGVja3MgZm9yICBzY3JlZW4gc2l6ZVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkaW5uZXIgYmFja2dyb3VuZCBhbmltYXRpb25zXG4gICAg44OH44Kj44OK44O844Gu6IOM5pmv44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWFzdGVyQ29tcGFueSA9IGdzYXAudGltZWxpbmUoKTtcblxuICBsZXQgZG90QW5pbWF0aW9ucyA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4gICAgZG90QW5pbWF0aW9ucy5hZGQoXCIobWF4LXdpZHRoOiA1MDBweClcIiwgKCkgPT4ge1xuICAgIFxuXG4gICAgICBmdW5jdGlvbiBkaW5uZXJUb3BzcCgpIHtcbiAgICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIjZGlubmVyXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICAgICAgZW5kOiBcIis9MjAwXCIsXG4gICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHBpbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICBtYXJrZXJzOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgdGxcbiAgICAgICAgLmZyb20oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMH0pXG4gICAgICBcbiAgICAgIFxuICAgICAgICByZXR1cm4gdGw7XG4gICAgICB9XG5cbiAgICAgIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcHNwKCkpO1xuICAgIH0pO1xuICAgIGRvdEFuaW1hdGlvbnMuYWRkKFwiKG1pbi13aWR0aDogNTAxcHgpXCIsICgpID0+IHtcbiAgICBcblxuICAgICAgZnVuY3Rpb24gZGlubmVyVG9wKCkge1xuICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNkaW5uZXJcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgLy8gcGluOiB0cnVlLFxuICAgICAgICAgICAgLy8gIG1hcmtlcnM6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICB0bFxuICAgICAgICAuZnJvbVRvKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6MH0se3NjYWxlOiAxLjd9KVxuICAgICAgICAvLyAudG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMX0pXG4gICAgICBcbiAgICAgICAgcmV0dXJuIHRsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBtYXN0ZXJDb21wYW55LmFkZChkaW5uZXJUb3AoKSk7XG4gICAgfSk7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZmVhdHVyZSBwYXJhbGxheCBhbmltYXRpb25zXG4gICAg44OV44Kj44O844OB44Oj44O844Gu44OR44Op44Op44OD44Kv44K544Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0MVwiLFxuICAgIHN0YXJ0OiBcIi09MjAwcHggdG9wXCIsXG4gICAgLy8gZW5kOiBcIis9MjAwXCIsXG4gICAgc2NydWI6IHRydWUsXG4gICAgLy8gcGluOiB0cnVlLFxuICAgIC8vICBtYXJrZXJzOiB0cnVlXG4gIH0sXG59KTtcblxudGxcbi50byhcIi5mZWF0LW1haW4tbGVmdC1vbmVcIiwge3lQZXJjZW50Oi02NX0pXG4vLyAudG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMX0pXG5cbmxldCB0MiA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDJcIixcbiAgICBzdGFydDogXCItPTIwMHB4IHRvcFwiLFxuICAgIHNjcnViOiB0cnVlLFxuICAgIC8vICBtYXJrZXJzOiB0cnVlXG4gIH0sXG59KTtcblxudDJcbi50byhcIi5mZWF0LW1haW4tbGVmdC10d29cIiwge3lQZXJjZW50Oi02NX0pXG5cbmxldCB0MyA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDNcIixcbiAgICBzdGFydDogXCItPTIwMHB4IHRvcFwiLFxuICAgIHNjcnViOiB0cnVlLFxuICAgIC8vICBtYXJrZXJzOiB0cnVlXG4gIH0sXG59KTtcblxudDNcbi50byhcIi5mZWF0LW1haW4tbGVmdC10aHJlZVwiLCB7eVBlcmNlbnQ6LTY1fSlcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTG9hZGluZyBhbmltYXRpb25cbiAgIOODreODvOODieOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNldExvYWRpbmdBbmltYXRpb24oKVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLChlKT0+e1xuICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKClcblxuICBpbnRyb1xuLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0nLHt5OicxMDAlJyxkZWxheToyfSlcbi5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuLy8gLnNldCgnLnRyYW5zaXRpb24taXRlbScse3k6Jy0xMDAlJ30pXG4uc2V0KCcudHJhbnNpdGlvbi1pbWcnLHtvcGFjaXR5OjB9KVxuLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbi50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6Jy0xMDAlJ30pXG4udG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHtkaXNwbGF5Olwibm9uZVwifSlcbi5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbi5mcm9tKCcua2V5dmlzdWFsLXRvcF9fbG9nbycse29wYWNpdHk6MCx4Oi0xMDAsZHVyYXRpb246MX0pXG4uZnJvbSgnLmxldHRlcjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwyMCVcIilcbi5mcm9tKCcubGV0dGVyMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXIzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXI5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjEwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjExJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjEyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjEzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjE5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjIwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjIxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjIzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjI0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjI2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlcjI3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI0LjVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzEwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzEzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcxNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzE5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyMCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyMycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyNicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzI4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmcyOScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzMxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczMicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczNScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzM3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmczOCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nMzknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQwJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0MScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQzJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0NCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ2Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc0Nycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNDgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzQ5Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1MCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzUyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1Mycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1Nicse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzU4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc1OScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzYxJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2Micse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzY0Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmxldHRlci1lbmc2NScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLmZyb20oJy5sZXR0ZXItZW5nNjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi5mcm9tKCcubGV0dGVyLWVuZzY3Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4uZnJvbSgnLmV5ZWNhdGNoZXItc2xpZGVzaG93Jyx7b3BhY2l0eTowLHNjYWxlOjAsZHVyYXRpb246Mn0sXCI0LjVcIilcbi5mcm9tKCcuZXllY2F0Y2hlcl9fc2Nyb2xsaW1nJyx7b3BhY2l0eTowLHk6LTEwMCxkdXJhdGlvbjoyfSxcIjw1MCVcIilcblxufSlcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBMb2dvIEFuaW1hdGlvbnNcbiAgIOODreOCtOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgdHJpZ2dlcjogXCIudHJpZ2dlclwiLFxuICBzdGFydDogXCJ0b3AgLT0xMFwiLFxuICAvLyBtYXJrZXJzOiB0cnVlLFxuICBvbkVudGVyQmFjazogYW5pbWF0ZUxvZ29cbn0pO1xuXG5sZXQgdHdlZW4gPSAgZ3NhcC5mcm9tKFwiLmxvZ29fX2ltYWdlLS1zcFwiLCB7IHk6XCIgLTEwMCUgXCIsZHVyYXRpb246MX0pXG5cbmZ1bmN0aW9uIGFuaW1hdGVMb2dvKCkge1xuICB0d2Vlbi5yZXN0YXJ0KCk7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBIZWFkZXIgUEMgYW5pbWF0aW9uXG4gICDjg5jjg4Pjg4Djg7xQQ+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpO1xuXG4vLyBsZXQgbGV0dGVycyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5sZXR0ZXJcIik7XG5cbi8vIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4vLyAgIGdzYXAuZnJvbShsZXR0ZXIsIHtcbi8vICAgIG9wYWNpdHk6MFxuLy8gICB9KTtcbi8vIH0pO1xuXG4vLyBjb25zdCBtYXN0ZXIgPSBnc2FwLnRpbWVsaW5lKHtwYXVzZWQ6dHJ1ZX0pO1xuXG4vLyBjb25zdCBsb2FkZXIgPSBnc2FwXG4vLyAgIC50aW1lbGluZSgpXG4vLyAgIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4vLyAuZnJvbSgnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6JzEwMCUnfSlcbi8vIC5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0gKVxuLy8gLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbi8vIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6Jy0xMDAlJ30pXG4vLyAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHtkaXNwbGF5Olwibm9uZVwifSlcbi8vIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbi8vIC5mcm9tKCcua2V5dmlzdWFsLXRvcF9fbG9nbycse29wYWNpdHk6MCx4Oi0xMDAsZHVyYXRpb246MX0pO1xuXG4vLyBjb25zdCB0ZXh0QW5pbWUgPSBnc2FwLnRpbWVsaW5lKClcbi8vIC5mcm9tKCcubGV0dGVyMScse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDIwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXIyJyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyNCcse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXI1Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyNycse29wYWNpdHk6MCxkdXJhdGlvbjowLjV9LFwiPDEwJVwiKVxuLy8gLmZyb20oJy5sZXR0ZXI4Jyx7b3BhY2l0eTowLGR1cmF0aW9uOjAuNX0sXCI8MTAlXCIpXG4vLyAuZnJvbSgnLmxldHRlcjknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTgnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMTknLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjAnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjEnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjInLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjMnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjQnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjUnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjYnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcbi8vIC5mcm9tKCcubGV0dGVyMjcnLHtvcGFjaXR5OjAsZHVyYXRpb246MC41fSxcIjwxMCVcIilcblxuXG5cbi8vIG1hc3Rlci5hZGQobG9hZGVyKTtcbi8vIG1hc3Rlci5hZGQodGV4dEFuaW1lKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtYWVhMzFjXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanNcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy1hZWEzMWNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==