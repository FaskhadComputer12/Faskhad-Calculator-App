const cacheName = 'calculator-app-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',  // if using an external stylesheet
  '/script.js',   // if you separate your JS into its own file
  // include any additional assets like images, fonts, etc.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached asset or fetch from network
      return response || fetch(event.request);
    })
  );
});
