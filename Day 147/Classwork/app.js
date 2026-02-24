const express = require("express");
const app = express();

app.use(express.json());

app.post("/items", (req) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});