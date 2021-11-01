import Database from '../utils/indexedDB'

class Favorite {
  static render() {
    return `
    <hero-image
      img="images/heros/hero-image_3.jpg"
      title="Restoran Favorite"
      subtitle="Restoran yang kamu sukai"
      alt-hero="illustrasi kafe"
      class-hero="darken-img"
    ></hero-image>
    <section id="resto-content" class="container">
      <div class="list-restorant-container">
        <h2>Daftar Restoran</h2>
        <div class="list-container">
          Loading...
        </div>
      </div>
    </section>
      `
  }

  static async getFavoriteData() {
    const data = await Database.getAllRestoo()

    return data
  }

  static async afterRender() {
    const containerContent = document.querySelector('.list-container')
    let element = ''

    const favArray = await this.getFavoriteData()

    favArray.forEach((restoData) => {
      const pictureId = `https://restaurant-api.dicoding.dev/images/medium/${restoData.pictureId}`
      element += `<div class="list-wrapper">
            <card-resto
            img=${pictureId}
            name="${restoData.name}"
            rate=${restoData.rating}
            location=${restoData.city}
            key=${restoData.id}
            >
            </card-resto>
        </div>`
    })

    containerContent.innerHTML = element
  }

  // eslint-disable-next-line class-methods-use-this
}

export default Favorite
