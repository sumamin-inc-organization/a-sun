import activateCardParallax from "../animations/cardParallaxeffect";
import isItSp from "./isitSP";
import { isItPc, isItTab } from "./isitTAB";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function determineTypeOfAnimation() {
    let currentWindow = isItPc();
    
    if (currentWindow) {
        activateCardParallax();
    } else {
        currentWindow = isItSp();
        
        if (currentWindow) {
            console.log("It's a Mobile");
            let images = gsap.utils.toArray(".t");

images.forEach((image) => {
  gsap.to(image, {
    yPercent: -100 * image.dataset.sp,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.sp * 0.1,
    },
  });
});
        } else {
            currentWindow = isItTab();
            
            if (currentWindow) {
                console.log("It's a Tablet");
            }
        }
    }
}
