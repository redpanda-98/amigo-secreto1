let amigo = document.getElementById('amigo');
const agregarBtn = document.querySelector('.button-add');
let nombres = [];

function validarNombreAmigo(amigo){
    let nombre = amigo.value;
    if(nombre.length > 0){
        return true;
    }
    else{
        return false;
    }
}

function alertaNombreInvalido(){
    alert('Por favor inserte un nombre');
}

function agregarAmigo(){
    let nombre = amigo.value;
    if(validarNombreAmigo(amigo) == true){
        nombres.push(nombre);
        limpiarInput();
    }else{
        alertaNombreInvalido();
    }
    console.log(nombres);
}

function limpiarInput(){
    return amigo.value = '';
}

