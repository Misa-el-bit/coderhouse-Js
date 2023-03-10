//operadores 
/** SUGAR SINTAX **/
//La utilización de OPERADORES AVANZADOS para simplificar nuestro código. 


//1) Operador ++ 

let i = 1; 
i = i + 1;
i++;
console.log(i);

let aux = 0; 
while(aux < 5) {
    console.log(aux);
    aux++;
}

//2)Operador ternario:  es una simplificación del condicional if.. else

//SINTAXIS: 3 PARTES (si o si)
//- la condición 
// código que se ejecuta cuando la condición es verdadera. 
// else, el código qeu se ejecuta cuando la condición es falsa. 

let edadCliente = 18;

if(edadCliente >= 18) {
    console.log("Es mayor, puede ingresar al JAVAS CLUB");
} else {
    console.log("Es menor, no vas a poder entrar al JAVAS");
}

//Con el operador ternario: 

edadCliente >= 18 ? console.log("Es mayor") : console.log("Es menor, anda pa alla bobo");

//El operador ternario ya tiene un return implícito, es decir que me resulta muy útil para retornar datos de forma condicional. 

let tienePermiso = edadCliente >= 18 ? true : false;

/* OPERADOR LÓGICO AND && */

//Es una simplificación del condicional IF en una sola línea de código: 

let nombreCliente = "Samuel"; 

//nombreCliente === "Samuel" && alert("Bienvenido Samuel");

if(nombreCliente === "Samuel") console.log("Si es verdad");

//Otro ejemplo: 

let nuevoCarrito = []; 
nuevoCarrito.length === 0 && console.log("El carrillo esta vacio");


//También me retorna valores: 

let vacio = nuevoCarrito.length === 0 && "el carrito esta vacio";
console.log(vacio);

//Operador Lógico OR ||: 

//Primero tenemos que saber lo que es un valor "falsy" en JS. 
//Valores Falsy: false, 0, "", null, undefined, NaN. 

console.log("Operador Lógico OR: ");
console.log( 0 || "Esto si es verdadero, no como el amor de tu ex" );
console.log( null || "miau");
console.log(10 || "la mejor comisión del condado");

//Si el dato evaluado es "falsy" me ejecuta el código que esta después del operador lógico OR. 

//Ejemplo: pedimos datos al usuario. 

/* let nombre = prompt("Ingrese su nombre");
console.log( nombre || "Invitado"); */

//OPERADOR NULLISH COALESCING ??
//Es una simplificación del operador OR. 
//Trabaja igual al OR, pero solo admite como valores "nullish" a null y undefined. 

console.log("Operador Nullish: ");
console.log(0 ?? "nullish");

//ACCESO CONDICIONAL A UN OBJETO: Es una caracteristica de JS que se usa para acceder a propiedades de un objeto sin generar un error si el objeto o la propiedad no existe. 

const cliente = null;

console.log(cliente?.nombre || "El cliente no existe");

//Antes si se intentaba acceder a una propiedad de un objeto que no existe, se generaría un error que puede interrumpir el flujo de ejecución del programa.

/** DESESTRUCTURACIÓN DE OBJETOS **/

const alumno = {
    nombre: "Juan",
    apellido: "Perez", 
    edad: 25, 
    curso: "JavaScript"
};

/* let nombreAlumno = alumno.nombre;
console.log(nombreAlumno); */

//Sintaxis: 

let {nombre, edad, curso} = alumno;
//Puedo declarar con const o let. Adentro de las llaves puedo poner el nombre de las propiedades que quiero extraer. Y en memoria se crean esas variables a las cuales puedo acceder de forma independiente después. 

nombre = "Samuel";
console.log(nombre);
console.log(alumno.nombre);

//Muy útil para trabajar con los datos de un objeto sin modificar la estructura original. Y también cuando tenemos objetos muy complejos con otros objetos anidados. 

//Que pasa si una de las propiedades del objeto es otro objeto: 

const gato = {
    duenio : "Juan",
    raza: "Persa", 
    edad: 5, 
    direccion: {
        calle: "Av. Siempre viva", 
        numero: 123, 
        ciudad: "Sprinfield"
    }
}

let {duenio, raza, edad:edadGato, direccion: {calle, numero, ciudad}} = gato;

console.log(edadGato);

console.log(calle);

/** DESESTRUCTURACIÓN EN PARÁMETROS **/

function mostrarDatos( {nombre, edad} ) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años `);
}

mostrarDatos(alumno);

//otra opción a la hora de pasar datos a una función. 

/** DESESTRUCTURACIÓN DE ARRAYS  **/

const numeros = [10, 20, 30, 40, 50];

let [,, tercero, cuarto, quinto] = numeros; 

console.log(tercero);