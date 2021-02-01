'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a335547586183f3e1b2689c5df5d4c0f",
".git/config": "0bf1d2582a7bca2b50c06c1be0ae6c25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dba5980bb8721a6d49b2bca45ed05ef4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "487dea86817cb44e94a3a5c73748c3e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5bf82454565129577f601394e6ad737c",
".git/logs/refs/heads/master": "5bf82454565129577f601394e6ad737c",
".git/logs/refs/remotes/origin/master": "81e7a3fcf10bb7bd162cc83fdcabcd45",
".git/objects/14/9450b0937cfb3a2885578242b15c0ba375b2b2": "46845d632af5db545678803c85881f66",
".git/objects/1a/b298c33b203e95c700e8b130149309c2c03e7d": "07a49a336374242b2cc035290bc6d223",
".git/objects/1f/27dafa6d6c3ae5026c44bc905fa10f2f6ea131": "ea6fc511d391ddd7ae8c3a66e0554c91",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/06e37e833c6522c5d27766283907bdeea92d63": "342bc58af72584432b84c0870a756105",
".git/objects/24/b8618ec60f0bba3df4235c350cbdadaffce8a5": "8184532ddcafd255576e22ae963479d3",
".git/objects/2b/16d74b673f110603f251dd7ae200b6ef8292c0": "27a1698b5f9ef22aa335f4dc4e8b16d6",
".git/objects/2b/a2c8114594714da1fe9d2b30494e1f66cda8c2": "b85afdeae5dbc096b8c9c8b88d933101",
".git/objects/2c/600a524ecf8c3962c125aa8a27b30278e546af": "f0c029fbd113a4987790ee3f8a53909c",
".git/objects/30/228b948d7a5a1698c289330ccfea957b38dc44": "7fe9545758f621148ebf27638d7f5821",
".git/objects/30/4ced318319a5d00055daf6e2b86b7e7b554cc7": "7271ce31de701b7d8afbd5f33751c66f",
".git/objects/37/b6765e4525be96091ae142a6afd56864680dca": "1dc2f71f3137fafe9ff1d9eddb50c91d",
".git/objects/38/6db10e4c9d40c6e830c7d75233f674654ef4cb": "921e8761439a4fcaf632fabb57873ed0",
".git/objects/38/cbb5b6da27fd6c397cc445533cf6e466ca6405": "c5de8cd38fa5206df25ab1307b492812",
".git/objects/3a/99ae657fdd70528d3a694466723f66facd3396": "ecf74e13a2abf1cd652c87cf4de999d7",
".git/objects/44/1d415bd5a66807a729bffe0c9be367019cd3e2": "c2dc5821321ad38b288952ce67091365",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b67714302b2085cc8ddf6c8fbf9f08c3c18dc8": "a791b522d4dc45cb94a650b3d37425b2",
".git/objects/55/0812132f7bca2b49cddb05f3d7b768dd5a625d": "5fc35d88755b7b85c67c4dd11f652762",
".git/objects/55/154be487207ac3d4473ddf16fac3c1b4dff75e": "203c479c3484cc967a9d2ae30a185e01",
".git/objects/60/d27190cb155403f00a8ee6cab8727a7bd0c797": "69d5bc78d3176aacaf42f741b2d1a439",
".git/objects/62/10906825e49e5cc68c3125ed78d16676964b10": "6ef0f320f014cae50243dda89f53c626",
".git/objects/68/47527df069c097ff6519ea11ad607c04053443": "3bebec619f259ad0c72b06f130e079db",
".git/objects/74/6d65d2a809b9a637827a9f0a67f75d1278b441": "e8eb5a8a54285508a1f9eb4488d7c1bd",
".git/objects/74/8e5779dd20f0d01794816c4316f0883ed495a0": "599c9ae721348c5207c172aec471f80f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/cf807785f849c69b119a6d01d4edaf1fa57f36": "d9f540d2233551bb36e764ebf4f6c99d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4e4da39f3917532e7f76af6ee5776d4052bb96": "a653364722df38cfc0e73deec5b4e4a2",
".git/objects/97/0ca4180e1fe0d7cf85f238d003a8fbc5c24d2c": "ee3d27417f08088efd90257d6f3156b8",
".git/objects/9f/5fa719a22e3ce8a9a1a42fd62bfb2298ad1846": "0d84301a28b76b1f2a5c14c9ef9d8b36",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/67f3767b63a5a13c410ad15814042cd44970c8": "42d2576d7edca59eaec617798e067892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2bd631661129e01fadda57bd331450d036bb50": "712b9c26ac42e2cba74144c7897a4ef1",
".git/objects/b9/41e4a5bb67e69e5a2e86a385de401128758e71": "3bf7f786a95f35a9b2ea78fe2ed1b72d",
".git/objects/c1/772d75e66ca925cff9a0387c6501dce67f3a19": "5c6223ba4b5ddf8f809a913944d9b11d",
".git/objects/c5/46a1ec4f3172d604ff9954115fc5d16096ec6f": "d25d9a2be3162fe7ddfb7afbeb42a3a2",
".git/objects/ca/70123e6aa477223ef0dd3892d1b35c25d400c2": "784b127daa0f655a7d1f2be3f3cc9982",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/d3/71512da93a08cff409ab5b12024034f969c98f": "44c784751e9fb461ab9504013d259de2",
".git/objects/d5/a33589bd68a77093ac3616c3c33f75e89022db": "b27990274b4b5eb645a720f63df09084",
".git/objects/df/3502908255f0444f45496e983734a7bd855dc6": "9210d72ef48a2819b16d26642db0df37",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/c9267ce1193c4a2742c892cd8b739832c22781": "80edc51a7c3f0018f1d395b57156050f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/b98c876e8aaf36f833aa795389dfce7d644066": "79df7f21ea39027f6c5d39e58eea495c",
".git/ORIG_HEAD": "127334daf68fb6fa02dc74ec2fc6fa5a",
".git/refs/heads/master": "ccedce6ee0040a559ceed3db60717b47",
".git/refs/remotes/origin/master": "ccedce6ee0040a559ceed3db60717b47",
"assets/AssetManifest.json": "f62ab9ec886fac515f89f28b9a924c89",
"assets/assets/circle.png": "27ec50146759887972c2f068fec6f2f1",
"assets/assets/circle2.png": "6d1f94f8f3eec7dca3bd0d8e06422a53",
"assets/assets/cross.png": "9cbd11700ddf75bdb6eb22896966b056",
"assets/assets/cross1.png": "99653e565d3a91b11ad14ce4b4dd1a37",
"assets/assets/cross2.png": "8f92ea75976ec6d4bc1e3e914ce5c8b9",
"assets/assets/lose.gif": "9eb7b8e37dc1a6e8a61cab2bac8d696c",
"assets/assets/tie.gif": "2507d6021168958bcfd2bc921803df8d",
"assets/assets/white.png": "8a89356f9d804b44e253774198257320",
"assets/circle.png": "27ec50146759887972c2f068fec6f2f1",
"assets/circle2.png": "6d1f94f8f3eec7dca3bd0d8e06422a53",
"assets/cross.png": "9cbd11700ddf75bdb6eb22896966b056",
"assets/cross1.png": "99653e565d3a91b11ad14ce4b4dd1a37",
"assets/cross2.png": "8f92ea75976ec6d4bc1e3e914ce5c8b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lose.gif": "9eb7b8e37dc1a6e8a61cab2bac8d696c",
"assets/NOTICES": "b286ace8cb1cb3f362acfc2dfc3fb1cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/tie.gif": "2507d6021168958bcfd2bc921803df8d",
"assets/white.jpg": "52d81745fab90ec4f08e4ab871603e55",
"assets/white.png": "8a89356f9d804b44e253774198257320",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a984518e31d673978c38be53a1d4427f",
"/": "a984518e31d673978c38be53a1d4427f",
"main.dart.js": "613b8326735cd83cd5080c102305d1c8",
"manifest.json": "7a08bc1e0e19c07f7a94c5c5c0c6ca0c",
"version.json": "70ccd33936a4adf53d171254abce7c19"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
