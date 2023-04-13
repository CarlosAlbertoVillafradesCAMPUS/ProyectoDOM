export default {
    dataMyheader(){
        localStorage.setItem("myHeader", JSON.stringify({ //setItem se refiera guardar en localstorage con el nombre de "myheader" 
            title: {
                name:`RIVEN`,
                logo: "image/logo-removebg-preview.png",
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
                    paragraph:`"El baile de Riven se parece a la Danza del Agua de Braavos de Game of Thrones."`
                },
                {
                    title:"HABILIDADES",
                    habilidades:[
                        {
                            name:`"pasiva" ESPADA RUNICA`,
                            description:"Las habilidades de Riven cargan su espada y sus ataques básicos consumen cargas para infligir daño adicional.",
                            image: "image/pasivaRiven.png"
                        },
                        {
                            name: `"Q" ALAS ROTAS`,
                            description:"Riven lanza una serie de golpes. Esta habilidad puede reactivarse tres veces en poco tiempo. El tercer impacto hará retroceder a los enemigos cercanos.",
                            image: "image/QRiven.png"
                        },
                        {
                            name:`"W" ESTALLIDO DE KI`,
                            description:"Riven emite un Estallido de ki que daña y aturde a los enemigos cercanos.",
                            image: "image//WRiven.png"
                        },
                        {
                            name:`"E" VALOR`,
                            description:"Riven avanza una corta distancia y bloquea el daño que recibe.",
                            image: "image//ERiven.png"
                        },
                        {
                            name:`"R" HOJA DE EXILIO`,
                            description:"Riven potencia su fiel arma con energía que aumenta su daño de ataque y alcance. Además, mientras dure la activación, obtiene la capacidad de usar una vez Cuchillada de viento, un potente ataque a distancia.",
                            image: "image//RRIVEN.png"
                        },
                    ]
                },
                {
                    title: "CONTACTANOS",
                    link:[
                        {
                            name:"Instagram",
                            href:"https://www.instagram.com/leagueoflegends/?hl=es"
                        },
                        {
                            name:"Twiter",
                            href:"https://twitter.com/lollatam"
                        },
                        {
                            name:"Facebook",
                            href:"https://es-la.facebook.com/LeagueofLegendsLatino/"
                        }
        
                    ]
                }
            ]
        }))
    },
    dataMybanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            image: "image/imageBanner.jpg",
            information:{
                title: `Riven "La Exiliada"`,
                text: `Riven, que anteriormente era una líder de los guerreros de Noxus, está exiliada en una tierra que alguna vez intentó conquistar.
                 Ascendió por los rangos con la fuerza de su convicción y brutal eficiencia, lo cual la recompensó con su legendaria espada rúnica y
                una tropa propia. Sin embargo, en el frente jonio, la fe de Riven en su tierra fue puesta a prueba y finalmente se quebró. Cortó todos
                sus lazos con el imperio y ahora busca encontrar su lugar en un mundo en pedazos, incluso con rumores que mencionan que Noxus ha sido
                 reforjado`,
                vinculo: {
                    name: "Continue reading",
                    href: "https://universe.leagueoflegends.com/es_ES/story/champion/riven/#:~:text=Riven%20demostr%C3%B3%20tener%20madera%20de,hermanas%20de%20armas%20era%20inquebrantable."
                },
            },
        }))
    },
    dataMycards(){
        localStorage.setItem("myCards", JSON.stringify({
            cards:[
                {
                    article: "SKIN LEGENDARIA",
                    title: `Riven Centinela`,
                    date: `9/marzo/2023`,
                    information: `Riven siempre estuvo obsesionada por sus crímenes como soldado noxiano. Es por eso que finalmente se unió a los centinelas.`,
                    image: `image/image1.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN LEGENDARIA",
                    title: `Riven Flor Espiritual`,
                    date: `7/septiembre/2021`,
                    information: `Riven fue destruida en el calor de la batalla hace miles de años, su espada se hizo añicos en el proceso.`,
                    image: `image/image2.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN EPICA",
                    title: `Riven Espada Valiente`,
                    date: `26/septiembre/2020`,
                    information: `Riven demostró haber nacido para el combate. A pesar de su corta edad, sus años de trabajo duro permitieron que dominase su gran poder.`,
                    image: `image/image3.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN EPICA",
                    title: `Riven Pulso de Fuego`,
                    date: ` 14/mayo/2019`,
                    information: `Riven cree en la pureza temporal, y castigará a cualquiera que abuse de la manipulación del tiempo para su propio beneficio.`,
                    image: `image/image4.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN LEGENDARIA",
                    title: `Riven Portadora de Amanecer`,
                    date: `23/abril/2019`,
                    information: `Nacida de las agitadas energías en el alba de la creación, es la personificación viviente del orden en el cosmos.`,
                    image: `image/image5.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN EPICA",
                    title: `Riven Arcadia`,
                    date: `17/mayo/2018`,
                    information: ` Siendo honestos, si le cambias el color de cabello a púrpura y le pones un labial, es idéntica a Kai'Sa.`,
                    image: `image/image6.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                },
                {
                    article: "SKIN EPICA",
                    title: `Riven Conejita`,
                    date: `6/abril/2017`,
                    information: `la Conejita Guerrera vuelve a estar en los ojos de la comunidad. Además la línea de aspectos `,
                    image: `image/image7.jpg`,
                    btn: {
                        name:`Mas Informacion`,
                        href: `https://www.leagueoflegends.com/es-es/champions/riven/`
                    }
                }
            ],
        }))
    },
    dataMyarticle(){
       localStorage.setItem("myArticle", JSON.stringify({
        data:{
            article1:{
                title:"La Desterrada",
                paragraph:`Riven, que anteriormente era una líder de los guerreros de Noxus, alcanzó un alto rango
                 gracias a la fuerza de su convicción y a su brutal eficiencia, por lo que fue recompensada con una 
                 espada rúnica legendaria y con un batallón propio. Sin embargo, en el frente jonio, la fe de Riven
                en su nación fue puesta a prueba y, finalmente, se quebró. Cortó todas sus ataduras con el imperio
                en un intento por encontrar su lugar en un mundo fragmentado, incluso ante los rumores sobre la 
                restauración de Noxus. Ahora que regresa encadenada contra su voluntad, se enfrenta a la sentencia 
                de su antigua tierra natal... `,
                rankin:{
                    title:"CLASIFICACIÓN MAINS RIVEN",
                    description:`Top 5 de los mejores mains Riven a nivel mundial:`,
                    list:[
                        {
                            rank:1,
                            name:"돼지 학생 (KR)",
                            role:"TOP",
                            division:"Maestro",
                            victorias:"76,8%",
                            kda:"9.3 / 4.9 / 5.1"
                        },
                        {
                            rank:2,
                            name:"sehsfuyisgeb",
                            role:"TOP",
                            division:"Maestro",
                            victorias:"76.4%",
                            kda:"9.3 / 4.3 / 3.8"
                        },
                        {
                            rank:3,
                            name:"lai zi di yu",
                            role:"TOP",
                            division:"Diamante I",
                            victorias:"85.7%",
                            kda:"6.6 / 2.6 / 5.21"
                        },
                        {
                            rank:4,
                            name:"doegkto",
                            role:"TOP",
                            division:"Retador",
                            victorias:"72.1%",
                            kda:"8.4 / 5.5 / 4.8"
                        },
                        {
                            rank:5,
                            name:"my happy ending",
                            role:"TOP",
                            division:"Retador",
                            victorias:"74.5%",
                            kda:"7.7 / 4.9 / 5.3"
                        }
                        
                    ]
                }
    
            },
            article2:{
                title: `VETAS Y CICATRICES`,
                paragraph:`¿Cómo llegaste a Jonia, amiga? `,      
                section1:{
                    paragraph1: `Muramaat intentó que su voz sonara tranquila. Nunca se había sentido incómoda
                     compartiendo una fogata con otros viajeros en el camino a los mercados. Sin embargo, esta
                    era la primera vez que se sentaba, con las llamas de por medio, frente a una noxiana,
                     una con una gigantesca arma enfundada en su espalda..`,
                    title:`CONFESIONES DE UNA ESPADA ROTA: PARTE I`,
                    paragraph2: `El borde afilado del arado cortaba a través de la dura capa superior del suelo,
                     dejando atrás la vulnerabilidad del invierno para abrir paso a los cielos primaverales.
                    Riven caminó por el pequeño campo detrás de la herramienta impulsada por los bueyes,
                    su atención estaba entre poder estabilizar las amplias asas y las palabras extranjeras
                     que torpemente salían de su boca..`,
                },
                section2:{
                    titleList: `CAMPEONES A LOS QUE RIVEN HACE COUNTER`,
                    description: `Campeones contra los que riven por su kit de habilidades, tiende a ganar o ser mas fuerte.`,
                    list:[
                        "Shen",
                        "Dr.Mundo",
                        "Singed",
                        "Nasus",
                        "Kayle",
                        "Annie",
                        "Zac"
                    ],
                    concejos:{
                        description:"Algunos de los concejos que debes saber para aprender a mainear riven.",
                        list:[
                            {
                                name:"Colarle un Autoataque a Cada Habilidad",
                                paragraph:`Intenta colarle un autoataque a cada habilidad para hacer el máximo daño y aprovechar la pasiva de la campeona (Hoja Rúnica).`
                            },
                            {
                                name:"La Tercera Q (Alas Rotas)",
                                paragraph:`Te permite atravesar paredes. Eso sí, el salto va hacia donde está mirando la campeona, no hacia el cursor del ratón.`
                            },
                            {
                                name:"Cancelar Animaciones",
                                paragraph:`Puedes cancelar animaciones acumulando hechizos, y es la mecánica clave que diferencia una buena Riven de un verdadero “main” de la campeona.`
                            },
                            {
                                name:"Practica",
                                paragraph:`Visita la herramienta de practica, para mejorar o especializarte con las habilidades de la campeona.`
                            }
    
                        ]
                         }
                        
                },
                section3:{
                    title:"Mejores Runas para Riven",
                    paragraph:`A continuación se muestran las mejores runas con las que fucionaria mejore riven.`,
                    list:[
                        {
                            name:"Conquistador",
                            description:"Los ataques básicos o hechizos que inflijan daño a un campeón enemigo otorgan 2 acumulaciones de Conquistador durante 5 s, lo que otorga 2-4.5 de fuerza adaptable por acumulación."
                        },
                        {
                            name:"Triunfo",
                            description:"Los asesinatos y asistencias restauran un 5% de la vida que te falte, un 2.5% de tu vida máxima y otorgan otros 20 de oro."
                        },
                        {
                            name:"Leyenda-Tenacidad",
                            description:"Obtienes un 5% de tenacidad y un 1.5% adicional por cada acumulación de Leyenda (10 acumulaciones como máximo)."
                        },
                        {
                            name:"Ultimo Esfuerzo",
                            description:"Infliges un 5-11% más de daño a los campeones mientras estés por debajo del 60% de vida."
                        },
                        {
                            name:"Capa de Nimbo",
                            description:"Después de lanzar un hechizo de invocador, obtienes un aumento de velocidad de movimiento que dura 2 s y te permite atravesar unidades."
                        },
                        {
                            name:"Trascendencia",
                            description:"Obtienes bonificaciones al alcanzar los siguientes niveles"
                        },
                    ]
                },
                section4:{
                    title:"CONFESIONES DE UNA ESPADA ROTA: PARTE 2",
                    paragraph:`El cielo nublado se había despejado desde la entrada de los magistrados.
                     Cuando las enormes puertas al fondo de la sala se abrieron nuevamente, Riven
                      vio cómo el recinto repleto de aldeanos se había dividido por un rayo deslumbrante
                       de luz de día. Caminó por el umbral de la sala, su movimiento empujaba el aire
                        inmóvil del recinto como si se liberara una respiración contenida.`,                  
                }                                   
            },
            article3:{
                title:"Un Poco de Historia",
                paragraph:`Construido en conflicto perpetuo, Noxus nunca ha tenido una escasez de huérfanos de guerra. 
                Tras perder a su padre en una batalla desconocida y a su madre en su propio nacimiento, 
                Riven creció en una granja dirigida por el imperio, en las laderas rocosas de Trevale.
                El esfuerzo físico y la voluntad feroz mantenían a los niños vivos y ocupados en la dura tierra,
                 pero Riven ansiaba mucho más que un trozo de pan en la mesa. Ella observaba a los reclutas de los
                  batallones regionales que visitaban las granjas año tras año. En ellos, veía una oportunidad
                   para seguir la vida que tanto soñaba. Cuando finalmente le ofreció al imperio su fuerza,
                 sabía que Noxus la acogería como la hija que anhelaba ser. Riven demostró haber nacido para el combate.`
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