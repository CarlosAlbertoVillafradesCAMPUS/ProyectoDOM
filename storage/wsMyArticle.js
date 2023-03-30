export let wsMyArticle = {
    showArticle1(parametro){
        let plantilla = `
        <h2 class="blog-post-title text-white">${parametro.title}</h2>
          <p>${parametro.paragraph}</p>          
          <h3 class="text-white">${parametro.rankin.title}</h3>
          <p>${parametro.rankin.description}</p>
        `;
        
        return plantilla
    },
    showTable(parametro){
        let plantilla = "";
            plantilla = `
            <table class="table bg-transparent">
            <thead>
              <tr style="color:#c8aa6e">
                <th>#</th>
                <th>Invocadores</th>
                <th>Roles</th>
                <th>Division</th>
                <th>Tasa Victorias</th>
                <th>KDA</th>
              </tr>
            </thead>
            <tbody  style="color:#f0e6d2" id="tableBody">
              ${parametro.map((val,id) =>{
                return(
                `<tr>
                <td>${val.rank}</td>
                <td>${val.name}</td>
                <td>${val.role}</td>
                <td>${val.division}</td>
                <td>${val.victorias}</td>
                <td>${val.kda}</td>
            </tr>`
                )
              }).join("")}
            </tbody>
          </table>
            `;       
        return plantilla
    },
    showArticle2(parametro){
        let plantilla = `
        <h2 class="blog-post-title">${parametro.title}</h2>
        <p class="blog-post-meta">January 2, 2023 </p>

        <p>${parametro.paragraph}</p>
        <hr>
        <p>${parametro.section1.paragraph1}</p>
        <h2>${parametro.section1.title}</h2>
        <p>${parametro.section1.paragraph2}</p>
        <h3>${parametro.section2.titleList}</h3>
        <p>${parametro.section2.description}</p>
        <ul id="federaciones">
        ${parametro.section2.list.map((val,id)=>{
            return(
                 `
                <li style="color:#c8aa6e"> ${val}</li>
                `
            )
        }).join("")}
        </ul>
        <p>${parametro.section2.concejos.description}</p>
        <dl id="confederaciones">
          ${parametro.section2.concejos.list.map((val,id) => {
            return(    
               `<dt style="color:#c8aa6e">${val.name}: </dt>
                <dd>${val.paragraph}</dd>
                `
            )
        }).join("")}
        </dl>
        <h2>${parametro.section3.title}</h2>
        <p>${parametro.section3.paragraph}</p>
        <ul id="presidentes">
          ${ parametro.section3.list.map((val,id)=>{
            return(
                ` <li class="mb-2"><p class="p-0 m-0" style="color:#c8aa6e">${val.name}: </p>${val.description}</li>`
            )
        }).join("")}
        </ul>
        <h2>${parametro.section4.title}</h2>
        <p>${parametro.section4.paragraph}</p>
        `;

        return plantilla
    },
    showArticle3(parametro){
        let plantilla = `
        <h2 class="blog-post-title">${parametro.title}</h2>
          <p>${parametro.paragraph}</p>
            `;
        
        return plantilla
    }
}

self.addEventListener("message", (e) =>{
    postMessage(wsMyArticle[`${e.data.module}`](e.data.data))
})