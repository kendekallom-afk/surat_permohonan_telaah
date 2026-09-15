/**
 * Service Worker - mGPS Point
 * Strategi: Network First (update cache saat online) → Cache Fallback (offline)
 */
const CACHE_NAME = 'mgps-point-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './sw.js',
  './css/style.css',
  './js/app.js',
  './assets/M.png',
  './assets/Mlogo.png',
  './mgps_v1.0_beta/lib/jspdf.umd.min.js',
  './mgps_v1.0_beta/lib/jspdf.plugin.autotable.min.js',
  './mgps_v1.0_beta/font/Roboto/roboto.css'
];

// Install: precache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching assets...');
        // Cache core files (ignore failures for optional assets like images)
        return Promise.allSettled(
          ASSETS_TO_CACHE.map((url) =>
            cache.add(url).catch((err) => {
              console.warn('[SW] Failed to cache:', url, err.message);
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: hapus cache lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network First → Cache Fallback
self.addEventListener('fetch', (event) => {
  // Hanya handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip non-http(s) schemes
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    (async () => {
      try {
        // Coba network dulu (untuk update cache)
        const networkResponse = await fetch(event.request);

        // Jika sukses, update cache (hanya untuk same-origin atau CDN yang kita butuhkan)
        if (networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          // Cache response clone
          cache.put(event.request, networkResponse.clone()).catch(() => {});
        }

        return networkResponse;
      } catch (err) {
        // Offline / network gagal → ambil dari cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fallback untuk navigasi (HTML)
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match('./index.html') || await caches.match('./');
          if (fallback) return fallback;
        }

        // Jika tidak ada di cache sama sekali
        return new Response('Offline - Konten tidak tersedia di cache.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })()
  );
});
