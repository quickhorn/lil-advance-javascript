import { Library } from "./library.js";

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

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
  console.log(
    library.addBook(
      new Fiction(book01.title, book01.author, book01.pubYear, book01.genre)
    )
  );
  console.log(
    library.addBook(
      new Fiction(book02.title, book02.author, book02.pubYear, book02.genre)
    )
  );
  console.log(
    library.addBook(
      new NonFiction(book03.title, book03.author, book03.pubYear, book03.genre)
    )
  );
  
  // Test capabilities of the library
  const result = () => {
    console.log(library.findBook("Odyssey")); // Book titled "Odyssey" is in the library
    console.log(library.findBook("Silo")); // Book titled "Silo" not found.
    console.log(library.removeBook("Odyssey")); // Book "Odyssey" removed. There are now 2 books in the library.
  };

  result();
