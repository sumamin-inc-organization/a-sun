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

/***/ "./src/assets/css/news/news.css":
/*!**************************************!*\
  !*** ./src/assets/css/news/news.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
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
/* harmony import */ var _assets_css_news_news_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/news/news.css */ "./src/assets/css/news/news.css");
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












(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();











gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__.ScrollTrigger);

(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__.toggleSpMenu)();

let kv_title = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
        trigger: ".news-page",
        start: "-=500px",
        scrub: false,
    },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2 , delay: 3});


let mm = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // news title
    let news_title = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
        scrollTrigger: {
        trigger: "#news-top",
        start: "-=500px",
        scrub: false,
        },
    });

    news_title.from(".news-content", { y: 30, opacity: 0, duration: 2 }, "+=3");

    // news pagination
    let news_pagination = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
        scrollTrigger: {
        trigger: ".news-pagination",
        start: "-=740px",
        scrub: false,
        },
    });

    news_pagination.from(".news-pagination", { y: 30, opacity: 0, duration: 1 });
});

/* pc */
mm.add("(min-width: 768px)", () => {
    // news content
    let news_title = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
        scrollTrigger: {
        trigger: "#news-top",
        start: "-=500px",
        scrub: false,
        },
    });

    news_title.from(".news-content", { y: 30, opacity: 0, duration: 2 }, "+=3");
     // news pagination
    let news_pagination = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
        scrollTrigger: {
        trigger: ".news-pagination",
        start: "-=680px",
        scrub: false,
        },
    });

    news_pagination.from(".news-pagination", { y: 30, opacity: 0, duration: 1 });
});

let home_btn = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.timeline({
    scrollTrigger: {
        trigger: ".home-btn",
        start: "-=500px",
        scrub: false,
    },
});
home_btn.from(".home-btn", { y: 30, opacity: 0, duration: 2 });

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_11__["default"])();


(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_12__.activateAccessTitleAnimationsFeature)();

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
/******/ 			"news": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-32f890"], () => (__webpack_require__("./src/news.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzcz8wZTNjIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvbmV3cy9uZXdzLmNzcz8xNGQ1Iiwid2VicGFjazovL2Etc3VuLy4vc3JjL25ld3MuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYW5pbWF0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FjY2Vzcy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9uZXdzL25ld3MuY3NzXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuc2V0TG9hZGluZ0FuaW1hdGlvbigpO1xuXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdG9nZ2xlU3BNZW51IH0gZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnVcIjtcbmltcG9ydCBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0ZlYXR1cmUgfSBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NldFN0b3JhZ2VcIjtcbmltcG9ydCB0b2dnbGVMYW5ndWFnZSBmcm9tIFwiLi9hc3NldHMvanMvb3RoZXJsb2dpYy90b2dnbGVMYW5ndWFnZVwiO1xuaW1wb3J0IHVwZGF0ZUxhbmdCdG5UZXh0IGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3VwZGF0ZUxhbmdCdG5UZXh0XCI7XG5pbXBvcnQgYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9hc3NldHMvanMvZXZlbnRsaXN0ZXJzL2xhbmdCdG5FdmVudGxpc3RlbmVyXCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBhZGp1c3RMYW5nQnRuTG9jYXRpb24gZnJvbSBcIi4vYXNzZXRzL2pzL290aGVybG9naWMvYWRqdXN0TGFuZ0J0bkxvY2F0aW9uXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG50b2dnbGVTcE1lbnUoKTtcblxubGV0IGt2X3RpdGxlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5uZXdzLXBhZ2VcIixcbiAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xua3ZfdGl0bGUuZnJvbShcIi51bmRlci1rdlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyICwgZGVsYXk6IDN9KTtcblxuXG5sZXQgbW0gPSBnc2FwLm1hdGNoTWVkaWEoKTtcbi8qIHNwICovXG5tbS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICAgIC8vIG5ld3MgdGl0bGVcbiAgICBsZXQgbmV3c190aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI25ld3MtdG9wXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgbmV3c190aXRsZS5mcm9tKFwiLm5ld3MtY29udGVudFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIis9M1wiKTtcblxuICAgIC8vIG5ld3MgcGFnaW5hdGlvblxuICAgIGxldCBuZXdzX3BhZ2luYXRpb24gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5uZXdzLXBhZ2luYXRpb25cIixcbiAgICAgICAgc3RhcnQ6IFwiLT03NDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXdzX3BhZ2luYXRpb24uZnJvbShcIi5uZXdzLXBhZ2luYXRpb25cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSk7XG59KTtcblxuLyogcGMgKi9cbm1tLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgLy8gbmV3cyBjb250ZW50XG4gICAgbGV0IG5ld3NfdGl0bGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNuZXdzLXRvcFwiLFxuICAgICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIG5ld3NfdGl0bGUuZnJvbShcIi5uZXdzLWNvbnRlbnRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCIrPTNcIik7XG4gICAgIC8vIG5ld3MgcGFnaW5hdGlvblxuICAgIGxldCBuZXdzX3BhZ2luYXRpb24gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5uZXdzLXBhZ2luYXRpb25cIixcbiAgICAgICAgc3RhcnQ6IFwiLT02ODBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXdzX3BhZ2luYXRpb24uZnJvbShcIi5uZXdzLXBhZ2luYXRpb25cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSk7XG59KTtcblxubGV0IGhvbWVfYnRuID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5ob21lLWJ0blwiLFxuICAgICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5ob21lX2J0bi5mcm9tKFwiLmhvbWUtYnRuXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBIZWFkZXIgUEMgYW5pbWF0aW9uIC8g44OY44OD44OA44O8UEPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKTtcblxuXG5hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0ZlYXR1cmUoKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBNVUxUSSBMQU5HVUFHRSBTSVRFIFJFTEFURUQgU0NSSVBUU1xuIOODnuODq+ODgeiogOiqnuOCteOCpOODiOOBq+mWoumAo+OBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSA9IFwiYXN1bi5sYW5nXCIgOyAvL3RoZSBrZXkgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgbGFuZ3VhZ2VcbmxldCBjdXJyZW50TGFuZyA9IEdldFN0b3JhZ2VJdGVtcyhMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSkgfHwgXCJqcFwiOyAvL2NoZWNrcyB3aGV0aGVyIHRoZXJlcyBhIGxhbmd1YWdlIHByZWZmcmVkIGJ5ICBhIHVzZXIgd2hvIGhhcyB2aXNpdGVkIGJlZm9yZS4gaWYgbm90IGl0IHdpbGwgZGVmYXVsdCB0byBcImpwXCJcbi8vIGNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuc2V0U3RvcmFnZUl0ZW0oTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVksY3VycmVudExhbmcpO1xudG9nZ2xlTGFuZ3VhZ2UoY3VycmVudExhbmcpO1xudXBkYXRlTGFuZ0J0blRleHQoY3VycmVudExhbmcpO1xuYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lcigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIOODh+ODkOOCpOOCueOBlOOBqOOBruiqv+aVtOOBq+mWouOBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWRqdXN0TGFuZ0J0bkxvY2F0aW9uKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm5ld3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYV9zdW5cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpcy0wYzE2NTZcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9oZWFkZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYXZfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9yZXNldF9jcy0zMmY4OTBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbmV3cy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9