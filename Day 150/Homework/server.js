const express = require("express");
const requestCounter = require("./requestCounter");

const app = express();

app.use(requestCounter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});