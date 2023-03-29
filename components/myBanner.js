import config from "../storage/config.js";
export default {
    showImage(){
        config.dataMybanner();;
        Object.assign(this,JSON.parse(localStorage.getItem("myBanner")));
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`
    },
    showFragment(){
        config.dataMybanner();
        Object.assign(this,JSON.parse(localStorage.getItem("myBanner")))

        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});

        ws.postMessage({module: "listBanner", data: this.information })

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...doc.body.children)
            
        })
    },
}