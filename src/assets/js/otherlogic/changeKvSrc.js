
import spSlide1 from '../../images/top/hero/sp/kv-sp-1-min.png';
import spSlide2 from '../../images/top/hero/sp/kv-sp-2-min.png';
import spSlide3 from '../../images/top/hero/sp/kv-sp-3-min.png';
import spSlide4 from '../../images/top/hero/sp/kv-sp-4-min.png';
import spSlide5 from '../../images/top/hero/sp/kv-sp-5-min.png';
import spSlide6 from '../../images/top/hero/sp/kv-sp-7-min.png';
import spSlide7 from '../../images/top/hero/sp/kv-sp-9-min.png';
import spSlide8 from '../../images/top/hero/sp/kv-sp-11-min.png';


import pcSlide1 from '../../images/top/hero/kv-1-min.png';
import pcSlide2 from '../../images/top/hero/kv-2-min.png';
import pcSlide3 from '../../images/top/hero/kv-3-min.png';
import pcSlide4 from '../../images/top/hero/kv-4-min.png';
import pcSlide5 from '../../images/top/hero/kv-5-min.png';
import pcSlide6 from '../../images/top/hero/kv-7-min.png';
import pcSlide7 from '../../images/top/hero/kv-9-min.png';
import pcSlide8 from '../../images/top/hero/kv-11-min.png';


import isItSp from './isitSP';


export default function changeKvSrc(){
    const IS_IT_SP = isItSp();
    const SLIDE_ONE = document.querySelector('.eyecatcher-slideshow_slide--one');
    const SLIDE_TWO = document.querySelector('.eyecatcher-slideshow_slide--two');
    const SLIDE_THREE = document.querySelector('.eyecatcher-slideshow_slide--three');
    const SLIDE_FOUR = document.querySelector('.eyecatcher-slideshow_slide--four');
    const SLIDE_FIVE = document.querySelector('.eyecatcher-slideshow_slide--five');
    const SLIDE_SIX = document.querySelector('.eyecatcher-slideshow_slide--six');
    const SLIDE_SEVEN = document.querySelector('.eyecatcher-slideshow_slide--seven');
    const SLIDE_EIGHT = document.querySelector('.eyecatcher-slideshow_slide--eight');
    const SLIDE_NINE = document.querySelector('.eyecatcher-slideshow_slide--nine');
    
    if(IS_IT_SP){
       SLIDE_ONE.src = spSlide1;
       SLIDE_TWO.src = spSlide2;
       SLIDE_THREE.src = spSlide3;
       SLIDE_FOUR.src =  spSlide4;
       SLIDE_FIVE.src =  spSlide5;
       SLIDE_SIX.src =  spSlide6;
       SLIDE_SEVEN.src = spSlide7;
       SLIDE_EIGHT.src =  spSlide8;
    }
    else{
        SLIDE_ONE.src = pcSlide1;
        SLIDE_TWO.src = pcSlide2;
        SLIDE_THREE.src = pcSlide3;
        SLIDE_FOUR.src = pcSlide4;
        SLIDE_FIVE.src = pcSlide5;
        SLIDE_SIX.src = pcSlide6;
        SLIDE_SEVEN.src = pcSlide7;
        SLIDE_EIGHT.src = pcSlide8;
    }
}