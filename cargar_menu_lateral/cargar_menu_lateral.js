import { cargar_stacks } from "./stacks/cargar_stacks.js";

function cargar_menu_lateral(){
    
    let div_menu = document.querySelector(".div-menu-lateral");

    div_menu.innerHTML = `
        <div class="logo-box">
            <div class="logo-box_ico-box">
                <img src="https://raw.githubusercontent.com/ROCKEMMA/img/main/logo/logo_pequenno.png">
            </div>
            <span>Jossue Fuentes</span>
        </div>

        <h3 class="titulo_stacks">Stacks<h3>
        <div class="div_stacks"></div>

    `;
    cargar_stacks();

}

export { cargar_menu_lateral }