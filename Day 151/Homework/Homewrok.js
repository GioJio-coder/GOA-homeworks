const express = require("express");
const errorHandler = require("errorhandler");

const app = express();

app.get("/error", (req, res) => {
    throw new Error("Intentional error!");
});
if (process == "production") {
    app.use(errorHandler());
}
const PORT = process.PORT || 3000;
app.listen(PORT, () => {
    console.log(`${process} running on port ${PORT}`);
});