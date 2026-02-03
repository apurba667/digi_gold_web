'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bf7c14cb2bad065b754f7b90bed90715",
"version.json": "0162aa3da4e644dee5421a7eeae91947",
"index.html": "e3b53a67ee5cf0112d8930b05b9eecb0",
"/": "e3b53a67ee5cf0112d8930b05b9eecb0",
"main.dart.js": "5e6ab7e68d7003a310432d47356e63ac",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c04e2e57167f48c62e92fd2998bd65d1",
".git/ORIG_HEAD": "1dedce7ce311691d043fbdca68fded20",
".git/config": "538db9d3df605a2d3d1c873d80b69aab",
".git/objects/68/29bb53e10a2d3427e764ad47182ecef2b32aac": "886cb20e54932d2e1dc768b01b0827be",
".git/objects/57/541cc41f348735659fb2aa3b22221c6e4b5b26": "7150fb97e371176fcae62dba4e112aab",
".git/objects/3d/6a0de09e7d2d44bf7717f3336c57bbbfe2ddd1": "75dc6deae1d8a3a3ebcb1c3db5abb4de",
".git/objects/93/d916d65630b962ba6679cb6daa21f5fdb21234": "0f56d90680076bba649efada21c2822e",
".git/objects/a2/f4c004f8f3faba1de1c71ff40ff9a90923114a": "437230e3c892ddf86412bd9bb2bccf69",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/a1eb27c4b4fe2d90098606007d9b8049876a52": "b2bea11b2cdc437a366f5106e8d5be21",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d3/a349b9371a6a7d81e7bf3642b2855edd8905f5": "f26d6797c58fc8e8d26ebd0058969062",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/0c3f5f0a1297d0f2928a769539989197324348": "6472f8978ac1e874b86f9b925cc5913c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/26aa9188985ef385702a05f6b1b37c5e5bad9b": "21da49d9b3aa972868c57958df6fa4e1",
".git/objects/1d/390442044f87a811fe6996f3ceed43422bb961": "d6bac5fb2df5e09f2339e98bd7aba629",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a138a44325050c36c1493e5b72217769",
".git/logs/refs/heads/main": "f454c472928a5be256dbc6154e3a4524",
".git/logs/refs/remotes/origin/HEAD": "a756037596d8385d3fdb18418acfb791",
".git/logs/refs/remotes/origin/main": "98043bb17298836b57752932cfc0a3e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "65111260330444af39bb69eb13f0e174",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "65111260330444af39bb69eb13f0e174",
".git/index": "60d20facc24a2184e6d0da7649288912",
".git/COMMIT_EDITMSG": "5df03f95b4ff4f4b5dabe53a5a1e15d7",
".git/FETCH_HEAD": "b5a4232fe2ab316ece7190eae4bf94ca",
"assets/NOTICES": "0f28430bc6352793ce8a4f30d5d115dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "80bf22de52feb0b6036b44a92c0343f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "6851faf607dbe0beacd451c84984d490",
"assets/fonts/MaterialIcons-Regular.otf": "1fe601d7c9702621e01bac4af7e203e0",
"assets/assets/images/linkedin-linked-in-svgrepo-com.png": "e3f86fcd3148466d5b1c197c0ae6531b",
"assets/assets/images/gold1.png": "b4f522f50b6d384df859ae14504a315c",
"assets/assets/images/bd_flag.png": "91d601cb3aa219e4ef505f7532c91ade",
"assets/assets/images/bkash.png": "91374b169308ba0911bafc0e5db1e2c8",
"assets/assets/images/nagad.png": "63188bd74aba63d32140648b5a8ba5f8",
"assets/assets/images/apple-svgrepo-com.png": "b5f380621b3cbfbd66e6e2264670dc65",
"assets/assets/images/gold2.png": "e41b77a547e832a045cf51f20fba377a",
"assets/assets/images/privacy-tips-svgrepo-com.png": "f6c279b9a792d00d4ed0cabb1841d937",
"assets/assets/images/energy-saving-light-bulbs-svgrepo-com.png": "ae0e08cf6f0d5f26a38aba5020925988",
"assets/assets/images/settings.png": "47ebed4e2c7d396772ad2245ddbbbe6d",
"assets/assets/images/log-out-exit-svgrepo-com.png": "fe7b705dfc1fa5c377f54b86ef651b41",
"assets/assets/images/delete-filled-svgrepo-com.png": "72c0f11c374cce6ea2f828b69666db4a",
"assets/assets/images/write-svgrepo-com.png": "091f159a6b6106d94e8f0c279812f0dd",
"assets/assets/images/scan_qr.png": "d24686c620a98563052fff58c4d4c458",
"assets/assets/images/youtube-color-svgrepo-com.png": "d5f0252a424fd1bf98350fa620e7036c",
"assets/assets/images/logo-removebg.png": "66be94a4806c92d4314a7dd9c55dd0a7",
"assets/assets/images/Animation%2520-%25201736827163682.json": "d8a214d771b10cc3f8ac42ca4bb0d81f",
"assets/assets/images/bank-card-svgrepo-com.png": "f71fd8d9c6dfcc5fc8056dc0e67d18da",
"assets/assets/images/playstore-svgrepo-com.png": "c8f68dd79fde2cf02cf80e1eb92b6324",
"assets/assets/images/Animation%2520-%25201736827058824.json": "3ecb7efb4a4417ae86b77f1c852affbd",
"assets/assets/images/rocket-svgrepo-com.png": "6011a0f240d7e92bfe5d4bcc92d4d4c5",
"assets/assets/images/attachment-2-svgrepo-com.png": "57956617f26e045afaf2b4ac6eca0ecc",
"assets/assets/images/kyc.png": "b70374ea5a93c3742d41c794e7e273b4",
"assets/assets/images/jewellery/4.jpeg": "6143f4d23c8c2a99b709a5cf95457f3c",
"assets/assets/images/jewellery/5.jpeg": "1c68f589eaf64fc412e0a19581a485ac",
"assets/assets/images/jewellery/2.jpg": "b6e67f5211ac64363fdf8bdef6628a65",
"assets/assets/images/jewellery/3.jpg": "695eb6b8fda2f9b37555257885db4ece",
"assets/assets/images/jewellery/1.jpg": "dbb80bbda648311d15430582c18d00b8",
"assets/assets/images/payment-method-pay-svgrepo-com.png": "1acd7a36b9e0edfdd989926cc5ac9600",
"assets/assets/images/passport.png": "ef51860acdd4e66eedee9447872821d3",
"assets/assets/images/safety-certificate-svgrepo-com%2520(2).png": "847ca959edc6d2de1fe0a0e7f29292c9",
"assets/assets/images/call-svgrepo-com.png": "42e11eba92d91301281cae0a3681a0c5",
"assets/assets/images/settings-1-svgrepo-com.png": "8ae9b01956e3de5a1367120a867c2389",
"assets/assets/images/p2.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/twitter-color-svgrepo-com.png": "6b19b94d97d6b3abb8ef0fd14ed61ecb",
"assets/assets/images/nid.png": "8f340f84c34e2c04e28934acf67a4a3c",
"assets/assets/images/p3.jpeg": "9ea75389bbb43af1fcf294d14e30a20a",
"assets/assets/images/p1.jpg": "01974500bc101277cb5e26bbbdcbe420",
"assets/assets/images/logo.png": "cdc56ef45b63098803d767c9e2239b67",
"assets/assets/images/event-calender-date-note-svgrepo-com.png": "8b9546b3e710d4f2d44e2191b586da55",
"assets/assets/images/verified-check-svgrepo-com.png": "a9629132f0b368d1f40012fe18469ab0",
"assets/assets/images/discount-shape-svgrepo-com.png": "d82c2d4df1f5a4913d7dd7f1529c2d29",
"assets/assets/images/money-transfer-svgrepo-com.png": "54b77beb9b5f2b68cf02567d9e0facce",
"assets/assets/images/instagram-1-svgrepo-com.png": "b80cf572bc04f9e188f646f1dff62a8a",
"assets/assets/images/profile-svgrepo-com.png": "16827c00bac419f2f023d5f5cb3e5e65",
"assets/assets/images/digital_gold.jpg": "099480fbe20d0d9ebd1553c2c702c70d",
"assets/assets/images/loan.png": "42ab15f119fb0176ef38a8c190599a1d",
"assets/assets/images/facebook-color-svgrepo-com.png": "45426ca50f1722823f894f85c93a4d18",
"assets/assets/images/taka-square-2-svgrepo-com.png": "a1e22a946714be6b9f626fb91939ac0c",
"assets/assets/images/Animation%2520-%25201736827135480.json": "75a2d2ff188381e35cd104cbe14cd4c9",
"assets/assets/images/medal-quality-svgrepo-com.png": "44a6e7406b000a6afd2cebcb22b22f10",
"assets/assets/images/67908d02731aa811390f51dd_Surprising%2520Uses%2520of%2520Gold-%2520TB-p-500.jpg": "5382cabb9ddcf680f79138004c186318",
"assets/assets/images/medal-quality-svgrepo-com%2520(1).png": "e718010f63f9025d75fa2be090019d3b",
"assets/assets/images/profile3.jpg": "8d15f5f7feccd71308ce61290a5a653c",
"assets/assets/images/live.png": "bff54cbbb544966030bddb2711a692fe",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
