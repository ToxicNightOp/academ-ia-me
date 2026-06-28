self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('protocolo-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/compras.html',
      '/manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});