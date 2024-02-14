/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/common/footer.css":
/*!******************************************!*\
  !*** ./src/assets/css/common/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

/***/ "./src/assets/css/menu/lunch.css":
/*!***************************************!*\
  !*** ./src/assets/css/menu/lunch.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/lunch.js":
/*!**********************!*\
  !*** ./src/lunch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/header.css */ "./src/assets/css/common/header.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_common_nav_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/common/nav.css */ "./src/assets/css/common/nav.css");
/* harmony import */ var _assets_css_home_animations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/home/animations.css */ "./src/assets/css/home/animations.css");
/* harmony import */ var _assets_css_home_access_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/home/access.css */ "./src/assets/css/home/access.css");
/* harmony import */ var _assets_css_menu_lunch_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/menu/lunch.css */ "./src/assets/css/menu/lunch.css");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


















gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__.ScrollTrigger);

(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();

/* slick animation */
var $slide = jquery__WEBPACK_IMPORTED_MODULE_10___default()(".slick-slide")
.slick({
    fade: true,
    speed: 1000,
    autoplaySpeed: 2500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
});


/*  Appearance Animation */
let mm = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // overview content
    let overview = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: ".overview-grid",
            start: "-=550px",
            scrub: false,
        },
    });
    overview
    .from(".overview-description", { y: 30, opacity: 0, duration: 1.5}, "+=2.5")
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5}, "-=0.8")
    .from(".overview-buttons", { y: 30, opacity: 0, duration: 1.5}, "-=0.8")

    // lunchCourse content
    let lunchCourse = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#lunchCourse",
            start: "-=550px",
            scrub: false,
        },
    });
    lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.2}, "+=0.5")
    .from(".course-content:nth-child(1)", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")
    .from(".course-content:nth-child(2)", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")
    .from(".course-content:nth-child(3)", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")

    // lunchSingle
    let lunchSingle = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#lunchSingle",
            start: "-=620px",
            scrub: false,
        },
    });
    lunchSingle
    .from(".single-headline", { y: 30, opacity: 0, duration: 1.2}, "+=0.5")
    .from(".single-content:nth-child(1)", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")
    .from(".single-content:nth-child(2)", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")

    // drink
    let drink = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#drink",
            start: "-=650px",
            scrub: false,
        },
    });
    drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.2}, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.2}, "-=0.5")

    // home btn
    let home_btn = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: ".home-btn",
            start: "-=550px",
            scrub: false,
        },
    });
    home_btn
    .from(".home-btn a", { y: 30, opacity: 0, duration: 1})
});

/* pc */
mm.add("(min-width: 768px)", () => {
    // overview content
    let overview = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: ".overview-grid",
            start: "-=550px",
            scrub: false,
        },
    });
    overview
    .from(".overview-description", { y: 30, opacity: 0, duration: 1.5}, "+=2.5")
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5}, "-=0.8")
    .from(".overview-buttons", { y: 30, opacity: 0, duration: 1.5}, "-=0.8")

    // lunchCourse content
    let lunchCourse = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#lunchCourse",
            start: "-=500px",
            scrub: false,
        },
    });
    lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.5}, "+=0.5")
    .from(".course-content:nth-child(1)", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")
    .from(".course-content:nth-child(2)", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")
    .from(".course-content:nth-child(3)", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")

    // lunchSingle
    let lunchSingle = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#lunchSingle",
            start: "-=650px",
            scrub: false,
        },
    });
    lunchSingle
    .from(".single-headline", { y: 30, opacity: 0, duration: 1.5}, "+=0.5")
    .from(".single-content:nth-child(1)", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")
    .from(".single-content:nth-child(2)", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")

    // drink
    let drink = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: "#drink",
            start: "-=650px",
            scrub: false,
        },
    });
    drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.5}, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.5}, "-=0.5")

    // home btn
    let home_btn = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
        scrollTrigger: {
            trigger: ".home-btn",
            start: "-=550px",
            scrub: false,
        },
    });
    home_btn
    .from(".home-btn a", { y: 30, opacity: 0, duration: 1})

});

