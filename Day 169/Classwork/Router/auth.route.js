import express from "express";
import { login, logout, signUp, verify } from "../Controllers/auth.controller.js";
import { verify } from "../controllers/verify.controllers.js"; 

const authRouter = express.Router();

const router = express.Router();

router.post("/signUp", signUp);
router.get("/verify/:token", verify);

authRouter.post("/logIn", login);

router.post("/logOut", logOut)

export default router;