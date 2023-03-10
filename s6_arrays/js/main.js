/*** ARRAYS ***/

//¿Qué es un array? 
//Un array es un tipo de dato que sirve para almacenar valores en forma de lista. 

//Es como una colección de variables. 


//SINTAXIS: 

let array = [1, 2, 3];
console.log(array);

console.log("Array Vacio:");
let arrayVacio = [];
console.log(arrayVacio);


//Puedo ir agregando valores a un array después de declararlo. 

arrayVacio = [25, 36, 99];
console.log("Agrego elementos en un array vacio:");
console.log(arrayVacio);

//¿Los arrays son siempre number? No, se puede almacenar cualquier valor y modificarlo en cualquier momento. 

let arrayCombinado = ["Hola", 99, true];
console.log("Muestro array combinado:");
console.log(arrayCombinado);

//Para poder organizarse mejor, los elementos de un array tienen un índice que los identifica.

//Comienza en el num 0, hasta el último elemento del Array. 

const arrayLetras = ["A", "B", "C", "D"]; 
console.log("Array de Letras");
console.log(arrayLetras);

//¿Puedo mostrar un elemento específico del array? 
//Claaaaro que si, para esto utilizo el indice. 

console.log(arrayLetras[2]);
console.log(arrayLetras[0]);

//¿Puedo modificar uno de estos elementos? 

arrayLetras[2] = 100;
console.log(arrayLetras);

//¿Cómo recorremos un array? 
//Si queremos recorrer un array y acceder a cada elemento de forma individual usamos un bucle / ciclo. 

/* for(let i = 0; i < arrayLetras.length; i++ ) {
    alert(arrayLetras[i])
} */

/*i++ es igual a poner i = i + 1*/

//Propiedad length: 

let string  = "Hola";
console.log("Propiedad length String: " + string.length);


let number = [2,3,6];
console.log("Propiedad Length en Array " + number.length);

//1) Método PUSH - Me permite agregar elementos por el final del array. 

let familia = ["Samuel", "Daniela", "Santiago", "Victoria"];
console.log(familia);

//Si quiero agregar a la mascota. 

console.log("Agrego a mi mascota: El Pulga");
familia.push("El Pulga");
console.log(familia);


//Si quiero agregar al comienzo: unshift(). 

familia.unshift("Firulais");
console.log(familia);

//2) Método POP - Me permite eliminar el último elemento de un array. 
console.log("Sacamos el último integrante de la familia:");
let eliminado = familia.pop();
console.log(familia);
console.log("Eliminamos a :" + eliminado);

//Si quiero eliminar el primer elemento utilizo shift(): 

let eliminadoShift = familia.shift();
console.log(familia);
console.log("Eliminamos el primer elemento: " + eliminadoShift);


//5) Método Splice -  Me permite eliminar uno o varios elementos de un array. Funciona con dos parámetros: primero le tengo que pasar el índice y segundo la cantidad de veces que tiene que eliminarlo. 

//Mi array Familia tiene: SAMUEL - DANIELA - SANTIAGO - VICTORIA



let integrantesEliminados = familia.splice(2,2);
console.log(familia);
console.log(integrantesEliminados);

//6) Método JOIN - Me permite generar un string con todos los elementos del array. 
//El valor que pasamos por parámetro separa los elementos. 

let stringFamilia = familia.join("*");
console.log("Método JOIN");
console.log(stringFamilia);

//7) Método Slice - Me retorna una copia del Array. Yo puedo especificar los indices de elementos que quiero que copie. 
//Le paso por parámetro un valor de inicio y uno de fin (el final no se incluye)

let nuevaFamilia = ["Samuel", "Daniela", "Santiago", "Victoria "];
let familySlice = nuevaFamilia.slice(1,3);
console.log("Método Slice:")
console.log(familySlice);

//Método concat() - Me permite unir dos arrays, retornando uno nuevo. 

let familiaUnidaOtraVez = integrantesEliminados.concat(familia);
console.log("Método Concat: ");
console.log(familiaUnidaOtraVez);

//8) Método indexOf() - me retorna el índice de un elemento. 

let indiceSamuel = familiaUnidaOtraVez.indexOf("Icardi");
console.log("Indice de Samuel: " + indiceSamuel);

//Si tengo varios elementos iguales me retorna el primero. 
//Si no lo encuentra retorna -1. 

//9) Método includes() - Similar al anterior, solo que retorna un booleano si lo encuenta. 

let booleanoSamuel = familiaUnidaOtraVez.includes("El Pulga");
console.log("Booleano si encuentra a Samuel: " + booleanoSamuel);

//10) Método reverse() - Invierte los elementos de un array (Método destructivo!!!) 
//Modifica el array original. 

console.log("Método Reverse:");
console.log(familiaUnidaOtraVez);
familiaUnidaOtraVez.reverse();
console.log(familiaUnidaOtraVez);