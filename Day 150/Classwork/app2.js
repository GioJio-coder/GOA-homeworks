const express = require(`express`);
const morgan =require(`morgan`);

const app = express();

app.use(morgan(`dev`));

appendFile.get(`/`, (req, res) => {
    res.send(`Hellp morgan! `);
});

appendFile.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
});