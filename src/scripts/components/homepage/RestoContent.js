import data from '../../../DATA.json'

class RestoContent extends HTMLElement {
  constructor() {
    super()
    this.container = '' || null
  }

  connectedCallback() {
    this.render()
    this.getRestoData()
  }

  render() {
    this.innerHTML = `
    <div class="list-restorant-container">
        <h2>Daftar Restoran</h2>
        <div class="list-container">
          
        </div>
      </div>
    `
  }

  getRestoData() {
    this.container = document.querySelector('.list-container')
    let element = ''

    data.restaurants.forEach((restoData) => {
      element += `<div class="list-wrapper">
            <card-resto
            img=${restoData.pictureId}
            name="${restoData.name}"
            rate=${restoData.rating}
            location=${restoData.city}
            key=${restoData.id}
            >

            </card-resto>
        </div>`
    })

    this.container.innerHTML = element
  }
}

export default customElements.define('resto-content', RestoContent)
