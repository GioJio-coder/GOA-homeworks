import express from "express";

import { signUp, verify } from "../Controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signUp", signUp);

authRouter.get("/verify/:code", verify);

export default authRouter;