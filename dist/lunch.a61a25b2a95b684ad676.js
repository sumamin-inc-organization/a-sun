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











// import $ from "jquery";
// import "slick-carousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";












gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__.ScrollTrigger);

(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__.toggleSpMenu)();

// /* slick animation */
// var $slide = $(".slick-slide").slick({
//   fade: true,
//   speed: 1000,
//   autoplaySpeed: 2500,
//   arrows: false,
//   autoplay: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: true,
//   dots: true,
// });

/*  Appearance Animation */
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
        trigger: ".lunch-page",
        start: "-=500px",
        scrub: false,
    },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2 , delay: 3});

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

const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang" ; //the key to the local storage language
let currentLang = (0,_assets_js_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_17__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
// const langBtns = document.querySelectorAll(".lang-btn-text");
(0,_assets_js_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_13__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
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
/******/ 			"lunch": 0,
/******/ 			"src_assets_css_menu_lunch_css": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-32f890","src_assets_css_menu_lunch_css"], () => (__webpack_require__("./src/lunch.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVuY2guYTYxYTI1YjJhOTViNjg0YWQ2NzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNLO0FBQ0g7QUFDRDtBQUNBO0FBQ0g7QUFDSztBQUNKO0FBQ0Q7QUFDcUM7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBOztBQUU0QjtBQUN1QjtBQUNrQjtBQUNrQjtBQUNvQjtBQUM1QztBQUNJO0FBQ007QUFDZ0I7QUFDekI7QUFDaUI7QUFDakYsdUNBQUksZ0JBQWdCLDhEQUFhOztBQUVqQyxrRkFBbUI7QUFDbkIsbUZBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxlQUFlLHVDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCw2QkFBNkIsbUNBQW1DOztBQUVoRSxTQUFTLHVDQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRSxpQ0FBaUMsa0NBQWtDOztBQUVuRTtBQUNBLG9CQUFvQix1Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakUsNEJBQTRCLGtDQUFrQzs7QUFFOUQ7QUFDQSxpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGlDQUFpQyxnQ0FBZ0M7QUFDakUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFLGlDQUFpQyxrQ0FBa0M7O0FBRW5FO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQztBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLGNBQWMsdUNBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRSw0QkFBNEIsa0NBQWtDOztBQUU5RDtBQUNBLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsaUNBQWlDLGdDQUFnQztBQUNqRSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJGQUF3Qjs7O0FBR3hCLHlIQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pELGtCQUFrQiw2RUFBZSxzQ0FBc0M7QUFDdkU7QUFDQSw2RUFBYztBQUNkLGlGQUFjO0FBQ2Qsb0ZBQWlCO0FBQ2pCLHlGQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0Esd0ZBQXFCOzs7Ozs7VUNsUXJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9tZW51L2x1bmNoLmNzcz9hZjA5Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL2x1bmNoLmpzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvbWVudS9sdW5jaC5jc3NcIjtcbmltcG9ydCBzZXRMb2FkaW5nQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb25cIjtcblxuLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuLy8gaW1wb3J0IFwic2xpY2stY2Fyb3VzZWxcIjtcbi8vIGltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuLy8gaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IHRvZ2dsZVNwTWVudSB9IGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvdG9nZ2xlU3BNZW51XCI7XG5pbXBvcnQgYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2FjdGl2YXRlSGVhZGVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnNEaW5uZXIgfSBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NldFN0b3JhZ2VcIjtcbmltcG9ydCB0b2dnbGVMYW5ndWFnZSBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy90b2dnbGVMYW5ndWFnZVwiO1xuaW1wb3J0IHVwZGF0ZUxhbmdCdG5UZXh0IGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3VwZGF0ZUxhbmdCdG5UZXh0XCI7XG5pbXBvcnQgYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL2xhbmdCdG5FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBhZGp1c3RMYW5nQnRuTG9jYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvYWRqdXN0TGFuZ0J0bkxvY2F0aW9uXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5zZXRMb2FkaW5nQW5pbWF0aW9uKCk7XG50b2dnbGVTcE1lbnUoKTtcblxuLy8gLyogc2xpY2sgYW5pbWF0aW9uICovXG4vLyB2YXIgJHNsaWRlID0gJChcIi5zbGljay1zbGlkZVwiKS5zbGljayh7XG4vLyAgIGZhZGU6IHRydWUsXG4vLyAgIHNwZWVkOiAxMDAwLFxuLy8gICBhdXRvcGxheVNwZWVkOiAyNTAwLFxuLy8gICBhcnJvd3M6IGZhbHNlLFxuLy8gICBhdXRvcGxheTogdHJ1ZSxcbi8vICAgc2xpZGVzVG9TaG93OiAxLFxuLy8gICBzbGlkZXNUb1Njcm9sbDogMSxcbi8vICAgaW5maW5pdGU6IHRydWUsXG4vLyAgIGRvdHM6IHRydWUsXG4vLyB9KTtcblxuLyogIEFwcGVhcmFuY2UgQW5pbWF0aW9uICovXG5sZXQga3ZfdGl0bGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmx1bmNoLXBhZ2VcIixcbiAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xua3ZfdGl0bGUuZnJvbShcIi51bmRlci1rdlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyICwgZGVsYXk6IDN9KTtcblxubGV0IG1tID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4vKiBzcCAqL1xubW0uYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgLy8gb3ZlcnZpZXcgY29udGVudFxuICBsZXQgb3ZlcnZpZXcgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5vdmVydmlldy1ncmlkXCIsXG4gICAgICBzdGFydDogXCItPTU1MHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIG92ZXJ2aWV3XG4gICAgLmZyb20oXG4gICAgICBcIi5vdmVydmlldy1kZXNjcmlwdGlvblwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFxuICAgICAgXCIrPTIuNVwiXG4gICAgKVxuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWhvdXJzXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTAuOFwiKVxuICAgIC5mcm9tKFwiLm92ZXJ2aWV3LWJ1dHRvbnNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIi09MC44XCIpO1xuXG4gIC8vIGx1bmNoQ291cnNlIGNvbnRlbnRcbiAgbGV0IGx1bmNoQ291cnNlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjbHVuY2hDb3Vyc2VcIixcbiAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgbHVuY2hDb3Vyc2VcbiAgICAuZnJvbShcIi5jb3Vyc2UtaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXG4gICAgICBcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMSlcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjIgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgIClcbiAgICAuZnJvbShcbiAgICAgIFwiLmNvdXJzZS1jb250ZW50Om50aC1jaGlsZCgyKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuMiB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKVxuICAgIC5mcm9tKFxuICAgICAgXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDMpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sXG4gICAgICBcIi09MC41XCJcbiAgICApO1xuXG4gIC8vIGx1bmNoU2luZ2xlXG4gIGxldCBsdW5jaFNpbmdsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2x1bmNoU2luZ2xlXCIsXG4gICAgICBzdGFydDogXCItPTYyMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIGx1bmNoU2luZ2xlXG4gICAgLmZyb20oXCIuc2luZ2xlLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjIgfSwgXCIrPTAuNVwiKVxuICAgIC5mcm9tKFxuICAgICAgXCIuc2luZ2xlLWNvbnRlbnQ6bnRoLWNoaWxkKDEpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sXG4gICAgICBcIi09MC41XCJcbiAgICApXG4gICAgLmZyb20oXG4gICAgICBcIi5zaW5nbGUtY29udGVudDpudGgtY2hpbGQoMilcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjIgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgICk7XG5cbiAgLy8gZHJpbmtcbiAgbGV0IGRyaW5rID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjZHJpbmtcIixcbiAgICAgIHN0YXJ0OiBcIi09NjUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgZHJpbmtcbiAgICAuZnJvbShcIi5kcmluay1oZWFkbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcIi5kcmluay1pbm5lclwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS4yIH0sIFwiLT0wLjVcIik7XG5cbiAgLy8gaG9tZSBidG5cbiAgbGV0IGhvbWVfYnRuID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuaG9tZS1idG5cIixcbiAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgaG9tZV9idG4uZnJvbShcIi5ob21lLWJ0biBhXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pO1xufSk7XG5cbi8qIHBjICovXG5tbS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAvLyBvdmVydmlldyBjb250ZW50XG4gIGxldCBvdmVydmlldyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLm92ZXJ2aWV3LWdyaWRcIixcbiAgICAgIHN0YXJ0OiBcIi09NTUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgb3ZlcnZpZXdcbiAgICAuZnJvbShcbiAgICAgIFwiLm92ZXJ2aWV3LWRlc2NyaXB0aW9uXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXG4gICAgICBcIis9Mi41XCJcbiAgICApXG4gICAgLmZyb20oXCIub3ZlcnZpZXctaG91cnNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIi09MC44XCIpXG4gICAgLmZyb20oXCIub3ZlcnZpZXctYnV0dG9uc1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0wLjhcIik7XG5cbiAgLy8gbHVuY2hDb3Vyc2UgY29udGVudFxuICBsZXQgbHVuY2hDb3Vyc2UgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNsdW5jaENvdXJzZVwiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuICBsdW5jaENvdXJzZVxuICAgIC5mcm9tKFwiLmNvdXJzZS1oZWFkbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiKz0wLjVcIilcbiAgICAuZnJvbShcbiAgICAgIFwiLmNvdXJzZS1jb250ZW50Om50aC1jaGlsZCgxKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKVxuICAgIC5mcm9tKFxuICAgICAgXCIuY291cnNlLWNvbnRlbnQ6bnRoLWNoaWxkKDIpXCIsXG4gICAgICB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXG4gICAgICBcIi09MC41XCJcbiAgICApXG4gICAgLmZyb20oXG4gICAgICBcIi5jb3Vyc2UtY29udGVudDpudGgtY2hpbGQoMylcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgICk7XG5cbiAgLy8gbHVuY2hTaW5nbGVcbiAgbGV0IGx1bmNoU2luZ2xlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjbHVuY2hTaW5nbGVcIixcbiAgICAgIHN0YXJ0OiBcIi09NjUwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiAgbHVuY2hTaW5nbGVcbiAgICAuZnJvbShcIi5zaW5nbGUtaGVhZGxpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIis9MC41XCIpXG4gICAgLmZyb20oXG4gICAgICBcIi5zaW5nbGUtY29udGVudDpudGgtY2hpbGQoMSlcIixcbiAgICAgIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcbiAgICAgIFwiLT0wLjVcIlxuICAgIClcbiAgICAuZnJvbShcbiAgICAgIFwiLnNpbmdsZS1jb250ZW50Om50aC1jaGlsZCgyKVwiLFxuICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFxuICAgICAgXCItPTAuNVwiXG4gICAgKTtcblxuICAvLyBkcmlua1xuICBsZXQgZHJpbmsgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNkcmlua1wiLFxuICAgICAgc3RhcnQ6IFwiLT02NTBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuICBkcmlua1xuICAgIC5mcm9tKFwiLmRyaW5rLWhlYWRsaW5lXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCIrPTAuNVwiKVxuICAgIC5mcm9tKFwiLmRyaW5rLWlubmVyXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTAuNVwiKTtcblxuICAvLyBob21lIGJ0blxuICBsZXQgaG9tZV9idG4gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5ob21lLWJ0blwiLFxuICAgICAgc3RhcnQ6IFwiLT01NTBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuICBob21lX2J0bi5mcm9tKFwiLmhvbWUtYnRuIGFcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSk7XG59KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvbiAvIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cblxuYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnNEaW5uZXIoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBNVUxUSSBMQU5HVUFHRSBTSVRFIFJFTEFURUQgU0NSSVBUU1xuIOODnuODq+ODgeiogOiqnuOCteOCpOODiOOBq+mWoumAo+OBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSA9IFwiYXN1bi5sYW5nXCIgOyAvL3RoZSBrZXkgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgbGFuZ3VhZ2VcbmxldCBjdXJyZW50TGFuZyA9IEdldFN0b3JhZ2VJdGVtcyhMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSkgfHwgXCJqcFwiOyAvL2NoZWNrcyB3aGV0aGVyIHRoZXJlcyBhIGxhbmd1YWdlIHByZWZmcmVkIGJ5ICBhIHVzZXIgd2hvIGhhcyB2aXNpdGVkIGJlZm9yZS4gaWYgbm90IGl0IHdpbGwgZGVmYXVsdCB0byBcImpwXCJcbi8vIGNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuc2V0U3RvcmFnZUl0ZW0oTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVksY3VycmVudExhbmcpO1xudG9nZ2xlTGFuZ3VhZ2UoY3VycmVudExhbmcpO1xudXBkYXRlTGFuZ0J0blRleHQoY3VycmVudExhbmcpO1xuYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lcigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIOODh+ODkOOCpOOCueOBlOOBqOOBruiqv+aVtOOBq+mWouOBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWRqdXN0TGFuZ0J0bkxvY2F0aW9uKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsdW5jaFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX21lbnVfbHVuY2hfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXMtMGMxNjU2XCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtMzJmODkwXCIsXCJzcmNfYXNzZXRzX2Nzc19tZW51X2x1bmNoX2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9sdW5jaC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9