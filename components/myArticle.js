export default {
    data:{
        article1:{
            title:"Copa Mundial Femenina de la FIFA",
            date:"Mar 24, 2023",
            paragraph:`La Copa Mundial Femenina de la FIFA Australia/Nueva Zelanda 2023™
            será la novena edición de la Copa Mundial Femenina de Fútbol organizada por la FIFA. Se llevará a cabo en Australia y Nueva Zelanda,
             siendo la primera vez que una candidatura conjunta gana la sede de un mundial femenino, y la primera oportunidad en la que se realizará 
             la copa en el continente oceánico.Sumado a ello, será el primer campeonato de fútbol organizado por la FIFA que se realizará en dos
            confederaciones diferentes: la Federación de Fútbol de Australia es miembro de la Confederación Asiática de Fútbol (AFC), mientras que 
            la Asociación de Fútbol de Nueva Zelanda pertenece a la Confederación de Fútbol de Oceanía (OFC). Será la primera edición que cuente con
            la participación de 32 selecciones, tras la aprobación del Consejo de la FIFA del 31 de julio de 2019. `,
            rankin:{
                title:"CLASIFICACIÓN FEMENINA",
                description:`Las clasificaciones mundiales oficiales de los equipos internacionales femeninos.`,
                list:[
                    {
                        rank:1,
                        name:"EEUU",
                        points:2091.38
                    },
                    {
                        rank:2,
                        name:"ALEMANIA",
                        points:2068.12
                    },
                    {
                        rank:3,
                        name:"SUECIA",
                        points:2064.68
                    },
                    {
                        rank:4,
                        name:"INGLATERRA",
                        points:2055.82
                    },
                    {
                        rank:5,
                        name:"FRANCIA",
                        points:2021.38
                    },
                    
                ]
            }

        },
        article2:{
            title: `Maximizar nuestra influencia en el desarrollo global del fútbol`,
            paragraph:`Uno de los objetivos estatutarios de la FIFA es mejorar el fútbol constantemente y promocionarlo a escala global. `,      
            section1:{
                paragraph1: `En la primera fase de implementación del periodo 2020-2023 descrita en La Visión, el organismo trabajó para 
                lograr una mayor proximidad geográfica con sus federaciones miembro. También fijó los cimientos para seguir creciendo mediante 
                numerosos ejemplos de estructuras de gobierno reforzadas, de formación de profesionales y de desarrollo de los sistemas con los que trabajan.`,
                title:`Acelerar el crecimiento del fútbol femenino`,
                paragraph2: `La FIFA ha hecho grandes progresos fuera del terreno de juego para acelerar el crecimiento del fútbol femenino. Se están barajando opciones
                de reestructurar el calendario para globalizar tanto la exposición como las oportunidades de juego, sin perder de vista la generación de ingresos que pueden 
                reinvertirse en profesionalizar la disciplina, al tiempo que se mantienen sus características específicas.`,
            },
            section2:{
                titleList: `Federaciones Miembros`,
                description: `Como representantes de la FIFA en sus países, las federaciones tienen la obligación de respetar los estatutos, objetivos e ideales del organismo 
                rector del fútbol, y promover y gestionar el fútbol en consecuencia.`,
                list:[
                    "Asia",
                    "Africa",
                    "Norteamerica",
                    "Centroamerica",
                    "Suramerica",
                    "Oceania",
                    "Europa"
                ],
                confederaciones:{
                    description:"Estas confederaciones de fútbol resultan de las asociaciones de los diferentes miembros de la FIFA, bien por compartir intereses comunes o bien por razón de ubicación.",
                    list:[
                        {
                            name:"CAF (Confederación Africana de Fútbol)",
                            paragraph:`Es la segunda confederación con mayor número de miembros después de la europea, concretamente integra 54 asociaciones en todo el continente africano.`
                        },
                        {
                            name:"AFC (Confederación Asiática de Fútbol)",
                            paragraph:`Se trata del organismo regulador del fútbol asiático.`
                        },
                        {
                            name:"CONCACAF (Confederación de Fútbol de la Asociación del Norte, Centroamérica y el Caribe)",
                            paragraph:`Integrada por 41 miembros de tres zonas diferentes, Norteamérica, Centroamérica y El Caribe.`
                        },
                        {
                            name:"OFC (Confederación de Fútbol de Oceanía)",
                            paragraph:`Es la más joven de las seis confederaciones. Integrada por 14 miembros y con sede en Auckland.`
                        },
                        {
                            name:"CONMEBOL (Confederación Sudamericana de Fútbol)",
                            paragraph:`se trata de la confederación con menor número de miembros, integrada por tan solo 10 asociaciones que representan a los países más importantes de Sudamérica.`
                        },

                    ]
                     }
                    
            },
            section3:{
                title:"Consejo de la FIFA",
                paragraph:`A continuación se expone el consejo del organismo.`,
                list:[
                    {
                        cargo:"Presidente",
                        name:"Gianni Infantino"
                    },
                    {
                        cargo:"Vicepresidente",
                        name:"Lambert Maltock"
                    },
                    {
                        cargo:"Secretaría General",
                        name:"Gianni Infantino"
                    },
                    {
                        cargo:"Miembro del consejo",
                        name:"Mariano Araneta"
                    },
                    {
                        cargo:"Miembro del consejo",
                        name:"Praful Patel"
                    },
                    {
                        cargo:"Miembro del consejo",
                        name:"Mamoutou Touré"
                    },
                ]
            },
            section4:{
                title:"Organización",
                paragraph:`El ingreso a la FIFA está abierto a cualquier asociación o federación encargada de organizar el fútbol en su país. 
                Normalmente hay un solo afiliado por país; sin embargo, también hay casos de asociaciones de naciones sin Estado, principalmente las británicas
                (Inglaterra, Escocia, Gales e Irlanda del Norte), por ser el Reino Unido el lugar donde nació el fútbol moderno. Además, existen entre otras, 
                como la selección de las Islas Feroe, independiente de Dinamarca.`,
                
            }                                   
        },
        article3:{
            title:"Un Poco de Historia",
            paragraph:`El aumento de la popularidad y la competencia internacional en el fútbol a principios del siglo XX hicieron necesario crear 
            un único organismo regulador del deporte a nivel mundial. La Federación Inglesa de Fútbol sostuvo discusiones acerca de la formación de
            una federación internacional, pero esta iniciativa no tuvo acogida. Entonces, las autoridades nacionales de fútbol de otros siete países
            europeos —Bélgica, Dinamarca, España (Real Madrid Club de Fútbol), Francia, Países Bajos, Suecia y Suiza—6​ se reunieron para asociarse y,
            de esta manera, la FIFA fue fundada en París el 21 de mayo de 1904. El nombre francés y su acrónimo se han mantenido hasta la fecha, 
            incluso fuera de los países francófonos.`
        }
    },
    showArticle1(){
        document.querySelector("#article_1").insertAdjacentHTML("beforeend",`
        <h2 class="blog-post-title">${this.data.article1.title}</h2>
          <p class="blog-post-meta">${this.data.article1.date}</p>
          <p>${this.data.article1.paragraph}</p>          
          <h3>${this.data.article1.rankin.title}</h3>
          <p>${this.data.article1.rankin.description}</p>
          <table class="table bg-white">
            <thead>
              <tr>
                <th>RK</th>
                <th>Equipo</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              
            </tbody>
          </table>

        `);
        this.data.article1.rankin.list.map((val,id) =>{
            let tableBody = document.querySelector("#tableBody");
            return(
                tableBody.insertAdjacentHTML("beforeend", `
                <tr>
                    <td>${val.rank}</td>
                    <td>${val.name}</td>
                    <td>${val.points}</td>
                </tr>
                `)
            )           
        }).join("")
    },
    showArticle2(){
        document.querySelector("#article_2"). insertAdjacentHTML("beforeend",`
        <h2 class="blog-post-title">${this.data.article2.title}</h2>
        <p class="blog-post-meta">January 2, 2023 </p>

        <p>${this.data.article2.paragraph}</p>
        <hr>
        <p>${this.data.article2.section1.paragraph1}</p>
        <h2>${this.data.article2.section1.title}</h2>
        <p>${this.data.article2.section1.paragraph2}</p>
        <h3>${this.data.article2.section2.titleList}</h3>
        <p>${this.data.article2.section2.description}</p>
        <ul id="federaciones">

        </ul>
        <p>${this.data.article2.section2.confederaciones.description}</p>
        <dl id="confederaciones">
          
        </dl>
        <h2>${this.data.article2.section3.title}</h2>
        <p>${this.data.article2.section3.paragraph}</p>
        <ul id="presidentes">
          
        </ul>
        <h2>${this.data.article2.section4.title}</h2>
        <p>${this.data.article2.section4.paragraph}</p>
        `);

        this.data.article2.section2.list.map((val,id)=>{
            let data = document.querySelector("#federaciones");
            return(
                data.insertAdjacentHTML("beforeend", `
                <li> ${val}</li>
                `)
            )
        }).join("");

        this.data.article2.section2.confederaciones.list.map((val,id) => {
            let data = document.querySelector("#confederaciones");
            return(
                data.insertAdjacentHTML("beforeend", `
                <dt>${val.name}: </dt>
                <dd>${val.paragraph}</dd>
                `)
            )
        }).join("");

        this.data.article2.section3.list.map((val,id)=>{
            let data = document.querySelector("#presidentes");
            return(
                data.insertAdjacentHTML("beforeend", `
                <li><strong>${val.cargo}: </strong>${val.name}</li>
                `)
            )
        })

    },
    showArticle3(){
        document.querySelector("#article_3").insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${this.data.article3.title}</h2>
          <p>${this.data.article3.paragraph}</p>
            `)
    }



}
