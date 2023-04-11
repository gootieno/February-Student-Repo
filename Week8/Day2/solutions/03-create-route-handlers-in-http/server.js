const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  // console.log('request object ', req)

  let dataComingIn = ""; //affiliate=nasa&query=mars+rover%21
  req.on("data", (data) => {  
    dataComingIn += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (dataComingIn) {  //affiliate=nasa&query=mars+rover%21
      req.body = dataComingIn
        .split("&") //[affiliate=nasa,query=mars+rover%21]
        .map((keyValuePair) => keyValuePair.split("="))  //[[affiliate,nasa],[query,mars+rover%21]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")]) //[[affiliate,nasa],[query,mars rover%21]]
        .map(([key, value]) => [key, decodeURIComponent(value)]) //[[affiliate,nasa],[query,mars rover!]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    if(req.method === 'GET' && req.url === '/'){
      const responseBody = 'Dog Club';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain')
      return res.end(responseBody)
    }

    if(req.method === 'GET' && req.url === '/dogs'){
      const responseBody = 'Dog Index';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain')
      return res.end(responseBody)
    }

    // if(req.method === 'GET' && req.url.startsWith('/dogs') && req.url.split('/').length === 3 && !req.url.endsWith('new')){
    //   let dogId = req.url.split('/')[2]
    //   console.log('dog id ', dogId);
    //   res.setHeader('Content-Type', 'text/plain')
    //   res.statusCode = 200;
    //   return res.end(`Dog details for dogId: ${dogId}`)
    // }

    if(req.method === 'GET' && req.url.startsWith('/dogs')){
      const urlParts = req.url.split('/')
      console.log('url parts ', urlParts)

      if(urlParts.length === 3 && !req.url.endsWith('new')) {
        let dogId = urlParts[2]
        res.setHeader('Content-Type', 'text/plain')
        res.statusCode = 200;
        return res.end(`Dog details for dogId: ${dogId}`)
      }
       
    }

    if(req.method === 'POST' && req.url === '/dogs'){
      const dogId = getNewDogId()
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${dogId}`)
      return res.end()
    }
    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));