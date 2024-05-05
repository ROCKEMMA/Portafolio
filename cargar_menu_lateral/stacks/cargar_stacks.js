import { lista_stacks } from "./data_stacks.js";

function cargar_stacks(){

    let div_stacks = document.querySelector(".div_stacks");

    lista_stacks.forEach(element => {
        let div = document.createElement("div");
        div.className =element.className;
        div.innerHTML =`
            <img src="${element.src}" alt="${element.nombre}">
            <div class="mensaje-stack">${element.nombre}</div>
        `;
        div_stacks.appendChild(div);
    });
}

export { cargar_stacks }