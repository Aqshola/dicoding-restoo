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
          Loading...
        </div>
      </div>
    </section>
      `
  }

  static async afterRender() {
    const containerContent = document.querySelector('.list-container')
    let element = ''

    const fetchData = await (
      await fetch('https://restaurant-api.dicoding.dev/list')
    ).json()

    this.data = fetchData

    fetchData.restaurants.forEach((restoData) => {
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
}

export default Homepage
