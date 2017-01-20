/*
 Heavily inspired in:
 https://github.com/alanbsmith/react-node-example/blob/master/server.js
*/

var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Visit http://localhost:%s in your browser.", PORT, PORT);
  }
});
