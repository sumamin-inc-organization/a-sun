const JP = document.querySelectorAll('[data-lang="jp"]');
const EN = document.querySelectorAll('[data-lang="en"]');
const ALL = document.querySelectorAll('[data-lang]')


function removeClasses(){
    ALL.forEach(element =>{
        element.classList.remove('visible');
    })
}

export default function toggleLanguage(current){
    removeClasses();
    if (current === "jp" && element.dataset.mainLang === "cn") {
        element.classList.add('hidden'); // Add 'visible' class to elements with lang "jp" if current is "jp"
    } else if (current === "en" && element.dataset.mainLang === "jp") {
        element.classList.add('hidden'); // Add 'visible' class to elements with lang "en" if current is "en"
    }

}