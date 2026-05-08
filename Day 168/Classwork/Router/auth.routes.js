import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import { verify } from "../controllers/verify.controllers.js"; 

const router = express.Router();

router.post("/signUp", signUp);

router.get("/verify/:token", verify);

export default router;