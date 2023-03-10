//Market-car
class Car {
    constructor(brand, model, year, img, price, id){
        this.brand = brand; 
        this.model = model;
        this.year = year
        this.img = img;
        this.price = price
        this.id = id
    }     
}

let carList=[]

const btn = document.getElementById("create-card").addEventListener("click", () =>{
     
    let carBrand = brand.value 
    let carModel = model.value 
    let carYear = year.value 
    let carImg = picture.value 
    let carPrice = price.value
    let id = 1
    
    let  myCar = new Car (carBrand, carModel, carYear, carImg, carPrice, id)

    console.log(myCar)

    carList.push(myCar)
    
    document.querySelectorAll("#car-form input").forEach(input =>{ //selecciona todos los inputs dentro del elemento con el id post-form
        input.value = "" //esto limpia el formulario una vez que se da click en el boton guardar   
    })  

    printCard(carList)
})
console.log(carList)

const printCard = () =>{
    carList.forEach ( (item) => {
        let {brand,model,year,img, price, id} = item

        let card = document.createElement("div");
        card.classList.add("card")
        let coverImg = document.createElement("img")
        coverImg.classList.add("img-car")
        coverImg.src = img
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        let cardTitle = document.createElement("h3")
        cardTitle.classList.add("card-title")
        let cardModel = document.createElement("p")
        cardModel.classList.add("card-text")
        let cardYear = document.createElement("p")
        cardYear.classList.add("card-text")
        let cardPrice = document.createElement("p")
        cardPrice.classList.add("card-text")
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-primary","save")
        btn.setAttribute("id", `${id}`)

        //crear los nodos de Texto
        let brandText = document.createTextNode(brand)
        let modelText = document.createTextNode(model)
        let yearText = document.createTextNode(year)
        let priceText = document.createTextNode(`$${price}.00`)
        let saveButton = document.createTextNode("Guardar")

        //Insertar los nodos de texto a cada etiqueta
        cardTitle.appendChild(brandText)
        cardModel.appendChild(modelText)
        cardYear.appendChild(yearText)
        cardPrice.appendChild(priceText)
        btn.appendChild(saveButton)

        //Agregar los elementos al body de la card
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardModel)
        cardBody.appendChild(cardYear)
        cardBody.appendChild(cardPrice)
        cardBody.appendChild(btn)

        //Agegar la img y el body a la card
        card.appendChild(coverImg)
        card.appendChild(cardBody)

        document.getElementById("cardContainer").appendChild(card)

        const btnSave = document.getElementById(`${item.id}`);
        btnSave.addEventListener("click", () => {
            addTocart(item)
            console.log("click")
        })
        
    })
}

let savedCart = []

if(localStorage.getItem("guardados")){
    savedCart = JSON.parse(localStorage.getItem("guardados"))
}

const addTocart = (car) =>{
    savedCart.push(car);
    localStorage.setItem("guardados", JSON.stringify(savedCart))
}
console.log(savedCart)

const showSaves = document.getElementById("showSaved")
showSaves.addEventListener("click", () =>{
    printSavedCard()
})

const printSavedCard = () =>{
    savedCart.forEach ( (item) => {
        let {brand,model,year,img, price, id} = item

        let card = document.createElement("div");
        card.classList.add("card")
        let coverImg = document.createElement("img")
        coverImg.classList.add("img-car")
        coverImg.src = img
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        let cardTitle = document.createElement("h3")
        cardTitle.classList.add("card-title")
        let cardModel = document.createElement("p")
        cardModel.classList.add("card-text")
        let cardYear = document.createElement("p")
        cardYear.classList.add("card-text")
        let cardPrice = document.createElement("p")
        cardPrice.classList.add("card-text")

        //crear los nodos de Texto
        let brandText = document.createTextNode(brand)
        let modelText = document.createTextNode(model)
        let yearText = document.createTextNode(year)
        let priceText = document.createTextNode(`$${price}.00`)

        //Insertar los nodos de texto a cada etiqueta
        cardTitle.appendChild(brandText)
        cardModel.appendChild(modelText)
        cardYear.appendChild(yearText)
        cardPrice.appendChild(priceText)

        //Agregar los elementos al body de la card
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardModel)
        cardBody.appendChild(cardYear)
        cardBody.appendChild(cardPrice)

        //Agegar la img y el body a la card
        card.appendChild(coverImg)
        card.appendChild(cardBody)

        document.getElementById("savedContainer").appendChild(card)
        
    })
}

const savedCars = document.getElementById("savedContainer")

const showCarsSaved = () =>{
    savedCars.innerHTML = "";
    savedCart.forEach(car =>{
        printSavedCard(savedCart)
    })
}

const emptSaved = document.getElementById("emptSaved")
emptSaved.addEventListener("click", () => {
    emptCart();
})

const emptCart = () => {
    savedCart = [];
    showCarsSaved()
    localStorage.clear(); //vaciar el localstorage
}

