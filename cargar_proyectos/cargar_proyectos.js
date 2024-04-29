import { lista_servicios } from "./data_proyectos.js";

function cargar_proyectos(){

    let div_proyectos_servision = document.querySelector(".proyectos-y-servision");

    lista_servicios.forEach((servicio)=>{

        let div = document.createElement("div");
        div.className = "item-servicio";
        div.innerHTML = `
            <di class="div-img">
                <img src="${servicio.img}" alt="">
            </di>
            <img class="ico" src="https://cdn.hugeicons.com/icons/laptop-performance-solid-rounded.svg" src="">
            <span class="tituloEquipos">Equipos</span>
            <span class="numeroEquipos">${servicio.numeroEquipos}</span>
            <h3>${servicio.nombreServicio}</h3>
            <p>${servicio.descripcion}</p>
            `;
        div_proyectos_servision.appendChild(div);

    });

}

export { cargar_proyectos }