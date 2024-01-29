
import spSlide1 from '../../images/top/hero/sp/kv-sp_1.jpg';
import spSlide2 from '../../images/top/hero/sp/hero-test2.jpg';
import spSlide3 from '../../images/top/hero/sp/hero-test1.jpg';


import pcSlide1 from '../../images/top/hero/hero-slide-img.jpg';
import pcSlide2 from '../../images/top/hero/temp-img2.jpg';
import pcSlide3 from '../../images/top/hero/temp-img3.jpg';


import isItSp from './isitSP';


export default function changeKvSrc(){
    const IS_IT_SP = isItSp();
    const SLIDE_ONE = document.querySelector('.eyecatcher-slideshow_slide--one');
    const SLIDE_TWO = document.querySelector('.eyecatcher-slideshow_slide--two');
    const SLIDE_THREE = document.querySelector('.eyecatcher-slideshow_slide--three');
    if(IS_IT_SP){
       SLIDE_ONE.src = spSlide1;
       SLIDE_TWO.src = spSlide2;
       SLIDE_THREE.src = spSlide3;
    }
    else{
        SLIDE_ONE.src = pcSlide1;
        SLIDE_TWO.src = pcSlide2;
        SLIDE_THREE.src = pcSlide3;
    }
}