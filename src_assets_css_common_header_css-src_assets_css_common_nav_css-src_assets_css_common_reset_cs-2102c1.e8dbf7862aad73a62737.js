"use strict";
(self["webpackChunka_sun"] = self["webpackChunka_sun"] || []).push([["src_assets_css_common_header_css-src_assets_css_common_nav_css-src_assets_css_common_reset_cs-2102c1"],{

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

function activateAccessTitleAnimations() {
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

function activateAccessTitleAnimationsDinner() {
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
      .from(".access-eng-letter18", { opacity: 0, duration: 1 })
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

function activateAccessTitleAnimationsFeature() {
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
      .from(".access-eng-letter30", { opacity: 0, duration: 1 })
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

function activateHeaderAnimations() {
  let pcHeaderAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.matchMedia();

  pcHeaderAnim.add("(min-width: 768px)", () => {
    const showAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap
      .from(".header", {
        yPercent: -150,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });
}


/***/ }),

/***/ "./src/assets/js/eventlisters/langBtnEventlistener.js":
/*!************************************************************!*\
  !*** ./src/assets/js/eventlisters/langBtnEventlistener.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateLangBtnEventListener)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherlogic/getStorage */ "./src/assets/js/otherlogic/getStorage.js");
/* harmony import */ var _otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otherlogic/updateLangBtnText */ "./src/assets/js/otherlogic/updateLangBtnText.js");
/* harmony import */ var _otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../otherlogic/setStorage */ "./src/assets/js/otherlogic/setStorage.js");
/* harmony import */ var _otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../otherlogic/toggleLanguage */ "./src/assets/js/otherlogic/toggleLanguage.js");






function determineBtnClicked(element, key) {
  const LANGUAGE = element.dataset.languageSelector;
  (0,_otherlogic_setStorage__WEBPACK_IMPORTED_MODULE_2__["default"])(key, LANGUAGE);
  if (LANGUAGE === "jp") {
    (0,_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_1__["default"])("jp");
  } else if (LANGUAGE === "en") {
    (0,_otherlogic_updateLangBtnText__WEBPACK_IMPORTED_MODULE_1__["default"])("en");
  }
}

function activateLangBtnEventListener() {
  let langBtn = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.matchMedia();

  langBtn.add("(min-width: 768px)", () => {
    const btn = document.querySelector(".dropdown__btn");
    let SELECTORS = document.querySelectorAll("[data-language-selector]");
    let JP_BTN = document.querySelector('[data-language-selector="jp"]');
    let EN_BTN = document.querySelector('[data-language-selector="en"]');
    const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang";
    let currentLang = (0,_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(LOCAL_STORAGE_LANGUAGE_KEY);

    SELECTORS.forEach((selector) => {
      selector.addEventListener("click", (e) => {
        e.preventDefault();
        const clicked = e.target;
        determineBtnClicked(clicked, LOCAL_STORAGE_LANGUAGE_KEY);
        let currentLang = (0,_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(LOCAL_STORAGE_LANGUAGE_KEY);
        (0,_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_3__["default"])(currentLang);
      });
    });
  });
  langBtn.add("(max-width: 767px)", () => {
    const btn = document.querySelector(".dropdown__btn");
    const dropdownContent = document.querySelector(".dropdown__content");
    const jpBtn = document.querySelector('[data-language-selector="jp"]');
    const enBtn = document.querySelector('[data-language-selector="en"]');
    const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang";

    // Function to handle dropdown toggle
    function toggleDropdown() {
      dropdownContent.style.display =
        dropdownContent.style.display === "none" ? "flex" : "none";
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        dropdownContent.style.display = "none";
      }
    });

    // Event listener for dropdown button
    btn.addEventListener("click", function (e) {
      toggleDropdown();
    });

    // Event listeners for language options
    [jpBtn, enBtn].forEach((selector) => {
      selector.addEventListener("click", function (e) {
        e.preventDefault();
        determineBtnClicked(this, LOCAL_STORAGE_LANGUAGE_KEY);
        let currentLang = (0,_otherlogic_getStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(LOCAL_STORAGE_LANGUAGE_KEY);
        (0,_otherlogic_toggleLanguage__WEBPACK_IMPORTED_MODULE_3__["default"])(currentLang);
        dropdownContent.style.display = "none"; // Hide dropdown after selecting a language
      });
    });
  });
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#closeMenuBtn").on("click", function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#spNavMenu").hasClass("open")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#spNavMenu").removeClass("open");
      }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".meatball-btn").on("click", function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()("#spNavMenu").hasClass("open")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#spNavMenu").addClass("open");
      }
    });
  });
}


