const catchAsync = fn => {
    return (req, res, next) => {
        Promise(fn(req, res, next)).catch(next);
    };
};

export default catchAsync;