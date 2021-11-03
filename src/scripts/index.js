import 'regenerator-runtime'
import '../styles/style.scss'
import App from './components/app'
import './components/index'
import swRegister from './utils/swRegister'

const app = new App({
  content: '<loader-spin class="loader-wrapper"></loader-spin>',
  footer: '<footer-section></footer-section>',
  nav: '<app-bar></app-bar>',
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})
window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
