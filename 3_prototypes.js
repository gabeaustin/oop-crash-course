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
};

// get age
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
};

// maniuplate the data
// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revied = true;
}


// Instantiate an Object
const book1 = new Book("Book One", "John Doe", 2013);
const book2 = new Book("Book Two", "Jane Doe", 2016);
const book3 = new Book("Book Three with Age", "Age You", 2001);

console.log(book2);
book2.revise(2018);
console.log(book2);