const http = require('http');

const server = http.createServer(( res) => {
    res.end(' giorgi jioshvili ');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});