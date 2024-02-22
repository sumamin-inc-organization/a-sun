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

/***/ "./src/assets/css/feature/feature.css":
/*!********************************************!*\
  !*** ./src/assets/css/feature/feature.css ***!
  \********************************************/
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

/***/ "./src/feature.js":
/*!************************!*\
  !*** ./src/feature.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/header.css */ "./src/assets/css/common/header.css");
/* harmony import */ var _assets_css_common_nav_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/common/nav.css */ "./src/assets/css/common/nav.css");
/* harmony import */ var _assets_css_home_animations_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/home/animations.css */ "./src/assets/css/home/animations.css");
/* harmony import */ var _assets_css_home_access_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/home/access.css */ "./src/assets/css/home/access.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_feature_feature_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/feature/feature.css */ "./src/assets/css/feature/feature.css");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/js/animations/activateAccessTitleAnimations */ "./src/assets/js/animations/activateAccessTitleAnimations.js");
/* harmony import */ var _assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/js/otherlogic/setStorage */ "./src/assets/js/otherlogic/setStorage.js");
/* harmony import */ var _assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/js/otherlogic/toggleLanguage */ "./src/assets/js/otherlogic/toggleLanguage.js");
/* harmony import */ var _assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/js/otherlogic/updateLangBtnText */ "./src/assets/js/otherlogic/updateLangBtnText.js");
/* harmony import */ var _assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/js/eventlisters/langBtnEventlistener */ "./src/assets/js/eventlisters/langBtnEventlistener.js");
/* harmony import */ var _assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/js/otherlogic/getStorage */ "./src/assets/js/otherlogic/getStorage.js");
/* harmony import */ var _assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/js/otherlogic/adjustLangBtnLocation */ "./src/assets/js/otherlogic/adjustLangBtnLocation.js");



























gsap__WEBPACK_IMPORTED_MODULE_23__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_24__.ScrollTrigger);
(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__.toggleSpMenu)();
(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();
// slick
jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_12___default()(".slick1").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: false,
    dots: true,
    prevArrow: jquery__WEBPACK_IMPORTED_MODULE_12___default()(".prev-arrow1"),
    nextArrow: jquery__WEBPACK_IMPORTED_MODULE_12___default()(".next-arrow1"),
    centerMode: true,
    centerPadding: "13%",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1230,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "5%",
        },
      },
    ],
  });

  jquery__WEBPACK_IMPORTED_MODULE_12___default()(".slick2").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: false,
    dots: true,
    prevArrow: jquery__WEBPACK_IMPORTED_MODULE_12___default()(".prev-arrow2"),
    nextArrow: jquery__WEBPACK_IMPORTED_MODULE_12___default()(".next-arrow2"),
    centerMode: true,
    centerPadding: "13%",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1230,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "6%",
        },
      },
    ],
  });
});

// 出現アニメーション
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_23__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feature-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2, delay: 3.5 });

let feature1 = gsap__WEBPACK_IMPORTED_MODULE_23__.gsap.timeline({
  scrollTrigger: {
    trigger: "#feature1",
    start: "-=500px",
    scrub: false,
  },
});
feature1
  .from("#feature1 .feature-title", {
    y: 30,
    opacity: 0,
    duration: 2,
    delay: 3.5,
  })
  .from(
    "#feature1 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick1", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let feature2 = gsap__WEBPACK_IMPORTED_MODULE_23__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feature1-inner",
    start: "+=500px",
    scrub: false,
  },
});
feature2
  .from("#feature2 .feature-title", { y: 30, opacity: 0, duration: 2 })
  .from(
    "#feature2 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick2", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let feature3 = gsap__WEBPACK_IMPORTED_MODULE_23__.gsap.timeline({
  scrollTrigger: {
    trigger: ".feature2-inner",
    start: "-=500px",
    scrub: false,
  },
});
feature3
  .from("#feature3 .feature-title", { y: 30, opacity: 0, duration: 2 })
  .from(
    "#feature3 .feature-top-img",
    { y: 30, opacity: 0, duration: 2 },
    "-=1.5"
  )
  .from(".slick3", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".home-btn", { y: 30, opacity: 0, duration: 2 }, "-=0.5");

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_11__["default"])();

(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_16__.activateAccessTitleAnimationsFeature)();

