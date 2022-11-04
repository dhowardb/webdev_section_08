// import { createServer } from "http";
const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
    //localhost:3000/currenttime
    //localhost:3000
  }
}

const server = http.createServer(handleRequest);
server.listen(3000); //port 3000

// amazon.com => Send a request to Amazon's server
// ports or entrypoints
// amazon.com:443, amazon.com:80

// const userName = "howard";

// const testName = "test";
// console.log(userName, testName);
