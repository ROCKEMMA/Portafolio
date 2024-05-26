import { listaSitiosWeb } from "./data_proyectos_web.js";

function cargar_proyectos_web(){
    
    let div_proyectos_web = document.querySelector(".div_proyectos_web");

    listaSitiosWeb.forEach((web)=>{

        let a = document.createElement("a");
        a.className = "sitio-web";
        a.href = web.link;
        a.target = "_blank";
        
        a.innerHTML = `
            <div>
                <img src="${web.img}" alt="${web.nombrePagina}">
            </div>
            <h2>${web.nombrePagina}</h2>
            <p>${web.descripcion}</p>
        `;

        div_proyectos_web.appendChild(a);
    });

}



export { cargar_proyectos_web }