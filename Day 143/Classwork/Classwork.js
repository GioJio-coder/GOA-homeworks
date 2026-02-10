const http = require('http');

const server = http.createServer((req, res) => {
    const fullURL = `http://localhost:3000${req.url}`;

    const myURL = new URL(fullURL);

    console.log("Full URL:", fullURL);
    console.log("Hostname:", myURL.hostname);
    console.log("Pathanme:", myURL.pathname);
    console.log("SearchParams:", myURL.searchParams);

    res.end("server is running");
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});