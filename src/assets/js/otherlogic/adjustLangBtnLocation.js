
export default function adjustLangBtnLocation() {
    // iphoneで見たときの位置を調整する
    if (navigator.userAgent.indexOf('iPhone') > 0) {
        let dropdown = document.querySelector(".dropdown-sp");
        dropdown.style.marginLeft= "-12px";
    }
}