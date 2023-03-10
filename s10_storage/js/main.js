/** STORAGE **/

//Nos permite guardar datos de manera local en el navegador. 

//Tenemos dos formas de guardar datos: 

//LocalStorage: Almacena datos de forma indefinida, hasta que el usuario los borre de forma manual. 

//SessionStorage: almacena los datos hasta que el usuario cierra el navegador. 


/////////////////////////

//LOCALSTORAGE: 

//1)Esto lo hacemos llamando a un objeto global localStorage. 
//2)Para guardar datos en el localStorage tengo que usar un método que se llama setItem(). 

localStorage.setItem("saludo","Hola Mundo");

//Almacenamos un number: 

localStorage.setItem("numero", 1234);

//Almacenamos un booleano: 

localStorage.setItem("booleano", true);


//RECUPERAMOS DATOS: 
//Para recuperar los datos almacenados, utilizamos el método getItem();

let saludo = localStorage.getItem("saludo");
console.log(saludo);

let numero = localStorage.getItem("numero");
console.log(numero);

let booleano = localStorage.getItem("booleano");
console.log(booleano);
console.log(typeof booleano);

//TRABAJAMOS CON EL SESSION STORAGE: 
//El funcionamiento es similar al localStorage

//Almacenamos un saludo en el Session Storage: 

sessionStorage.setItem("SaludoNuevo", "Hola Mundo x2");

let saludoDos = sessionStorage.getItem("SaludoNuevo");
console.log(saludoDos);

//Eliminamos datos del LocalStorage: 

//Para eliminar datos del localStorage, utilizamos el método removeItem(); 

//localStorage.removeItem("saludo");

//También puedo eliminar toda la información del localStorage con el método clear(); 

//localStorage.clear();

//Recorremos con un bucle el localStorage: 
//Utilizamos el método key() que nos retorna un array con las claves del storage. 

console.log("Recorremos el localStorage: "); 

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}


/** ALMACENAR OBJETOS EN EL LOCALSTORAGE **/

//Tenemos que tener en cuenta que todo lo que almacena en el storage esta en formato string. 

//Por lo tanto, si queremos almacenar un objeto, tenemos que convertilo en STRING. 

//JSON: Javascript Object Notation. Es un formato de texto ligero para el intercambio de datos. 

//JSON ES UN STRING CON FORMATO ESPECIAL. 

//¿Cómo convertimos un objeto a JSON? 

const samuel = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 18, 
    casado: false
};

//Utilizamos el método JSON.stringify()

const samuelJSON = JSON.stringify(samuel);

console.log(samuelJSON, typeof samuelJSON);

//Lo almaceno en el localStorage: 

localStorage.setItem("samuel", samuelJSON);

//Ahora si quiero recuperar un JSON del localStorage y convertirlo en un objeto nuevamente tengo que utilizar el método JSON.parse();

const personaJSON = localStorage.getItem("samuel");

const persona = JSON.parse(personaJSON);
console.log(persona, typeof persona);

//EJEMPLO UTILIZANDO EL LOCALSTORAGE PARA CAMBIAR EL "MODO OSCURO" Y "MODO CLARO"

//1) Creamos un botón que cambie el modo de la página. 
//2) Almacenamos el modo en el localStorage. 
//3) Al recargar la página, recuperamos el modo del localstorage. 
//4) Cambiar el modo de la página. 

const botonModo = document.getElementById("botonModo");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "claro");
    }
})

//Recuperamos el modo del localStorage: 

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

//Paso a paso: 

//Document es el objeto que representa al documento HTML
//Body es el elemento que representa al body del HTML. 
//classList es una propiedad que nos devuelve una lista de las clases del elemento. 
//toggle es un método que nos permite agregar o eliminar una clase. 

//Ejemplo: almacenamos carrito de compras en el localStorage y lo recuperamos. 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre; 
        this.precio = precio; 
    }
}


const producto1 = new Producto("Camisa", 500);
const producto2 = new Producto("Pantalon", 1000);
const producto3 = new Producto("Zapatillas", 2000);

const carrito = []; 

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

console.log(carrito);

//Convertimos el carrito a JSON

const carritoJSON = JSON.stringify(carrito);

//Almaceno el carrillo en el localStorage: 

localStorage.setItem("carrito", carritoJSON);

//Recuperamos el carrito del localStorage: 

const carritoRecuperado = localStorage.getItem("carrito");

//Convertimos el JSON a Objeto: 

const carritoObjeto = JSON.parse(carritoRecuperado);

//Imprimimos en el html: 

const contenedorCarrito = document.getElementById("contenedorCarrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `<p> ${producto.nombre} - ${producto.precio} </p>`;
});

//RECUPERO EL USUARIO USANDO EL LOCALSTORAGE: 

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("usuario").value;
    localStorage.setItem("usuario", nombre);
});

//Al recargar la página recupero el usuario del localStorage y lo muestro en el value del input: 

const usuario = localStorage.getItem("usuario");
console.log(usuario);

if(usuario) {
    document.getElementById("usuario").value = usuario;
}



