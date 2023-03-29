export let wsMyBanner = { 
    listBanner(p1){
        let plantilla = ` <h1 class="display-4 fst-italic ">${p1.title}</h1>
        <p class="lead my-3 " style="color:#f0e6d2">${p1.text}</p>
        <p class="lead mb-0 "><a href="${p1.vinculo.href}" class="fw-bold">${p1.vinculo.name}</a></p>`
        
        return plantilla;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data))
})