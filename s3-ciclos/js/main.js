// Ciclo for

//sintaxis
// for (desde; hasta; actualizacion){
//     //codigo que se repite
// }

//Ejemplo A Mostrar Hola mundo 10 veces
// for(i=0; i<10; i++){
//     console.log("Hola mundo")
// }

//Ejemplo B que comience a contar desde 1 y que incluya al 10
// for(i=1; i<=10; i++){
//     console.log(i)
// }

//Ejemplo C Que cuente desde 10 hasta 0
for(i=10; i>=0; i = i-1){
    console.log(i)
}
// for (let i = 10; i >= 0; i = i - 1) {
//     console.log(i);
// }


//Ejemplo D mostrar los numeros pares entre 0 y 10
// for(i=0; i<=10; i=i+2){
//     console.log(i)
// }
// for(let i = 0; i <= 10; i = i + 2 ) {
//     console.log(i);
// }
//Ejemplo E pedir una contraseña al usuario hasta que la ingrese correctamente
// const passwordAuth = 1234

// for(i=0; i<2; i++){
//     let passwordIngresado = parseInt(prompt("Ingresa contraseña"))
//     if(passwordIngresado === passwordAuth){
//         console.log("Contraseña correcta")
//         break
//     }else{
//         passwordIngresado = parseInt(prompt("Contraseña incorrecta"))
//     }
// }

//Ejemplo F: Mostrar los números del 0 al 6 pero saltando los pares
// for(i=0; i<= 6; i++){
//     if(i %2 == 0){
//         continue
//     }
//     console.log(i)
// }

//Ciclo While
//Ejemplo G

// let nombre = prompt("ingrese su nombre(para salir escriba:salir)")

// while (nombre != "salir"){
//     console.log(nombre)
//     nombre = prompt("ingrese su nombre(para salir escriba:salir)")
// }

//Ciclo Do While
//Ejemplo H

// const pass = 1234
// let passUsuario

// do{
//     passUsuario = prompt("ingrese su contraseña")
// }while(passUsuario != pass)

//Switch
//Ejemplo I

// let clima = prompt("Ingrese el clima de su ciudad")

// switch(clima){
//     case "lluvia": 
//         console.log("No salgas de casa")
//         break
//     case "nublado":
//         console.log("dia para asado")
//         break;
//     case"soleado":
//         console.log("Vamos a la playa")
//         break;
//     case "frio":
//         console.log("a dormir")
//         break;
//     default:
//         console.log("Que es esto?")
//         break;
// }

//Ejemplo calculadora

// let valorUno = parseInt(prompt("Ingrese el primer valor"))
// let operacion = prompt("Ingrese la operacion a realizar")
// let valorDos = parseInt(prompt("Ingrese el segundo valor"))


// switch(operacion){
//     case "+":
//         console.log(valorUno + valorDos)
//         break;
//     case "-":
//         console.log(valorUno - valorDos)
//         break;
//     case "*":
//         console.log(valorUno * valorDos)
//         break;
//     case "/":
//         console.log(valorUno/valorDos)
//         break;
//     default:
//         console.log("No es una operacion valida")
//         break
// }