/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang"; //the key to the local storage language
let currentLang = (0,_assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_21__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
(0,_assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_17__["default"])(LOCAL_STORAGE_LANGUAGE_KEY, currentLang);
(0,_assets_js_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_18__["default"])(currentLang);
(0,_assets_js_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_19__["default"])(currentLang);
(0,_assets_js_eventlisters_langBtnEventlistener__WEBPACK_IMPORTED_MODULE_20__["default"])();

/*-----------------------------------
  デバイスごとの調整に関するスクリプト
--------------------------------------*/
(0,_assets_js_otherlogic_adjustLangBtnLocation__WEBPACK_IMPORTED_MODULE_22__["default"])();


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
/******/ 			"feature": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","vendors-node_modules_slick-carousel_slick_slick-theme_css-node_modules_slick-carousel_slick_s-4ab45a","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-2102c1"], () => (__webpack_require__("./src/feature.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDdkxyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3M/MGUzYyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2ZlYXR1cmUvZmVhdHVyZS5jc3M/YTkzNCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmNvbnN0IGxldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zcGxpdHRleHRdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2FkaW5nQW5pbWF0aW9uKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICAgIGxldCBpbnRybyA9IGdzYXAudGltZWxpbmUoKTtcblxuICAgIGludHJvXG4gICAgICAuZnJvbShcIi50cmFuc2l0aW9uLWl0ZW1cIiwgeyB5OiBcIjEwMCVcIiwgZGVsYXk6IDIgfSlcbiAgICAgIC5mcm9tKFwiLnRyYW5zaXRpb24taXRlbS13aGl0ZVwiLCB7IHk6IFwiMTAwJVwiIH0pXG4gICAgICAuc2V0KFwiLnRyYW5zaXRpb24taW1nXCIsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgLnNldChcIi50cmFuc2l0aW9uLWltZ1wiLCB7IHg6IFwiMTAwJVwiIH0pXG4gICAgICAudG8oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgeTogXCItMTAwJVwiIH0pXG4gICAgICAudG8oXCIudHJhbnNpdGlvbi1pdGVtLXdoaXRlXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAgIC5zZXQoXCIudHJhbnNpdGlvbi1pdGVtXCIsIHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlVGV4dCgpIHtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICB0ZXh0dGwuZnJvbShcIi5rZXl2aXN1YWxfX3RleHQtLWpwXCIsIHsgb3BhY2l0eTogMCB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlZFwiKTtcbn1cbiIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2ZlYXR1cmUvZmVhdHVyZS5jc3NcIjtcbmltcG9ydCBzZXRMb2FkaW5nQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb25cIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdG9nZ2xlU3BNZW51IH0gZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnVcIjtcbmltcG9ydCBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IGFjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zRmVhdHVyZSB9IGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvc2V0U3RvcmFnZVwiO1xuaW1wb3J0IHRvZ2dsZUxhbmd1YWdlIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3RvZ2dsZUxhbmd1YWdlXCI7XG5pbXBvcnQgdXBkYXRlTGFuZ0J0blRleHQgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvdXBkYXRlTGFuZ0J0blRleHRcIjtcbmltcG9ydCBhY3RpdmF0ZUxhbmdCdG5FdmVudExpc3RlbmVyIGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbGFuZ0J0bkV2ZW50bGlzdGVuZXJcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IGFkanVzdExhbmdCdG5Mb2NhdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy9hZGp1c3RMYW5nQnRuTG9jYXRpb25cIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbnRvZ2dsZVNwTWVudSgpO1xuc2V0TG9hZGluZ0FuaW1hdGlvbigpO1xuLy8gc2xpY2tcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi5zbGljazFcIikuc2xpY2soe1xuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDYwMDAsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICBkb3RzOiB0cnVlLFxuICAgIHByZXZBcnJvdzogJChcIi5wcmV2LWFycm93MVwiKSxcbiAgICBuZXh0QXJyb3c6ICQoXCIubmV4dC1hcnJvdzFcIiksXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjEzJVwiLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTM1MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjEwJVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIzMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjUlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI1JVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICAkKFwiLnNsaWNrMlwiKS5zbGljayh7XG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNjAwMCxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgcHJldkFycm93OiAkKFwiLnByZXYtYXJyb3cyXCIpLFxuICAgIG5leHRBcnJvdzogJChcIi5uZXh0LWFycm93MlwiKSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6IFwiMTMlXCIsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMzUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMTAlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjMwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNSVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xufSk7XG5cbi8vIOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODs1xubGV0IGt2X3RpdGxlID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlLXBhZ2VcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5rdl90aXRsZS5mcm9tKFwiLnVuZGVyLWt2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDIsIGRlbGF5OiAzLjUgfSk7XG5cbmxldCBmZWF0dXJlMSA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjZmVhdHVyZTFcIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5mZWF0dXJlMVxuICAuZnJvbShcIiNmZWF0dXJlMSAuZmVhdHVyZS10aXRsZVwiLCB7XG4gICAgeTogMzAsXG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMixcbiAgICBkZWxheTogMy41LFxuICB9KVxuICAuZnJvbShcbiAgICBcIiNmZWF0dXJlMSAuZmVhdHVyZS10b3AtaW1nXCIsXG4gICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSxcbiAgICBcIi09MS41XCJcbiAgKVxuICAuZnJvbShcIi5zbGljazFcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKTtcblxubGV0IGZlYXR1cmUyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlMS1pbm5lclwiLFxuICAgIHN0YXJ0OiBcIis9NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcbmZlYXR1cmUyXG4gIC5mcm9tKFwiI2ZlYXR1cmUyIC5mZWF0dXJlLXRpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pXG4gIC5mcm9tKFxuICAgIFwiI2ZlYXR1cmUyIC5mZWF0dXJlLXRvcC1pbWdcIixcbiAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LFxuICAgIFwiLT0xLjVcIlxuICApXG4gIC5mcm9tKFwiLnNsaWNrMlwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpO1xuXG5sZXQgZmVhdHVyZTMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmZlYXR1cmUyLWlubmVyXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuZmVhdHVyZTNcbiAgLmZyb20oXCIjZmVhdHVyZTMgLmZlYXR1cmUtdGl0bGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSlcbiAgLmZyb20oXG4gICAgXCIjZmVhdHVyZTMgLmZlYXR1cmUtdG9wLWltZ1wiLFxuICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sXG4gICAgXCItPTEuNVwiXG4gIClcbiAgLmZyb20oXCIuc2xpY2szXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiLT0xLjVcIilcbiAgLmZyb20oXCIuaG9tZS1idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTAuNVwiKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvbiAvIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cbmFjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zRmVhdHVyZSgpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1VTFRJIExBTkdVQUdFIFNJVEUgUkVMQVRFRCBTQ1JJUFRTXG4g44Oe44Or44OB6KiA6Kqe44K144Kk44OI44Gr6Zai6YCj44GZ44KL44K544Kv44Oq44OX44OIXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZID0gXCJhc3VuLmxhbmdcIjsgLy90aGUga2V5IHRvIHRoZSBsb2NhbCBzdG9yYWdlIGxhbmd1YWdlXG5sZXQgY3VycmVudExhbmcgPSBHZXRTdG9yYWdlSXRlbXMoTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkpIHx8IFwianBcIjsgLy9jaGVja3Mgd2hldGhlciB0aGVyZXMgYSBsYW5ndWFnZSBwcmVmZnJlZCBieSAgYSB1c2VyIHdobyBoYXMgdmlzaXRlZCBiZWZvcmUuIGlmIG5vdCBpdCB3aWxsIGRlZmF1bHQgdG8gXCJqcFwiXG5zZXRTdG9yYWdlSXRlbShMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSwgY3VycmVudExhbmcpO1xudG9nZ2xlTGFuZ3VhZ2UoY3VycmVudExhbmcpO1xudXBkYXRlTGFuZ0J0blRleHQoY3VycmVudExhbmcpO1xuYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lcigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIOODh+ODkOOCpOOCueOBlOOBqOOBruiqv+aVtOOBq+mWouOBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWRqdXN0TGFuZ0J0bkxvY2F0aW9uKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImZlYXR1cmVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpcy0wYzE2NTZcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3NsaWNrLWNhcm91c2VsX3NsaWNrX3NsaWNrLXRoZW1lX2Nzcy1ub2RlX21vZHVsZXNfc2xpY2stY2Fyb3VzZWxfc2xpY2tfcy00YWI0NWFcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy0yMTAyYzFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZmVhdHVyZS5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9