/***/ }),

/***/ "./src/assets/js/otherlogic/adjustLangBtnLocation.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/otherlogic/adjustLangBtnLocation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ adjustLangBtnLocation)
/* harmony export */ });
function adjustLangBtnLocation() {
  // iphoneで見たときの位置を調整する
  if (navigator.userAgent.indexOf("iPhone") > 0) {
    let dropdown = document.querySelector(".dropdown-sp");
    dropdown.style.marginRight = "-8px";
  }
}


/***/ }),

/***/ "./src/assets/js/otherlogic/changeHtmlLanguageAttribute.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/otherlogic/changeHtmlLanguageAttribute.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeLangAttribute)
/* harmony export */ });
function changeLangAttribute(language){
    if(language === "jp"){
        document.documentElement.lang = 'ja';
    }
    else if (language === "en"){
        document.documentElement.lang = 'en';
    }
}

/***/ }),

/***/ "./src/assets/js/otherlogic/getStorage.js":
/*!************************************************!*\
  !*** ./src/assets/js/otherlogic/getStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetStorageItems)
/* harmony export */ });
//get items from a storage and parse it
// ストレージからアイテムを取得し、解析します

function GetStorageItems(key) {
  return JSON.parse(localStorage.getItem(key));
}


/***/ }),

/***/ "./src/assets/js/otherlogic/setStorage.js":
/*!************************************************!*\
  !*** ./src/assets/js/otherlogic/setStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStorageItem)
/* harmony export */ });
//save objects in the storage as strings
// オブジェクトを文字列としてストレージに保存します

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to store item in localStorage:", error);
  }
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
function splitText(classname, spanName) {
  const textContainer = document.querySelector(`.${classname}`);
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
          span.classList.add(`${spanName}${classCounter}`);
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
}


/***/ }),

/***/ "./src/assets/js/otherlogic/toggleLanguage.js":
/*!****************************************************!*\
  !*** ./src/assets/js/otherlogic/toggleLanguage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleLanguage)
/* harmony export */ });
/* harmony import */ var _changeHtmlLanguageAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeHtmlLanguageAttribute */ "./src/assets/js/otherlogic/changeHtmlLanguageAttribute.js");


const JP = document.querySelectorAll('[data-lang="jp"]');
const EN = document.querySelectorAll('[data-lang="en"]');
const ALL = document.querySelectorAll("[data-lang]");

function removeClasses() {
  ALL.forEach((element) => {
    element.classList.remove("hidden");
  });
}



function toggleLanguage(current) {
  removeClasses();
  (0,_changeHtmlLanguageAttribute__WEBPACK_IMPORTED_MODULE_0__["default"])(current);
  const ALL = document.querySelectorAll("[data-lang]");
  ALL.forEach((element) => {
    if (current === "jp" && element.dataset.lang === "en") {
      element.classList.add("hidden"); // Add 'hidden' class to elements with lang "jp" if current is "jp"
    } else if (current === "en" && element.dataset.lang === "jp") {
      element.classList.add("hidden"); // Add 'hidden' class to elements with lang "en" if current is "en"
    }
  });
}


/***/ }),

/***/ "./src/assets/js/otherlogic/updateLangBtnText.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/otherlogic/updateLangBtnText.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLangBtnText)
/* harmony export */ });
const btns = document.querySelectorAll(".dropdown__btn");

