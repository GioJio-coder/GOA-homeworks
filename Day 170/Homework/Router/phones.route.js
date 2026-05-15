import express from "express";
import { addPhone, deletePhone, editPhone, getAllPhones, getSinglePhone } from "../Controllers/phones.controller.js";
import {protect} from "../middlewares/auth.middleware.js";
import {allowed} from "../Controllers/roles.controller.js"

const phonesRouter = express.Router();

phonesRouter.route("/")
    .get(getAllPhones)
    .post(protect, allowedTo("admin"), addPhone);

phonesRouter.route("/:id")
    .get(getSinglePhone)
    .put(protect, allowedTo("admin"), editPhone)
    .delete(protect, allowedTo("admin"), deletePhone);

export default phonesRouter;