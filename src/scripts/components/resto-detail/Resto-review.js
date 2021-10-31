/* eslint-disable no-useless-constructor */

class RestoReview extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `  
     <div class="resto-review">
            <h2> Kafe Kita Review </h2>


            <div class="review-list">
              <div class="review-card">
                  <h1>Gilang</h1>
                  <h2>13 November 2019</h2>
                  <p>Tidak ada duanya</p>
                </div>
            </div>
          </div>`
  }
}

export default customElements.define('resto-review', RestoReview)
