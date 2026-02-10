const http = require('http');

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathname = url.pathname;

    res.end});
listen(3000, () => console.log('Server running on port 3000'));