import jwt from "jsonwebtoken";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js";
import Users from "../models/users.model.js";

export const protect = catchAsync(async (req, res, next) => {
    const token = req.cookies.lg;

    if (!token) {
        return next(new AppError("გთხოვთ დარეგისტრირდეთ", 401));
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(decoded.id);

    if (!user) {
        return next(new AppError("ავტორიზაცია აუცილებელია", 401))
    };

    req.user = user;
    next();
});