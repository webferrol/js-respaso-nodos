let crearElementoTr=(nombre,precio)=>{
    let tbody=document.querySelector("#tbody");
    let elTR=document.createElement("tr");
    elTR.innerHTML=`<td>${nombre}</td><td>${precio}</td>`;
    tbody.append(elTR);
}

let errorMessage=(elementHTML)=>{
    let emElement=document.createElement("em");
    emElement.innerHTML=`El campo "${elementHTML.getAttribute("placeholder")}" no cumple con las especificaciones correctas: ${elementHTML.parentElement.nextElementSibling.innerHTML}`;
    elementHTML.parentElement.appendChild(emElement);

}

let eraseEM = (elNombre,elPrecio)=>{
    if(elNombre.nextElementSibling && elNombre.nextElementSibling.nodeName==="EM")
        elNombre.parentElement.removeChild(elNombre.nextElementSibling);
    if(elPrecio.nextElementSibling && elPrecio.nextElementSibling.nodeName==="EM")
        elPrecio.parentElement.removeChild(elPrecio.nextElementSibling);

}

document.querySelector("#formulario").addEventListener("submit",e=>{    
    e.preventDefault();
    let expReg=/(^[\d]+€?$)|(^[0]\.[\d]+€?$)|(^[1][\d]*\.[\d]+€?$)/;
    let boolCorrecto= true;
    let expReg2=/^[\w áéíóúñÁÉÍÓÚÑ]+$/;//faltal cosillas
    let precio = document.querySelector("#precio");
    let nombre = document.querySelector("#nombre");
    eraseEM(nombre,precio);
    if(!expReg2.test(nombre.value.trim())){
        errorMessage(nombre);
        boolCorrecto=false;
    }
    if(!expReg.test(precio.value.trim())){
        errorMessage(precio);
        boolCorrecto=false;
    }
    if(boolCorrecto)
        crearElementoTr(nombre.value,precio.value);
});