
var express = require('express');
var time = require('time');
var data = require('./data/temperatures');

var app = express.createServer(express.logger());

app.get('/temp', function(request, response) {
  var from = new time.Date(request.query.from + " 00:00:00", "CET");
  var to = new time.Date(request.query.to + " 00:00:00", "CET");
  response.send(getTemps(from, to));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function getTemps(from, to) {
  var result = new Array();
  var fromStamp = from.getTime();
  var toStamp = to.getTime();
  console.log("From " + from + " : " + fromStamp);
  for(var i = 0; i < data.length; i++) {
    var entry = data[i];
    if (entry.timestamp >= toStamp) break;
    if (entry.timestamp >= fromStamp) result.push(entry);
  }
  return result;
}
