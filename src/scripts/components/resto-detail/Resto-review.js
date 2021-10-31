/* eslint-disable no-useless-constructor */

class RestoReview extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.review = JSON.parse(this.dataset.review) || []

    this.render()
  }

  render() {
    this.innerHTML = `  
     <div class="resto-review">
            <h2> Kafe Kita Review </h2>


            <div class="review-list">
              ${this.generateReviewList()}
            </div>
          </div>`
  }

  generateReviewList() {
    const append = this.review
      .map(
        (data) =>
          `<div class="review-card">
                  <h1>${data.name}</h1>
                  <h2>${data.date}</h2>
                  <p>${data.review}</p>
        </div>`
      )
      .join('')

    return append
  }
}

export default customElements.define('resto-review', RestoReview)
