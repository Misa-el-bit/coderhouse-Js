
let numberOfProducts = prompt("Ingrese el numero de productos a guardar")

const productList = (numberOfProducts) =>{
    let productsArray = []

    class Producto {
        constructor(nombre, precio){
            this.nombre = nombre; 
            this.precio = precio;
        }     
    }

    for (i=0; i< numberOfProducts; i++){
        let productName = prompt("Ingresa el nombre del producto")
        let productPrice = parseInt(prompt("Ingresa el precio"))

        
        const myProduct = new Producto(productName, productPrice)
        console.log(myProduct)

        productsArray.push(myProduct)
        console.log(productsArray)
    }

    productsArray.forEach( product =>{
        let productName = product.nombre 
        let price = product.precio * 1.16
        alert(`El precio con iva de ${productName} es: $ ${ price }`)
    })
}
productList(numberOfProducts)

