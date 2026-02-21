const express = require("express");
const readFile = require("./utils/readFile");

const app = express();

app.get("/books", async (res) =>
    res.status(200).json(await readFile("books.json"))
    );

    app.get("/books/:id", async (req, res) => {
    try {
        const book = (await readFile("books.json"))
        .find(b => b.id == req.params.id);
        res.status(book ? 200 : 404).json(
        { message: "Book not found" }
        );
    } catch {
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(3000);