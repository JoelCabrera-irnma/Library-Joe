

const myLibrary = [];

function Book(nombre, autor, pages) {
  this.nombre = nombre
  this.autor = autor
  this.pages = pages
}

function addBookToLibrary() {
    const nombre = document.getElementById('nombre').value
    // const autor =
    // const pages =
   
    const newBook = new Book(nombre, autor, pages)
    
    myLibrary.push(newBook)

    createCard()
}

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


function createCard(){
    const cardsContenedor = document.querySelector('.cardsContenedor')
    cardsContenedor.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `<p>libro: ${myLibrary[i].nombre}</p>`
                
        cardsContenedor.appendChild(card)
    }
    
}