const express = require('express');
const morgan = require('morgan');
import mongoose from "mongoose";
import dotenv from "dotenv";
import phonesRouter from "./Router/phones.route.js";
import globalErrorHandler from "./Controllers/error.controllers.js";
import authRouter from "./Router/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(morgan("dev")); 
app.use(express.json()); 
app.use(cookieParser());

const router = express.Router();

router.use('/', (req, res) => {
    res.status(200).send("სერვერი წარმატებით მუშაობს!");
});

app.use('/api', router);

app.use("/api/phones", phonesRouter);
app.use("/api/auth", authRouter);

app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Connected to database");

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })