import animateMeatballIcon from "../animations/animateMeatball";

const icon = document.querySelector(".meatball");

export default function addNavIconEventListener() {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    animateMeatballIcon();
  });
}
