/* eslint-disable no-useless-constructor */

class RestoDesc extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.desc = this.getAttribute('desc') || ''
    this.render()
  }

  render() {
    this.innerHTML = `  
     <div class="resto-desc">
        <h2> Sekilas </h2>
        <p>
            ${this.desc}
        </p>
    </div>`
  }
}

export default customElements.define('resto-desc', RestoDesc)
