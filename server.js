var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(request, response){
  response.send("There are no players")
});

server.listen(3000, function(){
  console.log('Server listenning on port 3000');
});

module.exports = server;
