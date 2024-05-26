function cargar_menu_superior(){

    let header = document.querySelector(".header");
    header.innerHTML = `
        <div class="div_numero_proyectos">
            <h3>Proyectos</h3>
            <div>7</div>
        </div>
        <a class="contactar" href="https://github.com/ROCKEMMA">Github</a>
    `;
}

export { cargar_menu_superior }