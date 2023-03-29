export default {
    dataMyheader(){
        localStorage.setItem("myHeader", JSON.stringify({ //setItem se refiera guardar en localstorage con el nombre de "myheader" 
            title: {
                name:`RIVEN`,
                logo: "../image/logo-removebg-preview.png",
            },
            tournament:[
                {
                    name: "TODOS",
                    href: "https://www.leagueoflegends.com/es-mx/champions/"
                },
                {
                    name: "ASESINOS",
                    href: "#"
                },
                {
                    name: "LUCHADORES",
                    href: "#"
                },
                {
                    name: "MAGOS",
                    href: "#"
                },
                {
                    name: "TIRADORES",
                    href: "#"
                },
                {
                    name: "SOPORTES",
                    href: "#"
                },
                {
                    name: "TANQUES",
                    href: "#"
                },
            ],
            
        }))
    },
    dataMyaside(){
        localStorage.setItem("myAside", JSON.stringify({
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
            ]
        }))
    },
    dataMybanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            image: "../image/imageBanner.jpg",
            information:{
                title: `Riven "La Exiliada"`,
                text: `Riven, que anteriormente era una líder de los guerreros de Noxus, está exiliada en una tierra que alguna vez intentó conquistar.
                 Ascendió por los rangos con la fuerza de su convicción y brutal eficiencia, lo cual la recompensó con su legendaria espada rúnica y
                una tropa propia. Sin embargo, en el frente jonio, la fe de Riven en su tierra fue puesta a prueba y finalmente se quebró. Cortó todos
                sus lazos con el imperio y ahora busca encontrar su lugar en un mundo en pedazos, incluso con rumores que mencionan que Noxus ha sido
                 reforjado`,
                vinculo: {
                    name: "Continue reading",
                    href: "https://www.fifa.com/es/social-impact/campaigns/no-discrimination/news/la-fifa-celebra-el-dia-internacional-de-la-eliminacion-de-la-discriminacion-racial"
                },
            },
        }))
    },
    dataMycards(){
        localStorage.setItem("myCards", JSON.stringify({
            cards:[
                {
                    article: "LEGENDARIO",
                    title: `Centinela Riven`,
                    date: `9/marzo/2023`,
                    information: `Riven siempre estuvo obsesionada por sus crímenes como soldado noxiano. Es por eso que finalmente se unió a los Sentinels como una forma de redimir sus pecados.`,
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
        }))
    },
    dataMyarticle(){
       localStorage.setItem("myArticle", JSON.stringify({
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
        }
       }))
    },
    dataMyfooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            data:{
                name:"Carlos Villafrades Pinilla",
                redes:{
                    name1: "GitHub",
                    href1: "https://github.com/CarlosAlbertoVillafradesCAMPUS",
                    name2: "Instagram",
                    href2: "https://www.instagram.com/carlos_villafradess/?hl=es",
                },
                copyrigth: "©CampusLand"
        },
        }))
    }
}