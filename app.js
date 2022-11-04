const fs = require("fs"); //node js packages
const path = require("path");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false })); //middleware function , use express and parse

// (path, function) //localhost:3000/currenttime
app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

//new route for 3000 port
app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name: </label><input type='text' name='username'><button type='submit'>Submit</submit></form>"
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData); //parse or converts to an JS object

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //converts JS object to text(stringify)
  res.send("<h1>Username stored!</h1>");
});

app.get("/users", (req, res) => {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData); //parse or converts to an JS object

  let responseData = "<ul>";

  for (const existingUser of existingUsers) {
    responseData += "<li>" + existingUser + "</li>";
  }

  responseData += "</ul>";
  res.send(responseData);
});

app.listen(3000);

//default is statuscode 200 no need to define
