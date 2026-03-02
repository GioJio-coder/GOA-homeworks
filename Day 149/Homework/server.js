const express = require("express");
const itemsRouter = require("./routers/items.router");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    next();
});

app.use(itemsRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});