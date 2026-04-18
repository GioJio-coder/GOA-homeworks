import express from "express";
import morgan from "morgan";
import phonesRouter from "../Router/phones.route.js";

const app = express();

app.use(express.json()); 
app.use(morgan("dev"));  

app.use("/api/status", (req, res, next) => {
    res.status(200).send("Server is running");
    next();
});

app.use("/api/phones", phonesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});