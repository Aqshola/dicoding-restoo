/* eslint-disable no-useless-constructor */

class RestoNav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `   <div class="resto-nav">
            <a>Description</a>
            <a>Menu</a>
            <a   class="active-nav">Review</a>
          </div> `
  }
}

export default customElements.define('resto-nav', RestoNav)
