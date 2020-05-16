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
  const origin = new URL(event.request.url).origin;
  if (origin !== 'https://zizzamia.github.io') {
    return;
  }
  console.log('event', event.request.url);
  event.respondWith(
    (async function () {
      return await handleResponse(event, event.request);
    })(),
  );
});

self.addEventListener('install', async () => {
  await self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});
