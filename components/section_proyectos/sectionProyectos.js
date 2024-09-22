import { proyectos } from "../data/data.js";
import { itemTabla } from "./item_proyecto.js";

function SectionProyectos(){
    let sectionProyectos = document.createElement('div');
    sectionProyectos.className = 'section-proyectos';

    // Emcanezados
    let camposTabla = document.createElement("div");
    camposTabla.className = "campos-tabla";
    camposTabla.innerHTML = `
        <div>PROYECTOS</div>
        <div>STACKS</div>
        <div>CATEGORÍA</div>
        <div>PUBLICACIÓN</div>
        <div>REPOSITORIO</div>
    `;
    sectionProyectos.appendChild(camposTabla);

    proyectos.forEach(element => {
        sectionProyectos.appendChild(itemTabla(element));
    });
    return sectionProyectos;
}

export { SectionProyectos }