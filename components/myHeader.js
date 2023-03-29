import config from "../storage/config.js";
export default {
    showFragment(){
        config.dataMyheader(); //llamamos a la funcion que tenemos en el archivo config.js
        Object.assign(this,JSON.parse(localStorage.getItem("myHeader"))) //sirve para convertir la inforcaion de traemos del local storage y transformaral en un objeto JSON
        //el this hace referencia a la variable o al nombre de nuetsro objeto traido del local storage

        
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