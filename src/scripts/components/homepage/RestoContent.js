import data from '../../../DATA.json'

class RestoContent extends HTMLElement {
  constructor() {
    super()
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
    const container = document.querySelector('.list-container')
    let element = ''
    console.log(data.restaurants)

    data.restaurants.map((data) => {
      element += `<div class="list-wrapper">
            <card-resto
            img=${data.pictureId}
            name="${data.name}"
            rate=${data.rating}
            location=${data.city}
            key=${data.id}
            >

            </card-resto>
        </div>`
    })

    container.innerHTML = element
  }
}

export default customElements.define('resto-content', RestoContent)
