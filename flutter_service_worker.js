'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9991c093a641f233b660e0d071181a9e",
"version.json": "8ea5788fd082ed689da7b2868b6d8e80",
"index.html": "164955045671ad18d1cdfaf966d7dd97",
"/": "164955045671ad18d1cdfaf966d7dd97",
"main.dart.js": "057d627ebc42758f79b3004b961e5455",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ef09d984eb0eb71b9d88ef417fe98cd1",
".git_%E5%89%AF%E6%9C%AC/config": "f627e6c6ed29ff44c92a813c8c434eb6",
".git_%E5%89%AF%E6%9C%AC/objects/6a/8f1daa1f960b6d99b2dca5edbc2c022515b603": "b3a669964de507b6f5d1885d8e6634e2",
".git_%E5%89%AF%E6%9C%AC/objects/b4/ecceb9209e8dd194c14b49acc1a2d642d8eaea": "cb7bcc9496a1bf759c9da8303e3b38bd",
".git_%E5%89%AF%E6%9C%AC/objects/bd/8dd091ea57734eb9e68e37ace41b5317e5eb72": "7630f6a6b96b885eca6c330bf664277d",
".git_%E5%89%AF%E6%9C%AC/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git_%E5%89%AF%E6%9C%AC/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git_%E5%89%AF%E6%9C%AC/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git_%E5%89%AF%E6%9C%AC/objects/72/b250a562d916ed036daa19eb9dbb24375ebf38": "821f059306fc1d1bcdac2b794365c027",
".git_%E5%89%AF%E6%9C%AC/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git_%E5%89%AF%E6%9C%AC/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git_%E5%89%AF%E6%9C%AC/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git_%E5%89%AF%E6%9C%AC/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git_%E5%89%AF%E6%9C%AC/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git_%E5%89%AF%E6%9C%AC/logs/HEAD": "dc9c38df69331b22d2450d4657739e5e",
".git_%E5%89%AF%E6%9C%AC/logs/refs/heads/main": "dc9c38df69331b22d2450d4657739e5e",
".git_%E5%89%AF%E6%9C%AC/logs/refs/remotes/origin/main": "6b454731451e9afe83bf14233fa7f4c2",
".git_%E5%89%AF%E6%9C%AC/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git_%E5%89%AF%E6%9C%AC/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git_%E5%89%AF%E6%9C%AC/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git_%E5%89%AF%E6%9C%AC/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git_%E5%89%AF%E6%9C%AC/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git_%E5%89%AF%E6%9C%AC/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git_%E5%89%AF%E6%9C%AC/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git_%E5%89%AF%E6%9C%AC/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git_%E5%89%AF%E6%9C%AC/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git_%E5%89%AF%E6%9C%AC/refs/heads/main": "43cce86a6a832b08cc1b16169bd8f4ba",
".git_%E5%89%AF%E6%9C%AC/refs/remotes/origin/main": "43cce86a6a832b08cc1b16169bd8f4ba",
".git_%E5%89%AF%E6%9C%AC/index": "ca565c3ac1160df8e3a7b008fbe2056b",
".git_%E5%89%AF%E6%9C%AC/COMMIT_EDITMSG": "465dc8fff1d3fc536a2836ca1a68ce86",
".git/config": "f627e6c6ed29ff44c92a813c8c434eb6",
".git/objects/6a/8f1daa1f960b6d99b2dca5edbc2c022515b603": "b3a669964de507b6f5d1885d8e6634e2",
".git/objects/b4/ecceb9209e8dd194c14b49acc1a2d642d8eaea": "cb7bcc9496a1bf759c9da8303e3b38bd",
".git/objects/bd/8dd091ea57734eb9e68e37ace41b5317e5eb72": "7630f6a6b96b885eca6c330bf664277d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/b250a562d916ed036daa19eb9dbb24375ebf38": "821f059306fc1d1bcdac2b794365c027",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc9c38df69331b22d2450d4657739e5e",
".git/logs/refs/heads/main": "dc9c38df69331b22d2450d4657739e5e",
".git/logs/refs/remotes/origin/main": "6b454731451e9afe83bf14233fa7f4c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "43cce86a6a832b08cc1b16169bd8f4ba",
".git/refs/remotes/origin/main": "43cce86a6a832b08cc1b16169bd8f4ba",
".git/index": "ca565c3ac1160df8e3a7b008fbe2056b",
".git/COMMIT_EDITMSG": "465dc8fff1d3fc536a2836ca1a68ce86",
"assets/AssetManifest.json": "48b6d849f5a862b2639a27a8bb1cb20a",
"assets/NOTICES": "dab94a560cd7b49aa7dc7a46b304efdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "444b627373cf4fd531df2267d4395dd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d0253f74413757b74326a8e9ddc68fc8",
"assets/fonts/MaterialIcons-Regular.otf": "dd28e9cd3d6832f5017f1b3e925ce60a",
"assets/assets/images/bg.webp": "43048e25231b7a6319334147af50b324",
"assets/assets/list.json": "77b574e41a711adda60a968d0a9046db",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
