import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/news/news.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import { gsap } from "gsap";
setLoadingAnimation();

import { ScrollTrigger } from "gsap/ScrollTrigger";
import activateHeaderAnimations from "./assets/js/animations/activateHeaderAnimations";
gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // news title
    let news_title = gsap.timeline({
        scrollTrigger: {
            trigger: "#news-top",
            start: "-=500px",
            scrub: false,
        },
    });

    news_title
    .from(".news-content", { y: 30, opacity: 0, duration: 2}, "+=3")

    // news pagination
    let news_pagination = gsap.timeline({
        scrollTrigger: {
            trigger: ".news-pagination",
            start: "-=740px",
            scrub: false,
        },
    });

    news_pagination
    .from(".news-pagination", { y: 30, opacity: 0, duration: 1})
});

/* pc */
mm.add("(min-width: 768px)", () => {
    // news content
    let news_title = gsap.timeline({
        scrollTrigger: {
            trigger: "#news-top",
            start: "-=500px",
            scrub: false,
        },
    });

    news_title
    .from(".news-content", { y: 30, opacity: 0, duration: 2}, "+=3")
    // news pagination
    let news_pagination = gsap.timeline({
        scrollTrigger: {
            trigger: ".news-pagination",
            start: "-=680px",
            scrub: false,
        },
    });

    news_pagination
    .from(".news-pagination", { y: 30, opacity: 0, duration: 1})
});


activateHeaderAnimations();