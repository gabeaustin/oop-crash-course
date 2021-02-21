// Constructor
// ES5

function Book(_title, _author, _year) {
    // console.log("Book Instantiated...");
    this.title = _title;
    this.author = _author;
    this.year = _year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

// Instantiate an Object
const book1 = new Book("Book One", "John Doe", 2013);
const book2 = new Book("Book Two", "Jane Doe", 2016);

console.log(book1.getSummary());