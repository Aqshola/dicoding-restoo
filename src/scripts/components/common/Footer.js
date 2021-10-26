class Footer extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args)
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `<footer id="footer">copyright© 2021 - Aqshola</footer>`
  }
}

export default customElements.define('footer-section', Footer)
