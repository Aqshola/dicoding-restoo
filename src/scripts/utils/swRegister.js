import { Workbox } from 'workbox-window'

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../sw.js')
    workbox.register()
    return
  }

  console.log('Service Worker not supported')
}

export default swRegister
