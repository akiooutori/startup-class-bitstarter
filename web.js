var express = require('express');
var fs	= require('fs');

var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(index.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
