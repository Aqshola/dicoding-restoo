import 'regenerator-runtime' /* for async await transpile */
import '../styles/style.scss'
import App from './components/app'
import './components/index'

const app = new App({
  content: 'Loading...',
  footer: '<footer-section></footer-section>',
  nav: '<app-bar></app-bar>',
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})
window.addEventListener('load', () => {
  app.renderPage()
})
