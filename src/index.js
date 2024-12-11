import homePage from "./home";
import menuPage from "./menu";
import aboutPage from "./about";
import "./styles.css";

const homeBtn = document.querySelector(".btn-home");
const menuBtn = document.querySelector(".btn-menu");
const aboutBtn = document.querySelector(".btn-about");

homePage();

homeBtn.addEventListener("click", () => {
  homePage();
});

menuBtn.addEventListener("click", () => {
  menuPage();
});

aboutBtn.addEventListener("click", () => {
  aboutPage();
});
