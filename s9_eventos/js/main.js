/*** EVENTOS ***/

//Los eventos son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento cuando se produzcan. 

//¿Cómo funcionan? Utilizamos una herramienta que se llama "Manejador de Eventos".

/* HAY 3 FORMAS PARA REALIZAR ESTO: */

//1) AddEventListener

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    /* console.log("Hola, me hiciste click"); */
    alert("Hola, soy un click!");
})

//El evento "click" se dispara cuando cliqueamos el mouse sobre un elemento determinado. 

//Usamos una función flecha para asociar un comportamiento a ese evento. 

//2) Utilizando las propiedades del NODO. 

const btnDos = document.getElementById("btnDos");

btnDos.onclick = () => {
    alert("Segunda formaaaaaa");
}

//3) Escribiendo la función en el HTML: 

function jsEnHTML(){
    console.log("Estoy llamando a la función desde el HTML"); 
}

/**** EVENTOS MÁS COMUNES ****/

//EVENTOS CON EL MICKY MOUSE: Se producen con la interacción del usuario con el micky mouse. 

const caja = document.getElementById("caja");

//mouseover / mouseout : el puntero del mouse se mueve sobre / sale del elemento. 

caja.onmouseout = () => {
    console.log("Ingresó/ salió el puntero del elemento!!!");
}


//¿Donde van a utilizar estos eventos con el mouse: animaciones y juegos?

//mousemove: el movimiento del mouse sobre el elemento.

caja.onmousemove = () => {
    console.log("pasaste el mouse por la caja");
}

//mousedown / mouseup: se oprime / suelta del botó del RATÓN sobre un elemento. 

caja.onmousedown = () => {
    console.log("mousedown");
}

caja.onmouseup = () => {
    console.log("mouseup");
}


/** EVENTOS CON EL TECLADO  **/
//Se producen con la interacción del usuario con el teclado. 


const campoTexto = document.getElementById("campoTexto");

//keydown: cuando se presiona una tecla. 
//keyup: cuando se suelta una tecla. 

campoTexto.onkeydown = () => {
    console.log("Presionaste una tecla (keydown)");
   
}

campoTexto.onkeyup = () => {
    console.log("Soltaste una tecla (keyup)");
}
 

//Evento Change: se activa cuando cambio el valor de un elemento. 

const texto = document.getElementById("texto");

texto.addEventListener("change", () => {
    console.log("Ingresaste texto (evento change)");
   /*  if(texto.value === "y") {
        alert("Ingresaste una Y");
    } */
})


//EVENTO INPUT: me permite ejecutar una función cada vez que el usuario ingreses texto en el campo.

texto.addEventListener("input", () => {
    console.log(texto.value);
})

//La propiedad value me permite acceder al texto ingresado por el usuario. 

//EVENTO SUBMIT: se activa cuando un formulario es enviado. 

class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre; 
        this. apellido = apellido;
    }
}

const arrayClientes = []; 

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    //Evito el comportamiento por default del formulario. 
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    //Verificamos por consola que todo este bien
    console.log("El nombre ingresado es: " + nombre.value);
    console.log("El apellido ingresado es: " + apellido.value);
    console.log("Formulario Enviado!");

    //Creamos el objeto Cliente: 
    const cliente = new Cliente(nombre.value, apellido.value);
    arrayClientes.push(cliente);

    //Verificamos por consola el Array: 
    console.log(arrayClientes);

    //Reseteamos el formulario: 
    formulario.reset();

})



