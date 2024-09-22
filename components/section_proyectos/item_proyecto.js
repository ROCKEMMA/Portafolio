function itemTabla(datos) {
    let div = document.createElement('div');
    div.className = "item-tabla";

    let nombre = document.createElement('a');
    nombre.className = "nombre";
    nombre.href = datos.link_web;
    nombre.target = "_blank";
    nombre.innerText = datos.nombre;
    div.appendChild(nombre);

    let stacks = document.createElement('div');
    stacks.className = "stacks";
    stacks.innerText =`[ ${datos.stacks}]`;
    div.appendChild(stacks);

    div.appendChild(tipoCategoria(datos.categoria));

    let fecha = document.createElement('div');
    fecha.className = "fecha";
    fecha.innerText = datos.inicio;
    div.appendChild(fecha);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.textContent = "Github";
    btnGithub.href = datos.github;
    btnGithub.target = "_blank";
    div.appendChild(btnGithub);

    return div;
}


function tipoCategoria(categoria){

    let div = document.createElement('div');
    div.className = "cat";
    div.innerText = categoria;

    if(categoria == "Web"){
        div.classList.add("catWeb");
    }else if (categoria == "Backend"){
        div.classList.add("catBachEnd")
    }

    return div;
}

export { itemTabla }