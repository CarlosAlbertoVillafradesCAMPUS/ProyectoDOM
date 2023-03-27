export default {
    data:{
        name:"Carlos Villafrades Pinilla",
        redes:{
            name1: "GitHub",
            href1: "#",
            name2: "Instagram",
            href2: "#",
        },
        copyrigth: "©CampusLand"
},
showFooter(){
    document.querySelector("#my_footer").insertAdjacentHTML("beforeend", `
    <p>${this.data.name} <a href="${this.data.redes.href1}">${this.data.redes.name1}</a> And <a
        href="${this.data.redes.href2}"> ${this.data.redes.name2}</a>.</p>
    <p>
      <a href="#">${this.data.copyrigth}</a>
    </p>
    `)
}
}