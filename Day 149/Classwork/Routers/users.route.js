const express  = require("express");
const { getUsers } = require("../Controllers/users.controller");

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

module.exports = usersRouter;