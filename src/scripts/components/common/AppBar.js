class AppBar extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.HamBtn = "";
    this.AppBarContent = "";
  }

  connectedCallback() {
    this.render();
    this.afterRender();
  }

  afterRender() {
    this.HamBtn = document.querySelector(".mobile-ham-btn");
    this.AppBarContent = document.querySelector(".mobile-nav-content");
    this.mainContent = document.querySelector("#main-content");

    this.HamBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.AppBarContent.classList.toggle("hide-mobile-nav-content");

      const hide = this.AppBarContent.classList.contains(
        "hide-mobile-nav-content"
      );
      if (hide) {
        this.HamBtn.style.transform = `rotate(${0}deg)`;
      } else {
        this.HamBtn.style.transform = `rotate(${90}deg)`;
      }
    });

    document.addEventListener("click", (e) => {
      const isButtonHam = e.target.classList.contains("mobile-ham-btn");

      if (!isButtonHam) {
        this.AppBarContent.classList.add("hide-mobile-nav-content");
        this.HamBtn.style.transform = `rotate(${0}deg)`;
      }
    });
  }

  render() {
    this.innerHTML = `
    <skip-button></skip-button>
    <nav class="container nav">
      <div class="nav-content">
        <a class="mobile-title" href="#/">Restoo</a>
        <button class="mobile-ham-btn" aria-label="show/hide nav link" >
          <svg
            class="ham-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="desktop-nav-link">
          <a href="#/">Home</a>
          <a href="#/favorite">Favorites</a>
          <a href="https://github.com/Aqshola" rel="noopener noreferrer" target="_blank">About us</a>
        </div>
      </div>
      <div class="mobile-nav-content hide-mobile-nav-content">
        <a href="#/">Home</a>
        <a href="#/favorite">Favorites</a>
        <a href="https://github.com/Aqshola" rel="noopener noreferrer" target="_blank">About us</a>
      </div>
    </nav>
    
    `;
  }
}

export default customElements.define("app-bar", AppBar);
