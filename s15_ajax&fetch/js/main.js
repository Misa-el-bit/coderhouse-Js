// Ajax & Fetch

//Ajax es una tecnologia que nos permite hacer peticiones asincronas a un servidor, sin necesidad de recargar la pagina completa de nuevo.

//1- Conectarse con jsonplaceholder

const url = "https://jsonplaceholder.typicode.com/users";

//2- Crear un objeto del tipo XMLHttpRequest.

const petition = new XMLHttpRequest();

//3- Crear una función manejadora

function handler(){
    if(this.readyState === 4 && this.status ===200){ //ReadyState es un atributo que nos indica el estado de la petición, si es 4 significa que la petición ha terminado.
        //Status es un atributo  que nos indica  estado de la respuesta, si es 200 significa que la respuesta es correcta
        const data = JSON.parse(this.response);
        console.log(data); 
        showUsers(data)
    }
        
}

//4- Llamar al evento load y pasarle como parametro la función manejadora.

petition.addEventListener("load", handler);

//Verbos de peticiones más comunes

//GET: Para pedir información a un servidor.
//POST: Para enviar información a un servidor.
//PUT/PATCH: Para actualizar información de un servidor
//DELETE: Para borar información de un servidor.

//5- Abrir la conexión con el metodo Open y le pasamos como parametros el verbo de la petición y la url a la cual se hara dicha petición.

petition.open("GET", url);

//6- Enviar la petición con el metodo Send.

petition.send();

//Función para mostrar la respuesta de la API en el DOM

const users = document.getElementById("user");

function showUsers(data){
    data.forEach(user => {
        const li = document.createElement("li");
        li.textContent= `${user.id} - ${user.name}`
        users.appendChild(li);
    });
}

//Fetch nos permite hacer peticiones HTTP de forma asincrona trabajado con promesas.

//Sintaxix - fetch(url, opciones) el primer parametro es la URL a la cual se realizara la petición
//y el segundo parametro es opcional de acuerdo a la configuración.

const urlAll = "https://jsonplaceholder.typicode.com/albums";

const posts = document.getElementById("post");

fetch(urlAll)
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
        showPosts(data)
    })
    .catch(error => console.log(error))


function showPosts(data){
    data.forEach(post =>{
        const card = document.createElement("li");
        card.textContent = post.title
        posts.appendChild(card)
    })
}

//Rutas Relativas: Nos permiten trabar con un archivo JSON de forma local.

const productList = "json/products.json";

const list = document.getElementById("list");

fetch(productList)
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            list.innerHTML += `
            <h2> Nombre: ${product.nombre}<h2>
            <p>Precio: ${product.precio}<p>
            <p>ID: ${product.id}<p>`
        })
    })
    .catch(error => console.log(error))
