class Book {
    constructor(nombre, autor, pages, calificacion, leido) {
      this.nombre = nombre;
      this.autor = autor;
      this.pages = pages;
      this.calificacion = calificacion;
      this.leido = leido;
    }
  }
  
class Library {
    constructor() {
      this.myLibrary = [];
    }
  
    addBookToLibrary(book) {
      this.myLibrary.push(book);
      this.createCard();
    }
  
    createCard() {
      const cardsContenedor = document.querySelector('.cardsContenedor');
      cardsContenedor.innerHTML = '';
  
      this.myLibrary.forEach((book, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <p class="encabezado"> Titulo ${i + 1}:</p>
          <p class="titleCard"> ${book.nombre}</p>
          <p class="dato"> Autor: ${book.autor}</p>
          <p class="dato"> Paginas: ${book.pages}</p>
          <p class="dato"> Calificación: ${book.calificacion} ★</p>
        `;
  
        const divButtons = document.createElement('div');
        divButtons.className = 'buttonContenedor';
  
        const butonStatusRead = document.createElement('button');
        book.leido ? (butonStatusRead.textContent = 'Read') : (butonStatusRead.textContent = 'No Read');
        divButtons.appendChild(butonStatusRead);
  
        butonStatusRead.addEventListener('click', function () {
          if (card.classList.contains('green')) {
            card.classList.replace('green', 'red');
            butonStatusRead.textContent = 'No Read';
          } else {
            card.classList.replace('red', 'green');
            butonStatusRead.textContent = 'Read';
          }
        });
  
        cardsContenedor.appendChild(card);
  
        const butonDelete = document.createElement('button');
        butonDelete.textContent = 'Delete';
        butonDelete.addEventListener('click', () => this.removeElement(i));
        divButtons.appendChild(butonDelete);
  
        card.appendChild(divButtons);
      });
    }
  
    removeElement(index) {
      this.myLibrary.splice(index, 1);
      this.createCard();
    }
  }
  
const mostrarDialogButton = document.getElementById('mostrarDialog');
const enviarBookButton = document.getElementById('enviarBook');
const miDialog = document.getElementById('miDialog');
  
const library = new Library();
  
mostrarDialogButton.addEventListener('click', function () {
    miDialog.showModal();
});
  
enviarBookButton.addEventListener('click', function () {
    miDialog.close();
});
  
document.querySelector('#myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const autor = document.getElementById('autor').value;
    const pages = document.getElementById('pages').value;
    const calificacion = document.getElementById('calificacion').value;
    const leido = document.getElementById('leido').checked;
  
    const newBook = new Book(nombre, autor, pages, calificacion, leido);
    console.log(newBook);
    console.log(typeof newBook)
    library.addBookToLibrary(newBook);
  });
  