const fs = require('fs');
const http = require('http');
const url = require('url');

function myHandler(req, res) {
      if (req.url === '/favicon.ico') {
        return res.end(); // Ignore favicon requests
    }

    const log = `${Date.now()}: ${req.method}New req Received from ${req.url}\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data) => {
        res.end("Hello from the server");
    });
    const username = myUrl.query.name;
    switch (myUrl.pathname) {
        case '/':
         
           
            res.end(`Hello, ${username}, welcome to the home page`);
            break;
        case '/about':
           
            res.end(`hi ,${username}, welcome to the about page`);
            break;
        case '/contact':
            res.end("Contact page")
            break;
        case '/login':
            if(req.method === 'GET') {
                res.end("you in the registration page");
            }  
            else if(req.method === 'POST') {
               
                // DB operations can be done here
                 res.end("you  Successfully logged in");
            }
            break;
        default:
            res.end("404 Not Found")
    }
    //    console.log(req);
    //    res.end("Hello from the server");
}

// Create a simple HTTP server
// that listens for requests and responds with a message
const myServer = http.createServer(myHandler);
  

// Start the server on port 8000
myServer.listen(8000, () => {
    console.log("Server is running on port 8000");
});