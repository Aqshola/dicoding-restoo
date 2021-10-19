class Hero extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
      <div class="hero-slogan">
        <h2>Resto</h2>
        <p>Tempat Cari Restoran terbaik</p>
      </div>

      <img src="images/heros/hero-image_2.jpg" alt="Makan bersama" />
    </div>
    `
  }
}

export default customElements.define('hero-image', Hero)
