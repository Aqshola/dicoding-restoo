import UrlParser from '../utils/url-parser'

class RestoDetail {
  static render() {
    return `
    <section class="resto-content">
      <h1>Loading resto data...</h1>
    </section>
    
    `
  }

  static async afterRender() {
    const container = document.querySelector('.resto-content')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const fetchData = await (
      await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`)
    ).json()

    console.log(fetchData)

    container.innerHTML = this.appendDetailContent({
      id: url.id,
      ...fetchData.restaurant,
    })
  }

  static appendDetailContent({
    id,
    name,
    pictureId,
    city,
    rating,
    address,
    description,
    // categories,
    // customerReviews,
    menus,
  }) {
    const linkPictureId = `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`
    const mode = this.getMode()

    const foods = JSON.stringify(menus.foods)
    const drinks = JSON.stringify(menus.drinks)

    return `
    <hero-image img=${linkPictureId} alt-hero="${name}">
      </hero-image>
      <div class="resto-detail">
        <h1 class="resto-title">${name}</h1>
        <h2 class="resto-city">${city}</h2>
        <h3 class="resto-address">${address}</h3>
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
              <h3 aria-label=${`rating ${rating}`}>${rating}</h3>
        </div>

        <div>
          <resto-nav id="${id}"></resto-nav>
          <div class="resto-additional">
            ${!mode || mode === 'desc' ? `<p>${description}</p>` : ''}
            ${
              mode === 'menu'
                ? `<resto-menu data-makanan='${foods}' data-minuman='${drinks}'></resto-menu>`
                : ''
            }
            ${mode === 'review' ? `<resto-review></resto-review>` : ''}
          </div>
        </div>     
    `
  }

  static getMode() {
    const urlQuery = new URL(window.location)
    return urlQuery.toString().split('?mode=')[1]
  }
}

export default RestoDetail
