class Hero extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.img = this.getAttribute("img") || "";
    this.title = this.getAttribute("title") || "";
    this.subtitle = this.getAttribute("subtitle") || "";
    this.altHero = this.getAttribute("alt-hero") || "";
    this.classHero = this.getAttribute("class-hero");
    this.imgSmall = this.getAttribute("img-small") || "";

    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
      <div class="hero-slogan">
        <h2>${this.title}</h2>
        <p>${this.subtitle}</p>
      </div>

      <picture>
          <source media="(max-width: 600px)" sizes="(max-width: 600px)" srcset=${this.imgSmall} width="422px" height="281px" class="lazyload" data-srcset=${this.imgSmall} loading="lazy">
          <img src=${this.img} data-src=${this.img} alt="${this.altHero}" class="${this.classHero} lazyload" width="1582px" height="420px" loading="lazy"/>
      </picture>

    </div>
    `;
  }
}

export default customElements.define("hero-image", Hero);
