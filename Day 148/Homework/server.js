const express = require("express");
const itemsRouter = require("./routers/items.router");

const app = express();

app.use(express.json());
app.use("/api/items", itemsRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});