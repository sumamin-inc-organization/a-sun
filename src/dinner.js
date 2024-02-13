import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/menu/lunch.css";
import "./assets/css/menu/dinner.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import { gsap } from "gsap";
setLoadingAnimation();

setInterval(() => {
    switchImages(document.getElementsByClassName("lunch-image01"));
    switchImages(document.getElementsByClassName("lunch-image02"));
    switchImages(document.getElementsByClassName("lunch-image03"));
}, 3000);

/*画像切り替え関数*/
function switchImages (elem) {
    for(var i=0; i < elem.length; i++) {
        if (i != elem.length-1) {
            if (elem[i].ariaHidden === 'false') {
                elem[i].ariaHidden = true;
                elem[i+1].ariaHidden = false;
                break;
            }
        } else {
            elem[i].ariaHidden = true;
            elem[0].ariaHidden = false;
            break;
        }
    }
}