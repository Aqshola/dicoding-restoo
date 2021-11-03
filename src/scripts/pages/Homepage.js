import { getAllResto, getPicture } from '../utils/api'

class Homepage {
  static render() {
    return `<hero-image
      img="images/heros/hero-image_2.jpg"
      title="Restoo"
      subtitle="Tempatnya cari makanan enak"
      alt-hero="illustrasi kafe"
      class-hero="darken-img"
    ></hero-image>
    <section id="resto-content" class="container">
      <div class="list-restorant-container">
        <h2>Daftar Restoran</h2>
        <div class="list-container">
          <loader-spin class="loader-wrapper"></loader-spin>
        </div>
      </div>
    </section>
      `
  }

  static async afterRender() {
    const containerContent = document.querySelector('.list-container')

    const fetchData = await getAllResto()

    this.data = fetchData

    if (fetchData.error) {
      containerContent.innerHTML = `<error-msg class="err-msg" msg="${fetchData.message}"></error-msg>`
    } else {
      containerContent.innerHTML = this.appendContent(fetchData.restaurants)
    }
  }

  static appendContent(data) {
    let element = ''

    data.forEach((restoData) => {
      element += `<div class="list-wrapper">
            <card-resto
            img=${getPicture(restoData.pictureId)}
            name="${restoData.name}"
            rate=${restoData.rating}
            location=${restoData.city}
            key=${restoData.id}
            >
            </card-resto>
        </div>`
    })

    return element
  }
}

export default Homepage
