/** FUNCIONES **/

//¿Qué son las funciones y para que las utilizamos? 

//Son un conjunto de instrucciones que se agrupan para realizar una tarea concreta. 
//(No se olviden el ejemplo del profe del profe)

//Se entienden a las funciones como "pequeños programas " dentro de un programa mayor. 

//COMO TRABAJO CON FUNCIONES

//1) Declarar funciones: 

/* holaMundo(); */

function holaMundo(){
    //Bloque de instrucciones
    alert("Hola Mundo");
}

//2) Llamar o invocar a una función. 

//Tenemos funciones que ejecutan una acción. 
//Y funciones que además de ejecutar una acción me retornan un dato. 


function retornarNum3() {
    return 3;
}

let numTres = retornarNum3();
console.log(numTres);

//Ejemplo de una suma: 

function sumaTradicional(numeroA, numeroB) {
    return numeroA + numeroB;
}

/* function otraFuncion() {
    return 20;
}
 */

/* let primerValor = parseInt(prompt("Ingrese el primer valor: "));
let segundoValor = parseInt(prompt("Ingrese el segundo valor:"));

let resultadoSuma = sumaTradicional(primerValor, segundoValor);
console.log(resultadoSuma); */

//Otro ejemplo: 


/* let nombreAlumno = prompt("Ingrese el nombre del alumno: ");
saludarAlumno(nombreAlumno);

function saludarAlumno(nombre) {
    alert("Hola Alumno "+ nombre);
} */

//nombreAlumno es una variable
//saludarAlumno es una función. 

//Alcance de las variables: 

//El Scope o ambito de una variable es la zona del programa en la cual se define el contexto al que pertenece. 

//JS define dos ambitos para las variables: global y local. 

//EJEMPLO VARIABLE GLOBAL

let global = 10; 

function ejemploA() {
    console.log(global);
    let local = 10; 
}

ejemploA();

//EJEMPLO VARIABLE LOCAL : linea 76 "local";

let local = 25;
console.log(local);

/*** FUNCIÓN ANÓNIMA ***/

//Una función anónima es una función que se define sin nombre y se utiliza para ser pasada por parámetro o asignada a una variable. 

let sumaAnonima = function (a,b) {
    return a + b;
}

console.log(sumaAnonima(1000,1000));

let restaAnonima = function (a,b) {
    return a  - b;
}

console.log(restaAnonima(10000, sumaAnonima(1000,1000)));


/** FUNCIONES FLECHA **/

//Identificamos a las funciones flecha como funciones anónimas de sintaxis simplificada. 

let division = (a,b) => {
    return a / b;
}

console.log("División con función flecha:");
console.log(division(100,10));

console.log("Multi con función flecha");
let multi = (a,b) => a * b;
console.log(multi(50,50));


//Otro ejemplo de función flechiña

let nombre = a => console.log("Hola " + a );

nombre("Firulais");