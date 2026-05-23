import express from "express";

import { login, logout, signUp, verify } from "../controllers/auth.controller.js";

import {protect} from "../middlewares/auth.middleware.js"

const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.get("/verify/:code", verify);
authRouter.post("/logIn", login);
authRouter.get("/logout", logout);

authRouter.post("/auto-login", protect, async (req, res, next) => {
    res.status(200).json(req.user)
})

export default authRouter;