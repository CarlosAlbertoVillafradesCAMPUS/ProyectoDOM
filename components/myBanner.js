export default {
    image: "../image/imgBanner.webp",
    title: "La FIFA celebra el Día Internacional de la Eliminación a la Discriminación Racial",
    text: "Hoy se celebra el Día Internacional de la Eliminación de la Discriminación Racial, que este año se centra en la urgencia de combatir el racismo y la discriminación racial.",
    vinculo: {
        name: "Continue reading...",
        href: "#"
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`
    },
    listBanner(){
        let plantilla = ` <h1 class="display-4 fst-italic ">${this.title}</h1>
        <p class="lead my-3 ">${this.text}</p>
        <p class="lead mb-0 "><a href="${this.vinculo.href}" class="text-white fw-bold">${this.vinculo.name}</a></p>`

        document.querySelector("#banner").insertAdjacentHTML("beforeend", plantilla )
        
    }
}