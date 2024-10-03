console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
  
function isBookRead(books : Book[] , titleToSearch: string) : void {
    
    const libroEncontrado = books.find((book) => book.title === titleToSearch);
  
    if (libroEncontrado && libroEncontrado.isRead) {
      console.log(`El libro "${titleToSearch}" se ha encontrado y leído.`);
    } else if (libroEncontrado && !libroEncontrado.isRead) {
      console.log(`El libro "${titleToSearch}" se ha encontrado pero no ha sido leído.`);
    } else {
      console.log(`El libro "${titleToSearch}" no se ha encontrado.`);
    }
  }
  
isBookRead(books, "Devastación");
isBookRead(books, "Canción de hielo y fuego"); 
isBookRead(books, "Los Pilares de la Tierra"); 