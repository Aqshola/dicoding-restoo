/* eslint-disable no-useless-constructor */
class Loader extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
              <div class="loader"></div>
              <p>Loading data...</p>
    
    `
  }
}

export default customElements.define('loader-spin', Loader)
