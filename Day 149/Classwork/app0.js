const express = require(`express`);
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request method:", req.method);
    console.log("Request body:", req.body);
    next();
});

app.post(`/test`, (req, res) => {
    res.end("Request received");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});