export let wsMyheader = {
    listarCategorias(p1){
        let plantilla = ""
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 px-3 fs-6 link-secondary links"  href="${val.href}">${val.name}</a>`;
        });
       return plantilla;
    },
    listTitle(p1){
        let plantilla = `<a class="blog-header-logo text-white text-center" href="#">${p1.name}</a>`;

        return plantilla;

    },
    showLogo(p1){
        let plantillaLogo = `<img class="img-fluid" src="${p1.logo}" alt="" width="90" height="84">`

        return plantillaLogo
    }
}

self.addEventListener("message", (e) =>{
    postMessage(wsMyheader[`${e.data.module}`](e.data.data))
})