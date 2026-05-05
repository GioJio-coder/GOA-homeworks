import Users from "../models/users.model.js";
import catchAsync from "../Utils/catchAsync.js";

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