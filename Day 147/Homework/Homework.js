const express = require("express");
const fs = require("fs").promises;
const app = express();

app.get("/books", async (req, res) => {
    if (Object.keys(req.query).length)
        books = books.filter(a =>
        Object.keys(req.query).every(k => a[k] == req.query[k])
        );
    res.json(books);
    });

    books.push(book);
    res.status(201).json(book);

app.listen(3000);