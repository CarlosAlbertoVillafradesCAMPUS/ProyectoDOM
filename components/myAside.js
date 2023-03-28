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
                    name:"- Copa Mundial de la FIFA.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial Femenina de la FIFA.",
                    href:"#"
                },
                {
                    name:"- Torneo Olímpico de Fútbol Femenino.",
                    href:"#"
                },
                {
                    name:"- Torneo Olímpico de Fútbol Masculino.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial de Fútbol Sub-20.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial de Fútbol Sub-17.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial de Fútbol Playa de FIFA.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial de Clubes de la FIFA.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial Femenina de Fútbol Sub-17.",
                    href:"#"
                },
                {
                    name:"- Copa Mundial Femenina de Fútbol Sub-20.",
                    href:"#"
                },
                {
                    name:"- Campeonato Mundial de Futsal de la FIFA.",
                    href:"#"
                },
                {
                    name:"- Torneo Olímpico Juvenil de Futsal Masculino.",
                    href:"#"
                },
            ]
        },
        {
            title: "Contact Us",
            link:[
                {
                    name:"Instagram",
                    href:"https://www.instagram.com/fifa/"
                },
                {
                    name:"Twiter",
                    href:"https://twitter.com/fifacom_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                },
                {
                    name:"Facebook",
                    href:"https://www.facebook.com/fifaworldcup/?locale=es_LA"
                }

            ]
        }
    ],
    showFragment(){
        const ws = new Worker("storage/wsMyAside.js", {type:"module"});

        ws.postMessage({module: "showAside", data: this.nav});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#nav").append(...doc.body.children)
            ws.terminate()
        })
    },
}