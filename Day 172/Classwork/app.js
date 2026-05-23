import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import phonesRouter from "./Router/phones.route.js";
import globalErrorHandler from "./controllers/error.controller.js";
import authRouter from "./Router/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

const router = express.Router();

router.get('/', (req, res) => {
    res.send('სერვერი წარმატებით მუშაობს!');
});
app.use("/api/phones", phonesRouter);
app.use("/api/auth", authRouter);

app.use('/api', router);

app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Connected to database");

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })