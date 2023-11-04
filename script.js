
const mostrarDialogButton = document.getElementById("mostrarDialog");
const cerrarDialogButton = document.getElementById("cerrarDialog");
const miDialog = document.getElementById("miDialog");

// Mostrar el diálogo al hacer clic en el botón "Mostrar Diálogo"
mostrarDialogButton.addEventListener("click", function() {
    miDialog.showModal();
});

// Cerrar el diálogo al hacer clic en el botón "Cerrar"
cerrarDialogButton.addEventListener("click", function() {
    miDialog.close();
});

let getInfo = document.querySelector('#myForm').addEventListener('submit',function () {
    event.preventDefault()
    addBookToLibrary()
  })


const myLibrary = [];

function Book(nombre, autor, pages, leido) {
  this.nombre = nombre
  this.autor = autor
  this.pages = pages
  this.leido = leido 
  
}

function addBookToLibrary() {
    const nombre = document.getElementById('nombre').value
    const autor = document.getElementById('autor').value
    const pages = document.getElementById('pages').value
    const leido = document.getElementById('leido').checked
   
    const newBook = new Book(nombre, autor, pages, leido)

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
                        <p>libro: ${myLibrary[i].nombre}</p>
                        <p>autor: ${myLibrary[i].autor}</p>
                        <p>paginas: ${myLibrary[i].pages}</p>
                        <p>leido: ${myLibrary[i].leido ? "Ya leido" : "No leido"}</p>
        `  
        //console.log(i)
        cardsContenedor.appendChild(card)
        const butonDelete = document.createElement('button')
        butonDelete.textContent = "Delete"
        butonDelete.setAttribute('onclick',`removeElement(${i})`)
        card.appendChild(butonDelete)
    } 
}

function removeElement(index) {
 myLibrary.splice(index,1)
 createCard()   
}