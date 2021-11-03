/* eslint-disable no-useless-constructor */
class ErrorMsg extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.msg = this.getAttribute('msg') || 'Oops gagal menampilkan konten 😥'
    this.render()
  }

  render() {
    this.innerHTML = `
        '<p class="err-msg">
        ${this.msg}
        </p>'    
    `
  }
}

export default customElements.define('error-msg', ErrorMsg)
