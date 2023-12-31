const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the node kubernetes pod!');
});

server.listen(3000);