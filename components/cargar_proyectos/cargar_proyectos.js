import { lista_servicios } from "./data_proyectos.js";

function cargar_proyectos(){
    let div_proyectos_servision = document.querySelector(".proyectos-y-servision");
    div_proyectos_servision.appendChild(cargarHtmlServicios());
}

function cargarHtmlServicios(){
    let div = document.createElement("div");
    div.className = "item-servicio";

    lista_servicios.forEach((servicio, indice) => {
        let item = item_mantenimiento(servicio.nombreServicio, servicio.numeroEquipos);
        indice % 2 === 0 ? item.classList.add('f1'): item.classList.add('f2');
        div.appendChild(item);
    });
        
    return div;
}

function item_mantenimiento(dato1,dato2){
    const item = document.createElement('div');

    const txt_descripcion = document.createElement('span');
    txt_descripcion.textContent = dato1;
    const txt_cantidad = document.createElement('span');
    txt_cantidad.textContent = dato2;

    item.appendChild(txt_descripcion);
    item.appendChild(txt_cantidad);

    return item;
}

export { cargar_proyectos }