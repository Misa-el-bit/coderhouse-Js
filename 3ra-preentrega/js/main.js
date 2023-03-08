//Market-car
class Auto {
    constructor(brand, model, year, img, price){
        this.brand = brand; 
        this.model = model;
        this.year = year
        this.img = img;
        this.price = price
    }     
}

let carList=[]
const btn = document.getElementById("create-post").addEventListener("click", () =>{
     
    let brand = marca.value 
    let model = modelo.value 
    let year = año.value 
    let imgn = imagen.value 
    let price = precio.value 
    
    let  myCar = new Auto (brand, model, year, imgn, price)
    console.log(myCar)

    carList.push(myCar)

    document.querySelectorAll("#car-form input").forEach(input =>{ //selecciona todos los inputs dentro del elemento con el id post-form
        input.value = "" //esto limpia el formulario una vez que se da click en el boton guardar   
    })  

    printCard(carList)
})


const printCard = dataToPrint =>{
    document.getElementById("car-card") 
    dataToPrint.forEach ( (item) => {
        let {brand,model, year, imgn, price} = item

        let card = document.createElement("div");
        card.classList.add("card")
        // let img = document.createElement("img")
        // img.classList.add("img-car")
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        let title = document.createElement("h5")
        title.classList.add("card-title")
        let cardModel = document.createElement("p")
        cardModel.classList.add("card-text")
        let cardYear = document.createElement("p")
        cardYear.classList.add("card-text")
        let cardPrice = document.createElement("p")
        cardPrice.classList.add("card-text")
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-primary")

        //let imgCard = document.getElementById("car-img").src = imgn
        let brandText = document.createTextNode(brand)
        let modelText = document.createTextNode(model)
        let yearText = document.createTextNode(year)
        let priceText = document.createTextNode(`$${price}.00`)

        
        title.appendChild(brandText)
        cardModel.appendChild(modelText)
        cardYear.appendChild(yearText)
        cardPrice.appendChild(priceText)

        //card.appendChild(img)
        card.appendChild(title)
        card.appendChild(cardModel)
        card.appendChild(cardYear)
        card.appendChild(cardPrice)
        card.appendChild(btn)

        // document.getElementById("car-brand").innerText = brand
        // document.getElementById("car-model").innerText = model
        // document.getElementById("car-year").innerText = year
        document.getElementById("car-img").src = imgn
        // document.getElementById("car-price").innerText = `$${price}.00`

        document.getElementById("card-container").appendChild(card)
        
    })
}

