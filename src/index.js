import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/hero.css";
import "./assets/css/home/feature.css";
import "./assets/css/home/course.css";
import "./assets/css/home/lunch.css";
import "./assets/css/home/dinner.css";
import "./assets/css/home/message.css";
import "./assets/css/home/voice.css";
import "./assets/css/home/news.css";
import "./assets/css/home/insta.css";
import "./assets/css/home/access.css";
import addNavIconEventListener from "./assets/js/eventlisters/naviconEventlistener";
import activateCrossFadeAnimations from "./assets/js/animations/crossfadeAnimation";

import { gsap } from "gsap";
import screenResizeListener from "./assets/js/eventlisters/screensizeChange";
import isItSp from "./assets/js/otherlogic/isitSP";
import changeKvSrc from "./assets/js/otherlogic/changeKvSrc";
import activateCardParallax from "./assets/js/animations/cardParallaxeffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import determineTypeOfAnimation from "./assets/js/otherlogic/determineTypeOfAnimation";
gsap.registerPlugin(ScrollTrigger);
addNavIconEventListener();

activateCrossFadeAnimations();

changeKvSrc()

// determineTypeOfAnimation();
screenResizeListener();



const screenType = isItSp(); // 画面サイズをチェックします /checks for  screen size

/*-------------------------------
    dinner background animations
    ディナーの背景アニメーション
-------------------------------*/

const masterCompany = gsap.timeline();

if(screenType){
    masterCompany.add(dinnerTopsp()); //if the size is less than 500px then the scale will be 1 / サイズが500px未満の場合、スケールは1になります

}else{
    masterCompany.add(dinnerTop()); //else its 1.7 /それ以外の場合は1.7です

}


function dinnerTop() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#dinner",
        start: "-=500px top",
        end: "+=200",
        scrub: true,
        // pin: true,
        //  markers: true
      },
    });
  
    tl
    .fromTo(".company-dot", { scale:0},{scale: 1.7})
    // .to(".company-dot", { scale: 1})
  
    return tl;
  }



  function dinnerTopsp() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#dinner",
        start: "-=500px top",
        end: "+=200",
        scrub: true,
        // pin: true,
        //  markers: true
      },
    });
  
    tl
    .from(".company-dot", { scale: 0})
  
  
    return tl;
  }
  


/*-------------------------------
    feature parallax animations
    フィーチャーのパララックスアニメーション
-------------------------------*/

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat1",
    start: "-=200px top",
    // end: "+=200",
    scrub: true,
    // pin: true,
    //  markers: true
  },
});

tl
.to(".feat-main-left-one", {yPercent:-100})
// .to(".company-dot", { scale: 1})

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat2",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t2
.to(".feat-main-left-two", {yPercent:-100})

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t3
.to(".feat-main-left-three", {yPercent:-100})

/*-------------------------------
    Loading animation
   ロードアニメーション
-------------------------------*/

document.addEventListener('DOMContentLoaded',(e)=>{
  let intro = gsap.timeline()

  intro
.from('.transition-item',{y:'100%',delay:2})
.from('.transition-item-white',{y:'100%'})
// .set('.transition-item',{y:'-100%'})
.set('.transition-img',{opacity:0})
.set('.transition-img',{x:"100%" ,})
.to('.transition-item-white',{y:'-100%'})
.to('.transition-item-white',{display:"none"})
.set('.transition-item',{display:"none"})

})


/*-------------------------------
   Logo Animations
   ロゴのアニメーション
-------------------------------*/

ScrollTrigger.create({
  trigger: ".trigger",
  start: "top -=10",
  // markers: true,
  onEnterBack: animateLogo
});

let tween =  gsap.from(".logo__image--sp", { y:" -100% ",duration:2})

function animateLogo() {
  tween.restart();
}

