/* eslint-disable no-useless-constructor */
class SkipButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.btn = ''
    this.render()
    this.afterRender()
  }

  render() {
    this.innerHTML = `
    <button href="#main-content" class="skip-btn">Skip to Content</button>
    `
  }

  afterRender() {
    this.btn = document.querySelector('.skip-btn')

    this.btn.addEventListener('click', () => {
      document.getElementById('main-content').scrollIntoView()
    })
  }
}

export default customElements.define('skip-button', SkipButton)
