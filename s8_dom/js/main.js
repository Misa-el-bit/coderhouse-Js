/** PLANTILLAS LITERALES **/

//Hasta el momento si nosotros queriamos concatenar información haciamos esto: 

let cliente = "Ricky Ford";
let montoCompra = 100000000;
let mensaje = cliente + " realizó una compra por $" + montoCompra;
console.log(mensaje);

//`` alt + 96 backsticks

let mensajePlantillaLiteral = `El cliente ${cliente} realizó una compra por $${montoCompra} `;

console.log(mensajePlantillaLiteral);

///DOM = Document Object Model = Modelo de Objetos del Documento. 
//El DOM es una estructura de objetos generada por el navegador, la cual representa a la página HTML actual. 

//Con JS vamos a poder acceder a esa estructura y modificarla de forma dinámica. 

//¿Cómo funciona ?

//En el Modelo de objetos del documento, cada etiqueta representa un objeto llamado nodo. 


//(TODOS ESTOS NODOS SON ACCESIBLES PARA JS A TRAVES DEL OBJETO GLOBAL "DOCUMENT")

//1) ACCEDEMOS AL DOM (5 formas para hacerlo)

//A) Id: getElementById

const titulo = document.getElementById("tituloPrincipal");
console.log(titulo);

//B) Clases: getElementsByClassName

const nombres = document.getElementsByClassName("nombres");
console.log(nombres);

//C) Nombre de la etiqueta: 

const meses = document.getElementsByTagName("li");
console.log(meses);

//D) querySelector: este método nos permite seleccionar nodos con la misma sintaxis que usamos en CSS. 

const queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

//Me trae el primer elemento que encuentra que coincida con la búsqueda. 

//E) querySelectorAll: 

const queryNombresAll = document.querySelectorAll(".nombres");
console.log(queryNombresAll);

/* MODIFiCAR NODOS */

titulo.innerText = "Modificamos el título con JS";

/*INNERTEXT = me permite acceder al contenido textual de algún elemento del DOM */


const divNuevo = document.getElementById("divContenedor");

divNuevo.innerHTML = `  <div>
                            <p>Nombre</p>
                            <p class="rojo">Precio</p>
                            <button>Agregar al Carrito</button>
                        </div>`


//innerHTML : me permite agregar código HTML en el interior de un nodo. 

//Si quiero agregar una clase de CSS lo puedo hacer con className

titulo.className =  "rojo";

//AGREGAR NODOS: 

const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p");
parrafo.innerText = "Este es un párrafo agregado desde JS";
parrafo.className = "rojo";

contenedor.appendChild(parrafo);

//ELIMINAMOS NODOS

//remove() = elimina el nodo seleccionado. 

parrafo.remove();

//CREAMOS OBJETOS DE FORMA DINÁMICA: 

class Producto {
    constructor(nombre, precio, img) {
        this.nombre = nombre;
        this.precio = precio; 
        this.img = img;
    }
}

const yerba = new Producto("Yerba", 500, "yerba.jpg");
const harina = new Producto("Harina", 200, "yerba.jpg");
const pan = new Producto("Pan", 300, "yerba.jpg");
const leche = new Producto("Leche", 200, "yerba.jpg");

const arrayProductos = [yerba, harina, pan, leche];

const contenedorProductos = document.getElementById("contenedorProductos");

/* arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p class = "rojo">Nombre: ${producto.nombre} </p>
                    <p>Precio: ${producto.precio} </p>
                    <img class = "marolio" src =" ${producto.img}">
                    <button>Agregar al Carrito</button>
                    `;
    contenedorProductos.appendChild(div);
})
 */

/*VERSION CON BOOTSTRAP */

arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Nombre: ${producto.nombre} </h5>
                        <p class="card-text">Precio: ${producto.precio} </p>
                        <a href="#" class="btn btn-primary">Añadir al Carrito</a>
                        </div>
                    </div>
                    `;
    contenedorProductos.appendChild(div);
})