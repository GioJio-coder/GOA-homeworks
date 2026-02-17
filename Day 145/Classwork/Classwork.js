const http = require('http');

let items = [];

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (items.length === 0) {
            res.statusCode = 404;
        } else {
            res.statusCode = 200;
        }
    res.end(JSON.stringify(items))
    } else {
        res.statusCode = 405;
        res.end('Only GET method');
    };
});