/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */

import Database from "../../utils/indexedDB";

// class RestoFav extends HTMLElement {
//   async connectedCallback() {
//     this.resto = JSON.parse(this.dataset.resto) || null;

//     this.render();
//     this.afterRender();
//   }

//   async render() {
//     this.innerHTML = `
//     <button aria-label="add to favorite" id="fav-btn" class="resto-fav">
//             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
//             </svg>
//     </button>
//     `;
//   }

//   afterRender() {
//     const btn = document.querySelector(".resto-fav");
//     Database.getRestoo(this.resto.id).then((data) => {
//       if (data !== undefined) {
//         btn.classList.add("resto-fav-active");
//       }
//     });

//     btn.addEventListener("click", async (e) => {
//       e.preventDefault();
//       Database.getRestoo(this.resto.id).then((data) => {
//         if (data === undefined) {
//           Database.addRestoo(this.resto).then(() => {
//             console.log("success add favorite");
//           });
//         } else {
//           Database.deleteRestoo(this.resto.id).then(() => {
//             console.log("remove favorite");
//           });
//         }
//       });
//       // btn.classList.toggle("resto-fav-active");
//     });
//   }
// }

// export default customElements.define("resto-fav", RestoFav);

class FavButton extends HTMLElement {
  connectedCallback() {
    this.indexedDB = { id: null };
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
    console.log("a");
    Database.getRestoo(this.parse.id).then((res) => {
      if (res !== undefined) {
        this.indexedDB = res;
        if (this.parse.id === this.indexedDB.id) {
          document
            .querySelector(".resto-fav")
            .classList.add("resto-fav-active");
        }
      } else {
        this.indexedDB = { id: null };
      }
    });
  }

  favoriteButton() {
    this.favorite = document.querySelector(".resto-fav");
    this.favorite.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.indexedDB.id === this.parse.id) {
        Database.deleteRestoo(this.indexedDB.id);
        document
          .querySelector(".resto-fav")
          .classList.remove("resto-fav-active");
      } else {
        Database.addRestoo(this.parse);
        document.querySelector(".resto-fav").classList.add("resto-fav-active");
      }
      this.databaseFetch();
    });
  }

  render() {
    console.log("b");
    this.innerHTML = `
        <button aria-label="add to favorite" id="fav-btn" class="resto-fav">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
        </button>`;
  }
}
customElements.define("resto-fav", FavButton);
