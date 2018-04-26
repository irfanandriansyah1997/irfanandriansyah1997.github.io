/* eslint-disable */
var VERSION = 'irfan.github.io ver-0.4.1';

this.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(VERSION).then(cache => {
      return cache.addAll([
        '/index.html',
        '/404.html',
        '/assets/app.css',
        '/assets/font/acta/acta.css',
        '/assets/font/acta/acta.woff2',
        '/assets/font/another danger/another danger.css',
        '/assets/font/another danger/another danger.otf',
        '/assets/font/europa regular/europa.css',
        '/assets/font/europa regular/europa.woff2',
        '/assets/font/metric/metric.css',
        '/assets/font/metric/metric.woff2',
        '/assets/font/moon/moon.css',
        '/assets/font/moon/Moon Bold.otf',
        '/assets/font/moon/Moon Light.otf',
        '/assets/images/background.svg',
        '/assets/images/bullet.png',
        '/assets/images/card.png',
        '/assets/images/earth.png',
        '/assets/images/list.png',
        '/assets/images/logo.ico',
        '/assets/images/logo.svg',
        '/assets/images/menu.svg',
        '/assets/images/search.svg',
        '/assets/js/app.js',
        '/assets/js/vendor.js',
        '/assets/js/vendor-app.js',
        '/assets/js/404.js',
        '/assets/images/1.jpg',
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
      ]);
    })
  );
});

this.addEventListener('fetch', function(e) {
  var tryInCachesFirst = caches.open(VERSION).then(cache => {
    return cache.match(e.request).then(response => {
      if (!response) {
        return handleNoCacheMatch(e);
      }
      // Update cache record in the background
      fetchFromNetworkAndCache(e);
      // Reply with stale data
      return response;
    });
  });
  e.respondWith(tryInCachesFirst);
});

this.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== VERSION) return caches.delete(key);
        })
      );
    })
  );
});

function fetchFromNetworkAndCache(e) {
  // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
  // There's probaly more going on here, but I'd rather just ignore this problem. :)
  // https://github.com/paulirish/caltrainschedule.io/issues/49
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;

  return fetch(e.request)
    .then(res => {
      // foreign requests may be res.type === 'opaque' and missing a url
      if (!res.url) return res;
      // regardless, we don't want to cache other origin's assets
      if (new URL(res.url).origin !== location.origin) return res;

      return caches.open(VERSION).then(cache => {
        // TODO: figure out if the content is new and therefore the page needs a reload.
        cache.put(e.request, res.clone());
        return res;
      });
    })
    .catch(err => console.error(e.request.url, err));
}

function handleNoCacheMatch(e) {
  return fetchFromNetworkAndCache(e);
}
