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

/***/ "./src/assets/css/information/information.css":
/*!****************************************************!*\
  !*** ./src/assets/css/information/information.css ***!
  \****************************************************/
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

/***/ "./src/information.js":
/*!****************************!*\
  !*** ./src/information.js ***!
  \****************************/
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
/* harmony import */ var _assets_css_information_information_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/information/information.css */ "./src/assets/css/information/information.css");
/* harmony import */ var _assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/js/animations/loadingAnimation */ "./src/assets/js/animations/loadingAnimation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/eventlisters/toggleSpMenu */ "./src/assets/js/eventlisters/toggleSpMenu.js");
/* harmony import */ var _assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/js/animations/activateHeaderAnimations */ "./src/assets/js/animations/activateHeaderAnimations.js");
/* harmony import */ var _assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/js/animations/activateAccessTitleAnimations */ "./src/assets/js/animations/activateAccessTitleAnimations.js");













(0,_assets_js_animations_loadingAnimation__WEBPACK_IMPORTED_MODULE_9__["default"])();




gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__.ScrollTrigger);

(0,_assets_js_eventlisters_toggleSpMenu__WEBPACK_IMPORTED_MODULE_11__.toggleSpMenu)();

// 出現アニメーション
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
  scrollTrigger: {
    trigger: ".information-page",
    start: "-=500px",
    scrub: false,
  },
});
kv_title.from(".under-kv", { opacity: 0, duration: 2 , delay: 3});

let information_top = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
  scrollTrigger: {
    trigger: "#information-top",
    start: "-=500px",
    scrub: false,
  },
});
information_top
  .from(".information-top-text", { y: 30, opacity: 0, duration: 2 }, "+=3")
  .from(".room-rent", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".information-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")

