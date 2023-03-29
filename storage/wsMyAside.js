export let wsMyAside = {
    showAside(parametro){
        const data= parametro.map((val,id) => {
            return(
                (val.link) ?this.list(val) :this.card(val)
            )
            
        });
        return data;
    },
    card(val){
        return `<div class="p-4 mb-3 rounded shadow">
        <h4 class="fst-italic" style="color:#c8aa6e">${val.title}</h4>
        <p class="mb-0 fst-italic" style="color:#f0e6d2">${val.paragraph}</p>
      </div>`
    },
    list(p1){
        return `
        <div class="p-4">
        <h4 class="fst-italic" >${p1.title}</h4>
        <ol class="list-unstyled mb-0">
        ${p1.link.map((val,id) => `<li class="my-2">
        <div class="w-100">
          <img src="${val.image}" width="90" height="84">
         </div>
         <h5 class="link-secondary text-break links">${val.name}</h5>
         <p> ${val.description}</p>
         </li>`).join("")}
        </ol>
      </div>
        `
    }
}

//self se refiere al mismo docuemnto porque en los worker no se puede llamar al dom
self.addEventListener("message", (e) => {
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})