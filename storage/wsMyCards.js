export let wsMyCards = {
    showCards(paramatro){
        let plantilla = ""
        paramatro.forEach((val,id) => {
            plantilla += `
                <div class="col-md-6 pt-4 contain-card">
                    <div class="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative" style="color:#f0e6d2">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-white">${val.article}</strong>
                        <h3 class="mb-0" style="color:#c8aa6e">${val.title}</h3>
                        <div class="mb-1 text-muted">${val.date}</div>
                        <p class="card-text mb-auto">${val.information}</p>
                        <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="imageCard" src="${val.image}" >
                    </div>
                    </div>
                </div> `
        });
        return plantilla       
    }
}
self.addEventListener("message", (e) => {
    postMessage(wsMyCards[`${e.data.module}`](e.data.data))
})