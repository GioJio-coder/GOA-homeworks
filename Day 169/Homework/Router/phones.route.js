import { getAllPhones } from "../Controllers/phones.controllers.js";
const express = require('express');
const router = express.Router();
const { protect } = require('../Middlewares/auth.middleware.js');

const phonesRouter = express.Router();

phonesRouter.route("/")
    .get(getAllPhones);

router.get('/', (req, res) => {
    res.send("telephone list");
});

router.post('/', protect, (req, res) => {
    res.send("add telephone");
});

router.put('/:id', protect, (req, res) => {
    res.send("update telephone");
});

router.delete('/:id', protect, (req, res) => {
    res.send("delete telephone");
});

export default phonesRouter;