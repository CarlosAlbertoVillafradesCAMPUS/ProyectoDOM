import config from "../storage/config.js";
export default {
    showFragment(){
        config.dataMycards();
        Object.assign(this,JSON.parse(localStorage.getItem("myCards")))
        const ws = new Worker("storage/wsMyCards.js", {type:"module"});

        ws.postMessage({module:"showCards", data: this.cards})

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#cards").append(...doc.body.children)
            ws.terminate()
        })

        
    },

}