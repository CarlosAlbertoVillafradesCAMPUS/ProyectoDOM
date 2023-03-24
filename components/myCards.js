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
                href: `#`
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
                href: `#`
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
                href: `#`
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
                href: `#`
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
                href: `#`
            }
        }
    ],
    showCards(){
        this.cards.forEach((val,id) => {

            document.querySelector("#cards").insertAdjacentHTML("beforeend", `
            <div class="col-md-6 pt-4">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative bg-white">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                    <h3 class="mb-0">${val.title}</h3>
                    <div class="mb-1 text-muted">${val.date}</div>
                    <p class="card-text mb-auto">${val.information}</p>
                    <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img class="imageCard" src="${val.image}" >
                </div>
                </div>
            </div>
            `)
        });
        
    }

}