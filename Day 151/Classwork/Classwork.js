const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/users", (req, res) => {
    console.log(req.body);

    res.send(req.body);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});


/*
app.use((err, req, res, next) => {
    const status = err.status || 500;

    res.status(status).json({
        message: err.message
    });
});
*/

const errorHandler = require("errorhandler");

app.use(errorHandler());