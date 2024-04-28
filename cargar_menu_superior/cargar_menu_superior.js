function cargar_menu_superior(){

    let header = document.querySelector(".header");
    header.innerHTML = `
        <div class="div_numero_proyectos">
            <h3>Proyectos</h3>
            <div>7</div>
        </div>
        <div class="contactar">Contactar</div>
    `;
}

export { cargar_menu_superior }