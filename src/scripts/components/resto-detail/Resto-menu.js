/* eslint-disable no-useless-constructor */

class RestoMenu extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `                <div class="resto-menu">
          <div id="menu-makanan">
            <h3>
              Makanan
            </h3>
            <ul>
              <li>Kari kacang dan telur</li>
              <li>Ikan teri dan roti</li>
              <li>Roti Penne</li>
            </ul>
          </div>
          <div id="menu-minuman">
            <h3>
              Minuman
            </h3>
            <ul>
              <li>Es jeruk</li>
              <li>Es mambo</li>
              <li>Roti Penne</li>
            </ul>
          </div>
          
                </div>
    `
  }
}

export default customElements.define('resto-menu', RestoMenu)
