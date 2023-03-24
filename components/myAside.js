export default {
    nav:[
        {
            title:"Dato Curioso",
            paragraph:`"En Suecia 1958 el jugador brasileño Pelé, con solo 17 años y 239 días,
             se convierte en el jugador más joven en marcar un gol en un mundial, en un encuentro contra País de Gales."`
        },
        {
            title:"Torneos",
            link:[
                {
                    name:"-Copa Mundial de la FIFA.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial Femenina de la FIFA.",
                    href:"#"
                },
                {
                    name:"-Torneo Olímpico de Fútbol Femenino.",
                    href:"#"
                },
                {
                    name:"-Torneo Olímpico de Fútbol Masculino.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial de Fútbol Sub-20.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial de Fútbol Sub-17.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial de Fútbol Playa de FIFA.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial de Clubes de la FIFA.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial Femenina de Fútbol Sub-17.",
                    href:"#"
                },
                {
                    name:"-Copa Mundial Femenina de Fútbol Sub-20.",
                    href:"#"
                },
                {
                    name:"-Campeonato Mundial de Futsal de la FIFA.",
                    href:"#"
                },
                {
                    name:"-Torneo Olímpico Juvenil de Futsal Masculino.",
                    href:"#"
                },
            ]
        },
        {
            title: "Contact Us",
            link:[
                {
                    name:"GitHub",
                    href:"#"
                },
                {
                    name:"Twiter",
                    href:"#"
                },
                {
                    name:"Facebook",
                    href:"#"
                }

            ]
        }
    ],
    showAside(){
        const data= this.nav.map((val,id) => {
            return(
                (val.link) ?this.list(val) :this.card(val)
            )
            
        });
        document.querySelector("#nav"). insertAdjacentHTML("beforeend", data.join(""))
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