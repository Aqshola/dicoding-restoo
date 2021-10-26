/* eslint-disable no-useless-constructor */
class SkipButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <a href="#main-content" class="skip-btn">Skip to Content</a>
    `
  }
}

export default customElements.define('skip-button', SkipButton)
