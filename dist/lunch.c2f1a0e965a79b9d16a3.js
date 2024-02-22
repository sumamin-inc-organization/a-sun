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

const letter = document.querySelector("[data-splittext]");

function setLoadingAnimation() {
  document.addEventListener("DOMContentLoaded", (e) => {
    let intro = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();

    intro
      .from(".transition-item", { y: "100%", delay: 2 })
      .from(".transition-item-white", { y: "100%" })
      .set(".transition-img", { opacity: 0 })
      .set(".transition-img", { x: "100%" })
      .to(".transition-item-white", { y: "-100%" })
      .to(".transition-item-white", { display: "none" })
      .set(".transition-item", { display: "none" });
  });
}

function animateText() {
  let texttl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();

  texttl.from(".keyvisual__text--jp", { opacity: 0 });
}

function toggleVisibility() {
  letter.classList.add("visibled");
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var _assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/js/animations/activateAccessTitleAnimations */ "./src/assets/js/animations/activateAccessTitleAnimations.js");
/* harmony import */ var _assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/js/otherlogic/setStorage */ "./src/assets/js/otherlogic/setStorage.js");
/* harmony import */ var _assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/js/otherlogic/toggleLanguage */ "./src/assets/js/otherlogic/toggleLanguage.js");
/* harmony import */ var _assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/js/otherlogic/updateLangBtnText */ "./src/assets/js/otherlogic/updateLangBtnText.js");
/* harmony import */ var _assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/js/eventlisters/langBtnEventlistener */ "./src/assets/js/eventlisters/langBtnEventlistener.js");
/* harmony import */ var _assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/js/otherlogic/getStorage */ "./src/assets/js/otherlogic/getStorage.js");
/* harmony import */ var _assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/js/otherlogic/adjustLangBtnLocation */ "./src/assets/js/otherlogic/adjustLangBtnLocation.js");





















gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__.ScrollTrigger);

(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__.toggleSpMenu)();

/*  Appearance Animation */
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
  scrollTrigger: {
    trigger: ".lunch-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2, delay: 3 });

let mm = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
  // overview content
  let overview = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: ".overview-grid",
      start: "-=550px",
      scrub: false,
    },
  });
  overview
    .from(
      ".overview-description",
      { y: 30, opacity: 0, duration: 1.5 },
      "+=2.5"
    )
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8")
    .from(".overview-buttons", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8");

  // lunchCourse content
  let lunchCourse = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchCourse",
      start: "-=550px",
      scrub: false,
    },
  });
  lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.2 }, "+=0.5")
    .from(
      ".course-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    )
    .from(
      ".course-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    )
    .from(
      ".course-content:nth-child(3)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    );

  // lunchSingle
  let lunchSingle = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchSingle",
      start: "-=620px",
      scrub: false,
    },
  });
  lunchSingle
    .from(".single-headline", { y: 30, opacity: 0, duration: 1.2 }, "+=0.5")
    .from(
      ".single-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    )
    .from(
      ".single-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.2 },
      "-=0.5"
    );

  // drink
  let drink = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#drink",
      start: "-=650px",
      scrub: false,
    },
  });
  drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.2 }, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.2 }, "-=0.5");

  // home btn
  let home_btn = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: ".home-btn",
      start: "-=550px",
      scrub: false,
    },
  });
  home_btn.from(".home-btn a", { y: 30, opacity: 0, duration: 1 });
});

/* pc */
mm.add("(min-width: 768px)", () => {
  // overview content
  let overview = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: ".overview-grid",
      start: "-=550px",
      scrub: false,
    },
  });
  overview
    .from(
      ".overview-description",
      { y: 30, opacity: 0, duration: 1.5 },
      "+=2.5"
    )
    .from(".overview-hours", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8")
    .from(".overview-buttons", { y: 30, opacity: 0, duration: 1.5 }, "-=0.8");

  // lunchCourse content
  let lunchCourse = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchCourse",
      start: "-=500px",
      scrub: false,
    },
  });
  lunchCourse
    .from(".course-headline", { y: 30, opacity: 0, duration: 1.5 }, "+=0.5")
    .from(
      ".course-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    )
    .from(
      ".course-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    )
    .from(
      ".course-content:nth-child(3)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    );

  // lunchSingle
  let lunchSingle = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#lunchSingle",
      start: "-=650px",
      scrub: false,
    },
  });
  lunchSingle
    .from(".single-headline", { y: 30, opacity: 0, duration: 1.5 }, "+=0.5")
    .from(
      ".single-content:nth-child(1)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    )
    .from(
      ".single-content:nth-child(2)",
      { y: 30, opacity: 0, duration: 1.5 },
      "-=0.5"
    );

  // drink
  let drink = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: "#drink",
      start: "-=650px",
      scrub: false,
    },
  });
  drink
    .from(".drink-headline", { y: 30, opacity: 0, duration: 1.5 }, "+=0.5")
    .from(".drink-inner", { y: 30, opacity: 0, duration: 1.5 }, "-=0.5");

  // home btn
  let home_btn = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
      trigger: ".home-btn",
      start: "-=550px",
      scrub: false,
    },
  });
  home_btn.from(".home-btn a", { y: 30, opacity: 0, duration: 2 });
});

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_11__["default"])();

