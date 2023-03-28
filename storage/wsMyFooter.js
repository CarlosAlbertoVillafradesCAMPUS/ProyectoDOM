export let wsMyFooter = {
    showFooter(parametro){
        let plantilla = `
        <p>${parametro.name} <a href="${parametro.redes.href1}">${parametro.redes.name1}</a> And <a
            href="${parametro.redes.href2}"> ${parametro.redes.name2}</a>.</p>
        <p>
          <a href="https://www.instagram.com/campuslands/?hl=es-la">${parametro.copyrigth}</a>
        </p>
        `;

        return plantilla
    }
}

self.addEventListener("message", (e) =>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})