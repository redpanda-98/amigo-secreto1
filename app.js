let amigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigos = [];

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
        amigos.push(nombre);
    }else{
        alertaNombreInvalido();
    }
    limpiarInput();
    limpiarLista();
    agregaAmigosLista();
    console.log(amigos);
}

function limpiarInput(){
    return amigo.value = '';
}

function limpiarLista(){
    return listaAmigos.innerHTML = '';
}

function agregaAmigosLista(){
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function validarListaAmigos(){
    if(amigos.length > 0){
        return true;
    }
    else{
        return false;
    }
}

function sortearAmigo(){
    let indice = Math.floor(Math.random() * amigos.length);
    if(validarListaAmigos() == true){
        return resultado.innerHTML = amigos[indice];
    }else{
        return alert('No hay amigos');
    }
}