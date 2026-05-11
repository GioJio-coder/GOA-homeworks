import Users from "../models/users.model.js";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js"
import { sendEmail } from "../Utils/email.js";

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const newUser = await Users.create({
        fullname,
        email,
        password,
        });

        res.status(200).json({
        status: "success",
        data: {
            user: newUser,
        },
        });
    } catch (error) {
        res.status(400).json({
        status: "fail",
        message: error.message,
        });
    }

    export const logOut = async (req, res) => {
        try {
            res.clearCookie("access_token");
            res.status(200).json({ message: "წარმატებით გამოხვედით სისტემიდან" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
};