export default {
    title: {
        name:`FIFA (®)`,
        logo: "../image/FIFA logo.png",
    },
    tournament:[
        {
            name: "TORNEOS EN FIFA",
            href: "https://www.fifa.com/fifaplus/es/tournaments"
        },
        {
            name: "SOBRE LA FIFA",
            href: "https://www.fifa.com/es/about-fifa"
        },
        {
            name: "FUTBOL FEMENINOS",
            href: "https://www.fifa.com/es/womens-football"
        },
        {
            name: "IMPACTO SOCIAL",
            href: "https://www.fifa.com/es/social-impact"
        },
        {
            name: "DESARROLLO DEL FUTBOL",
            href: "https://www.fifa.com/es/football-development"
        },
        {
            name: "TECNICO",
            href: "https://www.fifa.com/es/technical"
        },
        {
            name: "LEGAL",
            href: "https://www.fifa.com/es/legal"
        },
        {
            name: "CLASIFICACION",
            href: "https://www.fifa.com/es/fifa-world-ranking"
        },
    ],
    
    showFragment(){
        //creamos el worker
        const ws = new Worker("storage/wsMyheader.js", {type: "module"});

        //creamos un array de id para poder pintar cada uno de los modulos
        let id=[]
        let count = 0

        //enviamos el menssage al worker
        id.push("#logo")
        ws.postMessage({module: "showLogo", data: this.title})
        id.push("#title")
        ws.postMessage({module: "listTitle", data: this.title})
        id.push("#tournament")
        ws.postMessage({module: "listarCategorias", data: this.tournament});
        

        //esto es lo que llega del worker
        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1 == count) ?ws.terminate() :count++
            
        })
    }
}