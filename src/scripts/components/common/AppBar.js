class AppBar extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
    this.btnClick()
  }

  btnClick() {
    const btn = document.querySelector('.ham-btn')
    const navContent = document.querySelector('.nav-content')

    btn.addEventListener('click', () => {
      navContent.classList.toggle('hide-navcontent')

      const hide = navContent.classList.contains('hide-navcontent')
      if (hide) {
        btn.style.transform = 'rotate(' + 0 + 'deg)'
      } else {
        btn.style.transform = 'rotate(' + 90 + 'deg)'
      }
    })
  }

  render() {
    this.innerHTML = `
    <div class="mobile-nav">
        <div class="mobile-content">
          <h1 class="mobile-title">Resto App</h1>
          <button class="ham-btn">
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
        </div>
        <div class="nav-content hide-navcontent">
          <a href="#">Home</a>
          <a href="#">Favorites</a>
          <a href="#">About us</a>
        </div>
      </div>
    `
  }
}

export default customElements.define('app-bar', AppBar)
