import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/access.css";
import "./assets/css/common/footer.css";
import "./assets/css/information/information.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 出現アニメーション
let kv_title = gsap.timeline({
    scrollTrigger: {
        trigger: ".information-page",
        start: "-=500px",
        scrub: false,
    },
});
kv_title
.from(".under-kv", { opacity: 0, duration: 2 });

let information_top = gsap.timeline({
    scrollTrigger: {
        trigger: "#information-top",
        start: "-=500px",
        scrub: false,
    },
});
information_top
.from(".information-top-text", { y: 30, opacity: 0, duration: 2 })
.from(".room-rent", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from("information-top-img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

let information_bottom = gsap.timeline({
    scrollTrigger: {
        trigger: "#information-bottom",
        start: "-=500px",
        scrub: false,
    },
});
information_bottom
.from(".information-bottom-title", { y: 30, opacity: 0, duration: 2 })
.from("table", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from("home-btn", { y: 30, opacity: 0, duration: 2 }, "-=1.5");