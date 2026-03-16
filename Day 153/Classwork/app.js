const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

const books = [
    { name: "Harry Potter", author: "Rowling", year: 1997}
];

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:name", (req, res) => {
    const name = req.params.name;

    const book = books.find(b => b.name.toLowerCase() === name.toLowerCase());

    if (!book) {
        return res.status(404).json({Message: "Book not found"});
    }

    res.status(200).json(book);
});


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});