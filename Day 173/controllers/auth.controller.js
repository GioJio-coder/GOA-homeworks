import Users from "../models/users.model.js";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js"
import { sendEmail } from "../Utils/email.js";

const createSendToken = (user, statusCode, res, options = {}) => {
    const token = user.signToken();

    user.password = undefined;

    const response = res.cookie("lg", token, cookieOptions);

    if (options.redirectUrl) {
        return response.redirect(options.redirectStatus || 302, options.redirectUrl);
    };

    return response.status(statusCode).json(user);
};

export const signUp = catchAsync(async (req, res, next) => {
    const {fullname, email, password} = req.body;
    const newUser = await Users.create({fullname, email, password});

    const code = newUser.createEmailVerificationToken();
    await newUser.save({validateBeforeSave: false});

    try {
        await sendEmail({
            to: newUser.email,
            subject: "Welcome to our phones store - verify your email",
            html
        });

        res.status(201).json({message: "User created successfully"})
    } catch(err) {
        console.log(err)
    }
});

export const verify = catchAsync(async (req, res, next) => {
    const {code} = req.params;

    const user = await Users.findOne({verificationCode: code});

    if (!user) {
        return next(new AppError("Invalid or expired verification code", 400))
    };``

    user.verificationCode = undefined;
    user.isVerified = true;

    await user.save({validateBeforeSave: false});

    res.status(200).json("Email verified successfully!")
});

export const login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    const user = await Users.findOne({email}).select("+password");
    if (!user) {
        return next(new AppError("Invalid email or password", 401));
    };

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
        return next(new AppError("Invalid email or password", 401));
    };

    createSendToken(user, 200, res)
});

export const logout = catchAsync(async (req, res, next) => {
    res.clearCookie("lg", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        path: "/"
    });

    res.status(200).send();
})