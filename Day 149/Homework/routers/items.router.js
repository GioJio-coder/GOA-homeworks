const express = require("express");
const router = express.Router();

router.get("/", items.getItems);
router.post("/", items.createItem);

module.exports = router;