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

/***/ "./src/assets/js/eventlisters/toggleSpMenu.js":
/*!****************************************************!*\
  !*** ./src/assets/js/eventlisters/toggleSpMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleSpMenu: () => (/* binding */ toggleSpMenu)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* spmenuを開閉する */
function toggleSpMenu() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()( document ).ready(function() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#closeMenuBtn').on('click', function() {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#spNavMenu').hasClass('open')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#spNavMenu').removeClass('open');
            }
        });
        
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.meatball').on('click', function() {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#spNavMenu').hasClass('open')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#spNavMenu').addClass('open');
            }
        });
    });
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_eventlisters_screensizeChange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/js/eventlisters/screensizeChange */ "./src/assets/js/eventlisters/screensizeChange.js");
/* harmony import */ var _assets_js_otherlogic_isitSP__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/js/otherlogic/isitSP */ "./src/assets/js/otherlogic/isitSP.js");
/* harmony import */ var _assets_js_otherlogic_changeKvSrc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/js/otherlogic/changeKvSrc */ "./src/assets/js/otherlogic/changeKvSrc.js");
/* harmony import */ var _assets_js_animations_cardParallaxeffect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/js/animations/cardParallaxeffect */ "./src/assets/js/animations/cardParallaxeffect.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_otherlogic_determineTypeOfAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/js/otherlogic/determineTypeOfAnimation */ "./src/assets/js/otherlogic/determineTypeOfAnimation.js");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var _assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/js/otherlogic/splitText */ "./src/assets/js/otherlogic/splitText.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");































gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_29__.ScrollTrigger);
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

const masterCompany = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline();

let dotAnimations = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();

dotAnimations.add("(max-width: 500px)", () => {
  function dinnerTopsp() {
    let tl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
    let tl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
      scrollTrigger: {
        trigger: ".dinner-trigger", //#dinner
        start: "-=500px top",
        end: "+=200",
        scrub: true,
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

let tl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=200px top",
    scrub: true,
  },
});

tl.to(".feat-main-left-one", { yPercent: -65 });

let t2 = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
  },
});

t2.to(".feat-main-left-two", { yPercent: -65 });

let t3 = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
  let intro = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline();

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

gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_29__.ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  onEnterBack: animateLogo,
});

let tween = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.from(".logo__image--sp", { y: " -100% ", duration: 1 });

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
let kvMaintl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".eyecatcher_scrollimg--image",
    start: "-=100px",
    scrub: false,
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

let kvFoodtl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".keyvisual-main_hero",
    start: "-500px",
    scrub: false,
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

let featureTitle = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();
featureTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("feature-title__text--jp", "feature-title-letter");

  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
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
  let featureTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
    scrollTrigger: {
      trigger: "#feature",
      start: "-=600px",
      scrub: false,
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

let featureEyetl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=700px",
    scrub: false,
  },
});

featureEyetl
.from(".feat-1-eyewrapper", { opacity: 0, duration: 1 })
.from(".feature-title__img", { opacity: 0, duration: 0.5 });

let featureOne = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();

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
let featureOnetl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat-1-eyewrapper",
    start: "+=170px",
    scrub: false,
  },
});

featureOnetl
  // .from(".feat-main-left-one", { opacity: 0, x: -100, duration: 1 })
  .from(".feat-main--right-1", { opacity: 0,  duration: 3 });
/*-------------------------------
   Feature 2 Animations
   Feature 2 アニメーション
-------------------------------*/

let featureEyeTwotl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=700px",
    scrub: false,
  },
});

featureEyeTwotl.from(".feat-2-eyewrapper", { opacity: 0, duration: 1 });

let featureTwo = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();

featureTwo.add("(min-width: 768px)", () => {
  let featureTwotl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-2-eyewrapper",
      start: "+=170px",
      scrub: false,
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

let featureEyeThreetl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=700px",
    scrub: false,
  },
});

featureEyeThreetl.from(".feat-3-eyewrapper", {
  opacity: 0,
  duration: 1,
});

let featureThree = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();

