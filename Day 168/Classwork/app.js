const express = require('express');
const morgan = require('morgan');
import mongoose from "mongoose";
import dotenv from "dotenv";
import phonesRouter from "./Router/phones.route";
import globalErrorHandler from "./Controllers/error.controllers";
import authRouter from "./routes/auth.routes.js";

const app = express();

dotenv.config();

app.use(morgan('dev')); 
app.use(express.json()); 

const router = express.Router();

app.use("/api/phones", phonesRouter);
app.use("/api/auth", authRouter);


router.get('/', (req, res) => {
    res.send('სერვერი წარმატებით მუშაობს!');
});

router.get('/info', (req, res) => {
    res.json({
        status: "Success",
        message: "მოგესალმებით ჩვენს API-ზე"
    });
});

app.use('/api', router);

app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Connected to Database");

        app.listen(procces.env.PORT, () => console.log(`Server started on port ${procces.env.PORT}`));
    })