export default {
    title: `FIFA (®)`,
    logo: "../image/FIFA logo.png",
    tournament:[
        {
            name: "TORNEOS EN FIFA",
            href: "#"
        },
        {
            name: "SOBRE LA FIFA",
            href: "#"
        },
        {
            name: "FUTBOL FEMENINOS",
            href: "#"
        },
        {
            name: "IMPACTO SOCIAL",
            href: "#"
        },
        {
            name: "DESARROLLO DEL FUTBOL",
            href: "#"
        },
        {
            name: "TECNICO",
            href: "#"
        },
        {
            name: "LEGAL",
            href: "#"
        },
        {
            name: "CLASIFICACION",
            href: "#"
        },
    ],
    listTitle(){
        let plantilla = `<a class="blog-header-logo text-white text-center" href="#">${this.title}</a>`;
        let plantillaLogo = `<img class="img-fluid" src="${this.logo}" alt="" width="90" height="84">`

        document.querySelector("#title").insertAdjacentHTML("beforeend", plantilla)
        document.querySelector("#logo").insertAdjacentHTML("beforeend", plantillaLogo)

    },
    listarCategorias(){
        let plantilla = ""
        this.tournament.forEach((val,id) => {
            plantilla += `<a class="p-2 px-2 fs-6 link-secondary links "  href="${val.href}">${val.name}</a>`;
        });
        document.querySelector("#tournament").insertAdjacentHTML("beforeend", plantilla)
    }
}