featureThree.add("(min-width: 768px)", () => {
  let featureThreetl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-3-eyewrapper",
      start: "+=170px",
      scrub: false,
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

let courseTitle = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();
courseTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("course-title--eng", "course-title--eng-letter");

  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
  let courseTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
let LunchImgtl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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

let dinnerImgtl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: "#dinner",
    start: "-=500px",
    scrub: false,
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

let dinnerBottomtl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: "#dinner-seemore",
    start: "-=100px",
    scrub: false,
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

let messageTitle = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();
messageTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("message-title--eng", "message-title--eng-letter");

  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
  let messageTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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

let messageImgtl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
let voiceTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: "#voice",
    start: "-=500px",
    scrub: false,
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
let newsTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: "#news",
    start: "-=500px",
    scrub: false,
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
let instaTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
  scrollTrigger: {
    trigger: "#insta",
    start: "-=500px",
    scrub: false,
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
let accessTitle = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  (0,_assets_js_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_26__["default"])("access-eng", "access-eng-letter");

  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
<<<<<<<< HEAD:dist/index.a60d79ab1cf75ec6b452.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTYwZDc5YWIxY2Y3NWVjNmI0NTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QTJCO0FBQ3BELDhCQUE4QiwyQkFBMkI7QUFDekQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJB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O1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzcz82YzI5Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3M/NTU0MCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3M/NjY5ZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3M/NjdhYSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvY291cnNlLmNzcz8yMzZlIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9kaW5uZXIuY3NzPzIxYTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzPzUzMmYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2hlcm8uY3NzP2ZiNjYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzcz9kMmFkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3M/MGJkNiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3M/MWVlMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3M/OGEzZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvdm9pY2UuY3NzPzYwZjEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3QuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9uYXZpY29uRXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRTUC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0VEFCLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NwbGl0VGV4dC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKXtcbiAgICBsZXQgcGNIZWFkZXJBbmltID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBwY0hlYWRlckFuaW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgICBcbiAgICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcC5mcm9tKCcuaGVhZGVyJywgeyBcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMlxuICAgICAgfSkucHJvZ3Jlc3MoMSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAgIGVuZDogXCJtYXhcIixcbiAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVNZWF0YmFsbEljb24oKXtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lYXRiYWxsXCIpO1xuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxufSIsIlxuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDYXJkUGFyYWxsYXgoKXtcbiAgICBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgIHlQZXJjZW50OiAtMTUwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKXtcbiAgICB2YXIgZHVyYXRpb24gPSAyO1xudmFyIGRlbGF5ID0gMTtcbnZhciB0bCA9IGdzYXAudGltZWxpbmUoe29uQ29tcGxldGU6cmVwZWF0fSk7XG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUnKTtcbmNvbnN0IGZpcnN0SW1hZ2UgPSBpbWFnZXNbMF07XG5jb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5jb25zb2xlLmxvZyh7aW1hZ2VzLHRvdGFsSW1hZ2VzfSk7XG5cbmdzYXAudXRpbHMudG9BcnJheShpbWFnZXMpLmZvckVhY2goKGltYWdlLGluZGV4KT0+e1xuICAgIHZhciBvZmZzZXQgPSBpbmRleCA9PT0gMCA/IDAgOiBcIi09XCIgKyBkdXJhdGlvbjsgLy9pbnNlcnQgZmlyc3QgYW5pbWF0aW9uIGF0IGEgdGltZSBvZiAwIG9yIGFsbCBvdGhlciBhbmltYXRpb25zIGF0IGEgdGltZSB0aGF0IHdpbGwgb3ZlcmxhcCB3aXRoIHRoZSBwcmV2aW91cyBhbmltYXRpb24gZmFkaW5nIG91dC5cbiAgdGwudG8oaW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSxzY2FsZToxLjUsIHJlcGVhdDoxLCB5b3lvOnRydWUsIHJlcGVhdERlbGF5OmRlbGF5fSwgb2Zmc2V0KVxuICAvL3doZW4gdGhlIGxhc3QgaW1hZ2UgZmFkZXMgb3V0IHdlIG5lZWQgdG8gY3Jvc3MtZmFkZSB0aGUgZmlyc3QgaW1hZ2VcbiAgaWYgKGluZGV4ID09PSB0b3RhbEltYWdlcyl7XG4gICAgY29uc29sZS5sb2coXCJBZGQgdHdlZW4gb24gdGhlIGZpcnN0IGltYWdlXCIpO1xuICAgIHRsLnRvKGZpcnN0SW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSwgc2NhbGU6MS41fSwgb2Zmc2V0KVxuICB9XG59KVxuXG5cbmZ1bmN0aW9uIHJlcGVhdCgpIHtcbiAgdGwucGxheShkdXJhdGlvbik7XG59XG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcGxpdHRleHRdJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gICAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpXG4gIFxuICAgIGludHJvXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuICAvLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7b3BhY2l0eTowfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKXtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5cbiAgdGV4dHRsXG4gIC5mcm9tKCcua2V5dmlzdWFsX190ZXh0LS1qcCcse29wYWNpdHk6MH0pXG5cbn1cbi8vIGdzYXAuZnJvbShcIi5sZXR0ZXJcIix7eToxMDAsZHVyYXRpb246Mn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlZCcpO1xufSIsImltcG9ydCBhbmltYXRlTWVhdGJhbGxJY29uIGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbFwiO1xuXG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKXtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbmltYXRlTWVhdGJhbGxJY29uKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4uL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4uL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcmVlblJlc2l6ZUxpc3RlbmVyKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUt2U3JjKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLChlKT0+e1xuICAgICAgICAvLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbiAgICAgICAgY2hhbmdlS3ZTcmMoKTtcbiAgICB9KVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qIHNwbWVudeOCkumWi+mWieOBmeOCiyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNwTWVudSgpIHtcbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjY2xvc2VNZW51QnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKCcubWVhdGJhbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJcbmltcG9ydCBzcFNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMi1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNC1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtOS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlOCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMTEtbWluLnBuZyc7XG5cblxuaW1wb3J0IHBjU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0yLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0zLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi00LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi01LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi03LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi05LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgaXNJdFNwIGZyb20gJy4vaXNpdFNQJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VLdlNyYygpe1xuICAgIGNvbnN0IElTX0lUX1NQID0gaXNJdFNwKCk7XG4gICAgY29uc3QgU0xJREVfT05FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1vbmUnKTtcbiAgICBjb25zdCBTTElERV9UV08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXR3bycpO1xuICAgIGNvbnN0IFNMSURFX1RIUkVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS10aHJlZScpO1xuICAgIGNvbnN0IFNMSURFX0ZPVVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZvdXInKTtcbiAgICBjb25zdCBTTElERV9GSVZFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1maXZlJyk7XG4gICAgY29uc3QgU0xJREVfU0lYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zaXgnKTtcbiAgICBjb25zdCBTTElERV9TRVZFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tc2V2ZW4nKTtcbiAgICBjb25zdCBTTElERV9FSUdIVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZWlnaHQnKTtcbiAgICBjb25zdCBTTElERV9OSU5FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1uaW5lJyk7XG4gICAgXG4gICAgaWYoSVNfSVRfU1Ape1xuICAgICAgIFNMSURFX09ORS5zcmMgPSBzcFNsaWRlMTtcbiAgICAgICBTTElERV9UV08uc3JjID0gc3BTbGlkZTI7XG4gICAgICAgU0xJREVfVEhSRUUuc3JjID0gc3BTbGlkZTM7XG4gICAgICAgU0xJREVfRk9VUi5zcmMgPSAgc3BTbGlkZTQ7XG4gICAgICAgU0xJREVfRklWRS5zcmMgPSAgc3BTbGlkZTU7XG4gICAgICAgU0xJREVfU0lYLnNyYyA9ICBzcFNsaWRlNjtcbiAgICAgICBTTElERV9TRVZFTi5zcmMgPSBzcFNsaWRlNztcbiAgICAgICBTTElERV9FSUdIVC5zcmMgPSAgc3BTbGlkZTg7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFNMSURFX09ORS5zcmMgPSBwY1NsaWRlMTtcbiAgICAgICAgU0xJREVfVFdPLnNyYyA9IHBjU2xpZGUyO1xuICAgICAgICBTTElERV9USFJFRS5zcmMgPSBwY1NsaWRlMztcbiAgICAgICAgU0xJREVfRk9VUi5zcmMgPSBwY1NsaWRlNDtcbiAgICAgICAgU0xJREVfRklWRS5zcmMgPSBwY1NsaWRlNTtcbiAgICAgICAgU0xJREVfU0lYLnNyYyA9IHBjU2xpZGU2O1xuICAgICAgICBTTElERV9TRVZFTi5zcmMgPSBwY1NsaWRlNztcbiAgICAgICAgU0xJREVfRUlHSFQuc3JjID0gcGNTbGlkZTg7XG4gICAgfVxufSIsImltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vaXNpdFNQXCI7XG5pbXBvcnQgeyBpc0l0UGMsIGlzSXRUYWIgfSBmcm9tIFwiLi9pc2l0VEFCXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFdpbmRvdyA9IGlzSXRQYygpO1xuICAgIFxuICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRTcCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIE1vYmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudFwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gIGdzYXAudG8oaW1hZ2UsIHtcbiAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3AsXG4gICAgZWFzZTogXCJub25lXCIsXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3AgKiAwLjEsXG4gICAgfSxcbiAgfSk7XG59KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSBpc0l0VGFiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgVGFibGV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdFNwKCl7XG4gICAgY29uc3QgaXNJdFNwID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIik7XG4gICAgaWYoaXNJdFNwLm1hdGNoZXMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICBmdW5jdGlvbiBpc0l0VGFiKCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIpLm1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0l0UGMoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjUwcHgpXCIpLm1hdGNoZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFRleHQoY2xhc3NuYW1lLHNwYW5OYW1lKXtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xuY29uc3QgZnJhZ21lbnRzID0gdGV4dENvbnRhaW5lci5pbm5lckhUTUwuc3BsaXQoJzxicj4nKTtcblxuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBvcmlnaW5hbCBjb250ZW50XG4gICAgbGV0IGNsYXNzQ291bnRlciA9IDE7IC8vIENvdW50ZXIgZm9yIHVuaXF1ZSBjbGFzcyBuYW1lc1xuXG4gICAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZnJhZ21lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50U3BhbnMgPSBmcmFnbWVudFdyYXBwZXIuY2hpbGROb2RlcztcbiAgICAgIGZyYWdtZW50U3BhbnMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgY29uc3QgbGV0dGVycyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQoJycpO1xuICAgICAgICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYCR7c3Bhbk5hbWV9JHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY2xhc3NDb3VudGVyKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kZXggPCBmcmFnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgfVxuICAgIH0pO1xuXG59IiwiaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9jb3Vyc2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2Rpbm5lci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL21lc3NhZ2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS92b2ljZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL25ld3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9pbnN0YS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBhZGROYXZJY29uRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL25hdmljb25FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2Nyb3NzZmFkZUFuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBzY3JlZW5SZXNpemVMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2VcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFNQXCI7XG5pbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuaW1wb3J0IHNldExvYWRpbmdBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvblwiO1xuaW1wb3J0IGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucyBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnNcIjtcbmltcG9ydCBzcGxpdFRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0XCI7XG5pbXBvcnQgeyB0b2dnbGVTcE1lbnUgfSBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3RvZ2dsZVNwTWVudVwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmFkZE5hdkljb25FdmVudExpc3RlbmVyKCk7XG5cbmFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucygpO1xuXG5jaGFuZ2VLdlNyYygpO1xuXG4vLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbnNjcmVlblJlc2l6ZUxpc3RlbmVyKCk7XG5cbmNvbnN0IHNjcmVlblR5cGUgPSBpc0l0U3AoKTsgLy8g55S76Z2i44K144Kk44K644KS44OB44Kn44OD44Kv44GX44G+44GZIC9jaGVja3MgZm9yICBzY3JlZW4gc2l6ZVxuXG50b2dnbGVTcE1lbnUoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlubmVyIGJhY2tncm91bmQgYW5pbWF0aW9uc1xuICAgIOODh+OCo+ODiuODvOOBruiDjOaZr+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1hc3RlckNvbXBhbnkgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbmxldCBkb3RBbmltYXRpb25zID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmRvdEFuaW1hdGlvbnMuYWRkKFwiKG1heC13aWR0aDogNTAwcHgpXCIsICgpID0+IHtcbiAgZnVuY3Rpb24gZGlubmVyVG9wc3AoKSB7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmRpbm5lci10cmlnZ2VyXCIsIC8vI2Rpbm5lclxuICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIC8vIHBpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0bC5mcm9tKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6IDAgfSk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH1cblxuICBtYXN0ZXJDb21wYW55LmFkZChkaW5uZXJUb3BzcCgpKTtcbn0pO1xuZG90QW5pbWF0aW9ucy5hZGQoXCIobWluLXdpZHRoOiA1MDFweClcIiwgKCkgPT4ge1xuICBmdW5jdGlvbiBkaW5uZXJUb3AoKSB7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmRpbm5lci10cmlnZ2VyXCIsIC8vI2Rpbm5lclxuICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGwuZnJvbVRvKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6IDAgfSwgeyBzY2FsZTogMS43IH0pO1xuICAgIC8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcblxuICAgIHJldHVybiB0bDtcbiAgfVxuXG4gIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcCgpKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmZWF0dXJlIHBhcmFsbGF4IGFuaW1hdGlvbnNcbiAgICDjg5XjgqPjg7zjg4Hjg6Pjg7zjga7jg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50bC50byhcIi5mZWF0LW1haW4tbGVmdC1vbmVcIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG5sZXQgdDIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQyXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50Mi50byhcIi5mZWF0LW1haW4tbGVmdC10d29cIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG5sZXQgdDMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQzXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50My50byhcIi5mZWF0LW1haW4tbGVmdC10aHJlZVwiLCB7IHlQZXJjZW50OiAtNjUgfSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIExvYWRpbmcgYW5pbWF0aW9uXG4gICDjg63jg7zjg4njgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIGludHJvXG4gICAgLmZyb20oXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgeTogXCIxMDAlXCIsIGRlbGF5OiAyIH0pXG4gICAgLmZyb20oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgeTogXCIxMDAlXCIgfSlcbiAgICAuc2V0KFwiLnRyYW5zaXRpb24taW1nXCIsIHsgb3BhY2l0eTogMCB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pbWdcIiwgeyB4OiBcIjEwMCVcIiB9KVxuICAgIC50byhcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyB5OiBcIi0xMDAlXCIgfSlcbiAgICAudG8oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAuc2V0KFwiLnRyYW5zaXRpb24taXRlbVwiLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgLmZyb20oXCIua2V5dmlzdWFsLXRvcF9fbG9nb1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pXG4gICAgLmZyb20oXCIuZXllY2F0Y2hlci1zbGlkZXNob3dcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIjwyNSVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwyMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5rdi1lbmctdHh0LXNwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjQuNVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzEwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzEzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2M1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2NlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcbiAgICAgIFwiLmV5ZWNhdGNoZXJfX3Njcm9sbGltZ1wiLFxuICAgICAgeyBvcGFjaXR5OiAwLCB5OiAtMTAwLCBkdXJhdGlvbjogMSB9LFxuICAgICAgXCI8MjUlXCJcbiAgICApO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgTG9nbyBBbmltYXRpb25zXG4gICDjg63jgrTjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gIHRyaWdnZXI6IFwiLnRyaWdnZXJcIixcbiAgc3RhcnQ6IFwidG9wIC09MTBcIixcbiAgb25FbnRlckJhY2s6IGFuaW1hdGVMb2dvLFxufSk7XG5cbmxldCB0d2VlbiA9IGdzYXAuZnJvbShcIi5sb2dvX19pbWFnZS0tc3BcIiwgeyB5OiBcIiAtMTAwJSBcIiwgZHVyYXRpb246IDEgfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVMb2dvKCkge1xuICB0d2Vlbi5yZXN0YXJ0KCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvblxuICAg44OY44OD44OA44O8UEPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgS1YgTWFpbiBDb250ZW50IFRpdGxlIEFuaW1hdGlvbnNcbiAgS1bjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4Tjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rdi1tYWluLXR4dC1lbmctcGNcIik7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdChcIjxicj5cIik7XG5cbnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbmxldCBjbGFzc0NvdW50ZXIgPSAxOyAvLyBDb3VudGVyIGZvciB1bmlxdWUgY2xhc3MgbmFtZXNcblxuZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICBmcmFnbWVudFNwYW5zLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xuICAgICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYGt2LW1haW5fX3RleHQtZW5nJHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNsYXNzQ291bnRlcisrO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGluZGV4IDwgZnJhZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gIH1cbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEtWIFRpdGxlIEFuaW1hdGlvblxuICAgS1bjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGt2TWFpbnRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5leWVjYXRjaGVyX3Njcm9sbGltZy0taW1hZ2VcIixcbiAgICBzdGFydDogXCItPTEwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmt2TWFpbnRsXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCJcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tdHh0LWVuZy1zcFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPFwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzYwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc2MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzkzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTAxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIik7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgS1YgRm9vZCBJbWFnZSBBbmltYXRpb25cbiAgIEtW44OV44O844OJ55S75YOP44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGt2Rm9vZHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5rZXl2aXN1YWwtbWFpbl9oZXJvXCIsXG4gICAgc3RhcnQ6IFwiLTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmt2Rm9vZHRsXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tdG9wLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLWJvdHRvbVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXRvcC1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIFRpdGxlIEFuaW1hdGlvblxuICAg5qmf6IO944K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuZmVhdHVyZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImZlYXR1cmUtdGl0bGVfX3RleHQtLWpwXCIsIFwiZmVhdHVyZS10aXRsZS1sZXR0ZXJcIik7XG5cbiAgbGV0IGZlYXR1cmVUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZmVhdHVyZVwiLFxuICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaXRsZXRsXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmZlYXR1cmVUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNmZWF0dXJlXCIsXG4gICAgICBzdGFydDogXCItPTYwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVRpdGxldGwuZnJvbShcIi5mZWF0dXJlLXRpdGxlX190ZXh0LS1qcFwiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIDEgQW5pbWF0aW9uc1xuICAgRmVhdHVyZSAxIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlRXlldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlRXlldGxcbi5mcm9tKFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSlcbi5mcm9tKFwiLmZlYXR1cmUtdGl0bGVfX2ltZ1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XG5cbmxldCBmZWF0dXJlT25lID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVPbmUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVPbmV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsXG4gICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZU9uZXRsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5mZWF0LW1haW4tLXJpZ2h0LTFcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgMiBBbmltYXRpb25zXG4gICBGZWF0dXJlIDIg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVFeWVUd290bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDJcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWVUd290bC5mcm9tKFwiLmZlYXQtMi1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSk7XG5cbmxldCBmZWF0dXJlVHdvID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVUd28uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVUd290bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMi1leWV3cmFwcGVyXCIsXG4gICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVR3b3RsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtdHdvXCIsIHsgb3BhY2l0eTogMCwgeDogMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tcmlnaHQtLTJcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9LCBcIjxcIik7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIDMgQW5pbWF0aW9uc1xuICAgRmVhdHVyZSAzIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlRXllVGhyZWV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDNcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWVUaHJlZXRsLmZyb20oXCIuZmVhdC0zLWV5ZXdyYXBwZXJcIiwge1xuICBvcGFjaXR5OiAwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG5sZXQgZmVhdHVyZVRocmVlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVUaHJlZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0LTMtZXlld3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaHJlZXRsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtdGhyZWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tMy10eHRcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ291cnNlIEFuaW1hdGlvbnNcbiAgIENvdXJzZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgY291cnNlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmNvdXJzZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImNvdXJzZS10aXRsZS0tZW5nXCIsIFwiY291cnNlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bFxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmNvdXJzZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTHVuY2ggQW5pbWF0aW9uc1xuICAgTHVuY2gg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBMdW5jaEltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNsdW5jaFwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuTHVuY2hJbWd0bC5mcm9tVG8oXG4gIFwiLnJldmVhbFwiLFxuICB7XG4gICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH0sXG4gIHtcbiAgICBcIi0td2lkdGhcIjogXCIwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH1cbilcbiAgLmZyb20oXCIubHVuY2gtdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAuZnJvbShcIi5sdW5jaC1zdWJ0aXRsZS1hbmltZVwiLCB7IG9wYWNpdHk6IDAsIHg6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRGlubmVyIEFuaW1hdGlvbnNcbiAgIERpbm5lciDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZGlubmVySW1ndGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuZGlubmVySW1ndGxcbiAgLmZyb21UbyhcbiAgICBcIi5yZXZlYWwtYmxhY2tcIixcbiAgICB7XG4gICAgICBcIi0td2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gICAge1xuICAgICAgXCItLXdpZHRoXCI6IFwiMCVcIixcbiAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgfVxuICApXG4gIC5mcm9tVG8oXG4gICAgXCIucmV2ZWFsLWJsYWNrLXJpZ2h0XCIsXG4gICAge1xuICAgICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS13aWR0aFwiOiBcIjAlXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gICAgXCI8XCJcbiAgKVxuICAuZnJvbShcIi5kaW5uZXItdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAuZnJvbShcIi5kaW5uZXItc3VidGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcblxubGV0IGRpbm5lckJvdHRvbXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNkaW5uZXItc2VlbW9yZVwiLFxuICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuZGlubmVyQm90dG9tdGxcbiAgLmZyb21UbyhcbiAgICBcIi5ib3R0b20tbGVmdF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfVxuICApXG4gIC5mcm9tVG8oXG4gICAgXCIuYm90dG9tLWltZy1yaWdodF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfSxcbiAgICBcIjxcIlxuICApO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTWVzc2FnZSBBbmltYXRpb25zXG4gICBNZXNzYWdlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBtZXNzYWdlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJtZXNzYWdlLXRpdGxlLS1lbmdcIiwgXCJtZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBtZXNzYWdlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI21lc3NhZ2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBtZXNzYWdlVGl0bGV0bFxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgbWVzc2FnZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNtZXNzYWdlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWVzc2FnZVRpdGxldGwuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEsXG4gIH0pO1xufSk7XG5cbmxldCBtZXNzYWdlSW1ndGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLm1lc3NhZ2UtYm90dG9tLXdyYXBwZXJcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbm1lc3NhZ2VJbWd0bFxuICAuZnJvbShcIi5mbG93ZXItYW5pbWVcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogMTAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KVxuICAuZnJvbShcbiAgICBcIi5jaGVmLWFuaW1lXCIsXG4gICAge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6IC0xMDAsXG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9LFxuICAgIFwiPFwiXG4gICk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuVm9pY2UgQW5pbWF0aW9uc1xuIFZvaWNlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgdm9pY2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiN2b2ljZVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxudm9pY2VUaXRsZXRsLmZyb20oXCIudm9pY2UtdGl0bGUtYW5pbWVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuTkVXUyBBbmltYXRpb25zXG4gTkVXUyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IG5ld3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNuZXdzXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5uZXdzVGl0bGV0bC5mcm9tKFwiLm5ld3MtdGl0bGUtYW5pbWVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuSW5zdGEgQW5pbWF0aW9uc1xuIEluc3RhIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgaW5zdGFUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNpbnN0YVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuaW5zdGFUaXRsZXRsLmZyb20oXCIuaW5zdGEtdGl0bGVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB4OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYWNlc3MgQW5pbWF0aW9uc1xuIGFjZXNzIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgYWNjZXNzVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImFjY2Vzcy1lbmdcIiwgXCJhY2Nlc3MtZW5nLWxldHRlclwiKTtcblxuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGxcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5hY2Nlc3NUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTQ1OTk0ZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTQ1OTk0ZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
========
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjZkZjlhZjljNTU3MmJhNzJjZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QTJCO0FBQ3BELDhCQUE4QiwyQkFBMkI7QUFDekQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELFlBQVksdUNBQUksNEJBQTRCLDJCQUEyQjs7QUFFdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJGQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRCxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUscUNBQXFDLDJCQUEyQjtBQUNoRSxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUscUNBQXFDLDJCQUEyQjtBQUNoRSxxQ0FBcUMsMkJBQTJCO0FBQ2hFLHFDQUFxQywyQkFBMkI7QUFDaEUscUNBQXFDLDJCQUEyQjtBQUNoRSxzQ0FBc0MsMkJBQTJCO0FBQ2pFLHNDQUFzQywyQkFBMkI7QUFDakUsc0NBQXNDLDJCQUEyQjtBQUNqRSxzQ0FBc0MsMkJBQTJCO0FBQ2pFLHNDQUFzQywyQkFBMkI7QUFDakUsaUNBQWlDLDJCQUEyQjtBQUM1RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELGtDQUFrQywyQkFBMkI7QUFDN0Qsa0NBQWtDLDJCQUEyQjtBQUM3RCxrQ0FBa0MsMkJBQTJCO0FBQzdELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjtBQUM5RCxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjtBQUM5RCxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjtBQUM5RCxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjtBQUM5RCxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjtBQUM5RCxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQywyQkFBMkI7QUFDOUQsbUNBQW1DLDJCQUEyQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSx1Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRSxrQ0FBa0MsMkJBQTJCO0FBQzdELG1DQUFtQywyQkFBMkI7QUFDOUQsaUNBQWlDLDJCQUEyQjtBQUM1RCxxQ0FBcUMsMkJBQTJCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQSxFQUFFLDRFQUFTOztBQUVYLHVCQUF1Qix1Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsdUNBQXVDLHlCQUF5QjtBQUNoRSx1Q0FBdUMseUJBQXlCO0FBQ2hFLHVDQUF1Qyx5QkFBeUI7QUFDaEUsdUNBQXVDLHlCQUF5QjtBQUNoRSx1Q0FBdUMseUJBQXlCO0FBQ2hFLHVDQUF1Qyx5QkFBeUI7QUFDaEUsdUNBQXVDLHlCQUF5QjtBQUNoRSxDQUFDOztBQUVEO0FBQ0EsdUJBQXVCLHVDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZELCtCQUErQiwyQkFBMkI7O0FBRTFELGlCQUFpQix1Q0FBSTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07O0FBRU47QUFDQSx5Q0FBeUMsa0NBQWtDO0FBQzNFLHNDQUFzQywwQkFBMEI7QUFDaEUsSUFBSTtBQUNKLG1CQUFtQix1Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0Esb0NBQW9DLGtDQUFrQztBQUN0RSxpQ0FBaUMsMEJBQTBCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1Q0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELDZDQUE2Qyx5QkFBeUI7O0FBRXRFLGlCQUFpQix1Q0FBSTs7QUFFckI7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLG1DQUFtQyxpQ0FBaUM7QUFDcEUsb0NBQW9DLGtDQUFrQztBQUN0RSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsbUJBQW1CLHVDQUFJOztBQUV2QjtBQUNBLHVCQUF1Qix1Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EscUNBQXFDLGtDQUFrQztBQUN2RSxpQ0FBaUMsaUNBQWlDO0FBQ2xFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVDQUFJO0FBQ3RCO0FBQ0EsRUFBRSw0RUFBUzs7QUFFWCxzQkFBc0IsdUNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEUsMkNBQTJDLHlCQUF5QjtBQUNwRSwyQ0FBMkMseUJBQXlCO0FBQ3BFLDJDQUEyQyx5QkFBeUI7QUFDcEUsMkNBQTJDLHlCQUF5QjtBQUNwRSwyQ0FBMkMseUJBQXlCO0FBQ3BFLENBQUM7O0FBRUQ7QUFDQSxzQkFBc0IsdUNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsbUNBQW1DLGlDQUFpQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUNBQWlDLGtDQUFrQztBQUNuRSxvQ0FBb0MsaUNBQWlDOztBQUVyRSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1Q0FBSTtBQUN2QjtBQUNBLEVBQUUsNEVBQVM7O0FBRVgsdUJBQXVCLHVDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSw0Q0FBNEMseUJBQXlCO0FBQ3JFLDRDQUE0Qyx5QkFBeUI7QUFDckUsNENBQTRDLHlCQUF5QjtBQUNyRSw0Q0FBNEMseUJBQXlCO0FBQ3JFLDRDQUE0Qyx5QkFBeUI7QUFDckUsNENBQTRDLHlCQUF5QjtBQUNyRSw0Q0FBNEMseUJBQXlCO0FBQ3JFLENBQUM7O0FBRUQ7QUFDQSx1QkFBdUIsdUNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUFJO0FBQ3RCO0FBQ0EsRUFBRSw0RUFBUzs7QUFFWCxzQkFBc0IsdUNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELENBQUM7O0FBRUQ7QUFDQSxzQkFBc0IsdUNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoMkJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzcz82YzI5Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3M/NTU0MCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3M/NjY5ZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3M/NjdhYSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvY291cnNlLmNzcz8yMzZlIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9kaW5uZXIuY3NzPzIxYTMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzPzUzMmYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2hlcm8uY3NzP2ZiNjYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzcz9kMmFkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3M/MGJkNiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3M/MWVlMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3M/OGEzZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvdm9pY2UuY3NzPzYwZjEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3QuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy9uYXZpY29uRXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRTUC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0VEFCLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NwbGl0VGV4dC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKXtcbiAgICBsZXQgcGNIZWFkZXJBbmltID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBwY0hlYWRlckFuaW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgICBcbiAgICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcC5mcm9tKCcuaGVhZGVyJywgeyBcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMlxuICAgICAgfSkucHJvZ3Jlc3MoMSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAgIGVuZDogXCJtYXhcIixcbiAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVNZWF0YmFsbEljb24oKXtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lYXRiYWxsXCIpO1xuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxufSIsIlxuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVDYXJkUGFyYWxsYXgoKXtcbiAgICBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBnc2FwLnRvKGltYWdlLCB7XG4gICAgICAgIHlQZXJjZW50OiAtMTUwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMoKXtcbiAgICB2YXIgZHVyYXRpb24gPSAyO1xudmFyIGRlbGF5ID0gMTtcbnZhciB0bCA9IGdzYXAudGltZWxpbmUoe29uQ29tcGxldGU6cmVwZWF0fSk7XG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUnKTtcbmNvbnN0IGZpcnN0SW1hZ2UgPSBpbWFnZXNbMF07XG5jb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5jb25zb2xlLmxvZyh7aW1hZ2VzLHRvdGFsSW1hZ2VzfSk7XG5cbmdzYXAudXRpbHMudG9BcnJheShpbWFnZXMpLmZvckVhY2goKGltYWdlLGluZGV4KT0+e1xuICAgIHZhciBvZmZzZXQgPSBpbmRleCA9PT0gMCA/IDAgOiBcIi09XCIgKyBkdXJhdGlvbjsgLy9pbnNlcnQgZmlyc3QgYW5pbWF0aW9uIGF0IGEgdGltZSBvZiAwIG9yIGFsbCBvdGhlciBhbmltYXRpb25zIGF0IGEgdGltZSB0aGF0IHdpbGwgb3ZlcmxhcCB3aXRoIHRoZSBwcmV2aW91cyBhbmltYXRpb24gZmFkaW5nIG91dC5cbiAgdGwudG8oaW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSxzY2FsZToxLjUsIHJlcGVhdDoxLCB5b3lvOnRydWUsIHJlcGVhdERlbGF5OmRlbGF5fSwgb2Zmc2V0KVxuICAvL3doZW4gdGhlIGxhc3QgaW1hZ2UgZmFkZXMgb3V0IHdlIG5lZWQgdG8gY3Jvc3MtZmFkZSB0aGUgZmlyc3QgaW1hZ2VcbiAgaWYgKGluZGV4ID09PSB0b3RhbEltYWdlcyl7XG4gICAgY29uc29sZS5sb2coXCJBZGQgdHdlZW4gb24gdGhlIGZpcnN0IGltYWdlXCIpO1xuICAgIHRsLnRvKGZpcnN0SW1hZ2UsIHtkdXJhdGlvbixhdXRvQWxwaGE6MSwgc2NhbGU6MS41fSwgb2Zmc2V0KVxuICB9XG59KVxuXG5cbmZ1bmN0aW9uIHJlcGVhdCgpIHtcbiAgdGwucGxheShkdXJhdGlvbik7XG59XG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcGxpdHRleHRdJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gICAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpXG4gIFxuICAgIGludHJvXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuICAvLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7b3BhY2l0eTowfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKXtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5cbiAgdGV4dHRsXG4gIC5mcm9tKCcua2V5dmlzdWFsX190ZXh0LS1qcCcse29wYWNpdHk6MH0pXG5cbn1cbi8vIGdzYXAuZnJvbShcIi5sZXR0ZXJcIix7eToxMDAsZHVyYXRpb246Mn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlZCcpO1xufSIsImltcG9ydCBhbmltYXRlTWVhdGJhbGxJY29uIGZyb20gXCIuLi9hbmltYXRpb25zL2FuaW1hdGVNZWF0YmFsbFwiO1xuXG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWF0YmFsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKXtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbmltYXRlTWVhdGJhbGxJY29uKCk7XG4gICAgfSlcbn0iLCJpbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4uL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4uL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcmVlblJlc2l6ZUxpc3RlbmVyKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUt2U3JjKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLChlKT0+e1xuICAgICAgICAvLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbiAgICAgICAgY2hhbmdlS3ZTcmMoKTtcbiAgICB9KVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qIHNwbWVudeOCkumWi+mWieOBmeOCiyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNwTWVudSgpIHtcbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjY2xvc2VNZW51QnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKCcubWVhdGJhbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJcbmltcG9ydCBzcFNsaWRlMSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMi1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlMyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNC1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNSBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNiBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtNy1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlNyBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtOS1taW4ucG5nJztcbmltcG9ydCBzcFNsaWRlOCBmcm9tICcuLi8uLi9pbWFnZXMvdG9wL2hlcm8vc3Ava3Ytc3AtMTEtbWluLnBuZyc7XG5cblxuaW1wb3J0IHBjU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0yLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0zLW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi00LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi01LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi03LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi05LW1pbi5wbmcnO1xuaW1wb3J0IHBjU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9rdi0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgaXNJdFNwIGZyb20gJy4vaXNpdFNQJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VLdlNyYygpe1xuICAgIGNvbnN0IElTX0lUX1NQID0gaXNJdFNwKCk7XG4gICAgY29uc3QgU0xJREVfT05FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1vbmUnKTtcbiAgICBjb25zdCBTTElERV9UV08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXR3bycpO1xuICAgIGNvbnN0IFNMSURFX1RIUkVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS10aHJlZScpO1xuICAgIGNvbnN0IFNMSURFX0ZPVVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZvdXInKTtcbiAgICBjb25zdCBTTElERV9GSVZFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1maXZlJyk7XG4gICAgY29uc3QgU0xJREVfU0lYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zaXgnKTtcbiAgICBjb25zdCBTTElERV9TRVZFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tc2V2ZW4nKTtcbiAgICBjb25zdCBTTElERV9FSUdIVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZWlnaHQnKTtcbiAgICBjb25zdCBTTElERV9OSU5FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1uaW5lJyk7XG4gICAgXG4gICAgaWYoSVNfSVRfU1Ape1xuICAgICAgIFNMSURFX09ORS5zcmMgPSBzcFNsaWRlMTtcbiAgICAgICBTTElERV9UV08uc3JjID0gc3BTbGlkZTI7XG4gICAgICAgU0xJREVfVEhSRUUuc3JjID0gc3BTbGlkZTM7XG4gICAgICAgU0xJREVfRk9VUi5zcmMgPSAgc3BTbGlkZTQ7XG4gICAgICAgU0xJREVfRklWRS5zcmMgPSAgc3BTbGlkZTU7XG4gICAgICAgU0xJREVfU0lYLnNyYyA9ICBzcFNsaWRlNjtcbiAgICAgICBTTElERV9TRVZFTi5zcmMgPSBzcFNsaWRlNztcbiAgICAgICBTTElERV9FSUdIVC5zcmMgPSAgc3BTbGlkZTg7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFNMSURFX09ORS5zcmMgPSBwY1NsaWRlMTtcbiAgICAgICAgU0xJREVfVFdPLnNyYyA9IHBjU2xpZGUyO1xuICAgICAgICBTTElERV9USFJFRS5zcmMgPSBwY1NsaWRlMztcbiAgICAgICAgU0xJREVfRk9VUi5zcmMgPSBwY1NsaWRlNDtcbiAgICAgICAgU0xJREVfRklWRS5zcmMgPSBwY1NsaWRlNTtcbiAgICAgICAgU0xJREVfU0lYLnNyYyA9IHBjU2xpZGU2O1xuICAgICAgICBTTElERV9TRVZFTi5zcmMgPSBwY1NsaWRlNztcbiAgICAgICAgU0xJREVfRUlHSFQuc3JjID0gcGNTbGlkZTg7XG4gICAgfVxufSIsImltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vaXNpdFNQXCI7XG5pbXBvcnQgeyBpc0l0UGMsIGlzSXRUYWIgfSBmcm9tIFwiLi9pc2l0VEFCXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFdpbmRvdyA9IGlzSXRQYygpO1xuICAgIFxuICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgIGFjdGl2YXRlQ2FyZFBhcmFsbGF4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRTcCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIE1vYmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudFwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gIGdzYXAudG8oaW1hZ2UsIHtcbiAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3AsXG4gICAgZWFzZTogXCJub25lXCIsXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3AgKiAwLjEsXG4gICAgfSxcbiAgfSk7XG59KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSBpc0l0VGFiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgVGFibGV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdFNwKCl7XG4gICAgY29uc3QgaXNJdFNwID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIik7XG4gICAgaWYoaXNJdFNwLm1hdGNoZXMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICBmdW5jdGlvbiBpc0l0VGFiKCkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIpLm1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0l0UGMoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjUwcHgpXCIpLm1hdGNoZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFRleHQoY2xhc3NuYW1lLHNwYW5OYW1lKXtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xuY29uc3QgZnJhZ21lbnRzID0gdGV4dENvbnRhaW5lci5pbm5lckhUTUwuc3BsaXQoJzxicj4nKTtcblxuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBvcmlnaW5hbCBjb250ZW50XG4gICAgbGV0IGNsYXNzQ291bnRlciA9IDE7IC8vIENvdW50ZXIgZm9yIHVuaXF1ZSBjbGFzcyBuYW1lc1xuXG4gICAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZnJhZ21lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50U3BhbnMgPSBmcmFnbWVudFdyYXBwZXIuY2hpbGROb2RlcztcbiAgICAgIGZyYWdtZW50U3BhbnMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgY29uc3QgbGV0dGVycyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQoJycpO1xuICAgICAgICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYCR7c3Bhbk5hbWV9JHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY2xhc3NDb3VudGVyKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kZXggPCBmcmFnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgfVxuICAgIH0pO1xuXG59IiwiaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2ZlYXR1cmUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9jb3Vyc2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9sdW5jaC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2Rpbm5lci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL21lc3NhZ2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS92b2ljZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL25ld3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9pbnN0YS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBhZGROYXZJY29uRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL25hdmljb25FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2Nyb3NzZmFkZUFuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBzY3JlZW5SZXNpemVMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3NjcmVlbnNpemVDaGFuZ2VcIjtcbmltcG9ydCBpc0l0U3AgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFNQXCI7XG5pbXBvcnQgY2hhbmdlS3ZTcmMgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvY2hhbmdlS3ZTcmNcIjtcbmltcG9ydCBhY3RpdmF0ZUNhcmRQYXJhbGxheCBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9jYXJkUGFyYWxsYXhlZmZlY3RcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2RldGVybWluZVR5cGVPZkFuaW1hdGlvblwiO1xuaW1wb3J0IHNldExvYWRpbmdBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvblwiO1xuaW1wb3J0IGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucyBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnNcIjtcbmltcG9ydCBzcGxpdFRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0XCI7XG5pbXBvcnQgeyB0b2dnbGVTcE1lbnUgfSBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3RvZ2dsZVNwTWVudVwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmFkZE5hdkljb25FdmVudExpc3RlbmVyKCk7XG5cbmFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucygpO1xuXG5jaGFuZ2VLdlNyYygpO1xuXG4vLyBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24oKTtcbnNjcmVlblJlc2l6ZUxpc3RlbmVyKCk7XG5cbmNvbnN0IHNjcmVlblR5cGUgPSBpc0l0U3AoKTsgLy8g55S76Z2i44K144Kk44K644KS44OB44Kn44OD44Kv44GX44G+44GZIC9jaGVja3MgZm9yICBzY3JlZW4gc2l6ZVxuXG50b2dnbGVTcE1lbnUoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZGlubmVyIGJhY2tncm91bmQgYW5pbWF0aW9uc1xuICAgIOODh+OCo+ODiuODvOOBruiDjOaZr+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1hc3RlckNvbXBhbnkgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbmxldCBkb3RBbmltYXRpb25zID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmRvdEFuaW1hdGlvbnMuYWRkKFwiKG1heC13aWR0aDogNTAwcHgpXCIsICgpID0+IHtcbiAgZnVuY3Rpb24gZGlubmVyVG9wc3AoKSB7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmRpbm5lci10cmlnZ2VyXCIsIC8vI2Rpbm5lclxuICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIC8vIHBpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0bC5mcm9tKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6IDAgfSk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH1cblxuICBtYXN0ZXJDb21wYW55LmFkZChkaW5uZXJUb3BzcCgpKTtcbn0pO1xuZG90QW5pbWF0aW9ucy5hZGQoXCIobWluLXdpZHRoOiA1MDFweClcIiwgKCkgPT4ge1xuICBmdW5jdGlvbiBkaW5uZXJUb3AoKSB7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmRpbm5lci10cmlnZ2VyXCIsIC8vI2Rpbm5lclxuICAgICAgICBzdGFydDogXCItPTUwMHB4IHRvcFwiLFxuICAgICAgICBlbmQ6IFwiKz0yMDBcIixcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGwuZnJvbVRvKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6IDAgfSwgeyBzY2FsZTogMS43IH0pO1xuICAgIC8vIC50byhcIi5jb21wYW55LWRvdFwiLCB7IHNjYWxlOiAxfSlcblxuICAgIHJldHVybiB0bDtcbiAgfVxuXG4gIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcCgpKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmZWF0dXJlIHBhcmFsbGF4IGFuaW1hdGlvbnNcbiAgICDjg5XjgqPjg7zjg4Hjg6Pjg7zjga7jg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50bC50byhcIi5mZWF0LW1haW4tbGVmdC1vbmVcIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG5sZXQgdDIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQyXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50Mi50byhcIi5mZWF0LW1haW4tbGVmdC10d29cIiwgeyB5UGVyY2VudDogLTY1IH0pO1xuXG5sZXQgdDMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQzXCIsXG4gICAgc3RhcnQ6IFwiLT0yMDBweCB0b3BcIixcbiAgICBzY3J1YjogdHJ1ZSxcbiAgfSxcbn0pO1xuXG50My50byhcIi5mZWF0LW1haW4tbGVmdC10aHJlZVwiLCB7IHlQZXJjZW50OiAtNjUgfSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIExvYWRpbmcgYW5pbWF0aW9uXG4gICDjg63jg7zjg4njgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIGludHJvXG4gICAgLmZyb20oXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgeTogXCIxMDAlXCIsIGRlbGF5OiAyIH0pXG4gICAgLmZyb20oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgeTogXCIxMDAlXCIgfSlcbiAgICAuc2V0KFwiLnRyYW5zaXRpb24taW1nXCIsIHsgb3BhY2l0eTogMCB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pbWdcIiwgeyB4OiBcIjEwMCVcIiB9KVxuICAgIC50byhcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyB5OiBcIi0xMDAlXCIgfSlcbiAgICAudG8oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAuc2V0KFwiLnRyYW5zaXRpb24taXRlbVwiLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgLmZyb20oXCIua2V5dmlzdWFsLXRvcF9fbG9nb1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pXG4gICAgLmZyb20oXCIuZXllY2F0Y2hlci1zbGlkZXNob3dcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIjwyNSVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwyMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXI5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5rdi1lbmctdHh0LXNwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjQuNVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzEwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzEzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2M1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2NlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcbiAgICAgIFwiLmV5ZWNhdGNoZXJfX3Njcm9sbGltZ1wiLFxuICAgICAgeyBvcGFjaXR5OiAwLCB5OiAtMTAwLCBkdXJhdGlvbjogMSB9LFxuICAgICAgXCI8MjUlXCJcbiAgICApO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgTG9nbyBBbmltYXRpb25zXG4gICDjg63jgrTjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gIHRyaWdnZXI6IFwiLnRyaWdnZXJcIixcbiAgc3RhcnQ6IFwidG9wIC09MTBcIixcbiAgb25FbnRlckJhY2s6IGFuaW1hdGVMb2dvLFxufSk7XG5cbmxldCB0d2VlbiA9IGdzYXAuZnJvbShcIi5sb2dvX19pbWFnZS0tc3BcIiwgeyB5OiBcIiAtMTAwJSBcIiwgZHVyYXRpb246IDEgfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVMb2dvKCkge1xuICB0d2Vlbi5yZXN0YXJ0KCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvblxuICAg44OY44OD44OA44O8UEPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgS1YgTWFpbiBDb250ZW50IFRpdGxlIEFuaW1hdGlvbnNcbiAgS1bjg6HjgqTjg7PjgrPjg7Pjg4bjg7Pjg4Tjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rdi1tYWluLXR4dC1lbmctcGNcIik7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdChcIjxicj5cIik7XG5cbnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbmxldCBjbGFzc0NvdW50ZXIgPSAxOyAvLyBDb3VudGVyIGZvciB1bmlxdWUgY2xhc3MgbmFtZXNcblxuZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICBmcmFnbWVudFNwYW5zLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xuICAgICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYGt2LW1haW5fX3RleHQtZW5nJHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNsYXNzQ291bnRlcisrO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGluZGV4IDwgZnJhZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gIH1cbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEtWIFRpdGxlIEFuaW1hdGlvblxuICAgS1bjgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGt2TWFpbnRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5leWVjYXRjaGVyX3Njcm9sbGltZy0taW1hZ2VcIixcbiAgICBzdGFydDogXCItPTEwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmt2TWFpbnRsXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCJcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tdHh0LWVuZy1zcFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPFwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzYwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc2MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzkzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5OFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTAxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIik7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgS1YgRm9vZCBJbWFnZSBBbmltYXRpb25cbiAgIEtW44OV44O844OJ55S75YOP44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGt2Rm9vZHRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5rZXl2aXN1YWwtbWFpbl9oZXJvXCIsXG4gICAgc3RhcnQ6IFwiLTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmt2Rm9vZHRsXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tdG9wLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXJpZ2h0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLWJvdHRvbVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLXRvcC1sZWZ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIFRpdGxlIEFuaW1hdGlvblxuICAg5qmf6IO944K/44Kk44OI44Or44Gu44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuZmVhdHVyZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImZlYXR1cmUtdGl0bGVfX3RleHQtLWpwXCIsIFwiZmVhdHVyZS10aXRsZS1sZXR0ZXJcIik7XG5cbiAgbGV0IGZlYXR1cmVUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZmVhdHVyZVwiLFxuICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaXRsZXRsXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmZlYXR1cmVUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNmZWF0dXJlXCIsXG4gICAgICBzdGFydDogXCItPTYwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVRpdGxldGwuZnJvbShcIi5mZWF0dXJlLXRpdGxlX190ZXh0LS1qcFwiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIDEgQW5pbWF0aW9uc1xuICAgRmVhdHVyZSAxIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlRXlldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQxXCIsXG4gICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlRXlldGxcbi5mcm9tKFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSlcbi5mcm9tKFwiLmZlYXR1cmUtdGl0bGVfX2ltZ1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XG5cbmxldCBmZWF0dXJlT25lID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbi8vIGZlYXR1cmVPbmUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbi8vICAgbGV0IGZlYXR1cmVPbmV0bCA9IGdzYXAudGltZWxpbmUoe1xuLy8gICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsXG4vLyAgICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4vLyAgICAgICBzY3J1YjogZmFsc2UsXG4vLyAgICAgfSxcbi8vICAgfSk7XG5cbi8vICAgZmVhdHVyZU9uZXRsXG4vLyAgICAgLy8gLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbi8vICAgICAuZnJvbShcIi5mZWF0LW1haW4tLXJpZ2h0LTFcIiwgeyBvcGFjaXR5OiAwLCAgZHVyYXRpb246IDMgfSk7XG4vLyB9KTtcbmxldCBmZWF0dXJlT25ldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsXG4gICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlT25ldGxcbiAgLy8gLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgLmZyb20oXCIuZmVhdC1tYWluLS1yaWdodC0xXCIsIHsgb3BhY2l0eTogMCwgIGR1cmF0aW9uOiAzIH0pO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIDIgQW5pbWF0aW9uc1xuICAgRmVhdHVyZSAyIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlRXllVHdvdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQyXCIsXG4gICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlRXllVHdvdGwuZnJvbShcIi5mZWF0LTItZXlld3JhcHBlclwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pO1xuXG5sZXQgZmVhdHVyZVR3byA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG5mZWF0dXJlVHdvLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIGxldCBmZWF0dXJlVHdvdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0LTItZXlld3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUd290bFxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi1sZWZ0LXR3b1wiLCB7IG9wYWNpdHk6IDAsIHg6IDEwMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5mZWF0LW1haW4tLXJpZ2h0LS0yXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgRmVhdHVyZSAzIEFuaW1hdGlvbnNcbiAgIEZlYXR1cmUgMyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZUV5ZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXQzXCIsXG4gICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5mZWF0dXJlRXllVGhyZWV0bC5mcm9tKFwiLmZlYXQtMy1leWV3cmFwcGVyXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgZHVyYXRpb246IDEsXG59KTtcblxubGV0IGZlYXR1cmVUaHJlZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG5mZWF0dXJlVGhyZWUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVUaHJlZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuZmVhdC0zLWV5ZXdyYXBwZXJcIixcbiAgICAgIHN0YXJ0OiBcIis9MTcwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBmZWF0dXJlVGhyZWV0bFxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi1sZWZ0LXRocmVlXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5mZWF0LW1haW4tLTMtdHh0XCIsIHsgb3BhY2l0eTogMCwgeDogMTAwLCBkdXJhdGlvbjogMSB9LCBcIjxcIik7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIENvdXJzZSBBbmltYXRpb25zXG4gICBDb3Vyc2Ug44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGNvdXJzZVRpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5jb3Vyc2VUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJjb3Vyc2UtdGl0bGUtLWVuZ1wiLCBcImNvdXJzZS10aXRsZS0tZW5nLWxldHRlclwiKTtcblxuICBsZXQgY291cnNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2NvdXJzZVwiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvdXJzZVRpdGxldGxcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5jb3Vyc2VUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgY291cnNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2NvdXJzZVwiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvdXJzZVRpdGxldGwuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZ1wiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEx1bmNoIEFuaW1hdGlvbnNcbiAgIEx1bmNoIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgTHVuY2hJbWd0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjbHVuY2hcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbkx1bmNoSW1ndGwuZnJvbVRvKFxuICBcIi5yZXZlYWxcIixcbiAge1xuICAgIFwiLS13aWR0aFwiOiBcIjEwMCVcIixcbiAgICBkdXJhdGlvbjogMC41LFxuICB9LFxuICB7XG4gICAgXCItLXdpZHRoXCI6IFwiMCVcIixcbiAgICBkdXJhdGlvbjogMC41LFxuICB9XG4pXG4gIC5mcm9tKFwiLmx1bmNoLXRpdGxlLWFuaW1lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgLmZyb20oXCIubHVuY2gtc3VidGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIERpbm5lciBBbmltYXRpb25zXG4gICBEaW5uZXIg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGRpbm5lckltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNkaW5uZXJcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmRpbm5lckltZ3RsXG4gIC5mcm9tVG8oXG4gICAgXCIucmV2ZWFsLWJsYWNrXCIsXG4gICAge1xuICAgICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS13aWR0aFwiOiBcIjAlXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH1cbiAgKVxuICAuZnJvbVRvKFxuICAgIFwiLnJldmVhbC1ibGFjay1yaWdodFwiLFxuICAgIHtcbiAgICAgIFwiLS13aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgfSxcbiAgICB7XG4gICAgICBcIi0td2lkdGhcIjogXCIwJVwiLFxuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICB9LFxuICAgIFwiPFwiXG4gIClcbiAgLmZyb20oXCIuZGlubmVyLXRpdGxlLWFuaW1lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgLmZyb20oXCIuZGlubmVyLXN1YnRpdGxlLWFuaW1lXCIsIHsgb3BhY2l0eTogMCwgeDogMTAwLCBkdXJhdGlvbjogMSB9LCBcIjxcIik7XG5cbmxldCBkaW5uZXJCb3R0b210bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjZGlubmVyLXNlZW1vcmVcIixcbiAgICBzdGFydDogXCItPTEwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmRpbm5lckJvdHRvbXRsXG4gIC5mcm9tVG8oXG4gICAgXCIuYm90dG9tLWxlZnRfX2ltZ1wiLFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDAgMCwgMCAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBcIi0tcGF0aFwiOiBcInBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiLFxuICAgIH1cbiAgKVxuICAuZnJvbVRvKFxuICAgIFwiLmJvdHRvbS1pbWctcmlnaHRfX2ltZ1wiLFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDAgMCwgMCAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBcIi0tcGF0aFwiOiBcInBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiLFxuICAgIH0sXG4gICAgXCI8XCJcbiAgKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1lc3NhZ2UgQW5pbWF0aW9uc1xuICAgTWVzc2FnZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgbWVzc2FnZVRpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5tZXNzYWdlVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwibWVzc2FnZS10aXRsZS0tZW5nXCIsIFwibWVzc2FnZS10aXRsZS0tZW5nLWxldHRlclwiKTtcblxuICBsZXQgbWVzc2FnZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNtZXNzYWdlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWVzc2FnZVRpdGxldGxcbiAgICAuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyMTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIlwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5tZXNzYWdlVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgbGV0IG1lc3NhZ2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjbWVzc2FnZVwiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIG1lc3NhZ2VUaXRsZXRsLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG5sZXQgbWVzc2FnZUltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5tZXNzYWdlLWJvdHRvbS13cmFwcGVyXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5tZXNzYWdlSW1ndGxcbiAgLmZyb20oXCIuZmxvd2VyLWFuaW1lXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHg6IDEwMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSlcbiAgLmZyb20oXG4gICAgXCIuY2hlZi1hbmltZVwiLFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB4OiAtMTAwLFxuICAgICAgZHVyYXRpb246IDEsXG4gICAgfSxcbiAgICBcIjxcIlxuICApO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblZvaWNlIEFuaW1hdGlvbnNcbiBWb2ljZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IHZvaWNlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjdm9pY2VcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbnZvaWNlVGl0bGV0bC5mcm9tKFwiLnZvaWNlLXRpdGxlLWFuaW1lXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeTogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbk5FV1MgQW5pbWF0aW9uc1xuIE5FV1Mg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBuZXdzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjbmV3c1wiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxubmV3c1RpdGxldGwuZnJvbShcIi5uZXdzLXRpdGxlLWFuaW1lXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeTogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkluc3RhIEFuaW1hdGlvbnNcbiBJbnN0YSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGluc3RhVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjaW5zdGFcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmluc3RhVGl0bGV0bC5mcm9tKFwiLmluc3RhLXRpdGxlXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeDogLTUwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFjZXNzIEFuaW1hdGlvbnNcbiBhY2VzcyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5hY2Nlc3NUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJhY2Nlc3MtZW5nXCIsIFwiYWNjZXNzLWVuZy1sZXR0ZXJcIik7XG5cbiAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBhY2Nlc3NUaXRsZXRsXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG59KTtcblxuYWNjZXNzVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBhY2Nlc3NUaXRsZXRsLmZyb20oXCIuYWNjZXNzLWVuZ1wiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy00NTk5NGRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpcy0wYzE2NTZcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy00NTk5NGRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>>> animationv2:dist/index.66df9af9c5572ba72cee.js
