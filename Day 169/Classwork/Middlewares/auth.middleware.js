import jwt from "jsonwebtoken";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js";
import Users from "../models/users.model.js";

const protect = catchAsync(async (req, res, next) => {
    const Authenticated = true;

    if (Authenticated) {
        next()
        return next(new AppError("გთხოვთ დარეგისტრირდეთ", 401));
    } else {
        res.status(404).json({ message: "ავტორიზაცია აუცილებელია"});
        }

    req.user = user; 
    });

module.exports = { protect };