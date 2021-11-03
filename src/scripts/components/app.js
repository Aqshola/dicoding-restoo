import UrlParser from '../utils/url-parser'
import routes from '../routes/routes'
import scrollToTop from '../utils/scrollToTop'

class App {
  constructor({ content, footer, nav }) {
    this.content = content
    this.footer = footer
    this.nav = nav
    this.appContent = document.querySelector('#app-container')
    this.mainContent = null
    this.initAppShell()
  }

  initAppShell() {
    this.appContent.innerHTML = `
    
    ${this.nav}
    <div id="main-content">
      ${this.content}
    </div>

    ${this.footer}
    `
    this.mainContent = document.querySelector('#main-content')
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this.mainContent.innerHTML = await page.render()
    await page.afterRender()

    const newQuery = new URL(window.location).toString().split('?')[1]

    if (!newQuery) {
      scrollToTop()
    }
  }
}

export default App
