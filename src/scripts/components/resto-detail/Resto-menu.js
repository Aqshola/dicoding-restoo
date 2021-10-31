/* eslint-disable no-useless-constructor */

class RestoMenu extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.minuman = JSON.parse(this.dataset.minuman) || []
    this.makanan = JSON.parse(this.dataset.makanan) || []
    this.render()
  }

  render() {
    const foodList = this.makanan
      .map((data) => `<li>${data.name}</li>`)
      .join('')

    const drinkList = this.minuman
      .map((data) => `<li>${data.name}</li>`)
      .join('')

    this.innerHTML = `                <div class="resto-menu">
          <div id="menu-makanan">
            <h3>
              Makanan
            </h3>
            <ul>
              ${foodList}
            </ul>
          </div>
          <div id="menu-minuman">
            <h3>
              Minuman
            </h3>
            <ul>
              ${drinkList}
            </ul>
          </div>
          
                </div>
    `
  }
}

export default customElements.define('resto-menu', RestoMenu)
