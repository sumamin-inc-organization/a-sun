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

/***/ "./src/assets/css/news/news_details.css":
/*!**********************************************!*\
  !*** ./src/assets/css/news/news_details.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/animations/activateAccessTitleAnimations.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/animations/activateAccessTitleAnimations.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAccessTitleAnimations: () => (/* binding */ activateAccessTitleAnimations),
/* harmony export */   activateAccessTitleAnimationsDinner: () => (/* binding */ activateAccessTitleAnimationsDinner),
/* harmony export */   activateAccessTitleAnimationsFeature: () => (/* binding */ activateAccessTitleAnimationsFeature)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _otherlogic_splitText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherlogic/splitText */ "./src/assets/js/otherlogic/splitText.js");



gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

function activateAccessTitleAnimations(){
    let accessTitle = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  (0,_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_0__["default"])("access-eng", "access-eng-letter");

  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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

}

function activateAccessTitleAnimationsDinner(){
    let accessTitle = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  (0,_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_0__["default"])("access-eng", "access-eng-letter");

  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
    scrollTrigger: {
      trigger: "#access",
      start: "-=500px",
      scrub: false,
    },
  });

  accessTitletl
    .from(".access-eng-letter18", { opacity: 0, duration: 1 }, )
    .from(".access-eng-letter19", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter20", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter21", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter22", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter23", { opacity: 0, duration: 1 }, "<10%");
});

accessTitle.add("(max-width: 767px)", () => {
  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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

}

function activateAccessTitleAnimationsFeature(){
    let accessTitle = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.matchMedia();
accessTitle.add("(min-width: 768px)", () => {
  (0,_otherlogic_splitText__WEBPACK_IMPORTED_MODULE_0__["default"])("access-eng", "access-eng-letter");

  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
    scrollTrigger: {
      trigger: "#access",
      start: "-=500px",
      scrub: false,
    },
  });

  accessTitletl
    .from(".access-eng-letter30", { opacity: 0, duration: 1 }, )
    .from(".access-eng-letter31", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter32", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter33", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter34", { opacity: 0, duration: 1 }, "<10%")
    .from(".access-eng-letter35", { opacity: 0, duration: 1 }, "<10%");
});

accessTitle.add("(max-width: 767px)", () => {
  let accessTitletl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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

}

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

/***/ "./src/news_details.js":
/*!*****************************!*\
  !*** ./src/news_details.js ***!
  \*****************************/
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
/* harmony import */ var _assets_css_news_news_details_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/news/news_details.css */ "./src/assets/css/news/news_details.css");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");
/* harmony import */ var _assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/animations/activateAccessTitleAnimations */ "./src/assets/js/animations/activateAccessTitleAnimations.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");












(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();





gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_14__.ScrollTrigger);

(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_10__.toggleSpMenu)();

