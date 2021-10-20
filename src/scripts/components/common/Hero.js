class Hero extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.img = this.getAttribute('img') || ''
    this.title = this.getAttribute('title') || ''
    this.subtitle = this.getAttribute('subtitle') || ''
    this.altHero = this.getAttribute('alt-hero') || ''
    this.classHero = this.getAttribute('class-hero')

    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
      <div class="hero-slogan">
        <h2>${this.title}</h2>
        <p>${this.subtitle}</p>
      </div>

      <img src=${this.img} alt="${this.altHero}" class=${this.classHero} />
    </div>
    `
  }
}

export default customElements.define('hero-image', Hero)
