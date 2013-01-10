
var express = require('express');
var data = require('./data/temperatures');

var app = express.createServer(express.logger());

app.get('/temp', function(request, response) {
  var from = request.query.from;
  var to = request.query.to;
  response.send(new Date(from));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
