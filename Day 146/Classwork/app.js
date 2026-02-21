const express = require("express");
const app = express();

app.use(express.json());

const strings = [
    "giorgi",
    "gio",
    "samsung",
    "mobile",
    "phone",
    "mobile phone",
    "laptop",
    "mouse",
    "camera",
    "monitor",
    "pen"
];

app.get("/strings", (req, res) => {
    res.status(200).json(strings);
});

app.get("/strings/:id", (res, res) => {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < strings.length){
        res.status(200).json(strings[id]);
    } else {
        res.status(404).send("String not found");
    };
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});