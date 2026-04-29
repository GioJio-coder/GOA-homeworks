import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});