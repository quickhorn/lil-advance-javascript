// JavaScript code​​​​​​‌‌‌​​‌‌‌​​​​​‌‌​‌‌​‌​‌‌‌‌ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.status = "available"; // Added status property
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}, Status: ${this.status}`;
  }
}

/**
 * Extend the Book class with Fiction and NonFiction classes.
 */
// Your code starts here.

// Your code ends here.

class Library {
  constructor() {
    this.books = [];
    this.users = [];
    this.librarian = null; // single librarian
  }

  /**
   * Add the following methods:
   * - addBook(book)
   * - removeBook(title)
   * - findBook(title)
   */
  // Your code starts here.

  // Your code ends here.
  
}

export { Book, Library };
