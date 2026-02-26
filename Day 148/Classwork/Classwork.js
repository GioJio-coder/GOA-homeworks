const express = require("express");
const app = express();

app.use(express.json());

let items = ["notebook", "mouce", "book", "phone", "apple"];

app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (id < 0 ||  id >= items.length)  {
        return res.status(404).json({ message: "element not found"})
    };

    res.status(200).json(items);
});

app.listen(3000, () => {
    console.log("server is running");
});