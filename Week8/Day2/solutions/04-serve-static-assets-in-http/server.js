const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  if (ext === "css") return "text/css";
  else if (ext === "jpg") return "image/png";
  else return "text plain";

  // practice turning above into a switch case function 
};

const server = http.createServer((req, res) => {
  // Your code here
  // 1. route handler for each static asset
  // 1 for html, 1 for css, 1 for png/jpeg
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const assetPath = urlParts[1];
    console.log("asset path ", assetPath);

    const responseBody = fs.readFileSync(`./assets${assetPath}`);

    const extension = assetPath.split(".")[1];
    console.log("extension ", extension);
    const contentType = getContentType(extension); // jpg

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(responseBody)
  }

  if (req.method === "GET" && req.url === "/") {
    const responseBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }

  // if(req.method === 'GET' && req.url === '/static/css/application.css'){
  //   const responseBody = fs.readFileSync('./assets/css/application.css');

  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/css');
  //   return res.end(responseBody);
  // }

  // if(req.method === 'GET' && req.url === '/static/images/dog.jpg'){
  //   const responseBody = fs.readFileSync('./assets/images/dog.jpg');

  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'image/png');
  //   return res.end(responseBody);
  // }
  //2. dynamic route handling
  // 1 route handler for all static assets
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
