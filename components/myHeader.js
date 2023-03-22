export default {
    title: "FIFA",
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
        let plantilla = `<a class="blog-header-logo text-dark" href="#">${this.title}</a>`;
        let plantillaLogo = `<img class="img-fluid" src="${this.logo}" alt="" width="80" height="74">`

        document.querySelector("#title").insertAdjacentHTML("beforeend", plantilla)
        document.querySelector("#logo").insertAdjacentHTML("beforeend", plantillaLogo)

    },
    listarTournament(){
        let plantilla = ""
        this.tournament.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`;
        });
        document.querySelector("#tournament").insertAdjacentHTML("beforeend", plantilla)
    }
}