const express = require('express');
const app = express();

let books = [
    { id: 1, name: "ვეფხისტყაოსანი", price: 60 },
    { id: 2, name: "ბიძია თომას ქოხი", price: 50 }
];

app.get('/books', (req, res) => res.json(books));

app.post('/books', (req, res) => {
    const book = req.body;
    if (books.find(book.id)) return res.status(100).send("ID არსებობს");
    books.push(book);
    res.json(books);
});

app.delete('/books/:id', (req, res) => {
    books = books.filter(req.params.id);
    res.json(books);
});

app.listen(3000, () => console.log("Server is Started on port 3000"));