function updateLangBtnText(currentLang) {
  btns.forEach((btn) => {
    btn.textContent = currentLang.toUpperCase();
  });
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Fzc2V0c19jc3NfY29tbW9uX2hlYWRlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hdl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX3Jlc2V0X2NzLTIxMDJjMS5lOGRiZjc4NjJhYWQ3M2E2MjczNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3VCO0FBQ0g7QUFDaEQsc0NBQUksZ0JBQWdCLDZEQUFhOztBQUUxQjtBQUNQLG9CQUFvQixzQ0FBSTtBQUN4QjtBQUNBLElBQUksaUVBQVM7O0FBRWIsd0JBQXdCLHNDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxzQ0FBc0MseUJBQXlCO0FBQy9ELHNDQUFzQyx5QkFBeUI7QUFDL0Qsc0NBQXNDLHlCQUF5QjtBQUMvRCxzQ0FBc0MseUJBQXlCO0FBQy9ELHNDQUFzQyx5QkFBeUI7QUFDL0Qsc0NBQXNDLHlCQUF5QjtBQUMvRCxHQUFHOztBQUVIO0FBQ0Esd0JBQXdCLHNDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTztBQUNQLG9CQUFvQixzQ0FBSTtBQUN4QjtBQUNBLElBQUksaUVBQVM7O0FBRWIsd0JBQXdCLHNDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxzQ0FBc0MseUJBQXlCO0FBQy9ELHNDQUFzQyx5QkFBeUI7QUFDL0Qsc0NBQXNDLHlCQUF5QjtBQUMvRCxzQ0FBc0MseUJBQXlCO0FBQy9ELHNDQUFzQyx5QkFBeUI7QUFDL0Qsc0NB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O0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JnRTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7OztBQUllO0FBQ2Y7QUFDQSxFQUFFLHdFQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLHVDQUF1QztBQUN2QztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2hlYWRlci5jc3M/NmMyOSIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9uYXYuY3NzPzU1NDAiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzcz9jOGUyIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS9hY2Nlc3MuY3NzPzY2OWYiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2Nzcy9ob21lL2FuaW1hdGlvbnMuY3NzPzY3YWEiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2FuaW1hdGlvbnMvYWN0aXZhdGVIZWFkZXJBbmltYXRpb25zLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9ldmVudGxpc3RlcnMvbGFuZ0J0bkV2ZW50bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL2V2ZW50bGlzdGVycy90b2dnbGVTcE1lbnUuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvYWRqdXN0TGFuZ0J0bkxvY2F0aW9uLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL2NoYW5nZUh0bWxMYW5ndWFnZUF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9hLXN1bi8uL3NyYy9hc3NldHMvanMvb3RoZXJsb2dpYy9nZXRTdG9yYWdlLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3NldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYS1zdW4vLi9zcmMvYXNzZXRzL2pzL290aGVybG9naWMvc3BsaXRUZXh0LmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3RvZ2dsZUxhbmd1YWdlLmpzIiwid2VicGFjazovL2Etc3VuLy4vc3JjL2Fzc2V0cy9qcy9vdGhlcmxvZ2ljL3VwZGF0ZUxhbmdCdG5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBzcGxpdFRleHQgZnJvbSBcIi4uL290aGVybG9naWMvc3BsaXRUZXh0XCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVBY2Nlc3NUaXRsZUFuaW1hdGlvbnMoKSB7XG4gIGxldCBhY2Nlc3NUaXRsZSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuICBhY2Nlc3NUaXRsZS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAgIHNwbGl0VGV4dChcImFjY2Vzcy1lbmdcIiwgXCJhY2Nlc3MtZW5nLWxldHRlclwiKTtcblxuICAgIGxldCBhY2Nlc3NUaXRsZXRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2FjY2Vzc1wiLFxuICAgICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBhY2Nlc3NUaXRsZXRsXG4gICAgICAuZnJvbShcIi5hY2Nlc3MtZW5nLWxldHRlcjE2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCJcIilcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIilcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMjFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIjwxMCVcIik7XG4gIH0pO1xuXG4gIGFjY2Vzc1RpdGxlLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gICAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGFjY2Vzc1RpdGxldGwuZnJvbShcIi5hY2Nlc3MtZW5nXCIsIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFjY2Vzc1RpdGxlQW5pbWF0aW9uc0Rpbm5lcigpIHtcbiAgbGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4gIGFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgc3BsaXRUZXh0KFwiYWNjZXNzLWVuZ1wiLCBcImFjY2Vzcy1lbmctbGV0dGVyXCIpO1xuXG4gICAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGFjY2Vzc1RpdGxldGxcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMThcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9KVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIxOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIyM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYWNjZXNzVGl0bGV0bC5mcm9tKFwiLmFjY2Vzcy1lbmdcIiwge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlQWNjZXNzVGl0bGVBbmltYXRpb25zRmVhdHVyZSgpIHtcbiAgbGV0IGFjY2Vzc1RpdGxlID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4gIGFjY2Vzc1RpdGxlLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgc3BsaXRUZXh0KFwiYWNjZXNzLWVuZ1wiLCBcImFjY2Vzcy1lbmctbGV0dGVyXCIpO1xuXG4gICAgbGV0IGFjY2Vzc1RpdGxldGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjYWNjZXNzXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGFjY2Vzc1RpdGxldGxcbiAgICAgIC5mcm9tKFwiLmFjY2Vzcy1lbmctbGV0dGVyMzBcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9KVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKVxuICAgICAgLmZyb20oXCIuYWNjZXNzLWVuZy1sZXR0ZXIzNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiPDEwJVwiKTtcbiAgfSk7XG5cbiAgYWNjZXNzVGl0bGUuYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgICBsZXQgYWNjZXNzVGl0bGV0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNhY2Nlc3NcIixcbiAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYWNjZXNzVGl0bGV0bC5mcm9tKFwiLmFjY2Vzcy1lbmdcIiwge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlSGVhZGVyQW5pbWF0aW9ucygpIHtcbiAgbGV0IHBjSGVhZGVyQW5pbSA9IGdzYXAubWF0Y2hNZWRpYSgpO1xuXG4gIHBjSGVhZGVyQW5pbS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNob3dBbmltID0gZ3NhcFxuICAgICAgLmZyb20oXCIuaGVhZGVyXCIsIHtcbiAgICAgICAgeVBlcmNlbnQ6IC0xNTAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIH0pXG4gICAgICAucHJvZ3Jlc3MoMSk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICBlbmQ6IFwibWF4XCIsXG4gICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgc2VsZi5kaXJlY3Rpb24gPT09IC0xID8gc2hvd0FuaW0ucGxheSgpIDogc2hvd0FuaW0ucmV2ZXJzZSgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4uL290aGVybG9naWMvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IHVwZGF0ZUxhbmdCdG5UZXh0IGZyb20gXCIuLi9vdGhlcmxvZ2ljL3VwZGF0ZUxhbmdCdG5UZXh0XCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL290aGVybG9naWMvc2V0U3RvcmFnZVwiO1xuaW1wb3J0IHRvZ2dsZUxhbmd1YWdlIGZyb20gXCIuLi9vdGhlcmxvZ2ljL3RvZ2dsZUxhbmd1YWdlXCI7XG5cbmZ1bmN0aW9uIGRldGVybWluZUJ0bkNsaWNrZWQoZWxlbWVudCwga2V5KSB7XG4gIGNvbnN0IExBTkdVQUdFID0gZWxlbWVudC5kYXRhc2V0Lmxhbmd1YWdlU2VsZWN0b3I7XG4gIHNldFN0b3JhZ2VJdGVtKGtleSwgTEFOR1VBR0UpO1xuICBpZiAoTEFOR1VBR0UgPT09IFwianBcIikge1xuICAgIHVwZGF0ZUxhbmdCdG5UZXh0KFwianBcIik7XG4gIH0gZWxzZSBpZiAoTEFOR1VBR0UgPT09IFwiZW5cIikge1xuICAgIHVwZGF0ZUxhbmdCdG5UZXh0KFwiZW5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVMYW5nQnRuRXZlbnRMaXN0ZW5lcigpIHtcbiAgbGV0IGxhbmdCdG4gPSBnc2FwLm1hdGNoTWVkaWEoKTtcblxuICBsYW5nQnRuLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYnRuXCIpO1xuICAgIGxldCBTRUxFQ1RPUlMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbGFuZ3VhZ2Utc2VsZWN0b3JdXCIpO1xuICAgIGxldCBKUF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3Rvcj1cImpwXCJdJyk7XG4gICAgbGV0IEVOX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxhbmd1YWdlLXNlbGVjdG9yPVwiZW5cIl0nKTtcbiAgICBjb25zdCBMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSA9IFwiYXN1bi5sYW5nXCI7XG4gICAgbGV0IGN1cnJlbnRMYW5nID0gR2V0U3RvcmFnZUl0ZW1zKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZKTtcblxuICAgIFNFTEVDVE9SUy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0O1xuICAgICAgICBkZXRlcm1pbmVCdG5DbGlja2VkKGNsaWNrZWQsIExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZKTtcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5nID0gR2V0U3RvcmFnZUl0ZW1zKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZKTtcbiAgICAgICAgdG9nZ2xlTGFuZ3VhZ2UoY3VycmVudExhbmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBsYW5nQnRuLmFkZChcIihtYXgtd2lkdGg6IDc2N3B4KVwiLCAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYnRuXCIpO1xuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2NvbnRlbnRcIik7XG4gICAgY29uc3QganBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3Rvcj1cImpwXCJdJyk7XG4gICAgY29uc3QgZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3Rvcj1cImVuXCJdJyk7XG4gICAgY29uc3QgTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkgPSBcImFzdW4ubGFuZ1wiO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRyb3Bkb3duIHRvZ2dsZVxuICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xuICAgIH1cblxuICAgIC8vIENsb3NlIGRyb3Bkb3duIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuZHJvcGRvd25cIikpIHtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBkcm9wZG93biBidXR0b25cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBsYW5ndWFnZSBvcHRpb25zXG4gICAgW2pwQnRuLCBlbkJ0bl0uZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRldGVybWluZUJ0bkNsaWNrZWQodGhpcywgTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkpO1xuICAgICAgICBsZXQgY3VycmVudExhbmcgPSBHZXRTdG9yYWdlSXRlbXMoTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkpO1xuICAgICAgICB0b2dnbGVMYW5ndWFnZShjdXJyZW50TGFuZyk7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEhpZGUgZHJvcGRvd24gYWZ0ZXIgc2VsZWN0aW5nIGEgbGFuZ3VhZ2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuLyogc3BtZW5144KS6ZaL6ZaJ44GZ44KLICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BNZW51KCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNjbG9zZU1lbnVCdG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJChcIiNzcE5hdk1lbnVcIikuaGFzQ2xhc3MoXCJvcGVuXCIpKSB7XG4gICAgICAgICQoXCIjc3BOYXZNZW51XCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIubWVhdGJhbGwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEkKFwiI3NwTmF2TWVudVwiKS5oYXNDbGFzcyhcIm9wZW5cIikpIHtcbiAgICAgICAgJChcIiNzcE5hdk1lbnVcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkanVzdExhbmdCdG5Mb2NhdGlvbigpIHtcbiAgLy8gaXBob25l44Gn6KaL44Gf44Go44GN44Gu5L2N572u44KS6Kq/5pW044GZ44KLXG4gIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJpUGhvbmVcIikgPiAwKSB7XG4gICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1zcFwiKTtcbiAgICBkcm9wZG93bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLThweFwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VMYW5nQXR0cmlidXRlKGxhbmd1YWdlKXtcbiAgICBpZihsYW5ndWFnZSA9PT0gXCJqcFwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnamEnO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYW5ndWFnZSA9PT0gXCJlblwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnZW4nO1xuICAgIH1cbn0iLCIvL2dldCBpdGVtcyBmcm9tIGEgc3RvcmFnZSBhbmQgcGFyc2UgaXRcbi8vIOOCueODiOODrOODvOOCuOOBi+OCieOCouOCpOODhuODoOOCkuWPluW+l+OBl+OAgeino+aekOOBl+OBvuOBmVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRTdG9yYWdlSXRlbXMoa2V5KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuIiwiLy9zYXZlIG9iamVjdHMgaW4gdGhlIHN0b3JhZ2UgYXMgc3RyaW5nc1xuLy8g44Kq44OW44K444Kn44Kv44OI44KS5paH5a2X5YiX44Go44GX44Gm44K544OI44Os44O844K444Gr5L+d5a2Y44GX44G+44GZXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0b3JhZ2VJdGVtKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzdG9yZSBpdGVtIGluIGxvY2FsU3RvcmFnZTpcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFRleHQoY2xhc3NuYW1lLCBzcGFuTmFtZSkge1xuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xuICBjb25zdCBmcmFnbWVudHMgPSB0ZXh0Q29udGFpbmVyLmlubmVySFRNTC5zcGxpdChcIjxicj5cIik7XG5cbiAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciB0aGUgb3JpZ2luYWwgY29udGVudFxuICBsZXQgY2xhc3NDb3VudGVyID0gMTsgLy8gQ291bnRlciBmb3IgdW5pcXVlIGNsYXNzIG5hbWVzXG5cbiAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhZ21lbnRXcmFwcGVyLmlubmVySFRNTCA9IGZyYWdtZW50O1xuXG4gICAgY29uc3QgZnJhZ21lbnRTcGFucyA9IGZyYWdtZW50V3JhcHBlci5jaGlsZE5vZGVzO1xuICAgIGZyYWdtZW50U3BhbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIGNvbnN0IGxldHRlcnMgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChgJHtzcGFuTmFtZX0ke2NsYXNzQ291bnRlcn1gKTtcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgIGNsYXNzQ291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4IDwgZnJhZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNoYW5nZUxhbmdBdHRyaWJ1dGUgZnJvbSBcIi4vY2hhbmdlSHRtbExhbmd1YWdlQXR0cmlidXRlXCI7XG5cbmNvbnN0IEpQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGFuZz1cImpwXCJdJyk7XG5jb25zdCBFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhbmc9XCJlblwiXScpO1xuY29uc3QgQUxMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxhbmddXCIpO1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBBTEwuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVMYW5ndWFnZShjdXJyZW50KSB7XG4gIHJlbW92ZUNsYXNzZXMoKTtcbiAgY2hhbmdlTGFuZ0F0dHJpYnV0ZShjdXJyZW50KTtcbiAgY29uc3QgQUxMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxhbmddXCIpO1xuICBBTEwuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChjdXJyZW50ID09PSBcImpwXCIgJiYgZWxlbWVudC5kYXRhc2V0LmxhbmcgPT09IFwiZW5cIikge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyAvLyBBZGQgJ2hpZGRlbicgY2xhc3MgdG8gZWxlbWVudHMgd2l0aCBsYW5nIFwianBcIiBpZiBjdXJyZW50IGlzIFwianBcIlxuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJlblwiICYmIGVsZW1lbnQuZGF0YXNldC5sYW5nID09PSBcImpwXCIpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgLy8gQWRkICdoaWRkZW4nIGNsYXNzIHRvIGVsZW1lbnRzIHdpdGggbGFuZyBcImVuXCIgaWYgY3VycmVudCBpcyBcImVuXCJcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd25fX2J0blwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTGFuZ0J0blRleHQoY3VycmVudExhbmcpIHtcbiAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4udGV4dENvbnRlbnQgPSBjdXJyZW50TGFuZy50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==