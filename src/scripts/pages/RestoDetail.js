class RestoDetail {
  static render() {
    return `
    <h1>Resto Detail</h1>
      `
  }

  static async afterRender() {
    console.log('testing')
  }
}

export default RestoDetail
