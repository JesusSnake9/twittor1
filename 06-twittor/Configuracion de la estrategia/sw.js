
self.addEventListener('fetch',e=>{
    const respuesta=caches.match(e.request).then(res=>{
        //si eiste la respuesta ...
        if(res){
            return res;
        }else{
            return fetch(e.request).then(newRes=>{
                return actualizaCacheDinamico(DYNAMIC_CACHE,e.request,newRes);
            });
        }
    });
    e.respondWith(respuesta);
});