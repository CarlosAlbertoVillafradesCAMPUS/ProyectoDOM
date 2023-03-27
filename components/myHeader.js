export default {
    title: {
        name:`FIFA (®)`,
        logo: "../image/FIFA logo.png",
    },
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