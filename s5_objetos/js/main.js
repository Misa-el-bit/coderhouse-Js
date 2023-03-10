let nombreAlumno = "Maria";
let edadAlumno = 8;
let apellidoAlumno = "Lopez";

//Con objetos hacemos lo siguiente: 

//SINTAXIS:

let alumnoSamuel = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 18
}


let firulais = {
    nombre : "Firulais",
    raza: "Dalmata",
    edad: 5,
}

console.log(alumnoSamuel);
console.log(firulais);

let auto = {
    marca: "Ford",
    modelo: "Ka",
    fabricacion: 2012,
    km: 150000,
    precio: 2000000
}

//DE ESTA FORMA PUEDO VER UN OBJETO POR CONSOLA:
console.log(auto);

console.log(typeof auto);

//¿Cómo puedo acceder a cada propiedad del objeto? 

//Utilizo el nombre del objeto, luego coloco el . (punto) y de esta forma puedo acceder a sus propiedades. 

console.log(auto.km);

//Otra forma de hacerlo es con corchetes []. 

console.log(auto["modelo"]);
console.log(auto["precio"]);

console.log(firulais.raza);

//¿Puedo asignar nuevos valores a estas propiedades? 

console.log("Vamos a modificar los precios: ");
auto.precio = 3000000;
console.log(auto.precio);
console.log(auto);


const yerba = {
    nombre: "Andresito",
    precio: 450, 
    cantidad: 100
}

console.log(yerba);

yerba.precio = 550;

console.log(yerba);

//Cuando trabajamos con valores: number, string, boolean. Estos se denominan valores primarios... y accedemos directamente al valor. 

//Pero cuando trabajamos con objetos accedemos a una referencia de ese valor, por eso nos permite entrar y modificar las propiedades a pesar de declararlo con const.

//EJEMPLO DE UN OBJETO QUE TIENE UN OBJETO COMO VALOR EN UNA PROPIEDAD. 

const persona =  {
    nombre: "Samuel",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 742
    }
}

console.log(persona);

console.log(persona.direccion.calle);

/** FUNCIONES CONSTRUCTORAS  **/

//En JS, el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario. 

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    //De esta forma puedo crear un método en una función constructora
    this.saludar = function () {
        console.log("Hola, soy " + this.nombre);
    }
}

const persona1 = new Persona("Carlos", "Zepeda", 35);
persona1.saludar();

/* let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido:");
let edad = parseInt(prompt("Ingrese la edad"));

const persona1 = new Persona(nombre, apellido, edad);
console.log(persona1); */

/** CLASES **/

//Las clases en JS proveen una sintaxis más clara  y simple para crear objetos. Son un equivalente al empleo de la función constructora y permite definir distintos tipos de métodos. 

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre; 
        this.precio = precio;
        this.stock = stock;
    }

    sumaIva() {
        return this.precio * 1.21
    }

    sumaStock(cantidad) {
        this.stock = this.stock + cantidad;
        //this.stock += cantidad;
    }

    mostrarStock() {
        console.log("El stock de " + this.nombre + " es de " + this.stock );
    }

    vender(cantidad) {
        if( this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Se vendieron " + cantidad + " unidades de " + this.nombre);
        } else {
            console.log("No hay stock suficiente de " + this.nombre);
        }
    }
}


const harina = new Producto("Harina marolio", 200, 10);
const tomate = new Producto("Tomate marolio", 150, 30);

harina.mostrarStock();
harina.sumaStock(50);
harina.mostrarStock();
harina.vender(100);
harina.mostrarStock();
harina.sumaStock(500);
harina.vender(350);


const fideos = new Producto("Fideos", 100);

console.log("El precio de los " + fideos.nombre + " es de " + fideos.precio + " y el precio con el iva incluido es de " + fideos.sumaIva()); 


//Métodos y funciones: 
//Las funciones de JS son generalmente de acceso global y los métodos son únicamente para ser invocados por los objetos que la contienen. 