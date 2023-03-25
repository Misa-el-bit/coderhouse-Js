// Conexion API
const API_KEY = ""
let url = "https://api.apilayer.com/exchangerates_data"

let myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

//Objeto a guardar
class Convertion {
    constructor(quantity, currency1, currency2, dayRate, total){
        this.id = counter++
        this.quantity = quantity //amount
        this.currency1 = currency1 //from
        this.currency2 = currency2 //to
        this.dayRate = dayRate //rate
        this.total = total //result
    }     
}

//Variables 
let convertionsArray = []
let counter = 0

//Recuperar los datos del storage
if(localStorage.getItem("convertionsSaved")){
    convertionsArray = JSON.parse(localStorage.getItem("convertionsSaved"))
}

//Obtener los datos del form
const formConverter = document.getElementById("formConverter").addEventListener("submit", (event)=>{
    event.preventDefault()

    let amount = document.getElementById("inputQuantity").value;
    let fromCurrency = document.getElementById("inputCurrency1").value;
    let toCurrency = document.getElementById("inputCurrency2").value;
    console.log(amount, fromCurrency, toCurrency)

    document.querySelectorAll("select, input").forEach(element =>{ 
        element.value = "" //esto limpia el formulario una vez que se da click en el boton convertir
    })

    //Se manda llamar la funcion de conversión 
    getConvertion(amount, toCurrency, fromCurrency)

})


const convertionCard = document.getElementById("convertionCard")
//Fetch
const getConvertion = (amount, toCurrency, fromCurrency) => {
    fetch(`${url}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
    .then(response => response.json())
    .then(({ info: { rate }, query: {amount, from, to}, result }) => {
        console.log(rate, amount, from, to, result)
        let card = document.createElement("div");
        card.classList.add("card", "mb-3", "mt-5")
        let cardHeader = document.createElement("div")
        cardHeader.classList.add("card-header")
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body", "d-flex")
        let contDiv = document.createElement("div")
        let cradTitle = document.createElement("h3")
        cradTitle.classList.add("card-title")
        let cardText = document.createElement("p")
        cardText.classList.add("card-text")
        let btnSaveConvertion = document.createElement("button")
        btnSaveConvertion.classList.add("btn", "btn-outline")
        btnSaveConvertion.setAttribute("type", "button")
        btnSaveConvertion.setAttribute("id", "saveConvertion")

        //Crear los nodos de texto
        let cardAmount = document.createTextNode(`${amount} ${from} = `)
        let cardRate = document.createTextNode(`1 ${from} = ${rate.toFixed(2)} ${to}`)
        let cardResult = document.createTextNode(`${result.toFixed(2)} ${to}`)
        let saveText = document.createTextNode("Guardar")

        //Insertar los nodos de texto a cada etiqueta
        cardHeader.appendChild(cardAmount)
        cradTitle.appendChild(cardResult)
        cardText.appendChild(cardRate)
        btnSaveConvertion.appendChild(saveText)

        //Agregar los elementos al body 
        contDiv.appendChild(cradTitle)
        contDiv.appendChild(cardText)
        cardBody.appendChild(contDiv)
        cardBody.appendChild(btnSaveConvertion)

        //Agergar los elementos a la card
        card.appendChild(cardHeader)
        card.appendChild(cardBody)

        //Agregar la card al contenedor
        convertionCard.appendChild(card)
    
        //Guardar los datos en el storage
        const saveConvertion = document.getElementById("saveConvertion").addEventListener("click", () =>{
            let  myConvertedCard = new Convertion (amount, from, to, rate, result) 
            console.log(myConvertedCard)
            convertionCard.innerHTML = ""
            convertionsArray.push(myConvertedCard)
            console.log(convertionsArray)
            localStorage.setItem("convertionsSaved", JSON.stringify(convertionsArray))
            Swal.fire(
                'Conversión guardada exitosamente!'
              )
        })
    })
}

//Imprimir las cards guardadas
const showSavedCards = document.getElementById("showSaved").addEventListener("click", ()=>{
    printSavedCards()
})

//Funcion para imprimir las cards
const savedCardsContainer = document.getElementById("savedCardsContainer")
const printSavedCards = () =>{
    savedCardsContainer.innerHTML = ""
    convertionsArray.forEach(convertion =>{
        let savedCard = document.createElement("div");
        savedCard.classList.add("col");
        savedCard.setAttribute("id", "savedCard")
        let card = document.createElement("div")
        card.classList.add("card", "mb-3")
        let cardHeader = document.createElement("div")
        cardHeader.classList.add("card-header")
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body", "d-flex")
        let contDiv = document.createElement("div")
        let cardTitle = document.createElement("h3")
        cardTitle.classList.add("card-title")
        let cardText = document.createElement("div")
        cardText.classList.add("card-text")
        let btnDeleteCard = document.createElement("button")
        btnDeleteCard.classList.add("btn", "btn-outline")
        btnDeleteCard.setAttribute("type", "button")
        btnDeleteCard.setAttribute("id", `deleteCard${convertion.id}`)

        //Crear los nodos de texto
        let convertionAmount = document.createTextNode(`${convertion.quantity} ${convertion.currency1} = `)
        let convertionTotal = document.createTextNode(`${convertion.total.toFixed(2)} ${convertion.currency2}`)
        let convertionRate = document.createTextNode(`1 ${convertion.currency1} = ${convertion.dayRate.toFixed(2)} ${convertion.currency2}`)
        let deleteText = document.createTextNode("Borrar")

        //Insertar los nodos de texto a cada etiqueta
        cardHeader.appendChild(convertionAmount)
        cardTitle.appendChild(convertionTotal)
        cardText.appendChild(convertionRate)
        btnDeleteCard.appendChild(deleteText)

        //Agregar los elementos al body 
        contDiv.appendChild(cardTitle)
        contDiv.appendChild(cardText)
        cardBody.appendChild(contDiv)
        cardBody.appendChild(btnDeleteCard)

        //Agergar los elementos a la card
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        savedCard.appendChild(card)

        //Agregar la card al contenedor
        savedCardsContainer.appendChild(savedCard)

        //Eliminar card
        const deleteCard = document.getElementById(`deleteCard${convertion.id}`).addEventListener("click", () =>{
            deleteConvertion(convertion.id)
        })

    }) 
}

//Funcion para eliminar la card
const deleteConvertion = (id) =>{
    const card = convertionsArray.find(convertion => convertion.id === id);
    const index = convertionsArray.indexOf(card);
    convertionsArray.splice(index,1);
    if(convertionsArray.length > 0){
        printSavedCards()
    }else{
        savedCardsContainer.innerHTML = ""
    }

    localStorage.setItem("convertionsSaved", JSON.stringify(convertionsArray))
}

//Eliminar todas las cards guardadas
const deletedSaved = document.getElementById("deleteSaved").addEventListener("click", ()=>{
    deletedAllCardSaved()
})

//Funcion para eliminar las cards
const deletedAllCardSaved = () =>{
    convertionsArray = []
    printSavedCards()
    //Limpiar el storage
    localStorage.clear()
}