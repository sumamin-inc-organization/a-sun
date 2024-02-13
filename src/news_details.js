import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/access.css";
import "./assets/css/common/footer.css";
import "./assets/css/news/news_details.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

let news_details = gsap.timeline({
    scrollTrigger: {
        trigger: "#news-details",
        start: "-=500px",
        scrub: false,
    },
});
news_details
.from(".return-btn", { y: 30, opacity: 0, duration: 2 })
.from(".news-inner", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".news-header", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".news-main", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let home_btn = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-btn",
        start: "-=500px",
        scrub: false,
    },
});
home_btn
.from(".home-btn", { y: 30, opacity: 0, duration: 2 });