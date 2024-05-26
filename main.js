import { cargar_menu_lateral } from "./components/cargar_menu_lateral/cargar_menu_lateral.js";
import { cargar_menu_superior } from "./components/cargar_menu_superior/cargar_menu_superior.js";
import { cargar_proyectos_web } from "./components/cargar_proyectos_web/cargar_proyectos_web.js";
import { cargar_proyectos } from "./components/cargar_proyectos/cargar_proyectos.js";

let DOM = document.querySelector("#root");
DOM.innerHTML = `
    <div class="div-menu-lateral"></div>
    <header class="header"></header>
    <div class="div_proyectos_web"></div>
    <section class="proyectos-y-servision"></section>
`;

/* SECCIÓNES DE LA PÁGINA */
cargar_menu_lateral();
cargar_menu_superior();
cargar_proyectos_web();
cargar_proyectos();