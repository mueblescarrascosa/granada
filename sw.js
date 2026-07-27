const CACHE="granada-v2";
const ASSETS=["./","./index.html"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.open(CACHE).then(cache=>cache.match(e.request).then(cached=>{
    const network=fetch(e.request).then(resp=>{try{cache.put(e.request,resp.clone());}catch(_){}return resp;}).catch(()=>cached);
    return cached||network;
  })));
});