let information_bottom = gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.timeline({
  scrollTrigger: {
    trigger: "#information-bottom",
    start: "-=500px",
    scrub: false,
  },
});
information_bottom
  .from(".information-bottom-title", { y: 30, opacity: 0, duration: 2 })
  .from("table", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
  .from(".home-btn", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

/*--------------------------------------------
   Header PC animation / ヘッダーPCアニメーション
---------------------------------------------*/
(0,_assets_js_animations_activateHeaderAnimations__WEBPACK_IMPORTED_MODULE_12__["default"])();



(0,_assets_js_animations_activateAccessTitleAnimations__WEBPACK_IMPORTED_MODULE_13__.activateAccessTitleAnimationsFeature)();

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
/******/ 			"information": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-45994d"], () => (__webpack_require__("./src/information.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uYTcxNWQ3OWU4YzVmYzMzOTgxNzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUN1QjtBQUNIO0FBQ2hELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFMUI7QUFDUCxzQkFBc0Isc0NBQUk7QUFDMUI7QUFDQSxFQUFFLGlFQUFTOztBQUVYLHNCQUFzQixzQ0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0QsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQixzQ0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVPO0FBQ1Asc0JBQXNCLHNDQUFJO0FBQzFCO0FBQ0EsRUFBRSxpRUFBUzs7QUFFWCxzQkFBc0Isc0NBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELG9DQUFvQyx5QkFBeUI7QUFDN0Qsb0NBQW9DLHlCQUF5QjtBQUM3RCxvQ0FBb0MseUJBQXlCO0FBQzdELENBQUM7O0FBRUQ7QUFDQSxzQkFBc0Isc0NBQUk7QUFDMUI7QUFD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Q0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3M/MGUzYyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzPzZjMjkiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2LmNzcz81NTQwIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzcz9iN2ZiIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzPzRiN2QiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2hvbWUvYWNjZXNzLmNzcz82NjlmIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hbmltYXRpb25zLmNzcz82N2FhIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY3NzPzA4ZjIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2luZm9ybWF0aW9uLmpzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYS1zdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Etc3VuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hLXN1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHNwbGl0VGV4dCBmcm9tIFwiLi4vb3RoZXJsb2dpYy9zcGxpdFRleHRcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9ucygpe1xuICAgIGxldCBhY2Nlc3NUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuYWNjZXNzVGl0bGUuYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgc3BsaXRUZXh0KFwiYWNjZXNzLWVuZ1wiLCBcImFjY2Vzcy1lbmctbGV0dGVyXCIpO1xuXG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bFxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIlwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmFjY2Vzc1RpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bC5mcm9tKFwiLmFjY2Vzcy1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEsXG4gIH0pO1xufSk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zRGlubmVyKCl7XG4gICAgbGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG5hY2Nlc3NUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICBzcGxpdFRleHQoXCJhY2Nlc3MtZW5nXCIsIFwiYWNjZXNzLWVuZy1sZXR0ZXJcIik7XG5cbiAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuICBhY2Nlc3NUaXRsZXRsXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIClcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE5XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjIyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbn0pO1xuXG5hY2Nlc3NUaXRsZS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGR1cmF0aW9uOiAxLFxuICB9KTtcbn0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0ZlYXR1cmUoKXtcbiAgICBsZXQgYWNjZXNzVGl0bGUgPSBnc2FwLm1hdGNoTWVkaWEoKTtcbmFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gIHNwbGl0VGV4dChcImFjY2Vzcy1lbmdcIiwgXCJhY2Nlc3MtZW5nLWxldHRlclwiKTtcblxuICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxldGxcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjMwXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMzFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjMyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpXG4gICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMzRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjM1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCI8MTAlXCIpO1xufSk7XG5cbmFjY2Vzc1RpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGV0bC5mcm9tKFwiLmFjY2Vzcy1lbmdcIiwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEsXG4gIH0pO1xufSk7XG5cbn0iLCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpe1xuICAgIGxldCBwY0hlYWRlckFuaW0gPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuICAgIHBjSGVhZGVyQW5pbS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAgIFxuICAgICAgY29uc3Qgc2hvd0FuaW0gPSBnc2FwLmZyb20oJy5oZWFkZXInLCB7IFxuICAgICAgICB5UGVyY2VudDogLTE1MCxcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogMC4yXG4gICAgICB9KS5wcm9ncmVzcygxKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgICAgZW5kOiBcIm1heFwiLFxuICAgICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgICBzZWxmLmRpcmVjdGlvbiA9PT0gLTEgPyBzaG93QW5pbS5wbGF5KCkgOiBzaG93QW5pbS5yZXZlcnNlKClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmNvbnN0IGxldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNwbGl0dGV4dF0nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2FkaW5nQW5pbWF0aW9uKCl7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoZSk9PntcbiAgICBsZXQgaW50cm8gPSBnc2FwLnRpbWVsaW5lKClcbiAgXG4gICAgaW50cm9cbiAgLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0nLHt5OicxMDAlJyxkZWxheToyfSlcbiAgLmZyb20oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OicxMDAlJ30pXG4gIC8vIC5zZXQoJy50cmFuc2l0aW9uLWl0ZW0nLHt5OictMTAwJSd9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pbWcnLHtvcGFjaXR5OjB9KVxuICAuc2V0KCcudHJhbnNpdGlvbi1pbWcnLHt4OlwiMTAwJVwiICx9KVxuICAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHt5OictMTAwJSd9KVxuICAudG8oJy50cmFuc2l0aW9uLWl0ZW0td2hpdGUnLHtkaXNwbGF5Olwibm9uZVwifSlcbiAgLnNldCgnLnRyYW5zaXRpb24taXRlbScse2Rpc3BsYXk6XCJub25lXCJ9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBhbmltYXRlVGV4dCgpe1xuICBsZXQgdGV4dHRsID0gZ3NhcC50aW1lbGluZSgpXG5cblxuICB0ZXh0dGxcbiAgLmZyb20oJy5rZXl2aXN1YWxfX3RleHQtLWpwJyx7b3BhY2l0eTowfSlcblxufVxuLy8gZ3NhcC5mcm9tKFwiLmxldHRlclwiLHt5OjEwMCxkdXJhdGlvbjoyfSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVZpc2liaWxpdHkoKXtcbiAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVkJyk7XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyogc3BtZW5144KS6ZaL6ZaJ44GZ44KLICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BNZW51KCkge1xuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNjbG9zZU1lbnVCdG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKCcjc3BOYXZNZW51JykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICQoJy5tZWF0YmFsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkKCcjc3BOYXZNZW51JykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJyNzcE5hdk1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0VGV4dChjbGFzc25hbWUsc3Bhbk5hbWUpe1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XG5jb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdCgnPGJyPicpO1xuXG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIG9yaWdpbmFsIGNvbnRlbnRcbiAgICBsZXQgY2xhc3NDb3VudGVyID0gMTsgLy8gQ291bnRlciBmb3IgdW5pcXVlIGNsYXNzIG5hbWVzXG5cbiAgICBmcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmcmFnbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZyYWdtZW50V3JhcHBlci5pbm5lckhUTUwgPSBmcmFnbWVudDtcblxuICAgICAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICAgICAgZnJhZ21lbnRTcGFucy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdCgnJyk7XG4gICAgICAgICAgbGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgJHtzcGFuTmFtZX0ke2NsYXNzQ291bnRlcn1gKTtcbiAgICAgICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjbGFzc0NvdW50ZXIrKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmRleCA8IGZyYWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jc3NcIjtcbmltcG9ydCBzZXRMb2FkaW5nQW5pbWF0aW9uIGZyb20gXCIuL2Fzc2V0cy9qcy9hbmltYXRpb25zL2xvYWRpbmdBbmltYXRpb25cIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5zZXRMb2FkaW5nQW5pbWF0aW9uKCk7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdG9nZ2xlU3BNZW51IH0gZnJvbSBcIi4vYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnVcIjtcbmltcG9ydCBhY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMgZnJvbSBcIi4vYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0ZlYXR1cmUgfSBmcm9tIFwiLi9hc3NldHMvanMvYW5pbWF0aW9ucy9hY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc1wiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxudG9nZ2xlU3BNZW51KCk7XG5cbi8vIOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODs1xubGV0IGt2X3RpdGxlID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5pbmZvcm1hdGlvbi1wYWdlXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xua3ZfdGl0bGUuZnJvbShcIi51bmRlci1rdlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyICwgZGVsYXk6IDN9KTtcblxubGV0IGluZm9ybWF0aW9uX3RvcCA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCIjaW5mb3JtYXRpb24tdG9wXCIsXG4gICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgIHNjcnViOiBmYWxzZSxcbiAgfSxcbn0pO1xuaW5mb3JtYXRpb25fdG9wXG4gIC5mcm9tKFwiLmluZm9ybWF0aW9uLXRvcC10ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiKz0zXCIpXG4gIC5mcm9tKFwiLnJvb20tcmVudFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4gIC5mcm9tKFwiLmluZm9ybWF0aW9uLXRvcC1pbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuXG5sZXQgaW5mb3JtYXRpb25fYm90dG9tID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIiNpbmZvcm1hdGlvbi1ib3R0b21cIixcbiAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgc2NydWI6IGZhbHNlLFxuICB9LFxufSk7XG5pbmZvcm1hdGlvbl9ib3R0b21cbiAgLmZyb20oXCIuaW5mb3JtYXRpb24tYm90dG9tLXRpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pXG4gIC5mcm9tKFwidGFibGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuICAuZnJvbShcIi5ob21lLWJ0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBIZWFkZXIgUEMgYW5pbWF0aW9uIC8g44OY44OD44OA44O8UEPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hY3RpdmF0ZUhlYWRlckFuaW1hdGlvbnMoKTtcblxuXG5cbmFjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zRmVhdHVyZSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5mb3JtYXRpb25cIjogMCxcblx0XCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Ffc3VuXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXMtMGMxNjU2XCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25faGVhZGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmF2X2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fcmVzZXRfY3MtNDU5OTRkXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZm9ybWF0aW9uLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=