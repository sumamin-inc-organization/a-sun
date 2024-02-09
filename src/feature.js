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

$(document).ready(function() {
    // スライダー1の設定
    $(".slick1").slick({
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false,
        dots: true, // ページネーションを有効にする
        prevArrow: $('.prev-arrow1'),
        nextArrow: $('.next-arrow1'),
        centerMode: true,
        centerPadding: "13%", 
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: "0%",
                },
            },
        ],
    });

    // スライダー2の設定
    $(".slick2").slick({
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false,
        dots: true,
        prevArrow: $('.prev-arrow2'),
        nextArrow: $('.next-arrow2'),
        centerMode: true,
        centerPadding: "13%", 
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: "0%",
                },
            },
        ],
    });
});
