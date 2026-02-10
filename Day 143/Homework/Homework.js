const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type');

    if (req === 'GET') res.end('GET request');
    else if (req === 'POST') res.end('POST request');
    else if (req === 'PUT') res.end('PUT request');
    else if (req === 'DELETE') res.end('DELETE request');
    else {
        res.statusCode = 123;
        res.end('Unsupported method');
    }
}).listen(3000, () => {
    console.log('Server running on port 3000');
});

