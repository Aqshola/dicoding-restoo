/* eslint-disable no-useless-constructor */

class RestoNav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.id = this.getAttribute('id') || ''

    this.render()
  }

  render() {
    const urlQuery = new URL(window.location)
    const query = urlQuery.toString().split('?mode=')[1]

    const url = `#/resto/${this.id}`
    this.innerHTML = `  <div class="resto-nav">
            <a href="${url}?mode=desc" class=${
      query === 'desc' || !query ? 'active-nav' : ''
    }>Description</a>
            <a href="${url}?mode=menu" class=${
      query === 'menu' ? 'active-nav' : ''
    }>Menu</a>
    
            <a href="${url}?mode=review"  class=${
      query === 'review' ? 'active-nav' : ''
    }>Review</a>
          </div> `
  }
}

export default customElements.define('resto-nav', RestoNav)
