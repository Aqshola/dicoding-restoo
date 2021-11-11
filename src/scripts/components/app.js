import UrlParser from "../utils/url-parser";
import routes from "../routes/routes";
import scrollToTop from "../utils/scrollToTop";

class App {
  constructor({ content }) {
    this.content = content;
    this.initAppShell();
  }

  initAppShell() {
    this.mainContent = document.querySelector("#main-content");
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.mainContent.innerHTML = await page.render();
    await page.afterRender();

    const newQuery = new URL(window.location).toString().split("?")[1];

    if (!newQuery) {
      scrollToTop();
    }
  }
}

export default App;
