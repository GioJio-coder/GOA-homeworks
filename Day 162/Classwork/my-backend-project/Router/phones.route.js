import express from "express";
import { getAllPhones } from "../Controllers/phones.controllers.js";

const phonesRouter = express.Router();

phonesRouter.route("/")
    .get(getAllPhones);

export default phonesRouter;