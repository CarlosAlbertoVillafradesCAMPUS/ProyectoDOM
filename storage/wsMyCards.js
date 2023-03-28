export let wsMyCards = {
    showCards(paramatro){
        let plantilla = ""
        paramatro.forEach((val,id) => {
            plantilla += `
                <div class="col-md-6 pt-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative bg-white">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                        <h3 class="mb-0">${val.title}</h3>
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