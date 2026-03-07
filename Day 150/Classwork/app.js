const loggerMiddleware = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toString();

    console.log(`[${timestamp}] ${method} ${url}`);

    next();
}

module.exports = loggerMiddleware;