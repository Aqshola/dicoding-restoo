/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import 'regenerator-runtime/runtime'
// import { cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing/registerRoute'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { clientsClaim, setCacheNameDetails } from 'workbox-core'

self.addEventListener('install', () => {
  console.log('Installing Service Worker')
})
self.addEventListener('activate', () => {
  console.log('Activate')
})

self.skipWaiting()
clientsClaim()

setCacheNameDetails({
  prefix: 'Restoo',
  precache: 'precache',
  runtime: 'runtime',
})

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      revision: 1,
    },
  ],

  {
    ignoreURLParametersMatching: [/.*/],
  }
)
registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  })
)

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
)

cleanupOutdatedCaches()
