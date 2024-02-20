import { selector } from "gsap";
import GetStorageItems from "../otherlogic/getStorage";
import updateLangBtnText from "../otherlogic/updateLangBtnText";


function determineBtnClicked(element){
   if( element.dataset.languageSelector === "jp"){
    console.log("jp");
    updateLangBtnText("jp");
   }
   else if( element.dataset.languageSelector === "en"){
    updateLangBtnText("en");
   }
}



export default function activateLangBtnEventListener(){
    const btn = document.querySelector('.dropdown__btn');
    let SELECTORS = document.querySelectorAll('[data-language-selector]')
    let JP_BTN = document.querySelector('[data-language-selector="jp"]')
    let EN_BTN = document.querySelector('[data-language-selector="en"]')
    const LOCAL_STORAGE_LANGUAGE_KEY = "asun.lang" ;
    let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY);

        // updateLangBtnText(currentLang);

    SELECTORS.forEach(selector => {
        selector.addEventListener("click",(e)=>{
            const clicked = e.target; 
            determineBtnClicked(clicked);
            
        })
    });
}