const btns = document.querySelectorAll('.dropdown__btn');

export default function updateLangBtnText(currentLang) {
    btns.forEach(btn=>{
        btn.textContent = currentLang.toUpperCase();
    })
    
}
