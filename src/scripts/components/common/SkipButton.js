/* eslint-disable no-useless-constructor */
class SkipButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.btn = "";
    this.render();
    this.afterRender();
  }

  render() {
    this.innerHTML = `
    <button tabindex="0" class="skip-btn">Skip to Content</button>
    `;
  }

  afterRender() {
    this.btn = document.querySelector(".skip-btn");

    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("main-content").scrollIntoView();
      document.getElementById("main-content").focus();

      const card = document.querySelector(".card .card-description a");
      const favBtn = document.querySelector("#fav-btn");

      if (card !== null) {
        card.focus();
      }

      if (favBtn) {
        favBtn.focus();
      }
    });
  }
}

export default customElements.define("skip-button", SkipButton);
