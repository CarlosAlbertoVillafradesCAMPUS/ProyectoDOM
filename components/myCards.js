export default {
    cards:[
        {
            article: "INFORMATIVO",
            title: `Comité de Ética`,
            date: `Mar 23`,
            information: `La Comisión de Ética de la FIFA suspende provisionalmente a un entrenador de la RD del Congo.`,
            image: `../image/image1.png`,
            btn: {
                name:`Continue reading`,
                href: `https://www.fifa.com/es/legal/judicial-bodies/media-releases/la-comision-de-etica-de-la-fifa-suspende-provisionalmente-a-un-entrenador-de`
            }
        },
        {
            article: "INFORMATIVO",
            title: `Copa Mundial Femenina 2023™`,
            date: `Mar 21`,
            information: `Confirmadas las 32 bases operativas de la Copa Mundial Femenina de la FIFA™.`,
            image: `../image/image3.jpg`,
            btn: {
                name:`Continue reading`,
                href: `https://www.fifa.com/es/tournaments/womens/womensworldcup/australia-new-zealand2023/news/confirmadas-las-32-bases-operativas-de-la-copa-mundial-femenina-de-la-fifa`
            }
        },
        {
            article: "INFORMATIVO",
            title: `Desarrollo del Fútbol`,
            date: `Mar 17`,
            information: `Arsène Wenger: "Creo que es una oportunidad enorme para el mundo del fútbol".`,
            image: `../image/image2.jpg`,
            btn: {
                name:`Continue reading`,
                href: `https://www.fifa.com/es/football-development/news/arsene-wenger-podemos-hacer-algo-excepcional`
            }
        },
        {
            article: "INFORMATIVO",
            title: `Presidente de la FIFA`,
            date: `Mar 8`,
            information: `Inaugurado el estadio Kigali Pelé en Ruanda".`,
            image: `../image/image5.jpg`,
            btn: {
                name:`Continue reading`,
                href: `https://www.fifa.com/es/tournaments/womens/womensworldcup/australia-new-zealand2023/news/tres-selecciones-coronan-nuevas-cumbres-y-completan-el-elenco-de-la-copa`
            }
        },
        {
            article: "INFORMATIVO",
            title: `Copa Mundial de la FIFA Catar 2022™`,
            date: `Feb 20`,
            information: `2019-2022: cuatro años de progresos sin precedentes.`,
            image: `../image/image1.png`,
            btn: {
                name:`Continue reading`,
                href: `https://publications.fifa.com/es/annual-report-2022`
            }
        }
    ],
    showFragment(){
        const ws = new Worker("storage/wsMyCards.js", {type:"module"});

        ws.postMessage({module:"showCards", data: this.cards})

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#cards").append(...doc.body.children)
            ws.terminate()
        })

        
    },

}