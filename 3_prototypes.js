// Constructor
// ES5

function Book(_title, _author, _year) {
    this.title = _title;
    this.author = _author;
    this.year = _year;
}

// instead of putting getSummary() in constructor - create a prototype method
// create a prototype if we don't want a getSummary for every book
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;

}

// Instantiate an Object
const book1 = new Book("Book One", "John Doe", 2013);
const book2 = new Book("Book Two", "Jane Doe", 2016);

console.log(book2);