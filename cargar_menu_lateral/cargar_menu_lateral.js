function cargar_menu_lateral(){
    
    let div_menu = document.querySelector(".div-menu-lateral");

    div_menu.innerHTML = `
        <div class="logo-box">
            <div class="logo-box_ico-box">
                <img src="https://raw.githubusercontent.com/ROCKEMMA/img/main/logo/logo_pequenno.png">
            </div>
            <span>Jossue Fuentes</span>
        </div>
    `;
}

export { cargar_menu_lateral }