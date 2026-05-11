class AppError extends Error {
    constructor(message, statusCode) {

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith ? "fail" : "error";
        this.isOperational = true;

        Error(this.constructor);
    }
}

export default AppError;