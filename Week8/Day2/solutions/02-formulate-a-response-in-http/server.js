// Your code here
const http = require('http');

const server = http.createServer((req, res) => {
    const responseBody = 'Just some text';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    return res.end(responseBody)
})

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));


console.log('This will run')