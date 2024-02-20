import { selector } from "gsap";
import GetStorageItems from "../otherlogic/getStorage";
import updateLangBtnText from "../otherlogic/updateLangBtnText";
import setStorageItem from "../otherlogic/setStorage";
import toggleLanguage from "../otherlogic/toggleLanguage";

function determineBtnClicked(element,key) {
    const LANGUAGE = element.dataset.languageSelector;
    setStorageItem(key,LANGUAGE);
  if (LANGUAGE === "jp") {
    updateLangBtnText("jp");
  } else if (LANGUAGE === "en") {
    updateLangBtnText("en");
  }
}

export default function activateLangBtnEventListener() {
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
      determineBtnClicked(clicked,LOCAL_STORAGE_LANGUAGE_KEY);
      let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY);
      toggleLanguage(currentLang);
    });
  });
}
