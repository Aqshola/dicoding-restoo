class RestoContent extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="list-restorant-container">
        <h2>Daftar Restoran</h2>
        <div class="list-container">
          <div class="list-wrapper">
            <card-resto></card-resto>
          </div>
          <div class="list-wrapper">
            <card-resto></card-resto>
          </div>
          <div class="list-wrapper">
            <card-resto></card-resto>
          </div>
          <div class="list-wrapper">
            <card-resto></card-resto>
          </div>
          <div class="list-wrapper">
            <card-resto></card-resto>
          </div>
        </div>
      </div>
    `
  }
}

export default customElements.define('resto-content', RestoContent)
