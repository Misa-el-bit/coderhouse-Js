//Adivida el número
let name = prompt("Ingresa tu nombre")
let age = parseInt(prompt("Ingresa tu edad, debes ser mayor de 18 años para entrar!!!"))

if(age >= 18){
    alert("Hola " + name + " vamos a jugar, Adivinar el número!!")
    alert("Estoy pensando en un número entre 0 y 20")
    alert("Ingresa -1 para salir")

    let hiddenNumber = Math.floor(Math.random() * 21)
        console.log(hiddenNumber)
    let counter = 3

    for(i=0; i<3; i++){
        let userNumber = parseInt(prompt(`Ingresa tu respuesta, tienes ${counter} oprtunidades`))
        let price = 150
        let taxes = Math.floor(Math.random() * 31)
        if(userNumber === hiddenNumber){
            alert(`Felicidades ${name}, has adivinado el número, ganaste 150 dls`)
            alert("Ahora toca pagar impuestos")
            let payTaxes = () => {
                return Math.floor(price*taxes)/100;
            }
            alert("Tienes que pagar " + payTaxes() + " dls de impuestos")
            let realPrice = () =>{
                return price - payTaxes()
            }
            alert("Tu premio es " + realPrice() + " dls")
            break
        }else if(userNumber === -1){
            alert(name + " Saliste del juego")
            break
        }else if(i<2){
            counter --
            alert("Intentalo de nuevo")
        }else{
            alert("Te quedaste sin intentos")
        }
    }
}else if(age = " "){
        parseInt(prompt(`${name} Ingresa tu edad para entrar!`))
}else{
    alert(`Lo siento ${name}, no tienes edad para jugar`)
}