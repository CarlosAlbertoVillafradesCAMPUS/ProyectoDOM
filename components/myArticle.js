import config from "../storage/config.js";
export default {   
    showFragment(){
        config.dataMyarticle();
        Object.assign(this,JSON.parse(localStorage.getItem("myArticle")))
        const ws = new Worker("storage/wsMyArticle.js", {type:"module"});

        let id =[]
        let count = 0
        id.push("#article_1")
        ws.postMessage({module:"showArticle1", data:this.data.article1})
        id.push("#article_1")
        ws.postMessage({module:"showTable", data:this.data.article1.rankin.list})
        id.push("#article_2")
        ws.postMessage({module:"showArticle2", data: this.data.article2})
        id.push("#article_3")
        ws.postMessage({module:"showArticle3", data: this.data.article3})

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1 == count) ?ws.terminate() :count++
            
        })

    },

}
