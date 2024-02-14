import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/header.css";
import "./assets/css/common/nav.css";
import "./assets/css/home/animations.css";
import "./assets/css/home/access.css";
import "./assets/css/menu/lunch.css";
import "./assets/css/menu/dinner.css";
import setLoadingAnimation from "./assets/js/animations/loadingAnimation";

import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { gsap } from "gsap";
setLoadingAnimation();

/* slick animation */
var $slide = $(".slick-slide")
.slick({
    fade: true,
    speed: 1000,
    autoplaySpeed: 2500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    // adaptiveHeight:true
});