// 出現アニメーション
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.timeline({
  scrollTrigger: {
    trigger: ".news-details-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2 , delay: 3});

let news_details = gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.timeline({
  scrollTrigger: {
    trigger: "#news-details",
    start: "-=500px",
    scrub: false,
  },
});
news_details
  .from(".return-btn", { y: 30, opacity: 0, duration: 2 }, "+=3")
  .from(".news-inner", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".news-header", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".news-main", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let home_btn = gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.timeline({
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
(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_12__["default"])();


(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_11__.activateAccessTitleAnimationsFeature)();

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
/******/ 			"news_details": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d"], () => (__webpack_require__("./src/news_details.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c19kZXRhaWxzLjVlYzE5NTU0NjY3NTI2MzlhYjk4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDdUI7QUFDSDtBQUNoRCxzQ0FBSSxnQkFBZ0IsNkRBQWE7O0FBRTFCO0FBQ1Asc0JBQXNCLHNDQUFJO0FBQzFCO0FBQ0EsRUFBRSxpRUFBUzs7QUFFWCxzQkFBc0Isc0NBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELENBQUM7O0FBRUQ7QUFDQSxzQkFBc0Isc0NBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFTztBQUNQLHNCQUFzQixzQ0FBSTtBQUMxQjtBQUNBLEVBQUUsaUVBQVM7O0FBRVgsc0JBQXNCLHNDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLHNDQUFJO0FBQzFCO0FB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c3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3M/MGUzYyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzPzZjMjkiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzcz81NTQwIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzcz9iN2ZiIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzPzRiN2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzcz82NjlmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzcz82N2FhIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvbmV3cy9uZXdzX2RldGFpbHMuY3NzPzE4ZGYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL25ld3NfZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBzcGxpdFRleHQgZnJvbSBcIi4uL290aGVybG9naWMvc3BsaXRUZXh0XCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnMoKXtcbiAgICBsZXQgYWNjZXNzVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImFjY2Vzcy1lbmdcIiwgXCJhY2Nlc3MtZW5nLWxldHRlclwiKTtcblxuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGxcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE3XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5hY2Nlc3NUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0Rpbm5lcigpe1xuICAgIGxldCBhY2Nlc3NUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuYWNjZXNzVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiYWNjZXNzLWVuZ1wiLCBcImFjY2Vzcy1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bFxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCApXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG59KTtcblxuYWNjZXNzVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBhY2Nlc3NUaXRsZXRsLmZyb20oXCIuYWNjZXNzLWVuZ1wiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMSxcbiAgfSk7XG59KTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnNGZWF0dXJlKCl7XG4gICAgbGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5hY2Nlc3NUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJhY2Nlc3MtZW5nXCIsIFwiYWNjZXNzLWVuZy1sZXR0ZXJcIik7XG5cbiAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBhY2Nlc3NUaXRsZXRsXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIClcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjMxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMzNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjM0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5hY2Nlc3NUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG59IiwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKXtcbiAgICBsZXQgcGNIZWFkZXJBbmltID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5cbiAgICBwY0hlYWRlckFuaW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgICBcbiAgICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcC5mcm9tKCcuaGVhZGVyJywgeyBcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMlxuICAgICAgfSkucHJvZ3Jlc3MoMSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAgIGVuZDogXCJtYXhcIixcbiAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG59IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5jb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcGxpdHRleHRdJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZ0FuaW1hdGlvbigpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGUpPT57XG4gICAgbGV0IGludHJvID0gZ3NhcC50aW1lbGluZSgpXG4gIFxuICAgIGludHJvXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtJyx7eTonMTAwJScsZGVsYXk6Mn0pXG4gIC5mcm9tKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonMTAwJSd9KVxuICAvLyAuc2V0KCcudHJhbnNpdGlvbi1pdGVtJyx7eTonLTEwMCUnfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7b3BhY2l0eTowfSlcbiAgLnNldCgnLnRyYW5zaXRpb24taW1nJyx7eDpcIjEwMCVcIiAsfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7eTonLTEwMCUnfSlcbiAgLnRvKCcudHJhbnNpdGlvbi1pdGVtLXdoaXRlJyx7ZGlzcGxheTpcIm5vbmVcIn0pXG4gIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoKXtcbiAgbGV0IHRleHR0bCA9IGdzYXAudGltZWxpbmUoKVxuXG5cbiAgdGV4dHRsXG4gIC5mcm9tKCcua2V5dmlzdWFsX190ZXh0LS1qcCcse29wYWNpdHk6MH0pXG5cbn1cbi8vIGdzYXAuZnJvbShcIi5sZXR0ZXJcIix7eToxMDAsZHVyYXRpb246Mn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gIGxldHRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlZCcpO1xufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qIHNwbWVudeOCkumWi+mWieOBmeOCiyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNwTWVudSgpIHtcbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjY2xvc2VNZW51QnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKCcubWVhdGJhbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJCgnI3NwTmF2TWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3BOYXZNZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFRleHQoY2xhc3NuYW1lLHNwYW5OYW1lKXtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xuY29uc3QgZnJhZ21lbnRzID0gdGV4dENvbnRhaW5lci5pbm5lckhUTUwuc3BsaXQoJzxicj4nKTtcblxuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBvcmlnaW5hbCBjb250ZW50XG4gICAgbGV0IGNsYXNzQ291bnRlciA9IDE7IC8vIENvdW50ZXIgZm9yIHVuaXF1ZSBjbGFzcyBuYW1lc1xuXG4gICAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZnJhZ21lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmcmFnbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50U3BhbnMgPSBmcmFnbWVudFdyYXBwZXIuY2hpbGROb2RlcztcbiAgICAgIGZyYWdtZW50U3BhbnMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgY29uc3QgbGV0dGVycyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQoJycpO1xuICAgICAgICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoYCR7c3Bhbk5hbWV9JHtjbGFzc0NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY2xhc3NDb3VudGVyKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kZXggPCBmcmFnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgfVxuICAgIH0pO1xuXG59IiwiaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvbmV3cy9uZXdzX2RldGFpbHMuY3NzXCI7XG5pbXBvcnQgc2V0TG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9sb2FkaW5nQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuc2V0TG9hZGluZ0FuaW1hdGlvbigpO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IHRvZ2dsZVNwTWVudSB9IGZyb20gXCIuL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvdG9nZ2xlU3BNZW51XCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0ZlYXR1cmUgfSBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc1wiO1xuaW1wb3J0IGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucyBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnNcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxudG9nZ2xlU3BNZW51KCk7XG5cbi8vIOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODs1xubGV0IGt2X3RpdGxlID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5uZXdzLWRldGFpbHMtcGFnZVwiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcbmt2X3RpdGxlLmZyb20oXCIudW5kZXIta3ZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiAsIGRlbGF5OiAzfSk7XG5cbmxldCBuZXdzX2RldGFpbHMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiI25ld3MtZGV0YWlsc1wiLFxuICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICBzY3J1YjogZmFsc2UsXG4gIH0sXG59KTtcbm5ld3NfZGV0YWlsc1xuICAuZnJvbShcIi5yZXR1cm4tYnRuXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiKz0zXCIpXG4gIC5mcm9tKFwiLm5ld3MtaW5uZXJcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuICAuZnJvbShcIi5uZXdzLWhlYWRlclwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4gIC5mcm9tKFwiLm5ld3MtbWFpblwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpO1xuXG5sZXQgaG9tZV9idG4gPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLmhvbWUtYnRuXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuaG9tZV9idG4uZnJvbShcIi5ob21lLWJ0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgSGVhZGVyIFBDIGFuaW1hdGlvbiAvIOODmOODg+ODgOODvFBD44Ki44OL44Oh44O844K344On44OzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zKCk7XG5cblxuYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnNGZWF0dXJlKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJuZXdzX2RldGFpbHNcIjogMCxcblx0XCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXMtMGMxNjU2XCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL25ld3NfZGV0YWlscy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9