(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_12__.activateAccessTitleAnimationsDinner)();

/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang"; //the key to the local storage language
let currentLang = (0,_assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_17__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
(0,_assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_13__["default"])(LOCAL_STORAGE_LANGUAGE_KEY, currentLang);
(0,_assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_14__["default"])(currentLang);
(0,_assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);
(0,_assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_16__["default"])();

/*-----------------------------------
  デバイスごとの調整に関するスクリプト
--------------------------------------*/
(0,_assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_18__["default"])();


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
/******/ 			"lunch": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-2102c1"], () => (__webpack_require__("./src/lunch.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVuY2guYzJmMWEwZTk2NWE3OWI5ZDE2YTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDNUI7O0FBRWU7QUFDZjtBQUNBLGdCQUFnQixzQ0FBSTs7QUFFcEI7QUFDQSxrQ0FBa0MscUJBQXFCO0FBQ3ZELHdDQUF3QyxXQUFXO0FBQ25ELGdDQUFnQyxZQUFZO0FBQzVDLGdDQUFnQyxXQUFXO0FBQzNDLHNDQUFzQyxZQUFZO0FBQ2xELHNDQUFzQyxpQkFBaUI7QUFDdkQsaUNBQWlDLGlCQUFpQjtBQUNsRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxlQUFlLHNDQUFJOztBQUVuQix3Q0FBd0MsWUFBWTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdUM7QUFDSztBQUNIO0FBQ0Q7QUFDQTtBQUNIO0FBQ0s7QUFDSjtBQUNEO0FBQ3FDO0FBQzlDO0FBQ3VCO0FBQ2tCO0FBQ2tCO0FBQ29CO0FBQzVDO0FBQ0k7QUFDTTtBQUNnQjtBQUN6QjtBQUNpQjtBQUNqRix1Q0FBSSxnQkFBZ0IsOERBQWE7O0FBRWpDLGtGQUFtQjtBQUNuQixtRkFBWTs7QUFFWjtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELDZCQUE2QixtQ0FBbUM7O0FBRWhFLFNBQVMsdUNBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFLGlDQUFpQyxrQ0FBa0M7O0FBRW5FO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLGNBQWMsdUNBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRSw0QkFBNEIsa0NBQWtDOztBQUU5RDtBQUNBLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsaUNBQWlDLGdDQUFnQztBQUNqRSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakUsaUNBQWlDLGtDQUFrQzs7QUFFbkU7QUFDQSxvQkFBb0IsdUNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdUNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBOztBQUVBO0FBQ0EsY0FBYyx1Q0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFLDRCQUE0QixrQ0FBa0M7O0FBRTlEO0FBQ0EsaUJBQWlCLHVDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxpQ0FBaUMsZ0NBQWdDO0FBQ2pFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkZBQXdCOztBQUV4Qix5SEFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRCxrQkFBa0IsNkVBQWUsc0NBQXNDO0FBQ3ZFLDZFQUFjO0FBQ2QsaUZBQWM7QUFDZCxvRkFBaUI7QUFDakIseUZBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSx3RkFBcUI7Ozs7Ozs7VUM3T3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzcz8wZTNjIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvbWVudS9sdW5jaC5jc3M/YWYwOSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2x1bmNoLmpzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3BsaXR0ZXh0XVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgICBpbnRyb1xuICAgICAgLmZyb20oXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgeTogXCIxMDAlXCIsIGRlbGF5OiAyIH0pXG4gICAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW0td2hpdGVcIiwgeyB5OiBcIjEwMCVcIiB9KVxuICAgICAgLnNldChcIi50cmFuc2l0aW9uLWltZ1wiLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pbWdcIiwgeyB4OiBcIjEwMCVcIiB9KVxuICAgICAgLnRvKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IHk6IFwiLTEwMCVcIiB9KVxuICAgICAgLnRvKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAuc2V0KFwiLnRyYW5zaXRpb24taXRlbVwiLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKSB7XG4gIGxldCB0ZXh0dGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdGV4dHRsLmZyb20oXCIua2V5dmlzdWFsX190ZXh0LS1qcFwiLCB7IG9wYWNpdHk6IDAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZWRcIik7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9tZW51L2x1bmNoLmNzc1wiO1xuaW1wb3J0IHNldExvYWRpbmdBbmltYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvbG9hZGluZ0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdG9nZ2xlU3BNZW51IH0gZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnVcIjtcbmltcG9ydCBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0Rpbm5lciB9IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvc2V0U3RvcmFnZVwiO1xuaW1wb3J0IHRvZ2dsZUxhbmd1YWdlIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3RvZ2dsZUxhbmd1YWdlXCI7XG5pbXBvcnQgdXBkYXRlTGFuZ0J0blRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvdXBkYXRlTGFuZ0J0blRleHRcIjtcbmltcG9ydCBhY3RpdmF0ZUxhbmdCdG5FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbGFuZ0J0bkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IGFkanVzdExhbmdCdG5Mb2NhdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9hZGp1c3RMYW5nQnRuTG9jYXRpb25cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbnNldExvYWRpbmdBbmltYXRpb24oKTtcbnRvZ2dsZVNwTWVudSgpO1xuXG4vKiAgQXBwZWFyYW5jZSBBbmltYXRpb24gKi9cbmxldCBrdl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIubHVuY2gtcGFnZVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcbmt2X3RpdGxlLmZyb20oXCIudW5kZXIta3ZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiwgZGVsYXk6IDMgfSk7XG5cbmxldCBtbSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuLyogc3AgKi9cbm1tLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIC8vIG92ZXJ2aWV3IGNvbnRlbnRcbiAgbGV0IG92ZXJ2aWV3ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIub3ZlcnZpZXctZ3JpZFwiLFxuICAgICAgc3RhcnQ6IFwiLT01NTBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuICBvdmVydmlld1xuICAgIC5mcm9tKFxuICAgICAgXCIub3ZlcnZpZXctZGVzY3JpcHRpb25cIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcbiAgICAgIFwiKz0yLjVcIlxuICAgIClcbiAgICAuZnJvbShcIi5vdmVydmlldy1ob3Vyc1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0wLjhcIilcbiAgICAuZnJvbShcIi5vdmVydmlldy1idXR0b25zXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTAuOFwiKTtcblxuICAvLyBsdW5jaENvdXJzZSBjb250ZW50XG4gIGxldCBsdW5jaENvdXJzZSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2x1bmNoQ291cnNlXCIsXG4gICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIGx1bmNoQ291cnNlXG4gICAgLmZyb20oXCIuY291cnNlLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjIgfSwgXCIrPTAuNVwiKVxuICAgIC5mcm9tKFxuICAgICAgXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDEpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sXG4gICAgICBcIi09MC41XCJcbiAgICApXG4gICAgLmZyb20oXG4gICAgICBcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMilcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjIgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgIClcbiAgICAuZnJvbShcbiAgICAgIFwiLmNvdXJzZS1jb250ZW50Om50aC1jaGlsZCgzKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKTtcblxuICAvLyBsdW5jaFNpbmdsZVxuICBsZXQgbHVuY2hTaW5nbGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNsdW5jaFNpbmdsZVwiLFxuICAgICAgc3RhcnQ6IFwiLT02MjBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuICBsdW5jaFNpbmdsZVxuICAgIC5mcm9tKFwiLnNpbmdsZS1oZWFkbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcbiAgICAgIFwiLnNpbmdsZS1jb250ZW50Om50aC1jaGlsZCgxKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKVxuICAgIC5mcm9tKFxuICAgICAgXCIuc2luZ2xlLWNvbnRlbnQ6bnRoLWNoaWxkKDIpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sXG4gICAgICBcIi09MC41XCJcbiAgICApO1xuXG4gIC8vIGRyaW5rXG4gIGxldCBkcmluayA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2RyaW5rXCIsXG4gICAgICBzdGFydDogXCItPTY1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIGRyaW5rXG4gICAgLmZyb20oXCIuZHJpbmstaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXCIuZHJpbmstaW5uZXJcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LCBcIi09MC41XCIpO1xuXG4gIC8vIGhvbWUgYnRuXG4gIGxldCBob21lX2J0biA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLmhvbWUtYnRuXCIsXG4gICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIGhvbWVfYnRuLmZyb20oXCIuaG9tZS1idG4gYVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9KTtcbn0pO1xuXG4vKiBwYyAqL1xubW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgLy8gb3ZlcnZpZXcgY29udGVudFxuICBsZXQgb3ZlcnZpZXcgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5vdmVydmlldy1ncmlkXCIsXG4gICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIG92ZXJ2aWV3XG4gICAgLmZyb20oXG4gICAgICBcIi5vdmVydmlldy1kZXNjcmlwdGlvblwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFxuICAgICAgXCIrPTIuNVwiXG4gICAgKVxuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWhvdXJzXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTAuOFwiKVxuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWJ1dHRvbnNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIi09MC44XCIpO1xuXG4gIC8vIGx1bmNoQ291cnNlIGNvbnRlbnRcbiAgbGV0IGx1bmNoQ291cnNlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjbHVuY2hDb3Vyc2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgbHVuY2hDb3Vyc2VcbiAgICAuZnJvbShcIi5jb3Vyc2UtaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXG4gICAgICBcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMSlcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgIClcbiAgICAuZnJvbShcbiAgICAgIFwiLmNvdXJzZS1jb250ZW50Om50aC1jaGlsZCgyKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKVxuICAgIC5mcm9tKFxuICAgICAgXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDMpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXG4gICAgICBcIi09MC41XCJcbiAgICApO1xuXG4gIC8vIGx1bmNoU2luZ2xlXG4gIGxldCBsdW5jaFNpbmdsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2x1bmNoU2luZ2xlXCIsXG4gICAgICBzdGFydDogXCItPTY1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIGx1bmNoU2luZ2xlXG4gICAgLmZyb20oXCIuc2luZ2xlLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCIrPTAuNVwiKVxuICAgIC5mcm9tKFxuICAgICAgXCIuc2luZ2xlLWNvbnRlbnQ6bnRoLWNoaWxkKDEpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXG4gICAgICBcIi09MC41XCJcbiAgICApXG4gICAgLmZyb20oXG4gICAgICBcIi5zaW5nbGUtY29udGVudDpudGgtY2hpbGQoMilcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgICk7XG5cbiAgLy8gZHJpbmtcbiAgbGV0IGRyaW5rID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZHJpbmtcIixcbiAgICAgIHN0YXJ0OiBcIi09NjUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgZHJpbmtcbiAgICAuZnJvbShcIi5kcmluay1oZWFkbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcIi5kcmluay1pbm5lclwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0wLjVcIik7XG5cbiAgLy8gaG9tZSBidG5cbiAgbGV0IGhvbWVfYnRuID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuaG9tZS1idG5cIixcbiAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgaG9tZV9idG4uZnJvbShcIi5ob21lLWJ0biBhXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEhlYWRlciBQQyBhbmltYXRpb24gLyDjg5jjg4Pjg4Djg7xQQ+OCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpO1xuXG5hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0Rpbm5lcigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1VTFRJIExBTkdVQUdFIFNJVEUgUkVMQVRFRCBTQ1JJUFRTXG4g44Oe44Or44OB6KiA6Kqe44K144Kk44OI44Gr6Zai6YCj44GZ44KL44K544Kv44Oq44OX44OIXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZID0gXCJhc3VuLmxhbmdcIjsgLy90aGUga2V5IHRvIHRoZSBsb2NhbCBzdG9yYWdlIGxhbmd1YWdlXG5sZXQgY3VycmVudExhbmcgPSBHZXRTdG9yYWdlSXRlbXMoTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkpIHx8IFwianBcIjsgLy9jaGVja3Mgd2hldGhlciB0aGVyZXMgYSBsYW5ndWFnZSBwcmVmZnJlZCBieSAgYSB1c2VyIHdobyBoYXMgdmlzaXRlZCBiZWZvcmUuIGlmIG5vdCBpdCB3aWxsIGRlZmF1bHQgdG8gXCJqcFwiXG5zZXRTdG9yYWdlSXRlbShMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSwgY3VycmVudExhbmcpO1xudG9nZ2xlTGFuZ3VhZ2UoY3VycmVudExhbmcpO1xudXBkYXRlTGFuZ0J0blRleHQoY3VycmVudExhbmcpO1xuYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lcigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIOODh+ODkOOCpOOCueOBlOOBqOOBruiqv+aVtOOBq+mWouOBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWRqdXN0TGFuZ0J0bkxvY2F0aW9uKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImx1bmNoXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXMtMGMxNjU2XCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtMjEwMmMxXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2x1bmNoLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=