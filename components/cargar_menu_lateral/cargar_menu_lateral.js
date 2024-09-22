import { lista_stacks } from "./data_stacks.js";

const htmlMenuLateral = ()=>{
    
    let div = document.createElement('div');
    div.innerHTML =  `
        <div class="logo-box">
            <div class="logo-box_ico-box">
                <img src="https://raw.githubusercontent.com/ROCKEMMA/img/d538b23783cd8f93bb587a9766bf71023257f1d7/logo/logo_pequenno.svg">
            </div>
            <span>Jossue Fuentes</span>
        </div>

        <h3 class="titulo_stacks">Stacks<h3>
        <div class="div_stacks"></div>
    `;
    //cargar_stacks();
    return div;
}


function cargar_stacks(){

    let div_stacks = document.createElement('div');
    div_stacks.className = "div_stacks"

    lista_stacks.forEach(element => {
        let div = document.createElement("div");
        div.className =element.className;
        div.innerHTML =`
            <img src="${element.src}" alt="${element.nombre}">
            <div class="mensaje-stack">${element.nombre}</div>
        `;
        div_stacks.appendChild(div);
    });

    return div_stacks;
}

export { htmlMenuLateral, cargar_stacks}