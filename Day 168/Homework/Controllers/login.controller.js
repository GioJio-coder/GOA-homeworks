import Users from "../models/users.model.js";

const createSendToken = (user, statusCode, res) => {
    const token = user.signToken();

    if (process.env.NODE_ENV === "production");

    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token
    });
    };

    export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "Please write email and password!",
        });
        }

        const user = await Users.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({
            status: "fail",
            message: "Incorrect email or password",
        });
        }

        createSendToken(user, 200, res);
    } catch (err) {
        res.status(400).json({
        status: "error",
        message: err.message,
        });
    }
};