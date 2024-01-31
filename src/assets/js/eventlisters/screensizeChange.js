import changeKvSrc from "../otherlogic/changeKvSrc";
import determineTypeOfAnimation from "../otherlogic/determineTypeOfAnimation";

export default function screenResizeListener(){
    window.addEventListener('resize', changeKvSrc);
    // window.addEventListener('resize',determineTypeOfAnimation);
    window.addEventListener('resize',(e)=>{
        determineTypeOfAnimation();
        changeKvSrc();
    })
}