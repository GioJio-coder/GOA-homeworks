let requestCount = 0;

function requestCounter(req, res, next) {
    console.log(`Total requests: ${requestCount}`);
    next();
}

module.exports = requestCounter;