export default {
    nav:[
        {
            title:"Aside",
            paragraph:`Customize this section to tell your visitors
             a little bit about your publication, writers, content, or something else entirely. Totally up to you.`
        },
        {
            title:"Archives",
            link:[
                {
                    name:"March 2021",
                    href:"#"
                },
                {
                    name:"February 2021",
                    href:"#"
                },
                {
                    name:"January 2021",
                    href:"#"
                },
                {
                    name:"December 2021",
                    href:"#"
                },
                {
                    name:"Novembre 2021",
                    href:"#"
                },
                {
                    name:"October 2021",
                    href:"#"
                },
                {
                    name:"September 2020",
                    href:"#"
                },
                {
                    name:"August 2020",
                    href:"#"
                },
                {
                    name:"July 2020",
                    href:"#"
                },
                {
                    name:"June 2020",
                    href:"#"
                },
                {
                    name:"May 2020",
                    href:"#"
                },
                {
                    name:"April 2020",
                    href:"#"
                }
            ]
        },
        {
            title: "Elsewhere",
            link:[
                {
                    name:"GitHub",
                    href:"#"
                },
                {
                    name:"Twiter",
                    href:"#"
                },
                {
                    name:"Facebook",
                    href:"#"
                }

            ]
        }
    ],
    showAside(){
        const data= this.nav.map((val,id) => {
            return(
                (val.link) ?this.list(val) :this.card(val)
            )
            
        });
        document.querySelector("#nav"). insertAdjacentHTML("beforeend", data.join(""))
    },
    card(val){
        return `<div class="p-4 mb-3 bg-light rounded">
        <h4 class="fst-italic">${val.title}</h4>
        <p class="mb-0">${val.paragraph}</p>
      </div>`
    },
    list(p1){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled mb-0">
        ${p1.link.map((val,id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
        </ol>
      </div>
        `
    }

}