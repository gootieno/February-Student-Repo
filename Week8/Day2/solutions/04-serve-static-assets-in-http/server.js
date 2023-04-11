const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  //1. route handler for each static asset 
    // 1 for html, 1 for css, 1 for png/jpeg
  
  //2. dynamic route handling
    // 1 route handler for all static assets
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));