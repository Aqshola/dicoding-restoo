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
      <resto-content> </resto-content>
    </section>
      `
  }
}

export default Homepage
