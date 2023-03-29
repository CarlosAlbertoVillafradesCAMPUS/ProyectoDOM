import config from "../storage/config.js";
export default {
showFragment(){
    config.dataMyfooter()
    Object.assign(this,JSON.parse(localStorage.getItem("myFooter")))
    const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
    ws.postMessage({module: "showFooter", data: this.data});

    ws.addEventListener("message", (e) =>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector("#my_footer").append(...doc.body.children)
    })
},
}