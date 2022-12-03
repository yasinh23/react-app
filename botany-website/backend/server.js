const ObjectId = require('mongodb').ObjectId;
const dbo = require("./conn.js");
const express = require("express");
const app = express();
var http = require('http');
const cors = require("cors");




http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  
}).listen(8080);

app.post("/http://localhost:8080/garden-image/add-image/add", (req, response) => {
  console.log(req)  
})
// look up how to save images in node and sacve it in images/gardensc 
