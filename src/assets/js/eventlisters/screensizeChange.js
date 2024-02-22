import changeKvSrc from "../otherlogic/changeKvSrc";
import determineTypeOfAnimation from "../otherlogic/determineTypeOfAnimation";

export default function screenResizeListener() {
  window.addEventListener("resize", changeKvSrc);
  window.addEventListener("resize", (e) => {
    changeKvSrc();
  });
}
