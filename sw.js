/* HITARTHI service worker — page हमेशा ताज़ा (network-first), images cache से तेज़ */
const C="hitarthi-v1";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html"]).catch(()=>{})));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put("index.html",cp)).catch(()=>{});return res;}).catch(()=>caches.match("index.html")));return;}
  if(u.pathname.indexOf("/img/")>=0){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res;})));}
});
