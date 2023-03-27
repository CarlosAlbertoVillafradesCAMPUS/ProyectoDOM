export let wsMyheader = {
    listarCategorias(p1){
        let plantilla = ""
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 px-3 fs-6 link-secondary links"  href="${val.href}">${val.name}</a>`;
        });
        console.log(p1);
       return plantilla;
    }
}

self.addEventListener("message", (e) =>{
    postMessage(wsMyheader[`${e.data.module}`](e.data.data))
})