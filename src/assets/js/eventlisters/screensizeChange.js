import changeKvSrc from "../otherlogic/changeKvSrc";

export default function screenResizeListener(){
    window.addEventListener('resize', changeKvSrc);
}