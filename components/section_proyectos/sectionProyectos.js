import { proyectos } from "../data/data.js";

function SectionProyectos(){
    let sectionProyectos = document.createElement('div');
    sectionProyectos.className = 'section-proyectos';

    let header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = "Hola mundo";
    sectionProyectos.appendChild(header);

    let tabla = document.createElement('section');
    tabla.appendChild(ListaProyectos(proyectos));
    sectionProyectos.appendChild(tabla);

    return sectionProyectos;
}

function ListaProyectos(data){
    let tablaProyectos = document.createElement('section');
    
    data.forEach(element => {
        
        tablaProyectos.appendChild(itemTabla(element));
    });

    return tablaProyectos;
}

function itemTabla (datos){
    let div = document.createElement('div');

    let ico = document.createElement('div');
    ico.innerText = datos.ico;
    div.appendChild(ico);

    return div;
}

export { SectionProyectos }