/* spハンバーガーメニュー開閉 */
jquery__WEBPACK_IMPORTED_MODULE_10___default()( document ).ready(function() {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('#closeMenuBtn').on('click', function() {
        if (jquery__WEBPACK_IMPORTED_MODULE_10___default()('#spNavMenu').hasClass('open')) {
            jquery__WEBPACK_IMPORTED_MODULE_10___default()('#spNavMenu').removeClass('open');
        }
    });
    
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('.meatball').on('click', function() {
        if (!jquery__WEBPACK_IMPORTED_MODULE_10___default()('#spNavMenu').hasClass('open')) {
            jquery__WEBPACK_IMPORTED_MODULE_10___default()('#spNavMenu').addClass('open');
        }
    });
});



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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"lunch": 0,
/******/ 			"src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d": 0,
/******/ 			"node_modules_slick-carousel_slick_slick-theme_css-node_modules_slick-carousel_slick_slick_css-b7dfb9": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","vendors-node_modules_slick-carousel_slick_slick-theme_css-node_modules_slick-carousel_slick_s-4ab45a","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d","node_modules_slick-carousel_slick_slick-theme_css-node_modules_slick-carousel_slick_slick_css-b7dfb9"], () => (__webpack_require__("./src/lunch.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVuY2guMzg2OGE5Nzc0OTVlY2RiZGM1OTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQzVCOztBQUVlO0FBQ2Y7QUFDQSxnQkFBZ0Isc0NBQUk7QUFDcEI7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0Msa0NBQWtDLFNBQVM7QUFDM0MsOEJBQThCLFVBQVU7QUFDeEMsMEJBQTBCLFVBQVU7QUFDcEMsMEJBQTBCLFdBQVc7QUFDckMsZ0NBQWdDLFVBQVU7QUFDMUMsZ0NBQWdDLGVBQWU7QUFDL0MsMkJBQTJCLGVBQWU7QUFDMUMsR0FBRztBQUNIOztBQUVBO0FBQ0EsZUFBZSxzQ0FBSTs7O0FBR25CO0FBQ0EsZ0NBQWdDLFVBQVU7O0FBRTFDO0FBQ0Esd0JBQXdCLGlCQUFpQjs7QUFFekM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdUM7QUFDSztBQUNIO0FBQ0Q7QUFDQTtBQUNIO0FBQ0s7QUFDSjtBQUNEO0FBQ3FDOztBQUVuRDtBQUNDO0FBQ2dCO0FBQ007O0FBRWxCO0FBQ3VCO0FBQ25ELHVDQUFJLGdCQUFnQiw4REFBYTs7QUFFakMsa0ZBQW1COztBQUVuQjtBQUNBLGFBQWEsOENBQUM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsU0FBUyx1Q0FBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUMsaUNBQWlDO0FBQ3RFLCtCQUErQixp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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzcz82YzI5Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3M/NTU0MCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3M/NjY5ZiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3M/NjdhYSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL21lbnUvbHVuY2guY3NzP2FmMDkiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9sdW5jaC5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuY29uc3QgbGV0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3BsaXR0ZXh0XScpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvYWRpbmdBbmltYXRpb24oKXtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLChlKT0+e1xuICAgIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKVxuICBcbiAgICBpbnRyb1xuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbScse3k6JzEwMCUnLGRlbGF5OjJ9KVxuICAuZnJvbSgnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6JzEwMCUnfSlcbiAgLy8gLnNldCgnLnRyYW5zaXRpb24taXRlbScse3k6Jy0xMDAlJ30pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse29wYWNpdHk6MH0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWltZycse3g6XCIxMDAlXCIgLH0pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse3k6Jy0xMDAlJ30pXG4gIC50bygnLnRyYW5zaXRpb24taXRlbS13aGl0ZScse2Rpc3BsYXk6XCJub25lXCJ9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVUZXh0KCl7XG4gIGxldCB0ZXh0dGwgPSBnc2FwLnRpbWVsaW5lKClcblxuXG4gIHRleHR0bFxuICAuZnJvbSgnLmtleXZpc3VhbF9fdGV4dC0tanAnLHtvcGFjaXR5OjB9KVxuXG59XG4vLyBnc2FwLmZyb20oXCIubGV0dGVyXCIse3k6MTAwLGR1cmF0aW9uOjJ9KTtcblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpe1xuICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZWQnKTtcbn0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9tZW51L2x1bmNoLmNzc1wiO1xuaW1wb3J0IHNldExvYWRpbmdBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbnNldExvYWRpbmdBbmltYXRpb24oKTtcblxuLyogc2xpY2sgYW5pbWF0aW9uICovXG52YXIgJHNsaWRlID0gJChcIi5zbGljay1zbGlkZVwiKVxuLnNsaWNrKHtcbiAgICBmYWRlOiB0cnVlLFxuICAgIHNwZWVkOiAxMDAwLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDI1MDAsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgZG90czogdHJ1ZSxcbn0pO1xuXG5cbi8qICBBcHBlYXJhbmNlIEFuaW1hdGlvbiAqL1xubGV0IG1tID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4vKiBzcCAqL1xubW0uYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgICAvLyBvdmVydmlldyBjb250ZW50XG4gICAgbGV0IG92ZXJ2aWV3ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiLm92ZXJ2aWV3LWdyaWRcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBvdmVydmlld1xuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWRlc2NyaXB0aW9uXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIis9Mi41XCIpXG4gICAgLmZyb20oXCIub3ZlcnZpZXctaG91cnNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNX0sIFwiLT0wLjhcIilcbiAgICAuZnJvbShcIi5vdmVydmlldy1idXR0b25zXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC44XCIpXG5cbiAgICAvLyBsdW5jaENvdXJzZSBjb250ZW50XG4gICAgbGV0IGx1bmNoQ291cnNlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI2x1bmNoQ291cnNlXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgbHVuY2hDb3Vyc2VcbiAgICAuZnJvbShcIi5jb3Vyc2UtaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMSlcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiLT0wLjVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMilcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiLT0wLjVcIilcbiAgICAuZnJvbShcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMylcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiLT0wLjVcIilcblxuICAgIC8vIGx1bmNoU2luZ2xlXG4gICAgbGV0IGx1bmNoU2luZ2xlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI2x1bmNoU2luZ2xlXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTYyMHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgbHVuY2hTaW5nbGVcbiAgICAuZnJvbShcIi5zaW5nbGUtaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcIi5zaW5nbGUtY29udGVudDpudGgtY2hpbGQoMSlcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiLT0wLjVcIilcbiAgICAuZnJvbShcIi5zaW5nbGUtY29udGVudDpudGgtY2hpbGQoMilcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMn0sIFwiLT0wLjVcIilcblxuICAgIC8vIGRyaW5rXG4gICAgbGV0IGRyaW5rID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI2RyaW5rXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTY1MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgZHJpbmtcbiAgICAuZnJvbShcIi5kcmluay1oZWFkbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yfSwgXCIrPTAuNVwiKVxuICAgIC5mcm9tKFwiLmRyaW5rLWlubmVyXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjJ9LCBcIi09MC41XCIpXG5cbiAgICAvLyBob21lIGJ0blxuICAgIGxldCBob21lX2J0biA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5ob21lLWJ0blwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT01NTBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGhvbWVfYnRuXG4gICAgLmZyb20oXCIuaG9tZS1idG4gYVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0pXG59KTtcblxuLyogcGMgKi9cbm1tLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgLy8gb3ZlcnZpZXcgY29udGVudFxuICAgIGxldCBvdmVydmlldyA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5vdmVydmlldy1ncmlkXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgb3ZlcnZpZXdcbiAgICAuZnJvbShcIi5vdmVydmlldy1kZXNjcmlwdGlvblwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41fSwgXCIrPTIuNVwiKVxuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWhvdXJzXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC44XCIpXG4gICAgLmZyb20oXCIub3ZlcnZpZXctYnV0dG9uc1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41fSwgXCItPTAuOFwiKVxuXG4gICAgLy8gbHVuY2hDb3Vyc2UgY29udGVudFxuICAgIGxldCBsdW5jaENvdXJzZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNsdW5jaENvdXJzZVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGx1bmNoQ291cnNlXG4gICAgLmZyb20oXCIuY291cnNlLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDEpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC41XCIpXG4gICAgLmZyb20oXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDIpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC41XCIpXG4gICAgLmZyb20oXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDMpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC41XCIpXG5cbiAgICAvLyBsdW5jaFNpbmdsZVxuICAgIGxldCBsdW5jaFNpbmdsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNsdW5jaFNpbmdsZVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT02NTBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGx1bmNoU2luZ2xlXG4gICAgLmZyb20oXCIuc2luZ2xlLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXCIuc2luZ2xlLWNvbnRlbnQ6bnRoLWNoaWxkKDEpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC41XCIpXG4gICAgLmZyb20oXCIuc2luZ2xlLWNvbnRlbnQ6bnRoLWNoaWxkKDIpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9LCBcIi09MC41XCIpXG5cbiAgICAvLyBkcmlua1xuICAgIGxldCBkcmluayA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNkcmlua1wiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT02NTBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGRyaW5rXG4gICAgLmZyb20oXCIuZHJpbmstaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNX0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcIi5kcmluay1pbm5lclwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41fSwgXCItPTAuNVwiKVxuXG4gICAgLy8gaG9tZSBidG5cbiAgICBsZXQgaG9tZV9idG4gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIuaG9tZS1idG5cIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBob21lX2J0blxuICAgIC5mcm9tKFwiLmhvbWUtYnRuIGFcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9KVxuXG59KTtcblxuLyogc3Djg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zplovplokgKi9cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2Nsb3NlTWVudUJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgJCgnLm1lYXRiYWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsdW5jaFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy00NTk5NGRcIjogMCxcblx0XCJub2RlX21vZHVsZXNfc2xpY2stY2Fyb3VzZWxfc2xpY2tfc2xpY2stdGhlbWVfY3NzLW5vZGVfbW9kdWxlc19zbGljay1jYXJvdXNlbF9zbGlja19zbGlja19jc3MtYjdkZmI5XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3NsaWNrLWNhcm91c2VsX3NsaWNrX3NsaWNrLXRoZW1lX2Nzcy1ub2RlX21vZHVsZXNfc2xpY2stY2Fyb3VzZWxfc2xpY2tfcy00YWI0NWFcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy00NTk5NGRcIixcIm5vZGVfbW9kdWxlc19zbGljay1jYXJvdXNlbF9zbGlja19zbGljay10aGVtZV9jc3Mtbm9kZV9tb2R1bGVzX3NsaWNrLWNhcm91c2VsX3NsaWNrX3NsaWNrX2Nzcy1iN2RmYjlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbHVuY2guanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==