import { gsap } from "gsap";
import GetStorageItems from "../otherlogic/getStorage";
import updateLangBtnText from "../otherlogic/updateLangBtnText";
import setStorageItem from "../otherlogic/setStorage";
import toggleLanguage from "../otherlogic/toggleLanguage";

function determineBtnClicked(element, key) {
  const LANGUAGE = element.dataset.languageSelector;
  setStorageItem(key, LANGUAGE);
  if (LANGUAGE === "jp") {
    updateLangBtnText("jp");
  } else if (LANGUAGE === "en") {
    updateLangBtnText("en");
  }
}

export default function activateLangBtnEventListener() {
  let langBtn = gsap.matchMedia();

  langBtn.add("(min-width: 768px)", () => {
    const btn = document.querySelector(".dropdown__btn");
    let SELECTORS = document.querySelectorAll("[data-language-selector]");
    let JP_BTN = document.querySelector('[data-language-selector="jp"]');
    let EN_BTN = document.querySelector('[data-language-selector="en"]');
    const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang";
    let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY);

    SELECTORS.forEach((selector) => {
      selector.addEventListener("click", (e) => {
        e.preventDefault();
        const clicked = e.target;
        determineBtnClicked(clicked, LOCAL_STORAGE_LANGUAGE_KEY);
        let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY);
        toggleLanguage(currentLang);
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
        let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY);
        toggleLanguage(currentLang);
        dropdownContent.style.display = "none"; // Hide dropdown after selecting a language
      });
    });
  });
}
