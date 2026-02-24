const express = require('express');

const app = express();
const PORT = 3000;

app.get(`/items`, (req, res) => {
    console.log(req.query);
    res.end(`Chek terminal. `);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});