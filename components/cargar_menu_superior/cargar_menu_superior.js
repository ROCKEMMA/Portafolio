import { totalProyectos } from "../data/data.js";
function cargar_menu_superior(){

    let header = document.createElement('div');
    header.className = "header";
    header.innerHTML = `
        <div class="div_numero_proyectos">
            <h3>Proyectos</h3>
            <div>${totalProyectos}</div>
        </div>
        <a class="contactar" href="https://github.com/ROCKEMMA">Github</a>
    `;
    return header;
}

export { cargar_menu_superior }