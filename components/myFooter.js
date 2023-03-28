export default {
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
showFragment(){
    const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
    ws.postMessage({module: "showFooter", data: this.data});

    ws.addEventListener("message", (e) =>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector("#my_footer").append(...doc.body.children)
    })
},
}