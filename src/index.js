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
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
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

  let dotAnimations = gsap.matchMedia();

    dotAnimations.add("(max-width: 500px)", () => {
    

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

      masterCompany.add(dinnerTopsp());
    });
    dotAnimations.add("(min-width: 501px)", () => {
    

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
      
      masterCompany.add(dinnerTop());
    });


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
.to(".feat-main-left-one", {yPercent:-65})
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
.to(".feat-main-left-two", {yPercent:-65})

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".feat3",
    start: "-=200px top",
    scrub: true,
    //  markers: true
  },
});

t3
.to(".feat-main-left-three", {yPercent:-65})

/*-------------------------------
    Loading animation
   ロードアニメーション
-------------------------------*/

// setLoadingAnimation()


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
.from('.keyvisual-top__logo',{opacity:0,x:-100,duration:1})
.from('.letter1',{opacity:0,duration:0.5},"<20%")
.from('.letter2',{opacity:0,duration:0.5},"<10%")
.from('.letter3',{opacity:0,duration:0.5},"<10%")
.from('.letter4',{opacity:0,duration:0.5},"<10%")
.from('.letter5',{opacity:0,duration:0.5},"<10%")
.from('.letter6',{opacity:0,duration:0.5},"<10%")
.from('.letter7',{opacity:0,duration:0.5},"<10%")
.from('.letter8',{opacity:0,duration:0.5},"<10%")
.from('.letter9',{opacity:0,duration:0.5},"<10%")
.from('.letter10',{opacity:0,duration:0.5},"<10%")
.from('.letter11',{opacity:0,duration:0.5},"<10%")
.from('.letter12',{opacity:0,duration:0.5},"<10%")
.from('.letter13',{opacity:0,duration:0.5},"<10%")
.from('.letter14',{opacity:0,duration:0.5},"<10%")
.from('.letter15',{opacity:0,duration:0.5},"<10%")
.from('.letter16',{opacity:0,duration:0.5},"<10%")
.from('.letter17',{opacity:0,duration:0.5},"<10%")
.from('.letter18',{opacity:0,duration:0.5},"<10%")
.from('.letter19',{opacity:0,duration:0.5},"<10%")
.from('.letter20',{opacity:0,duration:0.5},"<10%")
.from('.letter21',{opacity:0,duration:0.5},"<10%")
.from('.letter22',{opacity:0,duration:0.5},"<10%")
.from('.letter23',{opacity:0,duration:0.5},"<10%")
.from('.letter24',{opacity:0,duration:0.5},"<10%")
.from('.letter25',{opacity:0,duration:0.5},"<10%")
.from('.letter26',{opacity:0,duration:0.5},"<10%")
.from('.letter27',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng1',{opacity:0,duration:0.5},"4.5")
.from('.letter-eng2',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng3',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng4',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng5',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng6',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng7',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng8',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng9',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng10',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng11',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng12',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng13',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng14',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng15',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng16',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng17',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng18',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng19',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng20',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng21',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng22',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng23',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng24',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng25',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng26',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng27',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng28',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng29',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng30',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng31',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng32',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng33',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng34',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng35',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng36',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng37',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng38',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng39',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng40',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng41',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng42',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng43',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng44',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng45',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng46',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng47',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng48',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng49',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng50',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng51',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng52',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng53',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng54',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng55',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng56',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng57',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng58',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng59',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng60',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng61',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng62',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng63',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng64',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng65',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng66',{opacity:0,duration:0.5},"<10%")
.from('.letter-eng67',{opacity:0,duration:0.5},"<10%")
.from('.eyecatcher-slideshow',{opacity:0,scale:0,duration:2},"4.5")
.from('.eyecatcher__scrollimg',{opacity:0,y:-100,duration:2},"<50%")

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

let tween =  gsap.from(".logo__image--sp", { y:" -100% ",duration:1})

function animateLogo() {
  tween.restart();
}


/*-------------------------------
   Header PC animation
   ヘッダーPCアニメーション
-------------------------------*/

activateHeaderAnimations();

// let letters = gsap.utils.toArray(".letter");

// letters.forEach((letter) => {
//   gsap.from(letter, {
//    opacity:0
//   });
// });

// const master = gsap.timeline({paused:true});

// const loader = gsap
//   .timeline()
//   .from('.transition-item',{y:'100%',delay:2})
// .from('.transition-item-white',{y:'100%'})
// .set('.transition-img',{opacity:0} )
// .set('.transition-img',{x:"100%" ,})
// .to('.transition-item-white',{y:'-100%'})
// .to('.transition-item-white',{display:"none"})
// .set('.transition-item',{display:"none"})
// .from('.keyvisual-top__logo',{opacity:0,x:-100,duration:1});

// const textAnime = gsap.timeline()
// .from('.letter1',{opacity:0,duration:0.5},"<20%")
// .from('.letter2',{opacity:0,duration:0.5},"<10%")
// .from('.letter3',{opacity:0,duration:0.5},"<10%")
// .from('.letter4',{opacity:0,duration:0.5},"<10%")
// .from('.letter5',{opacity:0,duration:0.5},"<10%")
// .from('.letter6',{opacity:0,duration:0.5},"<10%")
// .from('.letter7',{opacity:0,duration:0.5},"<10%")
// .from('.letter8',{opacity:0,duration:0.5},"<10%")
// .from('.letter9',{opacity:0,duration:0.5},"<10%")
// .from('.letter10',{opacity:0,duration:0.5},"<10%")
// .from('.letter11',{opacity:0,duration:0.5},"<10%")
// .from('.letter12',{opacity:0,duration:0.5},"<10%")
// .from('.letter13',{opacity:0,duration:0.5},"<10%")
// .from('.letter14',{opacity:0,duration:0.5},"<10%")
// .from('.letter15',{opacity:0,duration:0.5},"<10%")
// .from('.letter16',{opacity:0,duration:0.5},"<10%")
// .from('.letter17',{opacity:0,duration:0.5},"<10%")
// .from('.letter18',{opacity:0,duration:0.5},"<10%")
// .from('.letter19',{opacity:0,duration:0.5},"<10%")
// .from('.letter20',{opacity:0,duration:0.5},"<10%")
// .from('.letter21',{opacity:0,duration:0.5},"<10%")
// .from('.letter22',{opacity:0,duration:0.5},"<10%")
// .from('.letter23',{opacity:0,duration:0.5},"<10%")
// .from('.letter24',{opacity:0,duration:0.5},"<10%")
// .from('.letter25',{opacity:0,duration:0.5},"<10%")
// .from('.letter26',{opacity:0,duration:0.5},"<10%")
// .from('.letter27',{opacity:0,duration:0.5},"<10%")



// master.add(loader);
// master.add(textAnime);
