import { addClass, removeClass } from "./movement/move";
import "./style.css";

(function startPage() {
  const button = document.querySelector(".MobileButton");
  const screen = document.querySelector(".MobileScreen");
  const body = document.querySelector("body");
  button.addEventListener("click", () => {
    if (screen.classList.contains("moved")) {
        removeClass(screen, "moved");
    } else {
        addClass(screen, "moved");
    }
    if (body.classList.contains("drawed")) {
        removeClass(body, "drawed");
    } else {
        addClass(body, "drawed");
    }
  });
})();
