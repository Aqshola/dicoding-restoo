/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */

import Database from "../../utils/indexedDB";

class FavButton extends HTMLElement {
  connectedCallback() {
    this.indexedDB = null;
    this.data = this.getAttribute("data-resto");
    this.parse = null;
    if (this.dataParsing()) {
      this.databaseFetch();
      this.render();
      this.favoriteButton();
    }
  }

  dataParsing() {
    try {
      this.parse = JSON.parse(this.data);
      return true;
    } catch (e) {
      return false;
    }
  }

  databaseFetch() {
    Database.getRestoo(this.parse.id).then((res) => {
      if (res !== undefined) {
        this.indexedDB = true;
        document.querySelector(".resto-fav").classList.add("resto-fav-active");
      } else {
        this.indexedDB = false;
      }
    });
  }

  favoriteButton() {
    this.favorite = document.querySelector(".resto-fav");
    this.favorite.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.indexedDB) {
        Database.deleteRestoo(this.parse.id);
      } else {
        Database.addRestoo(this.parse);
      }
      document.querySelector(".resto-fav").classList.toggle("resto-fav-active");
    });
  }

  render() {
    this.innerHTML = `
        <button aria-label="add to favorite" id="fav-btn" class="resto-fav">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
        </button>`;
  }
}
export default customElements.define("resto-fav", FavButton);
