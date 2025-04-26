import Sliders from "./components/sliders";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  new Sliders();

  const scroll = new Scroll();
  scroll.initSmoothScroll();
  scroll.initAOS();

  const backTopButton = new BackTopButton();
  backTopButton.init();
});
