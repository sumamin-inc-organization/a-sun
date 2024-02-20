const btn = document.querySelector('.dropdown__btn');

export default function updateLangBtnText(currentLang) {
    btn.textContent = currentLang.toUpperCase();
}
