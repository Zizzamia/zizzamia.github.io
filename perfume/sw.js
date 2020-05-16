const PERFUME_PRECACHE = [
  'https://zizzamia.github.io/perfume/',
  'https://zizzamia.github.io/perfume/assets/first-contentful-paint-desktop.webp',
  'https://zizzamia.github.io/SourceSansPro-Regular.3125381951c8362bf251.woff2',
  'https://zizzamia.github.io/OpenSans-Regular.a725497524525c361f0d.woff2'
];
const urlsToCacheKeys = new Map();
const urlsToCacheModes = new Map();
const cacheKeysToIntegrities = new Map();

const precache = async (precacheURLs) => {
  const toBePrecached = [];
  const alreadyPrecached = [];

  const cache = await caches.open('perfume-cache');
  const alreadyCachedRequests = await cache.keys();
  console.log('sw.alreadyCachedRequests', alreadyCachedRequests);
  const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
  console.log('sw.existingCacheKeys', existingCacheKeys);

  for (const [url, cacheKey] of urlsToCacheKeys) {
    if (existingCacheKeys.has(cacheKey)) {
      alreadyPrecached.push(url);
    } else {
      toBePrecached.push({cacheKey, url});
    }
  }

  const precacheRequests = toBePrecached.map(({cacheKey, url}) => {
    const integrity = cacheKeysToIntegrities.get(cacheKey);
    const cacheMode = urlsToCacheModes.get(url);
  });
  await cache.addAll(precacheURLs);
}

const handleResponse = async (event, request) => {
  const cache = await caches.open('perfume-cache');
  const responseCached = await cache.match(request);
  event.waitUntil(
    (async function () {
      const responseFetched = await fetch(request);
      if (!responseFetched.clone) {
        return;
      }
      const responseCloned = responseFetched.clone();
      if (!responseCloned || responseCloned.status !== 200) {
        return;
      }
      await cache.put(request, responseCloned);
    })(),
  );
  if (responseCached) {
    return responseCached;
  }
  return fetch(request);
};

self.addEventListener('fetch', async event => {
  //const origin = new URL(event.request.url).origin;
  //if (origin !== 'https://zizzamia.github.io') {
  //  return;
  //}
  //event.respondWith(
  //  (async function () {
  //    return await handleResponse(event, event.request);
  //  })(),
  //);
});

self.addEventListener('install', async () => {
  await self.skipWaiting();
  await precache(PERFUME_PRECACHE);
});

self.addEventListener('activate', event => {
  self.clients.claim();
});
