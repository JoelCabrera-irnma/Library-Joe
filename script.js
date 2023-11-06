
const mostrarDialogButton = document.getElementById("mostrarDialog");
const enviarBookButton = document.getElementById("enviarBook");
const miDialog = document.getElementById("miDialog");

// Mostrar el diálogo al hacer clic en el botón "Mostrar Diálogo"
mostrarDialogButton.addEventListener("click", function() {
    miDialog.showModal();
});

// Cerrar el diálogo al hacer clic en el botón "Cerrar"
enviarBookButton.addEventListener("click", function() {
    miDialog.close();
});

let getInfo = document.querySelector('#myForm').addEventListener('submit',function () {
    event.preventDefault()
    addBookToLibrary()
  })

const myLibrary = [];

function Book(nombre, autor, pages, calificacion, leido) {
  this.nombre = nombre
  this.autor = autor
  this.pages = pages
  this.leido = leido
  this.calificacion = calificacion 
}

function addBookToLibrary() {
    const nombre = document.getElementById('nombre').value
    const autor = document.getElementById('autor').value
    const pages = document.getElementById('pages').value
    const calificacion = document.getElementById('calificacion').value
    const leido = document.getElementById('leido').checked
    
    const newBook = new Book(nombre, autor, pages, calificacion, leido,)

    myLibrary.push(newBook)

    createCard()
    //console.table(myLibrary)
}

function createCard(){
    const cardsContenedor = document.querySelector('.cardsContenedor')
    cardsContenedor.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
                        <p class="encabezado"> Titulo ${i+1}:</p>
                        <p class="titleCard"> ${myLibrary[i].nombre}</p>
                        <p class="dato"> Autor: ${myLibrary[i].autor}</p>
                        <p class="dato"> Paginas: ${myLibrary[i].pages}</p>
                        <p class="dato"> Calficacion: ${myLibrary[i].calificacion} ★</p>
        `  
        const divButtons = document.createElement('div')
        divButtons.className = 'buttonContenedor'
        //console.log(i)
        myLibrary[i].leido ? card.classList.add('green') : card.classList.add('red');

        const butonStatusRead = document.createElement('button')
        myLibrary[i].leido ? butonStatusRead.textContent = "Read" : butonStatusRead.textContent = "No Read";
        divButtons.appendChild(butonStatusRead)
        butonStatusRead.addEventListener('click',function () {
            if(card.classList.contains("green")){
                card.classList.replace("green", "red")
                butonStatusRead.textContent = "No Read"
            }
            else{
                card.classList.replace("red", "green");
                butonStatusRead.textContent = "Read"
            }
        })

        cardsContenedor.appendChild(card)
        const butonDelete = document.createElement('button')
        butonDelete.textContent = "Delete"
        butonDelete.setAttribute('onclick',`removeElement(${i})`)
        divButtons.appendChild(butonDelete)

        card.appendChild(divButtons)
    } 
}

function removeElement(index) {
 myLibrary.splice(index,1)
 createCard()   
}