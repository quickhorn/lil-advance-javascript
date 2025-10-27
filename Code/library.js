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
class Fiction extends Book{
    constructor(title, author, publicationYear, genre){
        super(title, author, publicationYear);
        this.genre = genre;
    }

    getDetails() {
        return `${super.getDetails()}, Genre: ${this.genre}`;
    }
}

class NonFiction extends Book{
    constructor(title, author, publicationYear, subject){
        super(title, author, publicationYear);
        this.subject = subject;
    }

    getDetails() {
        return `${super.getDetails()}, Subject: ${this.subject}`;
    }
}

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
    addBook(book){
        //current tests only have 1 book per title, so we're going to make it real simple to
        //meet the actual needs of the system and not overengineer
        this.books.push(book);
        return `Book "${book.title}" added. There are now ${this.books.length} books in the library.`;
    }

    removeBook(title){
        //let index = 0;
        //let found = false;
        //this.books.forEach(b => {
        //    if (b.title == title){
        //        this.books.splice(index,1);
        //        found = true;
        //    }
        //    else{
        //        index++;
        //    }
        //});
        //if (found){
        //    return `Book "${title}" was removed from library. There are now ${this.books.length} books in the library.`;
        //} else {
        //    return `Book "${title}" not found. There are now ${this.books.length} books in the library.`;
        //}

        if (this.books.find((book) => book.title === title)){
            this.books = this.books.filter((book) => book.title !== title);
            return `Book "${title}" removed. There are now ${this.books.length} books in the library.`;
        } else {
            return `Book "${title}" not found.`;
        }
    }

    findBook(title){
        //we'll just iterate through the list until we find the title, no need to make it more difficult.
        //O(n) time complexity
        const book = this.books.find(b => b.title == title);
        if (book){
            return `Book titled ${book.title} is in the library`;
        }
        else {
            return `Book titled "${title}" not found.`;
        }
    }

    addUser(user){
        this.users.push(user);
    }

    findUser(name){
        return this.users.find(u => u.name === name);
    }

    //this method is different from the instructions, because the test passes in a library user
    //instead of a library user name.
    setLibrarian(user){
        if (this.librarian){
            return "A librarian already exists."
        } else if (user){
            this.librarian = user;
        } else {
            return `No user set`;
        }
    }
}

class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
        this.suspended = false;
    }

    checkAvailability(library, title){
        let book = library.books.find(b => b.title === title);
        if (book != null)  {
            if (book.status === "available"){
                return `Book is available: ${book.getDetails()}`
            } else  {
                return `"${title}" is currently on loan.`
            }
        } else {
            return `Book titled "${title}" not found.`
        }
    }

    loanBook(library, title){
        if (this.suspended){
            return `${this.name} is suspended and cannot borrow books.`
        }
        //I wish that findBook returned a book and a status instead of a string so we could reuse
        //the find method in case we need to modify it later instead of having it spread through
        //multiple methods.
        let book = library.books.find(b => b.title === title);
        if (book != null)  {
            if (book.status === "available"){
                this.borrowedBooks.push(book);
                book.status = "borrowed";
                return `${this.name} has borrowed the book "${title}" from ${library.librarian.name}.`
            } else  {
                return `"${title}" is currently on loan.`
            }
        } else {
            return `Book titled "${title}" not found.`
        }
    }
    
}

    class Librarian extends LibraryUser {
    constructor(name) {
        super(name);
    }

    returnBook(library, title, userName){
        //man this is confusing, because findbooks returns strings and finduser returns objects. >:( )
        let user = library.findUser(userName);
        let book = library.books.find(b => b.title === title);
        if (user && book){
            let borrowedBook = user.borrowedBooks.find(b => b.title === title);
            if (borrowedBook){
                user.borrowedBooks.filter((book) => book.title !== title);
                borrowedBook.status = "available";
                return `${this.name} has checked in the book "${title}" from ${user.name}.`
            } else {
                return `"${title}" not found in user's borrowed books.`;
            }
        } else {
            //wtf with this response. user or book? not helpful. Whatever Linkedinlive.
            return "Book or user not found."
        }
    }

    suspendUser(library, userName){
        let user = library.findUser(userName);
        if (user){
            user.suspended = true;
            return `${this.name} has suspended ${userName}.`
        } else {
            return 'User not found.' //again, inconsistent error, where in other places we return the string used to find the object, we don't here.
        }
    }
      
}



export { Library, Book, Fiction, NonFiction, Librarian, LibraryUser };
