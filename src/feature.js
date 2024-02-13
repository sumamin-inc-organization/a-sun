import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/access.css";
import "./assets/css/common/footer.css";
import "./assets/css/feature/feature.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// slick
$(document).ready(function() {
    $(".slick1").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        pauseOnHover: false,
        dots: true,
        prevArrow: $('.prev-arrow1'),
        nextArrow: $('.next-arrow1'),
        centerMode: true,
        centerPadding: "13%", 
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 1230,
                settings: {
                    centerPadding: "5%",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "5%",
                },
            },
        ],
    });

    $(".slick2").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        pauseOnHover: false,
        dots: true,
        prevArrow: $('.prev-arrow2'),
        nextArrow: $('.next-arrow2'),
        centerMode: true,
        centerPadding: "13%", 
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 1230,
                settings: {
                    centerPadding: "5%",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "6%",
                },
            },
        ],
    });
});

// 出現アニメーション
let kv_title = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-page",
        start: "-=500px",
        scrub: false,
    },
});
kv_title
.from(".under-kv", { opacity: 0, duration: 2 });

let feature1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#feature1",
        start: "-=500px",
        scrub: false,
    },
});
feature1
.from("#feature1 .feature-title", { y: 30, opacity: 0, duration: 2 })
.from("#feature1 .feature-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".slick1", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 20, opacity: 0, duration: 2 }, "-=1.5");

let feature2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#feature2",
        start: "-=500px",
        scrub: false,
    },
});
feature2
.from("#feature2 .feature-title", { y: 30, opacity: 0, duration: 2 })
.from("#feature2 .feature-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".slick2", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 20, opacity: 0, duration: 2 }, "-=1.5");

let feature3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#feature3",
        start: "-=500px",
        scrub: false,
    },
});
feature3
.from("#feature3 .feature-title", { y: 30, opacity: 0, duration: 2 })
.from("#feature3 .feature-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".slick3", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 20, opacity: 0, duration: 2 }, "-=1.5");