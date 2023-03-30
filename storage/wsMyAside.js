export let wsMyAside = {
    showAside(parametro){
        const data= parametro.map((val,id) => {
            return(
                (val.habilidades) ?this.list(val) :(val.link) ?this.contact(val) :this.card(val)
            )
            
        });
        return data;
    },
    card(val){
        return `<div class="p-4 mb-3 rounded shadow bg-dark">
        <h4 class="fst-italic" style="color:#c8aa6e">${val.title}</h4>
        <p class="mb-0 fst-italic" style="color:#f0e6d2">${val.paragraph}</p>
      </div>`
    },
    list(p1){
        return `
        <div class="p-4">
        <h3 class="fst-italic text-center" style="color:#c8aa6e" >${p1.title}</h3>
        <ol class="list-unstyled mb-0">
        ${p1.habilidades.map((val,id) => `<li class="my-4 border-bottom" style="color:#f0e6d2">
        <div class="mb-2 w-100 d-flex justify-content-center">
          <img src="${val.image}" width="70" height="64">
         </div>
         <h6 class="text-center text-white mb-1">${val.name}</h6>
         <p class="text-center"> ${val.description}</p>
         </li>`).join("")}
        </ol>
      </div>
        `
    },
    contact(p1){
        return(`
        <div class="p-4">
        <h3 class="fst-italic text-center" style="color:#c8aa6e" >${p1.title}</h3>
        <ol class="list-unstyled mb-0">
        ${p1.link.map((val,id) => `<li class="my-2" style="color:#f0e6d2">
         <p class="link-secondary text-break links"><a href="${val.href}">${val.name}</a></p>
         </li>`).join("")}
        </ol>
      </div>
        `)
    }
}

//self se refiere al mismo docuemnto porque en los worker no se puede llamar al dom
self.addEventListener("message", (e) => {
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})