export default {
    image: "../image/imgBanner.webp",
    information:{
        title: "La FIFA celebra el Día Internacional de la Eliminación a la Discriminación Racial",
        text: "Hoy se celebra el Día Internacional de la Eliminación de la Discriminación Racial, que este año se centra en la urgencia de combatir el racismo y la discriminación racial.",
        vinculo: {
            name: "Continue reading",
            href: "https://www.fifa.com/es/social-impact/campaigns/no-discrimination/news/la-fifa-celebra-el-dia-internacional-de-la-eliminacion-de-la-discriminacion-racial"
        },
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`
    },
    showFragment(){
        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});

        ws.postMessage({module: "listBanner", data: this.information })

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...doc.body.children)
            
        })
    },
}