import activateCardParallax from "../animations/cardParallaxeffect";
import isItSp from "./isitSP";
import { isItPc, isItTab } from "./isitTAB";


export default function determineTypeOfAnimation() {
    let currentWindow = isItPc();
    
    if (currentWindow) {
        activateCardParallax();
    } else {
        currentWindow = isItSp();
        
        if (currentWindow) {
            console.log("It's a Mobile");
        } else {
            currentWindow = isItTab();
            
            if (currentWindow) {
                console.log("It's a Tablet");
            }
        }
    }
}
