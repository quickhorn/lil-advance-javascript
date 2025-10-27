import { Library, Fiction, NonFiction, Librarian, LibraryUser } from "./library.js";
// This is how your code will be called.
// You can edit the book info in the three constants
// at the top to test with different books.

const book01 = {
    title: "Odyssey",
    author: "Homer",
    pubYear: 1726,
    genre: "Coming of Age",
  };
  
  const book02 = {
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    pubYear: 1892,
    genre: "Womens rights",
  };
  
  const book03 = {
    title: "The Book of Bread",
    author: "Owen Simmons",
    pubYear: 1903,
    genre: "Baking",
  };
  
  // Create a library with books, a librarian, and users
  const library = new Library();
  library.addBook(
    new Fiction(book01.title, book01.author, book01.pubYear, book01.genre)
  );
  library.addBook(
    new Fiction(book02.title, book02.author, book02.pubYear, book02.genre)
  );
  library.addBook(
    new NonFiction(book03.title, book03.author, book03.pubYear, book03.genre)
  );
  const librarian = new Librarian("Alice"); // only one librarian
  library.setLibrarian(librarian); // set the librarian
  const user001 = new LibraryUser("Simran");
  library.addUser(user001);
  const user002 = new LibraryUser("Maiken");
  library.addUser(user002);
  const user003 = new LibraryUser("Chris");
  library.addUser(user003);
  const librarian2 = new Librarian("Bob");
  
  // Test capabilities of different actors
  const result = () => {
    console.log(library.setLibrarian(librarian2)); // A librarian already exists.
    console.log(user001.checkAvailability(library, book01.title)); // Book is available: Title: Odyssey, Author: Homer, Publication Year: 1726, Status: available, Genre: Coming of Age
    console.log(user001.checkAvailability(library, "Silo")); // Book titled "Silo" not found.
    console.log(user001.loanBook(library, book01.title)); // Simran has borrowed the book "Odyssey" from Alice.
    console.log(user003.loanBook(library, book01.title)); // "Odyssey" is currently on loan.
    console.log(librarian.returnBook(library, book01.title, "Simran")); // Alice has checked in the book "Odyssey" from Simran.
    console.log(user003.loanBook(library, book01.title)); // Chris has borrowed the book "Odyssey" from Alice
    console.log(librarian.returnBook(library, book02.title, "Maiken")); // "The Yellow Wallpaper" not found in user's borrowed books.
    console.log(librarian.suspendUser(library, "Maiken")); // Alice has suspended Maiken.
    console.log(user002.loanBook(library, book02.title)); // Maiken is suspended and cannot borrow books.
    console.log(user001.loanBook(library, "Annihilation")); // Book titled "Annihilation" not found.
  };

  result();