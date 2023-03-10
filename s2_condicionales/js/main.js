// ejemplo usuario - contraseña

let usuarioAutorizado = "algo"
let passwordAutorizado = "pepelepu"
let usuarioIngresado =  prompt("Ingresa tu usuario")
let passwordIngresado = prompt("Ingrese su password")

if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado){
    console.log("Los datos son correctos")
}else{
    console.log("Los datos son incorrectos")
}

//Ejemplo promedio de notas

let ntaUno = parseIn(prompt("Ingrese la nota del 1er parcial"))
let notaDos = parseInt(prompt("Ingrese la nota del 2do parcial"))

let promedio = (notaUno + notaDos)/ 2
alert("El promedio del alumno es:" + promedio)
if(promedio == 10 ){
    alert("Excelente estudiante, calificacion perfecta")
}else if(promedio >= 7 && promedio < 10){
    alert("Muy bien! Aprobado ")
}else if(promedio >= 1 && promedio < 7){
    alert("Lo lamento, tendras que recursar")
}else{
    alert("Pusiste cualquier dato")
}