import { htmlMenuLateral, cargar_stacks } from "./components/cargar_menu_lateral/cargar_menu_lateral.js";
import { SectionProyectos } from "./components/section_proyectos/sectionProyectos.js";
import { cargar_menu_superior } from "./components/cargar_menu_superior/cargar_menu_superior.js";

let DOM = document.querySelector("#root");

let sectionMenuLateral = document.createElement('div');
sectionMenuLateral.className = "div-menu-lateral";
sectionMenuLateral.appendChild(htmlMenuLateral());
sectionMenuLateral.appendChild(cargar_stacks());
DOM.appendChild(sectionMenuLateral);

let sectionProyectos = document.createElement('section');
sectionProyectos.className = "div_proyectos_web";
sectionProyectos.appendChild(cargar_menu_superior());
sectionProyectos.appendChild(SectionProyectos());

DOM.appendChild(sectionProyectos);
