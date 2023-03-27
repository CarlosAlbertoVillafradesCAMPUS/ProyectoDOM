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
        return `<div class="p-4 mb-3 rounded shadow text-white" style="background-color: #004c97;">
        <h4 class="fst-italic">${val.title}</h4>
        <p class="mb-0 fst-italic">${val.paragraph}</p>
      </div>`
    },
    list(p1){
        return `
        <div class="p-4">
        <h4 class="fst-italic" >${p1.title}</h4>
        <ol class="list-unstyled mb-0">
        ${p1.link.map((val,id) => `<li class="my-2"><a class="link-secondary text-break links" style="text-decoration:none" href="${val.href}">${val.name}</a></li>`).join("")}
        </ol>
      </div>
        `
    }
}

//self se refiere al mismo docuemnto porque en los worker no se puede llamar al dom
self.addEventListener("message", (e) => {
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})