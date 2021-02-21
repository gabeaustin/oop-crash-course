// Object Literal
const book1 = {
    title: "Book One",
    author: "Jon Doe",
    year: 2013,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
        // this refers to this the object which is book1
    }
};

const book2 = {
    title: "Book Two",
    author: "Jon Doe",
    year: 2016,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
        // this refers to this the object which is book1
    }
};

console.log(book1.getSummary());