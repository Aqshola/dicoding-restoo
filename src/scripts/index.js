import "regenerator-runtime";
import "../styles/style.scss";
import App from "./components/app";
import "./components/index";
import swRegister from "./utils/swRegister";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  content: "",
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
