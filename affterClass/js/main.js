/** OBJETO MATH **/

//El objeto Math contiene una serie de métodos que me permiten realizar operaciones matemáticas. 

//Propiedades: 

//Valor PI: 

let pi = Math.PI;
console.log(pi.toFixed(4));

//Constante EULER

let euler = Math.E;
console.log(euler);

//Min y Max

//let ocho = 8;
//let veintetres = 23; 

const arrayNumeros = [23, 25, 7];

let minimo = Math.min(8, 23);
console.log("Minimo: " + minimo);

let maximo = Math.max(96, 23, 87, 1);
console.log("Máximo: " + maximo);

//CEIL, FLOOR, ROUND = sirven para redondear valores. 

//1) CEIL: devuelve el entero mayor o igual más próximo. 

console.log(Math.ceil(1.5)); // 2

//1.5 redondea a 2

//FLOOR: devuelve el entero pero redondeando para abajo. 

console.log(Math.floor(1.9)) //1
console.log(Math.floor(5.9))

//3) ROUND: redondea al entero más cercano. 

console.log(Math.round(1.5)) //2

//Si es .5 va pa arriba! 

//Square root: 

console.log(Math.sqrt(9)) //3
//Si ponemos un número negativo nos retorna NaN

//RANDOM: me genera un número de forma aleatoria. 
//Entre el 0 y el 1

console.log(Math.random());

//Entre el 0 y el 10

console.log(Math.random() * 10);

//Entre 0 y 50

console.log(Math.random() * 50);

//Numeros entre 10 y 50: 

console.log(Math.random() * 40 + 10);
//Le digo el rango de números y a partir de donde empieza a calcular. 

//Nos comemos la naranja: 

//Para redondear puedo combinar métodos: 

console.log(Math.round(Math.random() * 50  + 50));

/** CLASE DATE() **/
//Me permite trabajar con fechas. 

let fechaActual = new Date();
console.log(fechaActual);

//Le puedo pasar parámetros para configurar una fecha diferente. 

//Año, mes, dia 

let fechaConFormato = new Date(2022, 11, 18);
console.log(fechaConFormato);

//Atentos: enero es mes 0 y diciembre es el mes 11. 

let fechaConString = new Date("December 18, 2022 12:00");
console.log(fechaConString);

//Si colocan un formato diferente me retorna la frase "fecha invalida"

let fecha = new Date();
console.log(fecha.getDay());

//Atentos! 1 es para el lunes y el 7 para el domingo. 

console.log("Mes: " + fecha.getMonth());


//Diferentes formas para mostrar las fechas: 

console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString());

const ratePerHour = 16
const numDays = 130
const normalDays = numDays - (Math.floor(numDays / 22) * 22)
console.log(normalDays)

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    return Math.floor(numDays / 22) * (22) * (ratePerHour * 8) - 0.15
}
console.log(((Math.floor(numDays / 22) * 22 ) * (ratePerHour * 8)) - ((Math.floor(numDays / 22) * 22 ) * (Math.ceil(ratePerHour * 8) * 0.15)) + (normalDays * (ratePerHour * 8)))

