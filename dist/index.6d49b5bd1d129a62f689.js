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

featureEyetl.from(".feat-1-eyewrapper", { opacity: 0, duration: 1 });

let featureOne = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.matchMedia();

featureOne.add("(min-width: 768px)", () => {
  let featureOnetl = gsap__WEBPACK_IMPORTED_MODULE_28__.gsap.timeline({
    scrollTrigger: {
      trigger: ".feat-1-eyewrapper",
      start: "+=170px",
      scrub: false,
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
    start: "-=300px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmQ0OWI1YmQxZDEyOWE2MmY2ODkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFbEI7QUFDZix1QkFBdUIsc0NBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLDZEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDRCO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTtBQUNsQjtBQUNmLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQSxNQUFNLHNDQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBLFNBQVMsc0NBQUksV0FBVyxrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQW1COztBQUVoQyxzQ0FBSTtBQUNKLG9EQUFvRDtBQUNwRCxnQkFBZ0IsdUVBQXVFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QTJCO0FBQ3BELDhCQUE4QiwyQkFBMkI7QUFDekQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDJCQUEyQjtBQUN2RCw0QkFBNEIsMkJBQTJCO0FBQ3ZELDRCQUE0QiwyQkFBMkI7QUFDdkQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJBQTJCO0FBQ3hELDZCQUE2QiwyQkFBMkI7QUFDeEQsNkJBQTZCLDJCQUEyQjtBQUN4RCw2QkFBNkIsMkJB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzPzZjMjkiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzcz81NTQwIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzcz9iN2ZiIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzPzRiN2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzcz82NjlmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzcz82N2FhIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9jb3Vyc2UuY3NzPzIzNmUiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2Rpbm5lci5jc3M/MjFhMyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3M/NTMyZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvaGVyby5jc3M/ZmI2NiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvaW5zdGEuY3NzP2QyYWQiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzcz8wYmQ2Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9tZXNzYWdlLmNzcz8xZWUzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9uZXdzLmNzcz84YTNkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS92b2ljZS5jc3M/NjBmMSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYW5pbWF0ZU1lYXRiYWxsLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdC5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9jcm9zc2ZhZGVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL25hdmljb25FdmVudGxpc3RlbmVyLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL3RvZ2dsZVNwTWVudS5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyYy5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9kZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvaXNpdFNQLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2lzaXRUQUIuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpe1xuICAgIGxldCBwY0hlYWRlckFuaW0gPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuICAgIHBjSGVhZGVyQW5pbS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAgIFxuICAgICAgY29uc3Qgc2hvd0FuaW0gPSBnc2FwLmZyb20oJy5oZWFkZXInLCB7IFxuICAgICAgICB5UGVyY2VudDogLTE1MCxcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogMC4yXG4gICAgICB9KS5wcm9ncmVzcygxKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgICAgZW5kOiBcIm1heFwiLFxuICAgICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgICBzZWxmLmRpcmVjdGlvbiA9PT0gLTEgPyBzaG93QW5pbS5wbGF5KCkgOiBzaG93QW5pbS5yZXZlcnNlKClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZU1lYXRiYWxsSWNvbigpe1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVhdGJhbGxcIik7XG5pY29uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG59IiwiXG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUNhcmRQYXJhbGxheCgpe1xuICAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIucGFyYWxsYXhcIik7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgIGdzYXAudG8oaW1hZ2UsIHtcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlQ3Jvc3NGYWRlQW5pbWF0aW9ucygpe1xuICAgIHZhciBkdXJhdGlvbiA9IDI7XG52YXIgZGVsYXkgPSAxO1xudmFyIHRsID0gZ3NhcC50aW1lbGluZSh7b25Db21wbGV0ZTpyZXBlYXR9KTtcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZScpO1xuY29uc3QgZmlyc3RJbWFnZSA9IGltYWdlc1swXTtcbmNvbnN0IHRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cbmNvbnNvbGUubG9nKHtpbWFnZXMsdG90YWxJbWFnZXN9KTtcblxuZ3NhcC51dGlscy50b0FycmF5KGltYWdlcykuZm9yRWFjaCgoaW1hZ2UsaW5kZXgpPT57XG4gICAgdmFyIG9mZnNldCA9IGluZGV4ID09PSAwID8gMCA6IFwiLT1cIiArIGR1cmF0aW9uOyAvL2luc2VydCBmaXJzdCBhbmltYXRpb24gYXQgYSB0aW1lIG9mIDAgb3IgYWxsIG90aGVyIGFuaW1hdGlvbnMgYXQgYSB0aW1lIHRoYXQgd2lsbCBvdmVybGFwIHdpdGggdGhlIHByZXZpb3VzIGFuaW1hdGlvbiBmYWRpbmcgb3V0LlxuICB0bC50byhpbWFnZSwge2R1cmF0aW9uLGF1dG9BbHBoYToxLHNjYWxlOjEuNSwgcmVwZWF0OjEsIHlveW86dHJ1ZSwgcmVwZWF0RGVsYXk6ZGVsYXl9LCBvZmZzZXQpXG4gIC8vd2hlbiB0aGUgbGFzdCBpbWFnZSBmYWRlcyBvdXQgd2UgbmVlZCB0byBjcm9zcy1mYWRlIHRoZSBmaXJzdCBpbWFnZVxuICBpZiAoaW5kZXggPT09IHRvdGFsSW1hZ2VzKXtcbiAgICBjb25zb2xlLmxvZyhcIkFkZCB0d2VlbiBvbiB0aGUgZmlyc3QgaW1hZ2VcIik7XG4gICAgdGwudG8oZmlyc3RJbWFnZSwge2R1cmF0aW9uLGF1dG9BbHBoYToxLCBzY2FsZToxLjV9LCBvZmZzZXQpXG4gIH1cbn0pXG5cblxuZnVuY3Rpb24gcmVwZWF0KCkge1xuICB0bC5wbGF5KGR1cmF0aW9uKTtcbn1cbn0iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmNvbnN0IGxldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNwbGl0dGV4dF0nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2FkaW5nQW5pbWF0aW9uKCl7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoZSk9PntcbiAgICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKClcbiAgXG4gICAgaW50cm9cbiAgLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0nLHt5OicxMDAlJyxkZWxheToyfSlcbiAgLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OicxMDAlJ30pXG4gIC8vIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHt5OictMTAwJSd9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pbWcnLHtvcGFjaXR5OjB9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pbWcnLHt4OlwiMTAwJVwiICx9KVxuICAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OictMTAwJSd9KVxuICAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgLnNldCgnLnRyYW5zaXRpb24taXRlbScse2Rpc3BsYXk6XCJub25lXCJ9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBhbmltYXRlVGV4dCgpe1xuICBsZXQgdGV4dHRsID0gZ3NhcC50aW1lbGluZSgpXG5cblxuICB0ZXh0dGxcbiAgLmZyb20oJy5rZXl2aXN1YWxfX3RleHQtLWpwJyx7b3BhY2l0eTowfSlcblxufVxuLy8gZ3NhcC5mcm9tKFwiLmxldHRlclwiLHt5OjEwMCxkdXJhdGlvbjoyfSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVZpc2liaWxpdHkoKXtcbiAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVkJyk7XG59IiwiaW1wb3J0IGFuaW1hdGVNZWF0YmFsbEljb24gZnJvbSBcIi4uL2FuaW1hdGlvbnMvYW5pbWF0ZU1lYXRiYWxsXCI7XG5cbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lYXRiYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROYXZJY29uRXZlbnRMaXN0ZW5lcigpe1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFuaW1hdGVNZWF0YmFsbEljb24oKTtcbiAgICB9KVxufSIsImltcG9ydCBjaGFuZ2VLdlNyYyBmcm9tIFwiLi4vb3RoZXJsb2dpYy9jaGFuZ2VLdlNyY1wiO1xuaW1wb3J0IGRldGVybWluZVR5cGVPZkFuaW1hdGlvbiBmcm9tIFwiLi4vb3RoZXJsb2dpYy9kZXRlcm1pbmVUeXBlT2ZBbmltYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2NyZWVuUmVzaXplTGlzdGVuZXIoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlS3ZTcmMpO1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGRldGVybWluZVR5cGVPZkFuaW1hdGlvbik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKGUpPT57XG4gICAgICAgIC8vIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpO1xuICAgICAgICBjaGFuZ2VLdlNyYygpO1xuICAgIH0pXG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyogc3BtZW5144KS6ZaL6ZaJ44GZ44KLICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BNZW51KCkge1xuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNjbG9zZU1lbnVCdG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKCcjc3BOYXZNZW51JykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICQoJy5tZWF0YmFsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkKCcjc3BOYXZNZW51JykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIlxuaW1wb3J0IHNwU2xpZGUxIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUyIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0yLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGUzIGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0zLW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU0IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC00LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU1IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC01LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU2IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC03LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU3IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC05LW1pbi5wbmcnO1xuaW1wb3J0IHNwU2xpZGU4IGZyb20gJy4uLy4uL2ltYWdlcy90b3AvaGVyby9zcC9rdi1zcC0xMS1taW4ucG5nJztcblxuXG5pbXBvcnQgcGNTbGlkZTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTEtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTItbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTMtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTQtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTUgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTUtbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTYgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTctbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTcgZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTktbWluLnBuZyc7XG5pbXBvcnQgcGNTbGlkZTggZnJvbSAnLi4vLi4vaW1hZ2VzL3RvcC9oZXJvL2t2LTExLW1pbi5wbmcnO1xuXG5cbmltcG9ydCBpc0l0U3AgZnJvbSAnLi9pc2l0U1AnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUt2U3JjKCl7XG4gICAgY29uc3QgSVNfSVRfU1AgPSBpc0l0U3AoKTtcbiAgICBjb25zdCBTTElERV9PTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW9uZScpO1xuICAgIGNvbnN0IFNMSURFX1RXTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tdHdvJyk7XG4gICAgY29uc3QgU0xJREVfVEhSRUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXRocmVlJyk7XG4gICAgY29uc3QgU0xJREVfRk9VUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWVjYXRjaGVyLXNsaWRlc2hvd19zbGlkZS0tZm91cicpO1xuICAgIGNvbnN0IFNMSURFX0ZJVkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLWZpdmUnKTtcbiAgICBjb25zdCBTTElERV9TSVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLXNpeCcpO1xuICAgIGNvbnN0IFNMSURFX1NFVkVOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1zZXZlbicpO1xuICAgIGNvbnN0IFNMSURFX0VJR0hUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZWNhdGNoZXItc2xpZGVzaG93X3NsaWRlLS1laWdodCcpO1xuICAgIGNvbnN0IFNMSURFX05JTkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllY2F0Y2hlci1zbGlkZXNob3dfc2xpZGUtLW5pbmUnKTtcbiAgICBcbiAgICBpZihJU19JVF9TUCl7XG4gICAgICAgU0xJREVfT05FLnNyYyA9IHNwU2xpZGUxO1xuICAgICAgIFNMSURFX1RXTy5zcmMgPSBzcFNsaWRlMjtcbiAgICAgICBTTElERV9USFJFRS5zcmMgPSBzcFNsaWRlMztcbiAgICAgICBTTElERV9GT1VSLnNyYyA9ICBzcFNsaWRlNDtcbiAgICAgICBTTElERV9GSVZFLnNyYyA9ICBzcFNsaWRlNTtcbiAgICAgICBTTElERV9TSVguc3JjID0gIHNwU2xpZGU2O1xuICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHNwU2xpZGU3O1xuICAgICAgIFNMSURFX0VJR0hULnNyYyA9ICBzcFNsaWRlODtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgU0xJREVfT05FLnNyYyA9IHBjU2xpZGUxO1xuICAgICAgICBTTElERV9UV08uc3JjID0gcGNTbGlkZTI7XG4gICAgICAgIFNMSURFX1RIUkVFLnNyYyA9IHBjU2xpZGUzO1xuICAgICAgICBTTElERV9GT1VSLnNyYyA9IHBjU2xpZGU0O1xuICAgICAgICBTTElERV9GSVZFLnNyYyA9IHBjU2xpZGU1O1xuICAgICAgICBTTElERV9TSVguc3JjID0gcGNTbGlkZTY7XG4gICAgICAgIFNMSURFX1NFVkVOLnNyYyA9IHBjU2xpZGU3O1xuICAgICAgICBTTElERV9FSUdIVC5zcmMgPSBwY1NsaWRlODtcbiAgICB9XG59IiwiaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuLi9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9pc2l0U1BcIjtcbmltcG9ydCB7IGlzSXRQYywgaXNJdFRhYiB9IGZyb20gXCIuL2lzaXRUQUJcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uKCkge1xuICAgIGxldCBjdXJyZW50V2luZG93ID0gaXNJdFBjKCk7XG4gICAgXG4gICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgYWN0aXZhdGVDYXJkUGFyYWxsYXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50V2luZG93ID0gaXNJdFNwKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFdpbmRvdykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgTW9iaWxlXCIpO1xuICAgICAgICAgICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi50XCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgZ3NhcC50byhpbWFnZSwge1xuICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcCxcbiAgICBlYXNlOiBcIm5vbmVcIixcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcCAqIDAuMSxcbiAgICB9LFxuICB9KTtcbn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFdpbmRvdyA9IGlzSXRUYWIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBUYWJsZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0U3AoKXtcbiAgICBjb25zdCBpc0l0U3AgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKTtcbiAgICBpZihpc0l0U3AubWF0Y2hlcyl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgIGZ1bmN0aW9uIGlzSXRUYWIoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIikubWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSXRQYygpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2NTBweClcIikubWF0Y2hlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0VGV4dChjbGFzc25hbWUsc3Bhbk5hbWUpe1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdCgnPGJyPicpO1xuXG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbiAgICBsZXQgY2xhc3NDb3VudGVyID0gMTsgLy8gQ291bnRlciBmb3IgdW5pcXVlIGNsYXNzIG5hbWVzXG5cbiAgICBmcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZyYWdtZW50V3JhcHBlci5pbm5lckhUTUwgPSBmcmFnbWVudDtcblxuICAgICAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICAgICAgZnJhZ21lbnRTcGFucy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdCgnJyk7XG4gICAgICAgICAgbGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgJHtzcGFuTmFtZX0ke2NsYXNzQ291bnRlcn1gKTtcbiAgICAgICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjbGFzc0NvdW50ZXIrKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmRleCA8IGZyYWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9oZXJvLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZmVhdHVyZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2NvdXJzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2x1bmNoLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvZGlubmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbWVzc2FnZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL3ZvaWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvbmV3cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2luc3RhLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzc1wiO1xuaW1wb3J0IGFkZE5hdkljb25FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbmF2aWNvbkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBhY3RpdmF0ZUNyb3NzRmFkZUFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvY3Jvc3NmYWRlQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHNjcmVlblJlc2l6ZUxpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvc2NyZWVuc2l6ZUNoYW5nZVwiO1xuaW1wb3J0IGlzSXRTcCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9pc2l0U1BcIjtcbmltcG9ydCBjaGFuZ2VLdlNyYyBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9jaGFuZ2VLdlNyY1wiO1xuaW1wb3J0IGFjdGl2YXRlQ2FyZFBhcmFsbGF4IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2NhcmRQYXJhbGxheGVmZmVjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBkZXRlcm1pbmVUeXBlT2ZBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZGV0ZXJtaW5lVHlwZU9mQW5pbWF0aW9uXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5pbXBvcnQgYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHNwbGl0VGV4dCBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9zcGxpdFRleHRcIjtcbmltcG9ydCB7IHRvZ2dsZVNwTWVudSB9IGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvdG9nZ2xlU3BNZW51XCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuYWRkTmF2SWNvbkV2ZW50TGlzdGVuZXIoKTtcblxuYWN0aXZhdGVDcm9zc0ZhZGVBbmltYXRpb25zKCk7XG5cbmNoYW5nZUt2U3JjKCk7XG5cbi8vIGRldGVybWluZVR5cGVPZkFuaW1hdGlvbigpO1xuc2NyZWVuUmVzaXplTGlzdGVuZXIoKTtcblxuY29uc3Qgc2NyZWVuVHlwZSA9IGlzSXRTcCgpOyAvLyDnlLvpnaLjgrXjgqTjgrrjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZkgL2NoZWNrcyBmb3IgIHNjcmVlbiBzaXplXG5cbnRvZ2dsZVNwTWVudSgpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkaW5uZXIgYmFja2dyb3VuZCBhbmltYXRpb25zXG4gICAg44OH44Kj44OK44O844Gu6IOM5pmv44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWFzdGVyQ29tcGFueSA9IGdzYXAudGltZWxpbmUoKTtcblxubGV0IGRvdEFuaW1hdGlvbnMgPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuZG90QW5pbWF0aW9ucy5hZGQoXCIobWF4LXdpZHRoOiA1MDBweClcIiwgKCkgPT4ge1xuICBmdW5jdGlvbiBkaW5uZXJUb3BzcCgpIHtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuZGlubmVyLXRyaWdnZXJcIiwgLy8jZGlubmVyXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgIGVuZDogXCIrPTIwMFwiLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgLy8gcGluOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRsLmZyb20oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMCB9KTtcblxuICAgIHJldHVybiB0bDtcbiAgfVxuXG4gIG1hc3RlckNvbXBhbnkuYWRkKGRpbm5lclRvcHNwKCkpO1xufSk7XG5kb3RBbmltYXRpb25zLmFkZChcIihtaW4td2lkdGg6IDUwMXB4KVwiLCAoKSA9PiB7XG4gIGZ1bmN0aW9uIGRpbm5lclRvcCgpIHtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuZGlubmVyLXRyaWdnZXJcIiwgLy8jZGlubmVyXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHggdG9wXCIsXG4gICAgICAgIGVuZDogXCIrPTIwMFwiLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0bC5mcm9tVG8oXCIuY29tcGFueS1kb3RcIiwgeyBzY2FsZTogMCB9LCB7IHNjYWxlOiAxLjcgfSk7XG4gICAgLy8gLnRvKFwiLmNvbXBhbnktZG90XCIsIHsgc2NhbGU6IDF9KVxuXG4gICAgcmV0dXJuIHRsO1xuICB9XG5cbiAgbWFzdGVyQ29tcGFueS5hZGQoZGlubmVyVG9wKCkpO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZlYXR1cmUgcGFyYWxsYXggYW5pbWF0aW9uc1xuICAgIOODleOCo+ODvOODgeODo+ODvOOBruODkeODqeODqeODg+OCr+OCueOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDFcIixcbiAgICBzdGFydDogXCItPTIwMHB4IHRvcFwiLFxuICAgIHNjcnViOiB0cnVlLFxuICB9LFxufSk7XG5cbnRsLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LW9uZVwiLCB7IHlQZXJjZW50OiAtNjUgfSk7XG5cbmxldCB0MiA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDJcIixcbiAgICBzdGFydDogXCItPTIwMHB4IHRvcFwiLFxuICAgIHNjcnViOiB0cnVlLFxuICB9LFxufSk7XG5cbnQyLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXR3b1wiLCB7IHlQZXJjZW50OiAtNjUgfSk7XG5cbmxldCB0MyA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDNcIixcbiAgICBzdGFydDogXCItPTIwMHB4IHRvcFwiLFxuICAgIHNjcnViOiB0cnVlLFxuICB9LFxufSk7XG5cbnQzLnRvKFwiLmZlYXQtbWFpbi1sZWZ0LXRocmVlXCIsIHsgeVBlcmNlbnQ6IC02NSB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTG9hZGluZyBhbmltYXRpb25cbiAgIOODreODvOODieOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgaW50cm9cbiAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW1cIiwgeyB5OiBcIjEwMCVcIiwgZGVsYXk6IDIgfSlcbiAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyB5OiBcIjEwMCVcIiB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pbWdcIiwgeyBvcGFjaXR5OiAwIH0pXG4gICAgLnNldChcIi50cmFuc2l0aW9uLWltZ1wiLCB7IHg6IFwiMTAwJVwiIH0pXG4gICAgLnRvKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IHk6IFwiLTEwMCVcIiB9KVxuICAgIC50byhcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAuZnJvbShcIi5rZXl2aXN1YWwtdG9wX19sb2dvXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5leWVjYXRjaGVyLXNsaWRlc2hvd1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiPDI1JVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDIwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjEzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlcjI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXIyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmt2LWVuZy10eHQtc3BcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiNC41XCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzEyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcxN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzI3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMjhcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmcyOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzMzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nMzdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmczOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzM5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0NFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc0N1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzQ4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1MFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1M1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNTVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1NlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzU3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc1OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzYzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmxldHRlci1lbmc2NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubGV0dGVyLWVuZzY2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5sZXR0ZXItZW5nNjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFxuICAgICAgXCIuZXllY2F0Y2hlcl9fc2Nyb2xsaW1nXCIsXG4gICAgICB7IG9wYWNpdHk6IDAsIHk6IC0xMDAsIGR1cmF0aW9uOiAxIH0sXG4gICAgICBcIjwyNSVcIlxuICAgICk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBMb2dvIEFuaW1hdGlvbnNcbiAgIOODreOCtOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgdHJpZ2dlcjogXCIudHJpZ2dlclwiLFxuICBzdGFydDogXCJ0b3AgLT0xMFwiLFxuICBvbkVudGVyQmFjazogYW5pbWF0ZUxvZ28sXG59KTtcblxubGV0IHR3ZWVuID0gZ3NhcC5mcm9tKFwiLmxvZ29fX2ltYWdlLS1zcFwiLCB7IHk6IFwiIC0xMDAlIFwiLCBkdXJhdGlvbjogMSB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZUxvZ28oKSB7XG4gIHR3ZWVuLnJlc3RhcnQoKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBIZWFkZXIgUEMgYW5pbWF0aW9uXG4gICDjg5jjg4Pjg4Djg7xQQ+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBLViBNYWluIENvbnRlbnQgVGl0bGUgQW5pbWF0aW9uc1xuICBLVuODoeOCpOODs+OCs+ODs+ODhuODs+ODhOOCv+OCpOODiOODq+OBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmt2LW1haW4tdHh0LWVuZy1wY1wiKTtcbmNvbnN0IGZyYWdtZW50cyA9IHRleHRDb250YWluZXIuaW5uZXJIVE1MLnNwbGl0KFwiPGJyPlwiKTtcblxudGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciB0aGUgb3JpZ2luYWwgY29udGVudFxubGV0IGNsYXNzQ291bnRlciA9IDE7IC8vIENvdW50ZXIgZm9yIHVuaXF1ZSBjbGFzcyBuYW1lc1xuXG5mcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZyYWdtZW50V3JhcHBlci5pbm5lckhUTUwgPSBmcmFnbWVudDtcblxuICBjb25zdCBmcmFnbWVudFNwYW5zID0gZnJhZ21lbnRXcmFwcGVyLmNoaWxkTm9kZXM7XG4gIGZyYWdtZW50U3BhbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgY29uc3QgbGV0dGVycyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQoXCJcIik7XG4gICAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChga3YtbWFpbl9fdGV4dC1lbmcke2NsYXNzQ291bnRlcn1gKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgY2xhc3NDb3VudGVyKys7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoaW5kZXggPCBmcmFnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgfVxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgS1YgVGl0bGUgQW5pbWF0aW9uXG4gICBLVuOCv+OCpOODiOODq+OBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQga3ZNYWludGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmV5ZWNhdGNoZXJfc2Nyb2xsaW1nLS1pbWFnZVwiLFxuICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxua3ZNYWludGxcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIlwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGU3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi1jb250ZW50X3RpdGxlMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluLWNvbnRlbnRfdGl0bGUxM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW4tY29udGVudF90aXRsZTE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbi10eHQtZW5nLXNwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8XCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcyNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMjdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzI4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzMzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzM3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmczOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMzlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0MVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNDZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzQ3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc0OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzU3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc1OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nNjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzYxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc2MlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5NVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nOTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzk4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmc5OVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTAwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzEwNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTA3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMDlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTExXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKVxuICAuZnJvbShcIi5rdi1tYWluX190ZXh0LWVuZzExN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgXCI8MTAlXCIpXG4gIC5mcm9tKFwiLmt2LW1haW5fX3RleHQtZW5nMTE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCBcIjwxMCVcIilcbiAgLmZyb20oXCIua3YtbWFpbl9fdGV4dC1lbmcxMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIFwiPDEwJVwiKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBLViBGb29kIEltYWdlIEFuaW1hdGlvblxuICAgS1bjg5Xjg7zjg4nnlLvlg4/jga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQga3ZGb29kdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmtleXZpc3VhbC1tYWluX2hlcm9cIixcbiAgICBzdGFydDogXCItNTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxua3ZGb29kdGxcbiAgLmZyb20oXCIua3YtaGVyb19faW1nLS10b3AtcmlnaHRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tcmlnaHRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tYm90dG9tXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAuZnJvbShcIi5rdi1oZXJvX19pbWctLWxlZnRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gIC5mcm9tKFwiLmt2LWhlcm9fX2ltZy0tdG9wLWxlZnRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgVGl0bGUgQW5pbWF0aW9uXG4gICDmqZ/og73jgr/jgqTjg4jjg6vjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZmVhdHVyZVRpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5mZWF0dXJlVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiZmVhdHVyZS10aXRsZV9fdGV4dC0tanBcIiwgXCJmZWF0dXJlLXRpdGxlLWxldHRlclwiKTtcblxuICBsZXQgZmVhdHVyZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNmZWF0dXJlXCIsXG4gICAgICBzdGFydDogXCItPTYwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVRpdGxldGxcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5mZWF0dXJlLXRpdGxlLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuZmVhdHVyZS10aXRsZS1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmZlYXR1cmUtdGl0bGUtbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG59KTtcblxuZmVhdHVyZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBmZWF0dXJlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2ZlYXR1cmVcIixcbiAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBmZWF0dXJlVGl0bGV0bC5mcm9tKFwiLmZlYXR1cmUtdGl0bGVfX3RleHQtLWpwXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgMSBBbmltYXRpb25zXG4gICBGZWF0dXJlIDEg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVFeWV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDFcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWV0bC5mcm9tKFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSk7XG5cbmxldCBmZWF0dXJlT25lID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVPbmUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVPbmV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMS1leWV3cmFwcGVyXCIsXG4gICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZU9uZXRsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtb25lXCIsIHsgb3BhY2l0eTogMCwgeDogLTEwMCwgZHVyYXRpb246IDEgfSlcbiAgICAuZnJvbShcIi5mZWF0LW1haW4tLXJpZ2h0LTFcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZlYXR1cmUgMiBBbmltYXRpb25zXG4gICBGZWF0dXJlIDIg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxubGV0IGZlYXR1cmVFeWVUd290bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDJcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWVUd290bC5mcm9tKFwiLmZlYXQtMi1leWV3cmFwcGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSk7XG5cbmxldCBmZWF0dXJlVHdvID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVUd28uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgbGV0IGZlYXR1cmVUd290bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmZlYXQtMi1leWV3cmFwcGVyXCIsXG4gICAgICBzdGFydDogXCIrPTE3MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgZmVhdHVyZVR3b3RsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtdHdvXCIsIHsgb3BhY2l0eTogMCwgeDogMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tcmlnaHQtLTJcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9LCBcIjxcIik7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBGZWF0dXJlIDMgQW5pbWF0aW9uc1xuICAgRmVhdHVyZSAzIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBmZWF0dXJlRXllVGhyZWV0bCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIuZmVhdDNcIixcbiAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbmZlYXR1cmVFeWVUaHJlZXRsLmZyb20oXCIuZmVhdC0zLWV5ZXdyYXBwZXJcIiwge1xuICBvcGFjaXR5OiAwLFxuICBkdXJhdGlvbjogMSxcbn0pO1xuXG5sZXQgZmVhdHVyZVRocmVlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbmZlYXR1cmVUaHJlZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBsZXQgZmVhdHVyZVRocmVldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5mZWF0LTMtZXlld3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiKz0xNzBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZlYXR1cmVUaHJlZXRsXG4gICAgLmZyb20oXCIuZmVhdC1tYWluLWxlZnQtdGhyZWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAgIC5mcm9tKFwiLmZlYXQtbWFpbi0tMy10eHRcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ291cnNlIEFuaW1hdGlvbnNcbiAgIENvdXJzZSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgY291cnNlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmNvdXJzZVRpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImNvdXJzZS10aXRsZS0tZW5nXCIsIFwiY291cnNlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bFxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuY291cnNlLXRpdGxlLS1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtdGl0bGUtLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmNvdXJzZVRpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBjb3Vyc2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjY291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY291cnNlVGl0bGV0bC5mcm9tKFwiLmNvdXJzZS10aXRsZS0tZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTHVuY2ggQW5pbWF0aW9uc1xuICAgTHVuY2gg44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmxldCBMdW5jaEltZ3RsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNsdW5jaFwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuTHVuY2hJbWd0bC5mcm9tVG8oXG4gIFwiLnJldmVhbFwiLFxuICB7XG4gICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH0sXG4gIHtcbiAgICBcIi0td2lkdGhcIjogXCIwJVwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gIH1cbilcbiAgLmZyb20oXCIubHVuY2gtdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAuZnJvbShcIi5sdW5jaC1zdWJ0aXRsZS1hbmltZVwiLCB7IG9wYWNpdHk6IDAsIHg6IDEwMCwgZHVyYXRpb246IDEgfSwgXCI8XCIpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRGlubmVyIEFuaW1hdGlvbnNcbiAgIERpbm5lciDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgZGlubmVySW1ndGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiI2Rpbm5lclwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuZGlubmVySW1ndGxcbiAgLmZyb21UbyhcbiAgICBcIi5yZXZlYWwtYmxhY2tcIixcbiAgICB7XG4gICAgICBcIi0td2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gICAge1xuICAgICAgXCItLXdpZHRoXCI6IFwiMCVcIixcbiAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgfVxuICApXG4gIC5mcm9tVG8oXG4gICAgXCIucmV2ZWFsLWJsYWNrLXJpZ2h0XCIsXG4gICAge1xuICAgICAgXCItLXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS13aWR0aFwiOiBcIjAlXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gICAgXCI8XCJcbiAgKVxuICAuZnJvbShcIi5kaW5uZXItdGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAtMTAwLCBkdXJhdGlvbjogMSB9KVxuICAuZnJvbShcIi5kaW5uZXItc3VidGl0bGUtYW5pbWVcIiwgeyBvcGFjaXR5OiAwLCB4OiAxMDAsIGR1cmF0aW9uOiAxIH0sIFwiPFwiKTtcblxubGV0IGRpbm5lckJvdHRvbXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNkaW5uZXItc2VlbW9yZVwiLFxuICAgIHN0YXJ0OiBcIi09MzAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuZGlubmVyQm90dG9tdGxcbiAgLmZyb21UbyhcbiAgICBcIi5ib3R0b20tbGVmdF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfVxuICApXG4gIC5mcm9tVG8oXG4gICAgXCIuYm90dG9tLWltZy1yaWdodF9faW1nXCIsXG4gICAge1xuICAgICAgXCItLXBhdGhcIjogXCJwb2x5Z29uKDAgMCwgMCAwLCAwIDEwMCUsIDAgMTAwJSlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiLS1wYXRoXCI6IFwicG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpXCIsXG4gICAgfSxcbiAgICBcIjxcIlxuICApO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTWVzc2FnZSBBbmltYXRpb25zXG4gICBNZXNzYWdlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmxldCBtZXNzYWdlVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJtZXNzYWdlLXRpdGxlLS1lbmdcIiwgXCJtZXNzYWdlLXRpdGxlLS1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBtZXNzYWdlVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI21lc3NhZ2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBtZXNzYWdlVGl0bGV0bFxuICAgIC5mcm9tKFwiLm1lc3NhZ2UtdGl0bGUtLWVuZy1sZXR0ZXIxNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIubWVzc2FnZS10aXRsZS0tZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbm1lc3NhZ2VUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgbWVzc2FnZVRpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNtZXNzYWdlXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgbWVzc2FnZVRpdGxldGwuZnJvbShcIi5tZXNzYWdlLXRpdGxlLS1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEsXG4gIH0pO1xufSk7XG5cbmxldCBtZXNzYWdlSW1ndGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLm1lc3NhZ2UtYm90dG9tLXdyYXBwZXJcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5cbm1lc3NhZ2VJbWd0bFxuICAuZnJvbShcIi5mbG93ZXItYW5pbWVcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogMTAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KVxuICAuZnJvbShcbiAgICBcIi5jaGVmLWFuaW1lXCIsXG4gICAge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6IC0xMDAsXG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9LFxuICAgIFwiPFwiXG4gICk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuVm9pY2UgQW5pbWF0aW9uc1xuIFZvaWNlIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgdm9pY2VUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiN2b2ljZVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxudm9pY2VUaXRsZXRsLmZyb20oXCIudm9pY2UtdGl0bGUtYW5pbWVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuTkVXUyBBbmltYXRpb25zXG4gTkVXUyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubGV0IG5ld3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNuZXdzXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5uZXdzVGl0bGV0bC5mcm9tKFwiLm5ld3MtdGl0bGUtYW5pbWVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuSW5zdGEgQW5pbWF0aW9uc1xuIEluc3RhIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgaW5zdGFUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNpbnN0YVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcblxuaW5zdGFUaXRsZXRsLmZyb20oXCIuaW5zdGEtdGl0bGVcIiwge1xuICBvcGFjaXR5OiAwLFxuICB4OiAtNTAsXG4gIGR1cmF0aW9uOiAxLFxufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYWNlc3MgQW5pbWF0aW9uc1xuIGFjZXNzIOOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5sZXQgYWNjZXNzVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImFjY2Vzcy1lbmdcIiwgXCJhY2Nlc3MtZW5nLWxldHRlclwiKTtcblxuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGxcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5hY2Nlc3NUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTQ1OTk0ZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthX3N1blwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTQ1OTk0ZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9