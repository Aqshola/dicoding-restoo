/* eslint-disable no-useless-constructor */
import data from '../../../DATA.json'

class RestoDetailContent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
    this.getRestoDetail()
  }

  render() {
    const restoDetail = this.getRestoDetail()
    document.title = `Resto detail | ${restoDetail.name}`
    this.innerHTML = `
    <hero-image img=${restoDetail.pictureId} alt-hero="${restoDetail.name}">
      </hero-image>

      <div class="resto-detail">
        <h1>${restoDetail.name}</h1>
        <h2>${restoDetail.city}</h2>
        <div class="resto-rating">
              <svg
                aria-label="rate icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <h3 aria-label=${`rating ${restoDetail.rating}`}>${
      restoDetail.rating
    }</h3>
        </div>

        
        <p>
          ${restoDetail.description}
        </p>
    `
  }

  static getData() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params.id
  }

  getRestoDetail() {
    const id = this.getData()
    const indexData = data.restaurants
      .map((restoData) => restoData.id)
      .indexOf(id)
    const restoData = data.restaurants[indexData]

    return restoData
  }
}

export default customElements.define('resto-detail-content', RestoDetailContent)
