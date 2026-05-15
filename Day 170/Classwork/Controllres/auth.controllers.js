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
};

    export const signUp = catchAsync(async (req, res, next) => {
        const {fullname, email, password} = req.body;
        const newUser = await Users.create({fullname, email, password});

        const code = newUser.createEmailVerificationToken()});

    export const verify = catchAsync(async (req, res, next) => {
        const {code} = req.params;

        const user = await Users.findOne({verificationCode: code});

        if (!user) {
            return next(new AppError("Invalid or expired verification code", 400))
        };``

        user.verificationCode = undefined;
        user.isVerified = true;

        res.status(200).json("Email verified successfully!")
    });

    export const login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    const user = await Users.findOne({email}).select("password");
    if (!user) {
        return next(new AppError("Invalid email or password", 401));
    };

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
        return next(new AppError("Invalid email or password", 401));
    };

    createSendToken(user, res)
});

    export const logOut = async (req, res) => {
        try {
            res.clearCookie("access_token");
            res.status(200).json({ message: "წარმატებით გამოხვედით სისტემიდან" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }

        res.status(200).send();
    };