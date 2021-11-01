/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */

import Database from '../../utils/indexedDB'

class RestoFav extends HTMLElement {
  constructor() {
    super()
  }

  async connectedCallback() {
    this.resto = JSON.parse(this.dataset.resto) || null
    this.checkFav = await this.checkDataFav(this.resto.id)

    this.render()
    this.afterRender()
  }

  render() {
    this.innerHTML = `            
    <button aria-label="add to favorite" class="resto-fav ${
      this.checkFav ? 'resto-fav-active' : ''
    }">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
    </button>
    `
  }

  afterRender() {
    const btn = document.querySelector('.resto-fav')

    btn.addEventListener('click', () => {
      if (this.checkFav === undefined) {
        Database.addRestoo(this.resto)
      } else {
        Database.deleteRestoo(this.resto.id)
      }
      btn.classList.toggle('resto-fav-active')
    })
  }

  async checkDataFav(id) {
    const check = await Database.getRestoo(id)
    return check
  }
}

export default customElements.define('resto-fav', RestoFav)
