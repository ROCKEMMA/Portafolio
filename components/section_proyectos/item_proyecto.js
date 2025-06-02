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

/*     let fecha = document.createElement('div');
    fecha.className = "fecha";
    fecha.innerText = datos.inicio;
    div.appendChild(fecha); */

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
        div.style.border = '1px solid #154360';
        div.style.color = '#1f618d';
    }else if (categoria == "Notion"){
        div.style.border = '1px solid #5d6d7e';
        div.style.color = '#212f3d';
    }else if (categoria == "Curso"){
        div.style.border = '1px solid #9b59b6';
        div.style.color = '#6c3483';
        // div.classList.add("rgb-border");
    }else if (categoria == "IoT"){
        div.style.border = '1px solid #2ecc71'
        div.style.color = '#196f3d'
    }

    return div;
}

export { itemTabla }