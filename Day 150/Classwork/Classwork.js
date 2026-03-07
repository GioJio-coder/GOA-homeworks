const express = require(`express`);
const app = express();

app.use(`/isWorking`, (req, res, next) => {
    console.log("path:", req.path);
    console.log("Query:", req.query);

    res.status(200).json([req.path, req.query]);

    next();
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});