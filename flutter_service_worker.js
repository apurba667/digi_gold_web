'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2dddf738fa65980b5c0f89e6fec35dea",
"assets/AssetManifest.bin.json": "918b3efaad5bd99ec536cd830a44d51a",
"assets/AssetManifest.json": "d4851054859fcc624f9f78a1180fcefc",
"assets/assets/images/67908d02731aa811390f51dd_Surprising%2520Uses%2520of%2520Gold-%2520TB-p-500.jpg": "5382cabb9ddcf680f79138004c186318",
"assets/assets/images/Animation%2520-%25201736827058824.json": "3ecb7efb4a4417ae86b77f1c852affbd",
"assets/assets/images/Animation%2520-%25201736827135480.json": "75a2d2ff188381e35cd104cbe14cd4c9",
"assets/assets/images/Animation%2520-%25201736827163682.json": "d8a214d771b10cc3f8ac42ca4bb0d81f",
"assets/assets/images/apple-svgrepo-com.png": "b5f380621b3cbfbd66e6e2264670dc65",
"assets/assets/images/attachment-2-svgrepo-com.png": "57956617f26e045afaf2b4ac6eca0ecc",
"assets/assets/images/bank-card-svgrepo-com.png": "f71fd8d9c6dfcc5fc8056dc0e67d18da",
"assets/assets/images/bd_flag.png": "91d601cb3aa219e4ef505f7532c91ade",
"assets/assets/images/bkash.png": "91374b169308ba0911bafc0e5db1e2c8",
"assets/assets/images/call-svgrepo-com.png": "42e11eba92d91301281cae0a3681a0c5",
"assets/assets/images/delete-filled-svgrepo-com.png": "72c0f11c374cce6ea2f828b69666db4a",
"assets/assets/images/digital_gold.jpg": "099480fbe20d0d9ebd1553c2c702c70d",
"assets/assets/images/energy-saving-light-bulbs-svgrepo-com.png": "ae0e08cf6f0d5f26a38aba5020925988",
"assets/assets/images/event-calender-date-note-svgrepo-com.png": "8b9546b3e710d4f2d44e2191b586da55",
"assets/assets/images/facebook-color-svgrepo-com.png": "45426ca50f1722823f894f85c93a4d18",
"assets/assets/images/gold1.png": "b4f522f50b6d384df859ae14504a315c",
"assets/assets/images/gold2.png": "e41b77a547e832a045cf51f20fba377a",
"assets/assets/images/instagram-1-svgrepo-com.png": "b80cf572bc04f9e188f646f1dff62a8a",
"assets/assets/images/jewellery/1.jpg": "dbb80bbda648311d15430582c18d00b8",
"assets/assets/images/jewellery/2.jpg": "b6e67f5211ac64363fdf8bdef6628a65",
"assets/assets/images/jewellery/3.jpg": "695eb6b8fda2f9b37555257885db4ece",
"assets/assets/images/jewellery/4.jpeg": "6143f4d23c8c2a99b709a5cf95457f3c",
"assets/assets/images/jewellery/5.jpeg": "1c68f589eaf64fc412e0a19581a485ac",
"assets/assets/images/kyc.png": "b70374ea5a93c3742d41c794e7e273b4",
"assets/assets/images/linkedin-linked-in-svgrepo-com.png": "e3f86fcd3148466d5b1c197c0ae6531b",
"assets/assets/images/live.png": "bff54cbbb544966030bddb2711a692fe",
"assets/assets/images/log-out-exit-svgrepo-com.png": "fe7b705dfc1fa5c377f54b86ef651b41",
"assets/assets/images/logo.png": "cdc56ef45b63098803d767c9e2239b67",
"assets/assets/images/medal-quality-svgrepo-com%2520(1).png": "e718010f63f9025d75fa2be090019d3b",
"assets/assets/images/medal-quality-svgrepo-com.png": "44a6e7406b000a6afd2cebcb22b22f10",
"assets/assets/images/money-transfer-svgrepo-com.png": "54b77beb9b5f2b68cf02567d9e0facce",
"assets/assets/images/nagad.png": "63188bd74aba63d32140648b5a8ba5f8",
"assets/assets/images/nid.png": "8f340f84c34e2c04e28934acf67a4a3c",
"assets/assets/images/p1.jpg": "01974500bc101277cb5e26bbbdcbe420",
"assets/assets/images/p2.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/p3.jpeg": "9ea75389bbb43af1fcf294d14e30a20a",
"assets/assets/images/passport.png": "ef51860acdd4e66eedee9447872821d3",
"assets/assets/images/payment-method-pay-svgrepo-com.png": "1acd7a36b9e0edfdd989926cc5ac9600",
"assets/assets/images/playstore-svgrepo-com.png": "c8f68dd79fde2cf02cf80e1eb92b6324",
"assets/assets/images/privacy-tips-svgrepo-com.png": "f6c279b9a792d00d4ed0cabb1841d937",
"assets/assets/images/profile-svgrepo-com.png": "16827c00bac419f2f023d5f5cb3e5e65",
"assets/assets/images/profile3.jpg": "8d15f5f7feccd71308ce61290a5a653c",
"assets/assets/images/rocket-svgrepo-com.png": "6011a0f240d7e92bfe5d4bcc92d4d4c5",
"assets/assets/images/safety-certificate-svgrepo-com%2520(2).png": "847ca959edc6d2de1fe0a0e7f29292c9",
"assets/assets/images/settings-1-svgrepo-com.png": "8ae9b01956e3de5a1367120a867c2389",
"assets/assets/images/settings.png": "47ebed4e2c7d396772ad2245ddbbbe6d",
"assets/assets/images/taka-square-2-svgrepo-com.png": "a1e22a946714be6b9f626fb91939ac0c",
"assets/assets/images/twitter-color-svgrepo-com.png": "6b19b94d97d6b3abb8ef0fd14ed61ecb",
"assets/assets/images/verified-check-svgrepo-com.png": "a9629132f0b368d1f40012fe18469ab0",
"assets/assets/images/write-svgrepo-com.png": "091f159a6b6106d94e8f0c279812f0dd",
"assets/assets/images/youtube-color-svgrepo-com.png": "d5f0252a424fd1bf98350fa620e7036c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fc1ead5390dda7fbddd26075653b10de",
"assets/NOTICES": "869c333011104629258e08c6f548463b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ec5012985446111611d79a5ebd6806c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cf8d5b4bfb31d8b62b833f2177320bd",
"/": "0cf8d5b4bfb31d8b62b833f2177320bd",
"main.dart.js": "7be0a9e683bd98c5aae9a806f0cdd9ed",
"manifest.json": "7a083ab1189556960d6383f322c8ee9d",
"version.json": "0162aa3da4e644dee5421a7eeae91947"};
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
