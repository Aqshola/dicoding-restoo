/* eslint-disable no-restricted-globals */

self.addEventListener('install', () => {
  console.log('Installing Service Worker')
})
self.addEventListener('activate', () => {
  console.log('Activate')
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)

  event.respondWith(fetch(event.request))
})
