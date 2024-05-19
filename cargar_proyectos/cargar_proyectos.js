import { lista_servicios } from "./data_proyectos.js";

function cargar_proyectos(){

    let div_proyectos_servision = document.querySelector(".proyectos-y-servision");

    let div = document.createElement("div");
    div.className = "item-servicio";

    lista_servicios.forEach((servicio, indice) => {
        let item = item_mantenimiento(servicio.nombreServicio, servicio.numeroEquipos);

        if (indice % 2 === 0) {
            item.classList.add('f1');
        }else {
            item.classList.add('f2');
        }

        div.appendChild(item);
    });

    div_proyectos_servision.appendChild(div);

}

function item_mantenimiento(descr,cantidad){
    const item = document.createElement('div');

    const txt_descripcion = document.createElement('span');
    txt_descripcion.textContent = descr;
    const txt_cantidad = document.createElement('span');
    txt_cantidad.textContent = cantidad;

    item.appendChild(txt_descripcion);
    item.appendChild(txt_cantidad);

    return item;
}

export { cargar_proyectos }