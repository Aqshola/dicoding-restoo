class App {
  constructor({ content, footer, nav }) {
    this.content = content
    this.footer = footer
    this.nav = nav
    this.appContent = document.querySelector('#app-container')
    this.mainContent = null
    this.initAppShell()
  }

  initAppShell() {
    this.appContent.innerHTML = `
    
    ${this.nav}
     

    <div id="main-content">
      ${this.content}
    </div>

    

    ${this.footer}

    
    
    `
    this.mainContent = document.querySelector('#main-content')
  }

  renderPage() {
    this.mainContent.innerHTML = `
    <hero-image
      img="images/heros/hero-image_2.jpg"
      title="Restoo"
      subtitle="Tempatnya cari makanan enak"
      alt-hero="illustrasi kafe"
      class-hero="darken-img"
    ></hero-image>
    <section id="main-content" class="container">
      <resto-content> </resto-content>
    </section>
      `
  }
}

export default App
