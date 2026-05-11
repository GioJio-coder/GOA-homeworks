import jwt from 'jsonwebtoken';

const createSendToken = (user, statusCode, res) => {
    const token = user.signToken();

    user.password = undefined; 

    res.status(statusCode).json({
        status: 'success',
        data: { user }
    });
};

export const login = async (req, res) => {
    createSendToken(user, res);
};